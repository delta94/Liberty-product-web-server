import * as dotenv from 'dotenv';
import { login, cancelShipment } from './src/utils/xpoUtils';
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
    const token = await login();
    console.log('token', token);

    // const alreadyCancelled = ['ORD1553241', 'ORD1553404'];
    // const itemsToCancel = ['ORD1553241', 'ORD1553404', 'ORD1553244', 'ORD1553247', 'ORD1553283', 'ORD1553397', 'ORD1553414', 'ORD1553517'];
    // const itemsToCancel = ['ORD1553517', 'ORD1553397', 'ORD1553519', 'ORD1553244', 'ORD1553243'];
    const itemsToCancel = ['ORD1553894', 'ORD1553890', 'ORD1554965'];

    for (const sop of itemsToCancel) {
      try {
        let cancelResult = await cancelShipment(sop, token);
        console.log('cancelResult', sop, cancelResult);
      } catch (ex) {
        console.log('ex', ex.message);
      }

      const xpoRepository = getRepository(Xpo);
      const itemsToUpdate = await xpoRepository.find({ SopNumber: sop });
      if (itemsToUpdate && itemsToUpdate.length) {
        for (let item of itemsToUpdate) {
          await xpoRepository.update(item.ID, { ProcessedDate: undefined, LabelReceivedDate: undefined });
          console.log('xpoRepository.update', sop, item.ID);
        }
      } else {
        console.log('sop not found in XPO Table', sop);
      }

      const sopRepository = getRepository(Sop10107);
      const sopsToDelete = await sopRepository.find({ SopNumber: sop });
      if (sopsToDelete && sopsToDelete.length) {
        for (let sopToDelete of sopsToDelete) {
          await sopRepository.delete({ DEX_ROW_ID: sopToDelete.DEX_ROW_ID });
          console.log('sopRepository.delete.update', sop, sopToDelete.DEX_ROW_ID);
        }
      } else {
        console.log('sop not found in SOP Table', sop);
      }
    }

    process.exit(0);
  } catch (ex) {
    console.log(ex.message);
    process.exit(0);
  }
})();
