import { Arg, Resolver, Ctx, Mutation, Query } from 'type-graphql';
import { Like, getRepository } from 'typeorm';
import { CustomerData } from '../../entity/CustomerData';
import { ItemDataReporting } from '../../entity/SalesPresentation/ItemDataReporting';
import { FindCustomerTableResult } from '../../entity/SalesPresentation/SalesPresentation';
import { MyContext } from '../../types/MyContext';
import { ItemKitDetail } from '../../entity/SalesPresentation/ItemKitDetail';
import { ItemKitGrouping } from '../../entity/SalesPresentation/ItemKitGrouping';
import { find } from 'lodash';
import { KitItemDetailsResult } from '../../entity/SalesPresentation/KitItemsResult';
import { ItemClassWithDescription } from '../../entity/SalesPresentation/ItemClassWithDescription';
import { SalesPresentationItemClassGroup } from '../../entity/SalesPresentation/SalesPresentationItemClassGroup';

@Resolver()
export class ItemResolver {
  @Mutation(() => [ItemKitDetail])
  async findKitItems(@Arg('searchText') searchText: string, @Arg('itemClass') itemClass: string, @Ctx() ctx: MyContext): Promise<ItemKitDetail[]> {
    const { user } = ctx.req;
    if (!user) {
      return [];
    }

    const kitItems = getRepository(ItemKitDetail);
    const data = await kitItems.find({ where: { kitItem: searchText, itemClass }, take: 20 });
    data.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
    return data;
  }

  @Query(() => [KitItemDetailsResult])
  async kitItemsByItemClass(@Arg('itemClass') itemClass: string, @Ctx() ctx: MyContext): Promise<KitItemDetailsResult[]> {
    const { user } = ctx.req;
    if (!user) {
      return [];
    }

    const data = await ItemKitDetail.find({ where: { itemClass } });
    // console.log('data.length', data.length, count);
    data.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
    // console.log('kitItemsByItemClass', data.length, itemClass);

    let kits: KitItemDetailsResult[] = [];
    for (const item of data) {
      let existing = find(kits, kit => kit.kitItem === item.kitItem);
      if (existing) {
        if (existing.kitItems) {
          existing.kitItems.push(item);
        } else existing.kitItems = [item];
      } else {
        kits.push({
          kitItem: item.kitItem,
          kitItems: [item],
        });
      }
    }

    return kits;
  }

  @Query(() => [ItemKitDetail])
  async kitGroupsByItemClass(@Arg('itemClass') itemClass: string, @Ctx() ctx: MyContext): Promise<ItemKitDetail[]> {
    const { user } = ctx.req;
    if (!user) {
      return [];
    }

    const kitItems = getRepository(ItemKitGrouping);
    const data = await kitItems.find({ where: { itemClass } });
    data.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
    return [];
  }

  @Mutation(() => FindCustomerTableResult)
  async findCustomer(@Arg('searchText') searchText: string): Promise<FindCustomerTableResult> {
    const customers = getRepository(CustomerData);
    const [data, totalRows] = await customers.findAndCount({
      where: [{ Customer_Name: Like(`%${searchText}%`) }, { Customer_Number: Like(`%${searchText}%`) }],
    });
    data.forEach(obj => Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k])));
    return { customers: data, totalRows };
  }

  @Mutation(() => ItemClassWithDescription)
  async findItemClass(@Arg('searchText') searchText: string): Promise<ItemClassWithDescription> {
    const itemData = getRepository(ItemDataReporting);
    const obj = await itemData.findOneOrFail({
      where: { itemClass: searchText },
      select: ['itemClass', 'itemClassDescription'],
    });
    Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k]));
    return Object.assign(new ItemClassWithDescription(), { ...obj, id: -1 });
  }

  @Mutation(() => ItemDataReporting)
  async findItemNumber(@Arg('searchText') searchText: string, @Arg('itemClass') itemClass: string): Promise<ItemDataReporting> {
    const itemData = getRepository(ItemDataReporting);
    const obj = await itemData.findOneOrFail({
      where: { itemNumber: searchText, itemClass },
    });
    Object.keys(obj).map(k => (obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k]));
    return obj;
  }

  @Mutation(() => SalesPresentationItemClassGroup)
  async findGroupItem(@Arg('searchText') searchText: string, @Arg('itemClass') itemClass: string): Promise<SalesPresentationItemClassGroup> {
    console.log('searchText, ');
    const itemKitGroupRepo = getRepository(ItemKitGrouping);
    const itemKitGroup = await itemKitGroupRepo.findOneOrFail({ where: { itemClass: itemClass, kitItem: searchText } });
    Object.keys(itemKitGroup).map(k => (itemKitGroup[k] = typeof itemKitGroup[k] == 'string' ? itemKitGroup[k].trim() : itemKitGroup[k]));
    return SalesPresentationItemClassGroup.fromItemKitGrouping(itemKitGroup, 0, 0, 0); // TODO
  }
}
