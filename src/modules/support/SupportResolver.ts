import { Resolver, Arg, Ctx, Mutation } from 'type-graphql';
import { InTransitWithCubes } from '../../entity/Support/InTransitWithCubes';
import { Svc00700 } from '../../entity/Svc00700';
import { Svc00701 } from '../../entity/Svc00701';
import { Svc00712 } from '../../entity/Svc00712';
import { Svc00731 } from '../../entity/Svc00731';
import { getConnection, Repository } from 'typeorm';
import { MyContext } from '../../types/MyContext';
import { TruckItems } from '../../entity/Support/TruckItems';
import { AddTruckItemsArgs } from '../../entity/Support/AddTruckItemsArgs';
import { UpdateQuantityArgs } from '../../entity/Support/UpdateQuantityArgs';
import { TruckItemOrderItem } from '../../entity/Support/TruckItemOrderItems';
import { UpdateQuantityResponse } from '../../entity/Support/UpdateQuantityResponse';
import { UpdateQuantityItem } from '../../entity/Support/UpdateQuantityItem';
import { TransferFromArgs } from '../../entity/Support/TransferFromArgs';
// import { TransferQuantityResponse } from '../../entity/Support/TransferQuantityResponse';
import { FindTruckItemsArgs } from '../../entity/Support/FindTruckItemsArgs';

import { findIndex } from 'lodash';
import { TransferItemArgs } from 'src/entity/Support/TransferItemArgs';

@Resolver()
export class SupportResolver {
  @Mutation(() => TruckItems)
  async findTruckItems(@Arg('data', () => FindTruckItemsArgs) data: FindTruckItemsArgs, @Ctx() ctx: MyContext): Promise<TruckItems> {
    const { user } = ctx.req;
    // if (!user) {
    //   return { stockItems: [], orderItems: [] };
    // }
    console.log('user', user);

    const truckContents = getConnection('LFI').getRepository(InTransitWithCubes);
    const searchResults = await truckContents.find({ where: [{ SopNumber: data.searchText }, { OrderDocumentId: data.searchText }] });
    searchResults.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));

    if (searchResults.length > 0) {
      searchResults.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      console.log('search result', searchResults);
    } else throw new Error('Not Found');

    console.log('data.length', searchResults.length);
    const stockItems: InTransitWithCubes[] = [];
    const orderItems: InTransitWithCubes[] = [];

    if (data.searchWhere === 'from') {
      searchResults.forEach(item => (item.SopNumber === '' ? stockItems.push(item) : orderItems.push(item)));

      const truckOrderItems: TruckItemOrderItem[] = [];
      orderItems.forEach(item => {
        const orderItemIndex = findIndex(truckOrderItems, ti => ti.SopNumber.trim().toLowerCase() === item.SopNumber.trim().toLowerCase());
        if (orderItemIndex >= 0) {
          truckOrderItems[orderItemIndex].orderItems.push(item);
        } else {
          truckOrderItems.push({ SopNumber: item.SopNumber, SopDocDate: item.SopDocDate, orderItems: [item] });
        }
      });

      const status = stockItems && stockItems.length > 0 ? stockItems[0].Status : orderItems && orderItems.length > 0 ? orderItems[0].Status : 0;
      const transferLocation =
        stockItems && stockItems.length > 0 ? stockItems[0].TransferLocation : orderItems && orderItems.length > 0 ? orderItems[0].TransferLocation : '';
      const locationCode =
        stockItems && stockItems.length > 0 ? stockItems[0].LocationCode : orderItems && orderItems.length > 0 ? orderItems[0].LocationCode : '';

      return { status: status, transferLocation, locationCode, stockItems, orderItems: truckOrderItems };
    } else {
      console.log('toTruck-TransferLocation', data.transferLocation);
      searchResults.forEach(item => {
        if (item.TransferLocation === data.transferLocation && item.LocationCode === data.locationCode)
          item.SopNumber === '' ? stockItems.push(item) : orderItems.push(item);
      });

      if (stockItems.length === 0 && orderItems.length === 0) throw new Error('Not Found The Same Location Source and Destination');

      const truckOrderItems: TruckItemOrderItem[] = [];
      orderItems.forEach(item => {
        const orderItemIndex = findIndex(truckOrderItems, ti => ti.SopNumber.trim().toLowerCase() === item.SopNumber.trim().toLowerCase());
        if (orderItemIndex >= 0) {
          truckOrderItems[orderItemIndex].orderItems.push(item);
        } else {
          truckOrderItems.push({ SopNumber: item.SopNumber, SopDocDate: item.SopDocDate, orderItems: [item] });
        }
      });

      const status = stockItems && stockItems.length > 0 ? stockItems[0].Status : orderItems && orderItems.length > 0 ? orderItems[0].Status : 0;
      return { status: status, stockItems, orderItems: truckOrderItems, transferLocation: '', locationCode: '' };
    }
  }

  @Mutation(() => TruckItems)
  async addTruckItems(@Arg('data', () => AddTruckItemsArgs) data: AddTruckItemsArgs, @Ctx() ctx: MyContext): Promise<TruckItems> {
    const { user } = ctx.req;
    // if (!user) {
    //   return { stockItems: [], orderItems: [] };
    // }
    console.log('user', user);

    const truckContents = getConnection('LFI').getRepository(InTransitWithCubes);
    const results = await truckContents.find({
      where: [{ SopNumber: data.searchText }, { ItemNumber: data.searchText }],
    });

    if (results.length > 0) {
      results.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      console.log('search result', results);
    } else throw new Error('Not Found');

    console.log('data.length', results.length);
    const stockItems: InTransitWithCubes[] = [];
    const orderItems: InTransitWithCubes[] = [];
    results.forEach(item => {
      if (item.TransferLocation === data.transferLocation && item.LocationCode === data.locationCode)
        item.SopNumber === '' ? stockItems.push(item) : orderItems.push(item);
    });

    if (stockItems.length === 0 && orderItems.length === 0) throw new Error('Not Found The Same Location Source and Destination');

    const truckOrderItems: TruckItemOrderItem[] = [];
    orderItems.forEach(item => {
      const orderItemIndex = findIndex(truckOrderItems, ti => ti.SopNumber.trim().toLowerCase() === item.SopNumber.trim().toLowerCase());
      if (orderItemIndex >= 0) {
        truckOrderItems[orderItemIndex].orderItems.push(item);
      } else {
        truckOrderItems.push({ SopNumber: item.SopNumber, SopDocDate: item.SopDocDate, orderItems: [item] });
      }
    });

    const status = stockItems && stockItems.length > 0 ? stockItems[0].Status : orderItems && orderItems.length > 0 ? orderItems[0].Status : 0;
    return { status: status, stockItems, orderItems: truckOrderItems, transferLocation: '', locationCode: '' };
  }

  @Mutation(() => UpdateQuantityResponse)
  async updateQuantityStockItemsTruck(@Arg('args', () => UpdateQuantityArgs) args: UpdateQuantityArgs, @Ctx() ctx: MyContext): Promise<UpdateQuantityResponse> {
    const { user } = ctx.req;
    // if (!user) {
    //   return { stockItems: [], orderItems: [] };
    // }

    console.log('user', user);

    const svc00701Entity = getConnection('LFI').getRepository(Svc00701);
    const svc00712Entity = getConnection('LFI').getRepository(Svc00712);
    const svc00731Entity = getConnection('LFI').getRepository(Svc00731);

    let updatedData: UpdateQuantityItem[] = [];

    for (let i = 0; i < args.data.length; i++) {
      let svc00701EntityResultItem = await svc00701Entity.findOne({
        where: { OrderDocumentId: args.data[i].orderDocumentId, ItemNumber: args.data[i].itemNumber },
      });

      if (svc00701EntityResultItem) {
        svc00701EntityResultItem.TransferQuantity = args.data[i].quantity;
        svc00701EntityResultItem.QuantityFulfilled = args.data[i].quantity;
        await svc00701Entity.save(svc00701EntityResultItem);

        let svc00712EntityResultItem = await svc00712Entity.findOne({
          where: { OrderDocumentId: args.data[i].orderDocumentId, ItemNumber: args.data[i].itemNumber, LNITMSEQ: svc00701EntityResultItem.LNITMSEQ },
        });

        let svc00731EntityResultItem = await svc00731Entity.findOne({
          where: { OrderDocumentId: args.data[i].orderDocumentId, ItemNumber: args.data[i].itemNumber, LNITMSEQ: svc00701EntityResultItem.LNITMSEQ },
        });

        if (svc00712EntityResultItem) {
          svc00712EntityResultItem.Quantity = args.data[i].quantity;
          await svc00712Entity.save(svc00712EntityResultItem);
          if (svc00731EntityResultItem) {
            if (svc00731EntityResultItem.DEBITAMT > 0) {
              svc00731EntityResultItem.DEBITAMT = (svc00731EntityResultItem.DEBITAMT / args.data[i].quantity) * args.data[i].quantity;
              svc00731Entity.save(svc00731EntityResultItem);
            }
            if (svc00731EntityResultItem.CRDTAMNT > 0) {
              svc00731EntityResultItem.CRDTAMNT = (svc00731EntityResultItem.CRDTAMNT / args.data[i].quantity) * args.data[i].quantity;
              svc00731Entity.save(svc00731EntityResultItem);
            }
            if (svc00731EntityResultItem.ORDBTAMT > 0) {
              svc00731EntityResultItem.ORDBTAMT = (svc00731EntityResultItem.ORDBTAMT / args.data[i].quantity) * args.data[i].quantity;
              svc00731Entity.save(svc00731EntityResultItem);
            }
            if (svc00731EntityResultItem.ORCRDAMT > 0) {
              svc00731EntityResultItem.ORCRDAMT = (svc00731EntityResultItem.ORCRDAMT / args.data[i].quantity) * args.data[i].quantity;
              svc00731Entity.save(svc00731EntityResultItem);
            }
            const data = new UpdateQuantityItem(svc00701EntityResultItem, svc00712EntityResultItem, svc00731EntityResultItem);
            updatedData.push(data);
          } else throw new Error('Not Found Item in SVC00731');
        } else throw new Error('Not Found Item in SVC00712');
      } else throw new Error('Not Found Item in SVC00701');
    }

    if (updatedData.length > 0) return { data: updatedData };
    else throw new Error('Not Found');
  }

  @Mutation(() => Boolean)
  async transferItems(@Arg('args', () => TransferFromArgs) args: TransferFromArgs, @Ctx() ctx: MyContext): Promise<Boolean> {
    const { user } = ctx.req;
    // if (!user) {
    //   return { stockItems: [], orderItems: [] };
    // }

    console.log('user', user);
    console.log('args', args);

    const svc00701Repository = getConnection('LFI').getRepository(Svc00701);
    const svc00731Repository = getConnection('LFI').getRepository(Svc00731);
    const svc00712Repository = getConnection('LFI').getRepository(Svc00712);
    const svc00700Repository = getConnection('LFI').getRepository(Svc00700);

    const sequenceIncrementBy = 16384;
    let maxSequence: { max: number } = await svc00701Repository
      .createQueryBuilder('SVC00701')
      .select('MAX(SVC00701.LNITMSEQ)', 'max')
      .getRawOne();
    let currentMaxSequence = maxSequence ? maxSequence.max : 0;

    //#region Stock Items

    for (const fromTruckStockItem of args.stockItems) {
      currentMaxSequence = currentMaxSequence + sequenceIncrementBy;

      const { fromTruck_Svc00700, fromTruck_Svc00701, fromTruck_Svc00712, fromTruck_Svc00731 } = await this.loadFromTruckStockItems(
        svc00700Repository,
        svc00701Repository,
        svc00712Repository,
        svc00731Repository,
        fromTruckStockItem
      );

      const { toTruck_Svc00701, toTruck_Svc00712, toTruck_Svc00700, toTruck_Svc00731 } = await this.loadToTruckStockItems(
        svc00700Repository,
        svc00701Repository,
        svc00712Repository,
        svc00731Repository,
        fromTruckStockItem,
        args.toTruckItem
      );

      console.log('toTruck_Svc00700 Checking----------', toTruck_Svc00700);

      if (!toTruck_Svc00701) {
        // *****************************************
        // JUST ADD THE NEW ITEMS HERE BY CHANGING EACH OrderDocumentId and LNITMSEQ then INSERT
        // *****************************************
        const currentQuantity = fromTruckStockItem.TransferQuantity;

        console.log('Not toTruck_Svc00701 - fromTruck', fromTruckStockItem);
        console.log('Not toTruck_Svc00701 - svc00701', fromTruck_Svc00731);

        try {
          await svc00701Repository.insert({
            ...fromTruck_Svc00701,
            OrderDocumentId: args.toTruckItem,
            LNITMSEQ: currentMaxSequence,
            TransferQuantity: fromTruckStockItem.TransferQuantity,
            QuantityFulfilled: fromTruckStockItem.TransferQuantity,
            QuantityToReceive: fromTruckStockItem.TransferQuantity,
          });
        } catch (ex) {
          console.log('fromTruck_Svc00701---------', ex.messgae);
          throw ex;
        }

        if (fromTruck_Svc00700) {
          if (!toTruck_Svc00700) {
            console.log('fromTruck_Svc00700=========', fromTruck_Svc00700);
            try {
              await svc00700Repository.insert({
                ...fromTruck_Svc00700,
                OrderDocumentId: args.toTruckItem,
              });
            } catch (ex) {
              console.log('fromTruck_Svc00700--------', ex.messgae);
              throw ex;
            }
          }
        }

        if (fromTruck_Svc00712) {
          try {
            await svc00712Repository.insert({
              ...fromTruck_Svc00712,
              OrderDocumentId: args.toTruckItem,
              LNITMSEQ: currentMaxSequence,
              Quantity: fromTruckStockItem.TransferQuantity,
            });
          } catch (ex) {
            console.log('fromTruck_Svc00712-------', ex.message);
            throw ex;
          }
        }

        if (fromTruck_Svc00731 && fromTruck_Svc00731.length) {
          // for (const svc00731 of fromTruck_Svc00731) {
          //   await svc00731Repository.insert({
          //     ...svc00731,
          //     OrderDocumentId: args.toTruckItem,
          //     LNITMSEQ: currentMaxSequence,
          //   });
          // }

          for (const svc00731 of fromTruck_Svc00731) {
            if (svc00731.DEBITAMT > 0) {
              const unitCost = svc00731.DEBITAMT / currentQuantity;
              svc00731.DEBITAMT = unitCost * fromTruck_Svc00701.TransferQuantity;
            }
            if (svc00731.CRDTAMNT > 0) {
              const unitCost = svc00731.CRDTAMNT / currentQuantity;
              svc00731.CRDTAMNT = unitCost * fromTruck_Svc00701.TransferQuantity;
            }
            if (svc00731.ORDBTAMT > 0) {
              const unitCost = svc00731.ORDBTAMT / currentQuantity;
              svc00731.ORDBTAMT = unitCost * fromTruck_Svc00701.TransferQuantity;
            }
            if (svc00731.ORCRDAMT > 0) {
              const unitCost = svc00731.ORCRDAMT / currentQuantity;
              svc00731.ORCRDAMT = unitCost * fromTruck_Svc00701.TransferQuantity;
            }

            try {
              await svc00731Repository.insert({ ...svc00731, OrderDocumentId: args.toTruckItem, LNITMSEQ: currentMaxSequence });
            } catch (ex) {
              console.log('fromTruck_Svc00731--------', ex.message);
              throw ex;
            }
          }

          // await this.calculateValuesForSvc00731(fromTruck_Svc00731, currentQuantity, fromTruck_Svc00701.TransferQuantity, svc00731Repository);
        }
        console.log('Not toTruck_Svc00701 - svc00731', fromTruck_Svc00731);
      } else {
        // *****************************************
        // THIS IS AN UPDATE - So we need to UPDATE THE OrderDocumentId and LNITMSEQ and also UPDATE THE 731 ROWS
        // *****************************************
        console.log('Exist toTruck_Svc00701', toTruck_Svc00731);

        const currentQuantity = toTruck_Svc00701.TransferQuantity;

        toTruck_Svc00701.TransferQuantity += fromTruckStockItem.TransferQuantity;
        toTruck_Svc00701.QuantityFulfilled += fromTruckStockItem.TransferQuantity;
        toTruck_Svc00701.QuantityReceived += fromTruckStockItem.TransferQuantity;
        await svc00701Repository.save(toTruck_Svc00701);

        // *****************************************
        // I don't believe there is anything here to do for this table row:
        // *****************************************
        // toTruck_Svc00700
        // *****************************************

        if (toTruck_Svc00712) {
          toTruck_Svc00712.Quantity = toTruck_Svc00701.TransferQuantity;
          await svc00712Repository.save(toTruck_Svc00712);
        }

        if (toTruck_Svc00731 && toTruck_Svc00731.length) {
          for (const toTruck_731_Row of toTruck_Svc00731) {
            if (toTruck_731_Row.DEBITAMT > 0) {
              const unitCost = toTruck_731_Row.DEBITAMT / currentQuantity;
              toTruck_731_Row.DEBITAMT = unitCost * toTruck_Svc00701.TransferQuantity;
            }
            if (toTruck_731_Row.CRDTAMNT > 0) {
              const unitCost = toTruck_731_Row.CRDTAMNT / currentQuantity;
              toTruck_731_Row.CRDTAMNT = unitCost * toTruck_Svc00701.TransferQuantity;
            }
            if (toTruck_731_Row.ORDBTAMT > 0) {
              const unitCost = toTruck_731_Row.ORDBTAMT / currentQuantity;
              toTruck_731_Row.ORDBTAMT = unitCost * toTruck_Svc00701.TransferQuantity;
            }
            if (toTruck_731_Row.ORCRDAMT > 0) {
              const unitCost = toTruck_731_Row.ORCRDAMT / currentQuantity;
              toTruck_731_Row.ORCRDAMT = unitCost * toTruck_Svc00701.TransferQuantity;
            }

            await svc00731Repository.save(toTruck_731_Row);
          }
          // await this.calculateValuesForSvc00731(toTruck_Svc00731, currentQuantity, toTruck_Svc00701.TransferQuantity, svc00731Repository);
        }
      }

      await svc00701Repository.remove(fromTruck_Svc00701);
      // if (fromTruck_Svc00700) await svc00700Repository.remove(fromTruck_Svc00700);
      if (fromTruck_Svc00712) await svc00712Repository.remove(fromTruck_Svc00712);
      if (fromTruck_Svc00731 && fromTruck_Svc00731.length) {
        for (const svc731 of fromTruck_Svc00731) {
          await svc00731Repository.remove(svc731);
        }
      }
    }

    //#endregion

    //#region Order Items

    maxSequence = await svc00701Repository
      .createQueryBuilder('SVC00701')
      .select('MAX(SVC00701.LNITMSEQ)', 'max')
      .getRawOne();

    currentMaxSequence = maxSequence ? maxSequence.max : 0;
    console.log('before pluse sequence', currentMaxSequence);

    for (const orderItems of args.orderItems) {
      for (const currentOrderItem of orderItems.orderItems) {
        currentMaxSequence = currentMaxSequence + sequenceIncrementBy;
        console.log('currentMaxSequence', currentMaxSequence);

        let svc00701EntityItemToRemove = await svc00701Repository.findOne({
          where: {
            OrderDocumentId: currentOrderItem.OrderDocumentId,
            ItemNumber: currentOrderItem.ItemNumber,
            RETDOCID: orderItems.sopNumber,
            LNITMSEQ: currentOrderItem.LNITMSEQ,
          },
        });

        if (svc00701EntityItemToRemove) {
          console.log('Orderitems -----------', svc00701EntityItemToRemove);
          const svc701LNITMSEQ = svc00701EntityItemToRemove.LNITMSEQ;

          let svc00712EntityItemToRemove = await svc00712Repository.findOne({
            where: {
              OrderDocumentId: currentOrderItem.OrderDocumentId,
              ItemNumber: currentOrderItem.ItemNumber,
              LNITMSEQ: currentOrderItem.LNITMSEQ,
            },
          });

          let svc00731EntityItemToRemove = await svc00731Repository.find({
            where: {
              OrderDocumentId: currentOrderItem.OrderDocumentId,
              LNITMSEQ: currentOrderItem.LNITMSEQ,
            },
          });

          try {
            await svc00701Repository.insert({ ...svc00701EntityItemToRemove, OrderDocumentId: args.toTruckItem, LNITMSEQ: currentMaxSequence });
            await svc00701Repository.remove(svc00701EntityItemToRemove);
          } catch (ex) {
            console.log('ex.message', ex.message);
            throw ex;
          }

          if (svc00712EntityItemToRemove) {
            try {
              await svc00712Repository.insert({ ...svc00712EntityItemToRemove, OrderDocumentId: args.toTruckItem, LNITMSEQ: currentMaxSequence });
              await svc00712Repository.remove(svc00712EntityItemToRemove);
            } catch (ex) {
              console.log('ex.message', ex.message);
              throw ex;
            }
          } else
            throw new Error(
              'Not Found Item With ItemNumber:' +
                currentOrderItem.ItemNumber +
                ' RETDOCID:' +
                orderItems.sopNumber +
                ' LNITMSEQ:' +
                svc701LNITMSEQ +
                ' in SVC00712.'
            );

          if (svc00731EntityItemToRemove.length > 0) {
            for (const svc00731ItemRow of svc00731EntityItemToRemove) {
              await svc00731Repository.insert({ ...svc00731ItemRow, OrderDocumentId: args.toTruckItem, LNITMSEQ: currentMaxSequence });
              await svc00731Repository.remove(svc00731ItemRow);
            }
          } else throw new Error('Not Found Item With RETDOCID:' + currentOrderItem.OrderDocumentId + ' LNITMSEQ:' + svc701LNITMSEQ + ' in SVC00731.');
        } else throw new Error('Not Found Item With ItemNumber:' + currentOrderItem.ItemNumber + ' RETDOCID:' + orderItems.sopNumber + ' in SVC00701');
      }
    }

    //#endregion

    return true;
  }

  loadFromTruckStockItems = async (
    svc00700Repository: Repository<Svc00700>,
    svc00701Repository: Repository<Svc00701>,
    svc00712Repository: Repository<Svc00712>,
    svc00731Repository: Repository<Svc00731>,
    fromTruckStockItem: TransferItemArgs
  ): Promise<loadFromTruckStockItemsResponse> => {
    let fromTruck_Svc701 = await svc00701Repository.findOne({
      where: { OrderDocumentId: fromTruckStockItem.OrderDocumentId, ItemNumber: fromTruckStockItem.ItemNumber, LNITMSEQ: fromTruckStockItem.LNITMSEQ },
    });
    if (!fromTruck_Svc701) {
      throw new Error(`Original Stock Item not Found on Truck ${fromTruckStockItem.OrderDocumentId}`);
    }

    let fromTruck_Svc00700 = await svc00700Repository.findOne({
      where: {
        OrderDocumentId: fromTruckStockItem.OrderDocumentId,
      },
    });

    let fromTruck_Svc00712 = await svc00712Repository.findOne({
      where: {
        OrderDocumentId: fromTruckStockItem.OrderDocumentId,
        ItemNumber: fromTruckStockItem.ItemNumber,
        LNITMSEQ: fromTruckStockItem.LNITMSEQ,
      },
    });

    let fromTruck_Svc00731 = await svc00731Repository.find({
      where: {
        OrderDocumentId: fromTruckStockItem.OrderDocumentId,
        LNITMSEQ: fromTruckStockItem.LNITMSEQ,
      },
    });

    return { fromTruck_Svc00701: fromTruck_Svc701, fromTruck_Svc00712, fromTruck_Svc00700, fromTruck_Svc00731 };
  };

  loadToTruckStockItems = async (
    svc00700Repository: Repository<Svc00700>,
    svc00701Repository: Repository<Svc00701>,
    svc00712Repository: Repository<Svc00712>,
    svc00731Repository: Repository<Svc00731>,
    fromTruckStockItem: TransferItemArgs,
    toTruckOrderDocumentId: string
  ): Promise<loadToTruckStockItemsResponse> => {
    let toTruck_Svc701 = await svc00701Repository.findOne({
      where: { OrderDocumentId: toTruckOrderDocumentId, ItemNumber: fromTruckStockItem.ItemNumber, RETDOCID: '' },
    });
    if (!toTruck_Svc701) {
      let toTruck_Svc00700 = await svc00700Repository.findOne({
        where: {
          OrderDocumentId: toTruckOrderDocumentId,
        },
      });
      return { toTruck_Svc00701: undefined, toTruck_Svc00700, toTruck_Svc00712: undefined, toTruck_Svc00731: [] };
    } else {
      let toTruck_Svc00700 = await svc00700Repository.findOne({
        where: {
          OrderDocumentId: toTruckOrderDocumentId,
        },
      });
      console.log('args.toTruck---------', toTruckOrderDocumentId);
      console.log('Function ----------', toTruck_Svc00700);

      let toTruck_Svc00712 = await svc00712Repository.findOne({
        where: {
          OrderDocumentId: toTruckOrderDocumentId,
          ItemNumber: fromTruckStockItem.ItemNumber,
          LNITMSEQ: toTruck_Svc701.LNITMSEQ,
        },
      });

      let toTruck_Svc00731 = await svc00731Repository.find({
        where: {
          OrderDocumentId: toTruckOrderDocumentId,
          LNITMSEQ: toTruck_Svc701.LNITMSEQ,
        },
      });

      return { toTruck_Svc00701: toTruck_Svc701, toTruck_Svc00712, toTruck_Svc00700, toTruck_Svc00731 };
    }
  };

  calculateValuesForSvc00731 = async (svc00731_Row: Svc00731, currentQuantity: number, changedQuantity: number): Promise<Svc00731> => {
    if (svc00731_Row.DEBITAMT > 0) {
      const unitCost = svc00731_Row.DEBITAMT / currentQuantity;
      svc00731_Row.DEBITAMT = unitCost * changedQuantity;
    }
    if (svc00731_Row.CRDTAMNT > 0) {
      const unitCost = svc00731_Row.CRDTAMNT / currentQuantity;
      svc00731_Row.CRDTAMNT = unitCost * changedQuantity;
    }
    if (svc00731_Row.ORDBTAMT > 0) {
      const unitCost = svc00731_Row.ORDBTAMT / currentQuantity;
      svc00731_Row.ORDBTAMT = unitCost * changedQuantity;
    }
    if (svc00731_Row.ORCRDAMT > 0) {
      const unitCost = svc00731_Row.ORCRDAMT / currentQuantity;
      svc00731_Row.ORCRDAMT = unitCost * changedQuantity;
    }
    return svc00731_Row;
  };
}

interface loadFromTruckStockItemsResponse {
  fromTruck_Svc00701: Svc00701;
  fromTruck_Svc00700: Svc00700 | undefined;
  fromTruck_Svc00712: Svc00712 | undefined;
  fromTruck_Svc00731: Svc00731[];
}

interface loadToTruckStockItemsResponse {
  toTruck_Svc00701: Svc00701 | undefined;
  toTruck_Svc00700: Svc00700 | undefined;
  toTruck_Svc00712: Svc00712 | undefined;
  toTruck_Svc00731: Svc00731[];
}
