import { Arg, Query, Resolver, Ctx, Mutation, Int } from 'type-graphql';
import { Like, getRepository, Repository, In } from 'typeorm';
import { some, find, sortBy, uniq } from 'lodash';
import { CustomerData } from '../../entity/CustomerData';
import { SalesPresentation, SalesPresentationTableResult } from '../../entity/SalesPresentation/SalesPresentation';
import { MyContext } from '../../types/MyContext';
import { SalesPresentationInput } from '../../entity/SalesPresentation/SalesPresentationInput';
import { SalesPresentationItemClass } from '../../entity/SalesPresentation/SalesPresentationItemClass';
import { SaveItemNumbersInput } from '../../entity/SalesPresentation/SaveItemNumbersInput';
import { SalesPresentationItemClassItemNumber } from '../../entity/SalesPresentation/SalesPresentationItemClassItemNumber';
import { SalesPresentationPriceLevel } from '../../entity/SalesPresentation/SalesPresentationPriceLevel';
import { ItemKitDetail } from '../../entity/SalesPresentation/ItemKitDetail';
import { KitItemsResult } from '../../entity/SalesPresentation/KitItemsResult';
import { SalesPresentationStep2Input } from '../../entity/SalesPresentation/SalesPresentationStep2Input';
import { SalesPresentationItemClassKit } from '../../entity/SalesPresentation/SalesPresentationItemClassKit';
import { SalesPresentationPriceLevelInput } from '../../entity/SalesPresentation/SalesPresentationPriceLevelInput';
import { SalesPresentationAndRelated } from '../../entity/SalesPresentation/SalesPresentationAndRelated';
import { SalesPresentationItemClassGroup } from '../../entity/SalesPresentation/SalesPresentationItemClassGroup';
import { ProductData } from '../../entity/ProductData';
import { PresentationAndProductData } from '../../entity/SalesPresentation/PresentationAndProductData';
import { SalesPresentationItemClassImageInput } from '../../entity/SalesPresentation/SalesPresentationItemClassImageInput';
import { SalesPresentationItemClassImage } from '../../entity/SalesPresentation/SalesPresentationItemClassImage';
import { PresentationSaveImagesResponse } from '../../entity/SalesPresentation/PresentationSaveImagesResponse';
import { ItemKitGrouping } from '../../entity/SalesPresentation/ItemKitGrouping';
import {
  PresentationPdfItemClass,
  SalesPresentationPdfData,
  SalesPresentationPdfRows,
  SalesPresentationPdfKitRows,
} from '../../entity/SalesPresentation/PresentationPdfItemClass';
import { ItemClassData } from '../../entity/SalesPresentation/ItemClassData';
import { ItemDataReporting } from '../../entity/SalesPresentation/ItemDataReporting';
import { ItemClassWithDescriptionInput } from '../../entity/SalesPresentation/ItemClassWithDescriptionInput';
import { SuccessMessageResponse } from '../../entity/SuccessMessageResponse';

const getSalesPresentationItemClassKits = async (id: number, itemClassId: number): Promise<KitItemsResult[]> => {
  const salesPresentationItemClassKits = await SalesPresentationItemClassKit.find({
    where: {
      salesPresentationId: id,
      salesPresentationItemClassId: itemClassId,
    },
    order: { displayOrder: 'ASC' },
  });
  let presentationItemClassKits: KitItemsResult[] = [];
  for (const item of salesPresentationItemClassKits) {
    let existing = find(presentationItemClassKits, kit => kit.kitItem === item.kitItem);
    if (existing) {
      if (existing.kitItems) {
        existing.kitItems.push(item);
      } else existing.kitItems = [item];
    } else {
      presentationItemClassKits.push({
        kitItem: item.kitItem,
        displayOrder: item.displayOrder,
        kitItems: [item],
      });
    }
  }
  // console.log('*************** salesPresentationItemClassKits', JSON.stringify(presentationItemClassKits, null, 2));
  return presentationItemClassKits;
};

@Resolver()
export class SalesPresentationResolver {
  @Query(() => SalesPresentationTableResult)
  async salesPresentations(@Arg('searchText', { nullable: true }) searchText: string, @Ctx() ctx: MyContext): Promise<SalesPresentationTableResult> {
    const { user } = ctx.req;
    if (!user) {
      return { presentations: [], totalRows: 0 };
    }

    let where: any = { userId: user.id };
    if (searchText) {
      where.customerName = Like(`%${searchText}%`);
    }

    const customers = getRepository(SalesPresentation);
    const [data, count] = await customers.findAndCount({ where });
    data.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
    return { presentations: data, totalRows: count };
  }

  @Query(() => [CustomerData])
  async companies(@Arg('searchText') searchText: string) {
    const customers = getRepository(CustomerData);
    const data = await customers.find({
      where: [{ Customer_Name: Like(`%${searchText}%`) }, { Customer_Number: Like(`%${searchText}%`) }],
    });
    data.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
    return data;
  }

  @Query(() => SalesPresentation || undefined)
  async presentationById(@Arg('id', () => Int) id: number): Promise<SalesPresentation | undefined> {
    const customers = getRepository(SalesPresentation);
    const data = await customers.findOneOrFail({
      where: {
        id,
      },
      relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
    });

    Object.assign(data, { itemClasses: sortBy(data.itemClasses, ic => ic.id) });
    return data;
  }

  @Query(() => SalesPresentationAndRelated || undefined)
  async presentationByIdAndRelated(
    @Arg('id', () => Int) id: number,
    @Arg('itemClassIndex', () => Int) itemClassIndex: number
  ): Promise<SalesPresentationAndRelated | undefined> {
    const customers = getRepository(SalesPresentation);
    const presentation = await customers.findOneOrFail({
      where: {
        id,
      },
      relations: ['priceLevels', 'itemClasses'],
    });

    //#region Get Presentation Item Class Data

    const presentationItemClass = presentation.itemClasses[itemClassIndex];
    const presentationItemClassKits = await getSalesPresentationItemClassKits(id, presentationItemClass.id);
    // console.log(
    //   "presentationItemClassKits.length",
    //   presentationItemClassKits.length,
    //   presentationItemClass.id
    // );
    const presentationItemClassItemNumbers = await SalesPresentationItemClassItemNumber.find({
      where: {
        salesPresentationId: id,
        salesPresentationItemClassId: presentationItemClass.id,
      },
      order: { displayOrder: 'ASC' },
    });
    const presentationItemClassGroups = await SalesPresentationItemClassGroup.find({
      where: {
        salesPresentationId: id,
        salesPresentationItemClassId: presentationItemClass.id,
      },
      order: { displayOrder: 'ASC' },
    });

    //#endregion

    //#region check for newly added Price Level

    // Check Each one for a null price or missing price Level.
    let missingPriceLevels: { priceLevel: string; itemNumber: string }[] = [];
    presentation.priceLevels.forEach(priceLevel => {
      presentationItemClassKits.forEach(kit => {
        kit.kitItems.forEach(kitItem => {
          if (!kitItem[`${priceLevel.priceLevel}`]) {
            missingPriceLevels.push({
              priceLevel: priceLevel.priceLevel,
              itemNumber: kitItem.itemNumber,
            });
          }
        });
      });
    });

    if (missingPriceLevels.length > 0) {
      const itemNumbers = missingPriceLevels.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>());
      const itemKitDetail = await ItemKitDetail.find({
        where: {
          itemClass: presentationItemClass.itemClass,
          itemNumber: In(itemNumbers),
        },
      });
      itemKitDetail.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      if (itemKitDetail.length) {
        missingPriceLevels.forEach(missing => {
          presentationItemClassKits.forEach(kit => {
            kit.kitItems.forEach(kitItem => {
              if (kitItem.itemNumber === missing.itemNumber) {
                const ikd = find(itemKitDetail, ikd => ikd.itemNumber === missing.itemNumber);
                if (ikd) {
                  kitItem[missing.priceLevel] = ikd[missing.priceLevel];
                  kitItem[`${missing.priceLevel}_Original`] = ikd[missing.priceLevel];
                }
              }
            });
          });
        });
      }
    }

    // Check Each one for a null price or missing price Level.
    missingPriceLevels = [];
    presentation.priceLevels.forEach(priceLevel => {
      presentationItemClassItemNumbers.forEach(itemNumber => {
        if (!itemNumber[`${priceLevel.priceLevel}`]) {
          missingPriceLevels.push({
            priceLevel: priceLevel.priceLevel,
            itemNumber: itemNumber.itemNumber,
          });
        }
      });
    });
    if (missingPriceLevels.length > 0) {
      const itemNumbers = missingPriceLevels.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>());
      const itemDataReporting = await ItemDataReporting.find({
        where: {
          itemClass: presentationItemClass.itemClass,
          itemNumber: In(itemNumbers),
        },
      });
      itemDataReporting.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      if (itemDataReporting.length) {
        missingPriceLevels.forEach(missing => {
          presentationItemClassItemNumbers.forEach(itemNumber => {
            if (itemNumber.itemNumber === missing.itemNumber) {
              const ikd = find(itemDataReporting, ikd => ikd.itemNumber === missing.itemNumber);
              if (ikd) {
                itemNumber[missing.priceLevel] = ikd[missing.priceLevel];
                itemNumber[`${missing.priceLevel}_Original`] = ikd[missing.priceLevel];
              }
            }
          });
        });
      }
    }

    // Check Each one for a null price or missing price Level.
    missingPriceLevels = [];
    presentation.priceLevels.forEach(priceLevel => {
      presentationItemClassGroups.forEach(group => {
        if (!group[`${priceLevel.priceLevel}`]) {
          missingPriceLevels.push({
            priceLevel: priceLevel.priceLevel,
            itemNumber: group.kitItem,
          });
        }
      });
    });
    if (missingPriceLevels.length > 0) {
      const itemNumbers = missingPriceLevels.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>());
      const itemKitGroup = await ItemKitGrouping.find({
        where: {
          itemClass: presentationItemClass.itemClass,
          itemNumber: In(itemNumbers),
        },
      });
      itemKitGroup.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      if (itemKitGroup.length) {
        missingPriceLevels.forEach(missing => {
          presentationItemClassGroups.forEach(group => {
            if (group.kitItem === missing.itemNumber) {
              const ikd = find(itemKitGroup, ikd => ikd.kitItem === missing.itemNumber);
              if (ikd) {
                group[missing.priceLevel] = ikd[missing.priceLevel];
                group[`${missing.priceLevel}_Original`] = ikd[missing.priceLevel];
              }
            }
          });
        });
      }
    }

    //#endregion

    //#region load up data from LFI tables since this is new

    // Now get the actual data since this is a new item class and has not yet been saved.
    let kits: KitItemsResult[] = [];
    if (presentationItemClassKits.length === 0) {
      const itemKitDetail = await ItemKitDetail.find({
        where: { itemClass: presentationItemClass.itemClass },
      });
      itemKitDetail.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      let kitOrder = 0;
      for (const item of itemKitDetail) {
        const itemKit = SalesPresentationItemClassKit.fromItemKitDetail(item);
        let existing = find(kits, kit => kit.kitItem === itemKit.kitItem);
        if (existing) {
          if (existing.kitItems) {
            existing.kitItems.push(itemKit);
          } else existing.kitItems = [itemKit];
        } else {
          kits.push({
            kitItem: itemKit.kitItem,
            displayOrder: kitOrder,
            kitItems: [itemKit],
          });
          kitOrder++;
        }
      }
    }

    let kitItemNumbers: string[] = [];
    let itemNumbers: SalesPresentationItemClassItemNumber[] = [];
    if (presentationItemClassItemNumbers.length === 0) {
      if (kits.length > 0) {
        for (const kitItem of kits) {
          kitItemNumbers.push(kitItem.kitItem);
          kitItemNumbers = kitItemNumbers.concat(kitItem.kitItems.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>()));
        }
      } else {
        kitItemNumbers = kitItemNumbers.concat(presentationItemClassItemNumbers.reduce((p, c) => (p = p.concat([c.itemNumber])), new Array<string>()));
      }
    }

    let groups: SalesPresentationItemClassGroup[] = [];
    if (presentationItemClassGroups.length === 0) {
      const itemKitGroupRepo = getRepository(ItemKitGrouping);
      const itemKitGroups = await itemKitGroupRepo.find({
        where: { itemClass: presentationItemClass.itemClass },
      });
      itemKitGroups.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
      groups = itemKitGroups.map((item, index) => SalesPresentationItemClassGroup.fromItemKitGrouping(item, index, presentation.id!, presentationItemClass.id));
    }

    if (presentationItemClassGroups.length === 0) {
      if (groups.length > 0) {
        for (const kitItem of groups) {
          kitItemNumbers.push(kitItem.kitItem);
        }
      } else {
        kitItemNumbers = kitItemNumbers.concat(presentationItemClassGroups.reduce((p, c) => (p = p.concat([c.kitItem])), new Array<string>()));
      }
    }

    try {
      // console.log('presentationItemClassItemNumbers', presentationItemClassItemNumbers.length, presentationItemClass.itemClass);
      if (presentationItemClassItemNumbers.length === 0) {
        // console.log('kitItemNumbers', kitItemNumbers, kits.length, presentationItemClassItemNumbers.length);
        const itemDataReportingItems = await ItemDataReporting.find({
          where: { itemClass: presentationItemClass.itemClass },
        });
        // console.log('itemDataReportingItems', itemDataReportingItems.length);
        itemDataReportingItems.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
        itemNumbers = itemDataReportingItems.map((idr, index) =>
          SalesPresentationItemClassItemNumber.fromItemDataReporting(idr, index, presentation.id!, presentationItemClass.id)
        );
        // console.log('itemNumbers', itemNumbers.length);
      }
    } catch (ex) {
      console.log('idr error', ex.message);
    }

    //#endregion
    // console.log('presentationItemClassItemNumbers', presentationItemClassItemNumbers.length, presentationItemClass.itemClass);

    const anyUnsavedItemClasses = await SalesPresentationItemClass.count({
      where: { salesPresentationId: presentation.id, hasBeenSaved: 0 },
    });
    const salesPresentationItemClasses = await SalesPresentationItemClass.count();

    return {
      presentation,
      presentationItemClass,
      presentationItemClassKits,
      presentationItemClassItemNumbers,
      presentationItemClassGroups,
      kits,
      itemNumbers,
      groups,
      itemClassIndex,
      anyUnsavedItemClasses: anyUnsavedItemClasses > 0 || presentation.itemClasses.length > salesPresentationItemClasses,
    };
  }

  @Query(() => PresentationAndProductData || undefined)
  async presentationByIdAndPhotos(
    @Arg('id', () => Int) id: number,
    @Arg('itemClassIndex', () => Int) itemClassIndex: number
  ): Promise<PresentationAndProductData | undefined> {
    const salesPresentationRepo = getRepository(SalesPresentation);
    const presentation = await salesPresentationRepo.findOneOrFail({
      where: {
        id,
      },
      relations: ['priceLevels', 'itemClasses'],
    });

    const itemClass = presentation.itemClasses[itemClassIndex];

    const itemNumbers = await SalesPresentationItemClassItemNumber.find({
      where: { salesPresentationItemClassId: itemClass.id },
      order: { displayOrder: 'ASC' },
    });
    const kits = await SalesPresentationItemClassKit.find({
      where: { salesPresentationItemClassId: itemClass.id },
      order: { displayOrder: 'ASC' },
    });
    const groups = await SalesPresentationItemClassGroup.find({
      where: { salesPresentationItemClassId: itemClass.id },
      order: { displayOrder: 'ASC' },
    });

    let allItemNumbers = itemNumbers.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>());
    allItemNumbers = allItemNumbers.concat(kits.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>()));
    allItemNumbers = allItemNumbers.concat(groups.reduce((p, c) => p.concat([c.kitItem]), new Array<string>()));
    const kitItemIds = uniq(kits.reduce((p, c) => p.concat([c.kitItem]), new Array<string>()));
    allItemNumbers = allItemNumbers.concat(kitItemIds);

    const images = await SalesPresentationItemClassImage.find({
      where: { salesPresentationItemClassId: itemClass.id },
    });

    if (images.length === 0 && kits.length > 0) {
      let count = 0;
      console.log('kit', kitItemIds);
      const kitProductData = await ProductData.find({
        where: { itemNumber: In(kitItemIds) },
      });
      console.log('kitProductData.length', kitProductData.length);
      for (const kitItem of kitProductData) {
        if (count <= 4) {
          const image = new SalesPresentationItemClassImage();
          image.itemNumber = kitItem.itemNumber;
          image.imageUrl = kitItem.image1;
          image.imageIndex = 1;
          images.push(image);
          count++;
        }
      }
    }

    const presentationImages = images.map(image => {
      return {
        itemNumber: image.itemNumber,
        imageIndex: image.imageIndex,
        imageUrl: image.imageUrl,
      };
    });

    const productData = await ProductData.find({
      where: { itemNumber: In(allItemNumbers) },
    });

    return {
      productData,
      itemClass,
      itemClassIndex,
      presentation,
      presentationImages,
    };
  }

  @Query(() => SalesPresentationPdfData || undefined)
  async presentationPdfData(@Arg('id', () => Int) id: number): Promise<SalesPresentationPdfData | undefined> {
    const salesPresentationRepo = getRepository(SalesPresentation);
    const presentation = await salesPresentationRepo.findOneOrFail({
      where: {
        id,
      },
      relations: ['priceLevels', 'itemClasses'],
    });

    const rows: PresentationPdfItemClass[] = [];
    for (const ic of presentation.itemClasses) {
      const itemClass = ic;

      const presentationItemClassItemNumbers = await SalesPresentationItemClassItemNumber.find({
        where: { salesPresentationItemClassId: itemClass.id },
        order: { displayOrder: 'ASC' },
      });

      const itemClassItemNumbers: SalesPresentationPdfRows[] = presentationItemClassItemNumbers.map(item => {
        const row = new SalesPresentationPdfRows();
        Object.assign(row, { ...item });
        return row;
      });

      const presentationItemClassKits = await SalesPresentationItemClassKit.find({
        where: { salesPresentationItemClassId: itemClass.id },
        order: { displayOrder: 'ASC' },
      });
      const itemClassKits: SalesPresentationPdfKitRows[] = [];
      if (presentationItemClassKits.length > 0) {
        for (const item of presentationItemClassKits) {
          let existing = find(itemClassKits, kit => kit.itemNumber === item.kitItem);
          if (existing) {
            if (existing.items) {
              existing.items.push(SalesPresentationPdfRows.fromKit(item));
            } else existing.items = [SalesPresentationPdfRows.fromKit(item)];
          } else {
            itemClassKits.push({
              itemNumber: item.kitItem,
              itemDescription: item.kitName ? item.kitName : '',
              items: [SalesPresentationPdfRows.fromKit(item)],
            });
          }
        }
      }

      const presentationItemClassGroups = await SalesPresentationItemClassGroup.find({
        where: { salesPresentationItemClassId: itemClass.id },
        order: { displayOrder: 'ASC' },
      });
      const itemClassGroups: SalesPresentationPdfRows[] = presentationItemClassGroups.map(item => {
        const row = SalesPresentationPdfRows.fromGroup(item); // new SalesPresentationPdfRows();
        Object.assign(row, { ...item });
        return row;
      });

      const images = await SalesPresentationItemClassImage.find({
        where: { salesPresentationItemClassId: itemClass.id },
      });
      const itemClassImages = images.map(image => {
        return {
          itemNumber: image.itemNumber,
          imageIndex: image.imageIndex,
          imageUrl: image.imageUrl,
        };
      });

      const itemClassFeatures = await ItemClassData.findOneOrFail({
        where: { itemClass: itemClass.itemClass },
      });
      // console.log(itemClassFeatures.Feature_1, itemClassImages.length);
      Object.keys(itemClassFeatures).map(
        k => (itemClassFeatures[k] = typeof itemClassFeatures[k] == 'string' ? itemClassFeatures[k].trim() : itemClassFeatures[k])
      );
      rows.push({
        itemClass,
        itemClassImages,
        itemClassFeatures,
        itemClassItemNumbers,
        itemClassKits,
        itemClassGroups,
      });
    }

    return { presentation, items: rows };
  }

  addItemClasses = async (salesPresentationId: number, itemClasses: ItemClassWithDescriptionInput[], repo: Repository<SalesPresentationItemClass>) => {
    for (const itemClass of itemClasses) {
      await repo
        .create({
          salesPresentationId,
          itemClass: itemClass.itemClass,
          itemClassDescription: itemClass.itemClassDescription,
          priceAdjustment: 0,
          cubeAdjustment: 0,
          priceAdjustmentTo: 'All',
          cubeAdjustmentTo: 'All',
        })
        .save();
    }
  };

  addPriceLevels = async (salesPresentationId: number, priceLevels: SalesPresentationPriceLevelInput[], sppl: Repository<SalesPresentationPriceLevel>) => {
    for (const priceLevel of priceLevels) {
      await sppl
        .create({
          salesPresentationId,
          priceLevel: priceLevel.key,
          displayName: priceLevel.label,
        })
        .save();
    }
  };

  addItemClass = async (salesPresentationId: number, itemClass: ItemClassWithDescriptionInput) => {
    return await SalesPresentationItemClass.create({
      salesPresentationId,
      itemClass: itemClass.itemClass,
      itemClassDescription: itemClass.itemClassDescription,
      priceAdjustment: 0,
      cubeAdjustment: 0,
      priceAdjustmentTo: 'All',
      cubeAdjustmentTo: 'All',
      hasBeenSaved: 0,
    }).save();
  };

  addRelated = async (salesPresentation: SalesPresentation, itemClasses: ItemClassWithDescriptionInput[]) => {
    // console.log("itemClasses.length", itemClasses.length);
    for (const ic of itemClasses) {
      // console.log("ic.itemClass", ic.itemClass);
      if (
        !some(salesPresentation.itemClasses, itemClass => {
          return itemClass.id === ic.id;
        })
      ) {
        // console.log("adding Item Class", ic.itemClass);
        const newItemClass = await this.addItemClass(salesPresentation.id!, ic);
        // console.log("newItemClass.itemClass", newItemClass.itemClass);
        // let kits: KitItemsResult[] = [];
        const itemKitDetail = await ItemKitDetail.find({
          where: { itemClass: newItemClass.itemClass },
        });
        itemKitDetail.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));

        // console.log("itemKitDetail.length", itemKitDetail.length);

        let order = 0;
        let kitsToInsert: any[] = [];
        for (const kitDetail of itemKitDetail) {
          kitsToInsert.push({
            ...kitDetail,
            salesPresentationId: salesPresentation.id,
            salesPresentationItemClassId: newItemClass.id,
            displayOrder: order++,
          });
        }
        if (kitsToInsert.length > 0) await SalesPresentationItemClassKit.insert(kitsToInsert);

        // let kitOrder = 0;
        // for (const item of itemKitDetail) {
        //   const itemKit = SalesPresentationItemClassKit.fromItemKitDetail(item);
        //   let existing = find(kits, kit => kit.kitItem === itemKit.kitItem);
        //   if (existing) {
        //     if (existing.kitItems) {
        //       existing.kitItems.push(itemKit);
        //     } else existing.kitItems = [itemKit];
        //   } else {
        //     kits.push({
        //       kitItem: itemKit.kitItem,
        //       displayOrder: kitOrder,
        //       kitItems: [itemKit]
        //     });
        //     kitOrder++;
        //   }
        // }

        let kitItemNumbers: string[] = [];
        // let itemNumbers: SalesPresentationItemClassItemNumber[] = [];
        for (const kitItem of itemKitDetail) {
          kitItemNumbers.push(kitItem.kitItem);
          kitItemNumbers = kitItemNumbers.concat(itemKitDetail.reduce((p, c) => p.concat([c.itemNumber]), new Array<string>()));
        }

        let groups: SalesPresentationItemClassGroup[] = [];
        const itemKitGroupRepo = getRepository(ItemKitGrouping);
        const itemKitGroups = await itemKitGroupRepo.find({
          where: { itemClass: newItemClass.itemClass },
        });
        itemKitGroups.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
        groups = itemKitGroups.map((item, index) => SalesPresentationItemClassGroup.fromItemKitGrouping(item, index, salesPresentation.id!, newItemClass.id));
        // console.log("groups.length", groups.length);
        if (groups.length) await SalesPresentationItemClassGroup.insert(groups);

        if (groups.length > 0) {
          for (const kitItem of groups) {
            kitItemNumbers.push(kitItem.kitItem);
          }
        }

        try {
          const itemDataReportingItems = await ItemDataReporting.find({
            where: { itemClass: newItemClass.itemClass },
          });
          itemDataReportingItems.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
          const items = itemDataReportingItems.map<SalesPresentationItemClassItemNumber>((idr, index) =>
            SalesPresentationItemClassItemNumber.fromItemDataReporting(idr, index, salesPresentation.id!, newItemClass.id)
          );
          // console.log(
          //   "JSON.stringify(items,null,1)",
          //   JSON.stringify(items, null, 1)
          // );
          await SalesPresentationItemClassItemNumber.insert(items);
        } catch (ex) {
          console.log('idr error', ex.message);
        }
      }
    }
  };

  @Mutation(() => SalesPresentation)
  async saveSalesPresentation(@Arg('data') data: SalesPresentationInput, @Ctx() ctx: MyContext): Promise<SalesPresentation> {
    const salesPresentationRepo = getRepository(SalesPresentation);
    const spic = getRepository(SalesPresentationItemClass);
    const sppl = getRepository(SalesPresentationPriceLevel);
    const { id, itemClasses, priceLevels, ...rest } = data;
    if (data.id) {
      let existing = await salesPresentationRepo.findOneOrFail(id, {
        relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
      });
      // console.log('args data', data);
      if (existing && existing.itemClasses) {
        existing.itemClasses.forEach(async ic => {
          if (
            !some(data.itemClasses, itemClass => {
              return itemClass.id === ic.id;
            })
          ) {
            console.log(ic.id, JSON.stringify(data.itemClasses));

            await SalesPresentationItemClassGroup.delete({
              salesPresentationItemClassId: ic.id,
            });
            await SalesPresentationItemClassKit.delete({
              salesPresentationItemClassId: ic.id,
            });
            await SalesPresentationItemClassItemNumber.delete({
              salesPresentationItemClassId: ic.id,
            });
            await SalesPresentationItemClassImage.delete({
              salesPresentationItemClassId: ic.id,
            });
            await spic.delete({ id: ic.id });
          }
        });

        existing.priceLevels.forEach(async pl => {
          if (!some(priceLevels, { key: pl.priceLevel })) {
            await sppl.delete({
              salesPresentationId: data.id!,
              priceLevel: pl.priceLevel,
            });
          }
        });
        // console.log("have sp - adding");
        await this.addRelated(existing, itemClasses);

        for (const priceLevel of priceLevels) {
          if (!some(existing.priceLevels, { priceLevel: priceLevel.key })) {
            await sppl
              .create({
                salesPresentationId: data.id!,
                priceLevel: priceLevel.key,
                displayName: priceLevel.label,
              })
              .save();
          }
        }
      }
      await salesPresentationRepo.update(data.id!, { ...rest });
      return salesPresentationRepo.findOneOrFail(data.id!, {
        relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
      });
    } else {
      const result = await salesPresentationRepo.create({ ...rest, userId: ctx.req.user!.id }).save();
      // console.log("result.id", result.id);
      // console.log("NO SP - adding");
      await this.addRelated(result, itemClasses);
      // await this.addItemClasses(result.id!, itemClasses, spic);
      await this.addPriceLevels(result.id!, priceLevels, sppl);

      return salesPresentationRepo.findOneOrFail(result.id!, {
        relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
      });
    }
  }

  @Mutation(() => SalesPresentation)
  async saveItemNumbers(@Arg('data') data: SaveItemNumbersInput): Promise<SalesPresentation> {
    // console.log('args data', data);
    const itemData = getRepository(SalesPresentation);
    const itemNumbersRepo = getRepository(SalesPresentationItemClassItemNumber);
    await itemNumbersRepo.delete({
      salesPresentationId: data.salesPresentationId,
    });
    for (const itemNumber of data.itemNumbers) {
      await itemNumbersRepo
        .create({
          ...itemNumber,
          salesPresentationId: data.salesPresentationId,
          salesPresentationItemClassId: data.itemClassId,
        })
        .save();
    }
    return itemData.findOneOrFail(data.salesPresentationId, {
      relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
    });
  }

  @Mutation(() => PresentationSaveImagesResponse)
  async saveItemClassImages(@Arg('data') data: SalesPresentationItemClassImageInput): Promise<PresentationSaveImagesResponse> {
    // console.log('args data', data);
    const itemClassImageRepo = getRepository(SalesPresentationItemClassImage);
    await itemClassImageRepo.delete({
      salesPresentationItemClassId: data.salesPresentationItemClassId,
    });
    for (const image of data.images) {
      await itemClassImageRepo
        .create({
          ...image,
          salesPresentationId: data.salesPresentationId,
          salesPresentationItemClassId: data.salesPresentationItemClassId,
          itemClass: data.itemClass,
        })
        .save();
    }
    const presentation = await SalesPresentation.findOneOrFail(data.salesPresentationId, {
      relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
    });

    const nextItemClassIndex = data.itemClassIndex + 1 <= presentation.itemClasses.length ? data.itemClassIndex + 1 : 0;
    return {
      presentation,
      itemClass: data.itemClassIndex <= presentation.itemClasses.length ? presentation.itemClasses[data.itemClassIndex + 1] : null,
      itemClassIndex: nextItemClassIndex,
    };
  }

  @Mutation(() => SalesPresentation)
  async saveStep2(@Arg('data') data: SalesPresentationStep2Input): Promise<SalesPresentation | null> {
    // console.log('args data', data);

    const itemClassRepo = getRepository(SalesPresentationItemClass);
    let itemClass = await itemClassRepo.findOne(data.itemClassId);

    if (itemClass) {
      // console.log('saveStep2 > itemClass', itemClass.itemClass);
      const { kits, itemClassId, groups, items, ...rest } = data;
      // console.log('...rest', rest);
      try {
        await itemClassRepo.update(itemClass.id, {
          hasBeenSaved: 1,
          ...rest,
        });
      } catch (ex) {
        console.log('itemClass update error', ex.message);
      }
    }

    const kitRepo = getRepository(SalesPresentationItemClassKit);
    await kitRepo.delete({ salesPresentationItemClassId: data.itemClassId });

    if (data.kits && data.kits.length > 0) {
      for (const kit of data.kits) {
        for (const kitItem of kit.kitItems) {
          let kitItemRow = await kitRepo.findOne({
            where: {
              salesPresentationItemClassId: data.itemClassId,
              kitItem: kit.kitItem,
              itemNumber: kitItem.itemNumber,
            },
          });

          if (kitItemRow) {
            try {
              const { id, ...rest } = kitItem;
              await kitRepo.update(kitItemRow.id!, {
                ...rest,
                displayOrder: kit.displayOrder,
              });
            } catch (ex) {
              console.log('kit update error', ex.message);
            }
          } else {
            try {
              const { id, ...rest } = kitItem;
              await kitRepo.insert({
                ...rest,
                salesPresentationId: data.salesPresentationId,
                salesPresentationItemClassId: data.itemClassId,
                displayOrder: kit.displayOrder,
              });
            } catch (ex) {
              console.log('kit insert error', ex.message);
            }
          }
        }
      }
    }

    const itemNumberRepo = getRepository(SalesPresentationItemClassItemNumber);
    await itemNumberRepo.delete({
      salesPresentationItemClassId: data.itemClassId,
    });

    if (data.items && data.items.length > 0) {
      for (const item of data.items) {
        let itemRow = await itemNumberRepo.findOne({
          where: {
            salesPresentationItemClassId: data.itemClassId,
            itemNumber: item.itemNumber,
          },
        });

        if (itemRow) {
          try {
            // console.log('saveStep2 > itemNumberRepo/update', JSON.stringify(item, null, 2));
            await itemNumberRepo.update(itemRow.id!, {
              ...item,
            });
          } catch (ex) {
            console.log('item update error', ex.message);
          }
        } else {
          try {
            // console.log('item', JSON.stringify(item, null, 2));
            await itemNumberRepo
              .create({
                salesPresentationId: data.salesPresentationId,
                salesPresentationItemClassId: data.itemClassId,
                ...item,
              })
              .save();
          } catch (ex) {
            console.log('item insert error', ex.message);
          }
        }
      }
    }
    // console.log('saveStep2 > data.items.length', data.items!.length);

    const groupRepo = getRepository(SalesPresentationItemClassGroup);
    await groupRepo.delete({ salesPresentationItemClassId: data.itemClassId });

    if (data.groups && data.groups.length > 0) {
      for (const group of data.groups) {
        let groupItemRow = await groupRepo.findOne({
          where: {
            salesPresentationItemClassId: data.itemClassId,
            kitItem: group.kitItem,
          },
        });

        if (groupItemRow) {
          try {
            await groupRepo.update(groupItemRow.id!, {
              ...group,
            });
          } catch (ex) {
            console.log('group update error', ex.message);
          }
        } else {
          try {
            await groupRepo.insert({
              salesPresentationId: data.salesPresentationId,
              salesPresentationItemClassId: data.itemClassId,
              ...group,
            });
          } catch (ex) {
            console.log('group insert error', ex.message);
          }
        }
      }
    }

    return SalesPresentation.findOneOrFail(data.salesPresentationId, {
      relations: ['priceLevels', 'itemClasses', 'itemClasses.itemNumbers'],
    });
  }

  @Mutation(() => SuccessMessageResponse)
  async deletePresentation(@Arg('id', () => Int) id: number): Promise<SuccessMessageResponse | null> {
    await SalesPresentationItemClassGroup.delete({ salesPresentationId: id });
    await SalesPresentationItemClassKit.delete({ salesPresentationId: id });
    await SalesPresentationItemClassItemNumber.delete({
      salesPresentationId: id,
    });
    await SalesPresentationItemClassImage.delete({ salesPresentationId: id });
    await SalesPresentationItemClass.delete({ salesPresentationId: id });
    await SalesPresentationPriceLevel.delete({ salesPresentationId: id });
    await SalesPresentation.delete({ id });
    return { success: true, message: 'Successfully Deleted Presentation' };
  }
}
