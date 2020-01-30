import { createConnection, getRepository } from 'typeorm';
import * as dotenv from 'dotenv';
import { xpo } from './src/utils/xpoUtils';
import { ProductData } from './src/entity/ProductData';
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
import { Xpo } from './src/entity/Xpo';
import { Sop10107 } from './src/entity/Sop10107';

// import { zipFiles, zipFilesByGlob } from './utils/fileOperations';

(async () => {
  dotenv.config({ path: __dirname + `./.env` });

  await createConnection({
    name: 'default',
    type: 'mssql',
    host: 'TEST-1',
    port: 1433,
    username: 'ProductCentral',
    password: 'FDk@h’g9{s',
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

  console.log('urls', xpo.urls.login);

  const xpoRepository = getRepository(Xpo);
  const xpoItem = await xpoRepository.find({ skip: 0, take: 1 });

  const fs = require('fs');
  fs.writeFileSync(`D:\\${xpoItem[0].SopNumber.trim()}.json`, JSON.stringify(xpoItem[0], null, 2));

  process.exit(0);
})();
