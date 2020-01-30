import 'reflect-metadata';
import { createConnection, Not, In } from 'typeorm';
import { ProductResolver } from './src/modules/products/ProductResolver';
import { ProductData } from './src/entity/ProductData';
import { find, omit, filter, startsWith } from 'lodash';
import deepEqual = require('deep-equal');
import { getImages, IImageFile } from './src/imageProcessor';
import * as dotenv from 'dotenv';
import { OpenOrderData } from './src/entity/OpenOrderDataView';
import { ProductViewData } from './src/entity/ProductViewModel';
import { User } from './src/entity/User';
import { UserJob } from './src/entity/UserJob';
import { UserJobCategory } from './src/entity/UserJobCategory';
import { UserJobCategoryItemClass } from './src/entity/UserJobCategoryItemClass';
import { UserJobDownloadLink } from './src/entity/UserJobDownloadLink';
import { Vendor } from './src/entity/Vendor';
import { VendorCategory } from './src/entity/VendorCategory';
import { VendorCategoryItemClass } from './src/entity/VendorCategoryItemClass';

const main = async () => {
  dotenv.config({ path: __dirname + `./.env` });

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
    entities: [
      OpenOrderData,
      ProductData,
      ProductViewData,
      User,
      UserJob,
      UserJobCategory,
      UserJobCategoryItemClass,
      UserJobDownloadLink,
      Vendor,
      VendorCategory,
      VendorCategoryItemClass,
    ],
  });

  const product = new ProductResolver();

  await ProductData.delete({ status: Not(In(['Current', 'Review', 'Phase Out', 'New Intro2', 'New Intro', 'Sample'])) });

  const productData = await product.productData();
  const productView = await product.allInView();
  const webImages: IImageFile[] = await getImages();

  let maxCount = 0;
  for (let product of productView) {
    const {
      ITMSHNAM,
      EPCUBES,
      DROPSHIP,
      DROPSHIP_M,
      FOB,
      LEVEL0,
      LEVEL1,
      LEVEL2,
      LEVEL3,
      FOB_M,
      DISC,
      Factory,
      ITEMTYPE,
      Sort_ID,
      Sales_Image_1,
      Sales_Image_2,
      Sales_Image_3,
      Sales_Image_4,
      Sales_Image_5,
      Sales_Image_6,
      Sales_Feature_1,
      Sales_Feature_2,
      Sales_Feature_3,
      Sales_Feature_4,
      Sales_Feature_5,
      Sales_Feature_6,
      Item_Image_1,
      Item_Image_2,
      Item_Image_3,
      EPKDCUBES,
      Freight_Class,
      Group_Path,
      Factory_Assembled,
      Product_Path,
      Short_Group_Path,
      Assembly_Cost,
      QC_Cost,
      Designer_Commission,
      Agent,
      Item_Cost_DC,
      Item_Cost_WHSE,
      Direct_Container,
      Cubes,
      Ipad_Sort_ID,
      ABCCODE,
      iPad_Best_Seller,
      Web_Image,
      Intro_Market,
      Market_Write_Up,
      Best_Seller,
      US_Tariff_Code,
      STNDCOST,
      SPECIAL,
      Key_Item,
      DROPSHIP_X,
      MIX_FULL,
      MIX_HALF,
      MIX_QTR,
      ALWBKORD,
      CSNS01,
      FOB_IOR,
      FOB_M_IOR,
      Related_Items,
      ...rest
    } = product;
    let p = Object.assign(new ProductData(), { ...rest, lastModified: new Date() });
    let pd = find(productData, pd => pd.itemNumber === p.itemNumber);

    var images = filter(webImages, function(image) {
      return startsWith(image.image, pd ? `${pd.itemNumber}_` : `${p.itemNumber}_`) || image.image === (pd ? `${pd.itemNumber}.jpg` : `${p.itemNumber}.jpg`);
    });

    if (images.length > maxCount) maxCount = images.length;

    if (!pd) {
      setImages(p, images);
      await p.save();
    } else {
      const isEqual = deepEqual(
        omit(p, [
          'created',
          'lastModified',
          'image1',
          'image2',
          'image3',
          'image4',
          'image5',
          'image6',
          'image7',
          'image8',
          'image9',
          'image10',
          'image11',
          'image12',
          'image13',
          'image14',
          'image15',
          'image16',
          'image17',
          'image18',
          'image19',
          'image20',
        ]),
        omit(pd, [
          'created',
          'lastModified',
          'image1',
          'image2',
          'image3',
          'image4',
          'image5',
          'image6',
          'image7',
          'image8',
          'image9',
          'image10',
          'image11',
          'image12',
          'image13',
          'image14',
          'image15',
          'image16',
          'image17',
          'image18',
          'image19',
          'image20',
        ])
      );
      if (!isEqual) console.log(p.itemNumber);
      // if (!isEqual) {
      // console.log(
      //   'diff',
      //   diff(
      //     omit(p, ['created', 'lastModified', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'image16', 'image17', 'image18', 'image19', 'image20']),
      //     omit(pd, ['created', 'lastModified', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'image16', 'image17', 'image18', 'image19', 'image20']),
      //   ),
      // );

      pd = Object.assign(pd, { ...rest });
      setImages(pd, images);
      await pd.save();
      // }
    }
  }
  console.log('maxCount', maxCount);

  process.exit();
};

function setImages(p: ProductData, images: IImageFile[]) {
  for (let i = 0; i < 20; i++) {
    switch (i) {
      case 0:
        p.image1 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 1:
        p.image2 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 2:
        p.image3 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 3:
        p.image4 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 4:
        p.image5 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 5:
        p.image6 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 6:
        p.image7 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 7:
        p.image8 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 8:
        p.image9 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 9:
        p.image10 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 10:
        p.image11 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 11:
        p.image12 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 12:
        p.image13 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 13:
        p.image14 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 14:
        p.image15 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 15:
        p.image16 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 16:
        p.image17 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 17:
        p.image18 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 18:
        p.image19 = images[i] ? images[i].webUrl : 'No Image Available';
        break;
      case 19:
        p.image20 = images[i] ? images[i].webUrl : 'No Image Available';
        break;

      default:
        break;
    }
  }
}

main().catch(err => console.error(err));
