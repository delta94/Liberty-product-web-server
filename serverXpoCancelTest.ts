import * as dotenv from 'dotenv';
import { login, cancelShipment } from './src/utils/xpoUtils';
import * as shortid from 'shortid';
import { getRepository } from 'typeorm';
import { Sop10107 } from './src/entity/Sop10107';

// import { zipFiles, zipFilesByGlob } from './utils/fileOperations';

(async () => {
  dotenv.config({ path: __dirname + `/.env` });

  try {
    shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
    console.log('shortid', shortid.generate());
    console.log('argv', process.argv[2]);
    const SopNumber = process.argv[2];

    try {
      const token = await login();
      await cancelShipment(SopNumber, token);
      // console.log(JSON.stringify(cancelResult, null, 2));
    } catch (ex) {
      console.log('############# Exception ###############', ex.response.status, ex.response.data);
    }

    const sop10107Repository = getRepository(Sop10107);
    const sop10107ToDelete = await sop10107Repository.find({ SopNumber });
    if (sop10107ToDelete && sop10107ToDelete.length) {
      for (let sopToDelete of sop10107ToDelete) {
        await sop10107Repository.delete({ DEX_ROW_ID: sopToDelete.DEX_ROW_ID });
        // console.log('sop10107Repository.delete', SopNumber, sopToDelete.DEX_ROW_ID);
      }
    } else {
      console.log('sopNumber not found in SOP10107 Table', SopNumber);
    }
    
    process.exit(0);
  } catch (ex) {
    console.log(ex.message);
    process.exit(0);
  }
})();
// gZkTyviNJN9C9DJZh7rUH2
// YeYQDif$8
