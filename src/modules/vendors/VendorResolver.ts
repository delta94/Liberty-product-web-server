import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Vendor } from '../../entity/Vendor';
import { VendorCategory } from '../../entity/VendorCategory';
import { VendorCategoryItemClass } from '../../entity/VendorCategoryItemClass';
import { VendorInput } from '../../entity/VendorInput';
import { Not, In, getConnection } from 'typeorm';
import { VendorsResponse } from '../../entity/VendorsResponse';
import { filter } from 'lodash';

async function addItemClasses(vendor: VendorInput) {
  let itemsToInsert: VendorCategoryItemClass[] = [];
  if (vendor.vendorCategories && vendor.vendorCategories.length > 0) {
    const selectedVendorCategories = filter(vendor.vendorCategories, vc => vc.itemClasses && vc.itemClasses.length > 0);
    const data = await VendorCategory.find({ vendorId: vendor.id, category: Not(In(selectedVendorCategories.reduce((prev, current) => prev.concat([current.category]), new Array<String>()))) });
    for (let cat of data) {
      await VendorCategoryItemClass.delete({ vendorCategoryId: cat.id });
      await VendorCategory.delete({ id: cat.id });
    }

    for (let vendorCategoriesInput of selectedVendorCategories) {
      const vendorCategory = await VendorCategory.findOne({ vendorId: vendor.id, category: vendorCategoriesInput.category });
      if (!vendorCategory) {
        try {
          const newCategory = await VendorCategory.create({
            vendorId: vendor.id,
            category: vendorCategoriesInput.category,
          }).save();

          if (vendorCategoriesInput.itemClasses && vendorCategoriesInput.itemClasses.length > 0) {
            for (let ic of vendorCategoriesInput.itemClasses) {
              itemsToInsert.push(
                Object.assign(new VendorCategoryItemClass(), {
                  vendorId: vendor.id,
                  vendorCategoryId: newCategory.id!,
                  itemClass: ic,
                }),
              );
            }
          }
        } catch (ex) {
          console.log('ex', ex.message);
        }
      } else {
        await VendorCategoryItemClass.delete({ vendorCategoryId: vendorCategory.id });
        if (vendorCategoriesInput.itemClasses && vendorCategoriesInput.itemClasses.length > 0) {
          for (let ic of vendorCategoriesInput.itemClasses) {
            itemsToInsert.push(
              Object.assign(new VendorCategoryItemClass(), {
                vendorId: vendor.id,
                vendorCategoryId: vendorCategory.id,
                itemClass: ic,
              }),
            );
          }
        }
      }
    }

    if (itemsToInsert.length > 0) {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(VendorCategoryItemClass)
        .values(itemsToInsert)
        .execute();
    }
  }
}

@Resolver()
export class VendorResolver {
  @Mutation(() => Vendor)
  async saveVendor(@Arg('data') data: VendorInput) {
    let vendor: Vendor;
    const { vendorCategories, ...rest } = data;
    if (data.id) {
      vendor = await Vendor.findOneOrFail({ id: data.id });
      vendor = Object.assign(vendor, rest);
      vendor.save();
    } else vendor = await Vendor.create(rest).save();

    await addItemClasses(data);
    // VendorCategory.delete({ vendorId: vendor.id });
    // for (let vc of vendorCategories) {
    //   const insert = { vendorId: vendor.id, category: vc };
    //   await VendorCategory.create(insert).save();
    // }

    return await Vendor.findOne({ id: vendor.id }, { relations: ['vendorCategories', 'vendorCategories.itemClasses'] });
  }

  @Mutation(() => Boolean)
  async deleteVendor(@Arg('id', () => Int) id: number) {
    await VendorCategoryItemClass.delete({ vendorId: id });
    await VendorCategory.delete({ vendorId: id });
    await Vendor.delete({ id });
    return true;
  }

  @Query(() => VendorsResponse)
  async vendors(@Arg('skip', () => Int!) skip: number, @Arg('pageSize', () => Int!) pageSize: number, @Arg('searchText', () => String, { nullable: true }) _searchText?: number) {
    return {
      vendors: await Vendor.find({ skip, take: pageSize }),
      totalRows: await Vendor.count(),
    };
  }

  @Query(() => Vendor)
  async vendorById(@Arg('id', () => Int!) id: number): Promise<Vendor | undefined> {
    const result = await Vendor.findOne({ id }, { relations: ['vendorCategories', 'vendorCategories.itemClasses'] });
    return result;
  }
}
