import { createConnection, getRepository } from 'typeorm';
import * as dotenv from 'dotenv';
import * as base64 from 'base-64';
import { chain, zipObject } from 'lodash';
import { login, createShipment, XpoShipmentData } from './src/utils/xpoUtils';
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
import { XpoLabel } from './src/entity/XpoLabel';
import { Sop10107 } from './src/entity/Sop10107';

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
      XpoLabel,
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
    const data = await Xpo.find({ where: { ProcessedDate: null } });
    // const data = await Xpo.find({ where: { SopNumber: 'ORD1553517' } });
    console.log('Number to Process', data.length);

    if (data.length) {
      var xpoGroups = chain(data)
        .groupBy('SopNumber')
        .toPairs()
        .map(currentItem => {
          return zipObject(['SopNumber', 'data'], currentItem);
        })
        .value();

      const fs = require('fs');
      const token = await login();
      for (const xpoGroup of <XpoShipmentData[]>Array.prototype.slice.call(xpoGroups)) {
        try {
          const createResult = await createShipment(xpoGroup, token);

          for (const bookingResult of createResult.result.value.booking_results) {
            for (const serviceLevelResult of bookingResult.service_level_results) {
              for (const tracking of serviceLevelResult.routing_instructions.tracking_numbers) {
                const xpoSopType = xpoGroup.data[0].SopType;
                const sop = await Sop10107.create({
                  SopNumber: xpoGroup.SopNumber.trim(),
                  SopType: xpoSopType,
                  TrackingNumber: tracking.xpo_tracking_number,
                });
                await sop.save();
              }
            }
          }

          for (const xpo of <Xpo[]>xpoGroup.data) {
            const xpoRepository = getRepository(Xpo);
            await xpoRepository.update(xpo.ID, { ProcessedDate: new Date(), LabelReceivedDate: new Date() });
          }

          for (const bookingResult of createResult.result.value.booking_results) {
            for (const serviceLevelResult of bookingResult.service_level_results) {
              for (const label of serviceLevelResult.documents) {
                const zpl = base64.decode(label.content);
                const folder = (<Xpo>xpoGroup.data[0]).OrderLocationCode.trim() === 'ATL WHSE' ? 'XPOATL' : 'XPOCHI';
                const filePath =
                  process.env.NODE_ENV === 'development'
                    ? `./${`${createResult.result.value.request_header.id}-${label.id}`}.zpl`
                    : `W:\\${folder}\\${`${createResult.result.value.request_header.id}-${label.id}`}.zpl`;

                try {
                  fs.writeFileSync(filePath, zpl);
                  fs.writeFileSync(`D:\\${folder}\\${`${createResult.result.value.request_header.id}-${label.id}`}.zpl`, zpl);
                } catch (ex) {
                  console.log(ex.message);
                }

                try {
                  await XpoLabel.create({
                    SopNumber: xpoGroup.SopNumber.trim(),
                    Folder: folder,
                    LabelId: label.id,
                    LabelData: label.content,
                    BookingId: createResult.result.value.request_header.id,
                  }).save();
                } catch (ex) {
                  console.log('ex', ex.message);
                }
              }
            }
          }
        } catch (ex) {
          console.log('ERROR', ex.message);
          for (const xpo of <Xpo[]>xpoGroup.data) {
            const xpoRepository = getRepository(Xpo);
            await xpoRepository.update(xpo.ID, { ProcessedDate: undefined, LabelReceivedDate: undefined });
          }
        }
      }
    }

    process.exit(0);
  } catch (ex) {
    console.log(ex.message);
    process.exit(0);
  }
})();
