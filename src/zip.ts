import { createConnection } from 'typeorm';
import { ProductResolver } from './modules/products/ProductResolver';
import { UserJobResolver } from './modules/userJobs/UserJobResolver';
// import { filter } from 'lodash';
// import { ProductData } from './entity/ProductData';
import * as dotenv from 'dotenv';
import { UserJob } from './entity/UserJob';
import { zipFilesByDirectory, isDirectoryAsync, deleteFilesInFolder, getFileSizeInMegabytes } from './utils/fileOperations';
import * as moment from 'moment';
import * as fs from 'fs';
import * as nodemailer from 'nodemailer';
import { main, row, bottom } from './mail/downloads';
import { UserJobDownloadLink } from './entity/UserJobDownloadLink';
import { find, filter } from 'lodash';
import { ProductData } from './entity/ProductData';

const fsPromises = fs.promises;

// import { zipFiles, zipFilesByGlob } from './utils/fileOperations';

export interface ICategory {
  category: string;
  abbreviation: string;
  image: string;
  collections: { selected: boolean; name: string }[];
}

const categories = [
  {
    category: 'Bedroom',
    abbreviation: 'BR',
    image: 'bedroom/652-br.jpg',
  },
  {
    category: 'Dining',
    abbreviation: 'CD',
    image: 'dining/634-dr.jpg',
  },
  {
    category: 'Entertainment',
    abbreviation: 'ENT',
    image: 'entertainment/498-entw.jpg',
  },
  {
    category: 'Home Office',
    abbreviation: 'HO',
    image: 'home-office/473-ho.jpg',
  },
  {
    category: 'Occasional',
    abbreviation: 'OT',
    image: 'occasional/422-ot.jpg',
  },
  {
    category: 'Youth',
    abbreviation: 'YBR',
    image: 'youth/652-ybr.jpg',
  },
  {
    category: 'Home Accents',
    abbreviation: 'AC',
    image: 'accents/2011-ac5636.jpg',
  },
];

(async () => {
  dotenv.config({ path: __dirname + `/.env` });

  // console.log('in spawn task', process.argv);

  // console.log('process.argv', process.argv, process.argv.length);
  if (process.argv.length === 4) {
    // Pop the arguments off
    var email = process.argv.pop()!;
    var userJobId = parseInt(process.argv.pop()!);
    // const fs = require('fs');
    // console.log('userJobId', userJobId);

    // dotenv.config({ path: __dirname + `/.env` });

    // console.log(__dirname + '/entity/*.*');

    await createConnection({
      name: 'default',
      type: 'mssql',
      host: '172.24.16.67',
      port: 1433,
      username: 'ProductCentral',
      password: "FDk@h'g9{s",
      database: 'ProductCentral',
      synchronize: false,
      logging: false,
      entities: [__dirname + '/entity/*.*'],
    });

    const product = new ProductResolver();
    const userJobResolver = new UserJobResolver();
    const productData = await product.productData();
    // console.log('productData', productData.length, userJobId);

    // const userJobResolver = new UserJobResolver();
    // const userJob = await userJobResolver.getUserJob({UserJobId: userJobId});
    const userJob = await UserJob.findOne({ id: userJobId }, { relations: ['userJobCategories', 'userJobCategories.userJobCategoryItemClasses'] });

    // console.log('userJob', userJob!.userJobCategories.length);
    // console.log('category', userJob!.userJobCategories[0].category);
    // console.log('itemClass', userJob!.userJobCategories[0].userJobCategoryItemClasses[0].itemClass);

    const basePath = 'D:\\Website (New 2000x2000)\\images';

    // build the image urls
    let requestedImages: any[] = [];
    for (let c of userJob!.userJobCategories) {
      const category = c.category;
      const baseTempFolder = `D:\\temp\\${userJobId}\\${category}\\`;
      if (!fs.existsSync(baseTempFolder)) {
        fs.mkdirSync(baseTempFolder, { recursive: true });
      }

      for (let ic of c.userJobCategoryItemClasses) {
        const images = filter<ProductData>(productData, pd => pd.category === category && pd.itemClass === ic.itemClass);
        for (let i of images) {
          const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          console.log('numbers', numbers);
          for (let index of numbers) {
            const sourcePath = index === 0 ? `${basePath}\\${category}\\${i.itemNumber}.jpg` : `${basePath}\\${category}\\${i.itemNumber}_${index}.jpg`;
            const targetPath = index === 0 ? `${baseTempFolder}${i.itemNumber}.jpg` : `${baseTempFolder}${i.itemNumber}_${index}.jpg`;
            try {
              await fs.promises.copyFile(sourcePath, targetPath);
              const pair = {
                source: sourcePath,
                target: targetPath,
              };
              console.log(pair);
              requestedImages.push(pair);
            } catch (ex) {
              console.log(ex.message);
            }
          }
        }
      }
    }

    console.log('now copying files to zip', requestedImages.length);
    try {
      // const zipStart = moment();

      const today = moment();
      const urlPath = `${today.year()}/${today.month()}/${today.date()}/${userJobId}/`;
      const outputDirectory = `${process.env.USER_JOB_EXPORT_BASE_PATH}${urlPath}`;
      if (!(await isDirectoryAsync(outputDirectory))) {
        await fsPromises.mkdir(outputDirectory, { recursive: true });
      } else {
        await deleteFilesInFolder(outputDirectory);
      }

      await userJobResolver.deleteUserJobDownloadLinkByUserJobId(userJobId);

      for (let ujc of userJob!.userJobCategories) {
        // const start = moment();

        let categoryHumanized = '';
        switch (ujc.category) {
          case 'BR':
            categoryHumanized = 'Bedroom';
            break;
          case 'CD':
            categoryHumanized = 'Dining';
            break;
          case 'ENT':
            categoryHumanized = 'Entertainment';
            break;
          case 'HO':
            categoryHumanized = 'Home Office';
            break;
          case 'OT':
            categoryHumanized = 'Occasional';
            break;
          case 'YBR':
            categoryHumanized = 'Youth';
            break;
          case 'AC':
            categoryHumanized = 'Home Accents';
            break;
          default:
            categoryHumanized = 'Miscellaneous';
            break;
        }

        try {
          const zipFileName = `LibertyFurnitureProductDataAndImages-${categoryHumanized}.zip`;
          await zipFilesByDirectory(`/temp/${userJobId}/${ujc.category}/`, outputDirectory, zipFileName);
          const httpUrl = `http://assets.mylibertyfurn.com/exports/${urlPath}${zipFileName}`;
          const fileSize = getFileSizeInMegabytes(`${outputDirectory}${zipFileName}`);
          console.log(
            'Download Link',
            JSON.stringify(
              await userJobResolver.saveUserJobDownloadLink({
                userJobId,
                category: ujc.category,
                categoryDisplayText: categoryHumanized,
                downloadUrl: httpUrl,
                fileSize: `${fileSize.toFixed(2)} MB`,
                notifyEmail: email,
              }),
              null,
              2
            )
          );
        } catch (ex) {
          console.log('>>>>>>>>>>>>> Exception <<<<<<<<<<<<<<<', ex.message);
        }
        // const end = moment();
        // console.log('Category Duration', moment.duration(end.diff(start)).humanize());
      }

      // const zipEnd = moment();
      // console.log('All ZIP Files Duration', moment.duration(zipEnd.diff(zipStart)).humanize());

      // Now Send email with links:
      let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'no-reply@libertyfurn.com',
          pass: 'Liberty2019',
        },
      });

      const links = await UserJobDownloadLink.find({ where: { userJobId } });
      const rows = links
        .map(link => {
          const category = find(categories, c => c.abbreviation === link.category);
          const imageUrl = `http://assets.mylibertyfurn.com/mail-assets/${category ? category!.image : ''}`;
          return row
            .replace('{{category}}', link.categoryDisplayText)
            .replace('{{fileSize}}', link.fileSize)
            .replace('{{image}}', imageUrl)
            .replace('{{downloadUrl}}', link.downloadUrl);
        })
        .join('');

      await transporter.sendMail({
        from: {
          name: 'Liberty Furniture',
          address: 'no-reply@libertyfurn.com',
        },
        to: email,
        subject: 'Product Central Image Downloads',
        html: `${main}${rows}${bottom}`,
      });
      // console.log('Message sent: %s', info.messageId);
    } catch (ex) {
      console.log('awaiting zipFilesByGlob', ex.message);
    }
    // fs.promises.mkdir(`${baseTempFolder}${}`, { recursive: true });

    // destination.txt will be created or overwritten by default.
    // fs.copyFile('source.txt', 'destination.txt', err => {
    //   if (err) throw err;
    //   console.log('source.txt was copied to destination.txt');
    // });
    // const webImages: IImageFile[] = await getImages();

    // console.log('in spawn task', userJobId);

    process.exit(0);
  }
})();
