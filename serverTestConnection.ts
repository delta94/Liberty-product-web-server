import * as dotenv from 'dotenv';
import { createConnection, getRepository } from 'typeorm';
import { Sop10107 } from './src/entity/Sop10107';
import { Xpo } from './src/entity/Xpo';
import { OpenOrderData } from './src/entity/OpenOrderDataView';
import { ProductData } from './src/entity/ProductData';
import { ProductViewData } from './src/entity/ProductViewModel';
import { User } from './src/entity/User';
import { UserJob } from './src/entity/UserJob';
import { UserJobCategory } from './src/entity/UserJobCategory';
import { UserJobCategoryItemClass } from './src/entity/UserJobCategoryItemClass';
import { UserJobDownloadLink } from './src/entity/UserJobDownloadLink';
import { Vendor } from './src/entity/Vendor';
import { VendorCategory } from './src/entity/VendorCategory';
import { VendorCategoryItemClass } from './src/entity/VendorCategoryItemClass';

// import { zipFiles, zipFilesByGlob } from './utils/fileOperations';

(async () => {
  dotenv.config({ path: __dirname + `/.env` });

  await createConnection({
    name: 'default',
    type: 'mssql',

    // host: 'TEST-1',
    // port: 1433,
    // username: 'ProductCentral',
    // password: 'FDk@h’g9{s',
    // database: 'LFI',

    host: '172.24.16.67',
    port: 1433,
    username: 'ProductCentral',
    password: `FDk@h'g9{s`,
    database: 'LFI',

    synchronize: false,
    logging: false,
    entities: [
      Sop10107,
      Xpo,
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

  try {
    const xpoRepository = getRepository(Xpo);
    const findXpoItems = await xpoRepository.find({ skip: 0, take: 10 });
    if (findXpoItems && findXpoItems.length) {
      console.log('xpoRepository.find', findXpoItems.length, findXpoItems[0].SopNumber);
    } else {
      console.log('No XPO Items Found', findXpoItems);
    }

    process.exit(0);
  } catch (ex) {
    console.log(ex.message);
    process.exit(0);
  }
})();
