import { Arg, Mutation, Resolver, Args, Query } from 'type-graphql';
import { XpoLabel } from '../../entity/XpoLabel';
import { login, cancelShipment, XpoShipmentData, createShipment } from '../../utils/xpoUtils';
import * as base64 from 'base-64';
import * as fs from 'fs';
import { SuccessMessageResponse } from '../../entity/SuccessMessageResponse';
import { getRepository, getConnection } from 'typeorm';
import { Xpo } from '../../entity/Xpo';
import { Sop10107 } from '../../entity/Sop10107';
import { result, chain, zipObject } from 'lodash';
import { Sop10100 } from '../../entity/Sop10100';
import { Sop10200 } from '../../entity/Sop10200';
import { TransferShipmentLocationInput } from '../../entity/TransferShipmentLocationInput';
import moment = require('moment');
// import { generate } from 'short-uuid';

@Resolver()
export class XpoResolver {
  @Query(() => [Xpo])
  async xpoRowsBySopNumber(@Arg('sopNumber', () => String!) sopNumber: string): Promise<Xpo[]> {
    return Xpo.find({ SopNumber: sopNumber });
  }

  @Mutation(() => SuccessMessageResponse)
  async reprintLabels(@Arg('sopNumber') sopNumber: string): Promise<SuccessMessageResponse> {
    const labels = await XpoLabel.find({ SopNumber: sopNumber });
    if (labels && labels.length) {
      try {
        for (const label of labels) {
          const zpl = base64.decode(label.LabelData);
          const filePath = `W:\\${label.Folder}\\${`${sopNumber}-${label.LabelId}`}.zpl`;
          fs.writeFileSync(filePath, zpl);
        }
      } catch (ex) {
        return { success: false, message: ex.message };
      }

      return { success: true, message: 'All Labels Printed Successfully' };
    } else {
      return { success: false, message: `Did not find any Labels for '${sopNumber}'` };
    }
  }

  @Mutation(() => SuccessMessageResponse)
  async cancelShipment(@Arg('sopNumber') sopNumber: string): Promise<SuccessMessageResponse> {
    const token = await login();
    if (token) {
      try {
        let cancelResult: boolean = false;
        const xpoLabelRepository = getRepository(XpoLabel);
        try {
          const label = await xpoLabelRepository.findOne({ where: { SopNumber: sopNumber } });
          if (label && label.BookingId && label.BookingId.length > 0) {
            cancelResult = await cancelShipment(label.BookingId, token);
          } else {
            cancelResult = await cancelShipment(sopNumber, token);
          }
          console.log('cancelResult', sopNumber, cancelResult);
        } catch (ex) {
          return {
            success: false,
            message: cancelResult
              ? 'Order Cancelled Successfully'
              : ex.response.status === 400
              ? 'Failed To Cancel Order - Not Found'
              : 'Failed To Cancel Order',
          };
        }

        const xpoRepository = getRepository(Xpo);
        const itemsToUpdate = await xpoRepository.find({ SopNumber: sopNumber });
        if (itemsToUpdate && itemsToUpdate.length) {
          for (let item of itemsToUpdate) {
            await xpoRepository.update(item.ID, { LabelReceivedDate: undefined });
            console.log('xpoRepository.update', sopNumber, item.ID);
          }
        } else {
          console.log('sopNumber not found in XPO Table', sopNumber);
        }

        const xpoLabelsToDelete = await xpoLabelRepository.find({ SopNumber: sopNumber });
        if (xpoLabelsToDelete && xpoLabelsToDelete.length) {
          for (let xpoLabelToDelete of xpoLabelsToDelete) {
            await xpoLabelRepository.delete({ ID: xpoLabelToDelete.ID });
            // console.log('xpoLabelRepository.delete', SopNumber, xpoLabelToDelete.ID);
          }
        } else {
          console.log('sopNumber not found in XpoLabels Table', sopNumber);
        }

        const sopRepository = getRepository(Sop10107);
        const sopsToDelete = await sopRepository.find({ SopNumber: sopNumber });
        if (sopsToDelete && sopsToDelete.length) {
          for (let sopToDelete of sopsToDelete) {
            await sopRepository.delete({ DEX_ROW_ID: sopToDelete.DEX_ROW_ID });
            console.log('sopRepository.delete.update', sopNumber, sopToDelete.DEX_ROW_ID);
          }
        } else {
          console.log('sopNumber not found in SOP Table', sopNumber);
        }

        return { success: true, message: result ? 'Order Cancelled Successfully' : 'Unable to Cancel Order' };
      } catch (ex) {
        console.log(ex.message);
        return { success: false, message: `Unable to Cancel Order - ${sopNumber} Not Found in XPO ` };
      }
    }
    return { success: false, message: 'Unable to Login at XPO' };
  }

  @Mutation(() => SuccessMessageResponse)
  async transferShipmentLocation(@Args() { SopNumber, NewLocation, ForceUpdate, UpdateReadyDate }: TransferShipmentLocationInput): Promise<
    SuccessMessageResponse
  > {
    // console.log('args', SopNumber, NewLocation);

    const token = await login();
    if (token) {
      try {
        let cancelResult: boolean = false;
        const xpoLabelRepository = getRepository(XpoLabel);
        try {
          try {
            const label = await xpoLabelRepository.findOne({ where: { SopNumber } });
            if (label && label.BookingId && label.BookingId.length > 0) {
              cancelResult = await cancelShipment(label.BookingId, token);
            } else {
              cancelResult = await cancelShipment(SopNumber, token);
            }
          } catch (ex) {
            console.log(ex.message);
          }

          if (!cancelResult) {
            if (!ForceUpdate) {
              return {
                success: false,
                message: 'Failed To Cancel Order',
              };
            }
          }

          // Tracking Numbers
          const sop10107Repository = getRepository(Sop10107);
          const sop10107ToDelete = await sop10107Repository.find({ SopNumber: SopNumber });
          if (sop10107ToDelete && sop10107ToDelete.length) {
            for (let sopToDelete of sop10107ToDelete) {
              await sop10107Repository.delete({ DEX_ROW_ID: sopToDelete.DEX_ROW_ID });
              // console.log('sop10107Repository.delete', SopNumber, sopToDelete.DEX_ROW_ID);
            }
          } else {
            console.log('sopNumber not found in SOP10107 Table', SopNumber);
          }

          // XPO Labels
          const xpoLabelsToDelete = await xpoLabelRepository.find({ SopNumber: SopNumber });
          if (xpoLabelsToDelete && xpoLabelsToDelete.length) {
            for (let xpoLabelToDelete of xpoLabelsToDelete) {
              await xpoLabelRepository.delete({ ID: xpoLabelToDelete.ID });
              // console.log('xpoLabelRepository.delete', SopNumber, xpoLabelToDelete.ID);
            }
          } else {
            console.log('sopNumber not found in XpoLabels Table', SopNumber);
          }

          const xpoRepository = getRepository(Xpo);
          const itemsToUpdate = await xpoRepository.find({ SopNumber });
          if (itemsToUpdate.length) {
            var xpoGroups = chain(itemsToUpdate)
              .groupBy('SopNumber')
              .toPairs()
              .map(currentItem => {
                return zipObject(['SopNumber', 'data'], currentItem);
              })
              .value();

            const fs = require('fs');
            for (const xpoGroup of <XpoShipmentData[]>Array.prototype.slice.call(xpoGroups)) {
              const esd = xpoGroup.data[0].ESD;

              const readyDate = UpdateReadyDate
                ? moment(esd).isBefore(moment())
                  ? moment()
                      .add(1, 'days')
                      .startOf('day')
                      .toDate()
                  : esd
                : esd;

              try {
                xpoGroup.data.forEach(xpo => {
                  xpo.OrderLocationCode = NewLocation;
                  xpo.LocationCode = NewLocation;
                  xpo.ESD = readyDate;
                });

                // console.log('xpoGroup', JSON.stringify(xpoGroup, null, 2));

                const createResult = await createShipment(xpoGroup, token);

                for (const bookingResult of createResult.result.value.booking_results) {
                  for (const serviceLevelResult of bookingResult.service_level_results) {
                    for (const tracking of serviceLevelResult.routing_instructions.tracking_numbers) {
                      const xpoSopType = xpoGroup.data[0].SopType;
                      const sop = await Sop10107.create({
                        SopNumber: SopNumber.trim(),
                        SopType: xpoSopType,
                        TrackingNumber: tracking.xpo_tracking_number,
                      });
                      await sop.save();
                    }
                  }
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
                          SopNumber: SopNumber.trim(),
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

                for (const xpo of <Xpo[]>xpoGroup.data) {
                  await xpoRepository.update(xpo.ID, {
                    LocationCode: NewLocation,
                    OrderLocationCode: NewLocation,
                    LabelReceivedDate: new Date(),
                    ESD: readyDate,
                  });
                }
              } catch (ex) {
                for (const xpo of <Xpo[]>xpoGroup.data) {
                  console.log('xpo try/catch', JSON.stringify(xpo, null, 2));
                  const xpoRepository = getRepository(Xpo);
                  await xpoRepository.update(xpo.ID, { ProcessedDate: undefined, LabelReceivedDate: undefined });
                }
              }
            }

            // if (itemsToUpdate && itemsToUpdate.length) {
            //   for (let item of itemsToUpdate) {
            //     await xpoRepository.update(item.ID, {  LocationCode: NewLocation, OrderLocationCode: NewLocation});
            //     // console.log('xpoRepository.update', SopNumber, item.ID);
            //   }
            // } else {
            //   console.log('sopNumber not found in XPO Table', SopNumber);
            // }

            const lfiConnection = await getConnection('LFI');
            const sop10100Repository = lfiConnection.getRepository(Sop10100);
            const sop10100ToUpdate = await sop10100Repository.find({ SopNumber: SopNumber });
            if (sop10100ToUpdate && sop10100ToUpdate.length) {
              for (let sopToUpdate of sop10100ToUpdate) {
                await sop10100Repository.update(sopToUpdate.DEX_ROW_ID, { LocationCode: NewLocation });
                // console.log('sop10100Repository.update', SopNumber, sopToUpdate.DEX_ROW_ID);
              }
            } else {
              console.log('sopNumber not found in SOP10100 Table', SopNumber);
            }

            const sop10200Repository = lfiConnection.getRepository(Sop10200);
            const sop10200ToUpdate = await sop10200Repository.find({ SopNumber: SopNumber });
            if (sop10200ToUpdate && sop10200ToUpdate.length) {
              for (let sopToUpdate of sop10200ToUpdate) {
                await sop10200Repository.update(sopToUpdate.DEX_ROW_ID, { LocationCode: NewLocation });
                // console.log('sop10200Repository.update', SopNumber, sopToUpdate.DEX_ROW_ID);
              }
            } else {
              console.log('sopNumber not found in SOP10200 Table', SopNumber);
            }

            return { success: true, message: result ? 'Order Transferred Successfully' : 'Unable to Cancel Order' };
          } else {
            return {
              success: false,
              message: `No XPO Records found with SOP Number: ${SopNumber}`,
            };
          }
        } catch (ex) {
          // return { success: false, message: cancelResult ? 'Order Transferred Successfully' : ex.response.status === 400 ? 'Failed To Transferred Order - Not Found' : 'Failed To Transferred Order' };
          return { success: false, message: ex.message };
        }
      } catch (ex) {
        // console.log(ex.message);
        return { success: false, message: ex.message }; // message: `Unable to Transferred Order - ${SopNumber} Not Found in XPO ` };
      }
    }
    return { success: false, message: 'Unable to Login at XPO' };
  }
}
