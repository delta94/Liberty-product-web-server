import { Arg, Query, Resolver, Ctx } from 'type-graphql';
import { ProductViewData } from '../../entity/ProductViewModel';
import { getManager, In } from 'typeorm';
import { ProductData } from '../../entity/ProductData';
import { CategoryItemClass } from '../../entity/CategoryItemClass';
import { CategoryItemClassGrouped } from '../../entity/CategoryItemClassGrouped';
import { CategoryItemClassGroup } from '../../entity/CategoryItemClassGroup';
import { filter } from 'lodash';
import { MyContext } from '../../types/MyContext';
import { UserJob } from '../../entity/UserJob';
import { User } from '../../entity/User';
import { Vendor } from '../../entity/Vendor';
import { VendorCategoryItemClass } from '../../entity/VendorCategoryItemClass';
import { OpenOrderData } from '../../entity/OpenOrderDataView';
import { UserJobStatusEnum } from '../../entity/Enums';

@Resolver()
export class ProductResolver {
  @Query(() => [ProductData])
  async productData() {
    return ProductData.find();
  }

  @Query(() => [ProductData])
  async productDataByCategory(@Arg('category', () => String) category: string) {
    return ProductData.find({ category });
  }

  @Query(() => [ProductData])
  async productDataByItemNumber(@Arg('itemNumber', () => String) itemNumber: string) {
    return ProductData.find({ itemNumber });
  }

  @Query(() => [ProductViewData])
  async allInView() {
    const statuses = ['Current', 'Review', 'Phase Out', 'New Intro2', 'New Intro', 'Sample'];
    const data = await ProductViewData.find({
      status: In(statuses),
      webExclude: 'No',
      publishToWeb: 'Yes',
      itemClassStatus: In(statuses),
    });
    return data;
  }

  @Query(() => [OpenOrderData])
  async allInOpenOrderDataView() {
    return OpenOrderData.find();
  }

  @Query(() => CategoryItemClassGrouped)
  async getItemClassesForCategories(@Arg('categories', () => [String!]) categories: string[]) {
    const rows = await getManager()
      .createQueryBuilder(ProductData, 'pd')
      .select('DISTINCT "pd"."itemClass", "pd"."category", "pd"."itemClassDescription"')
      .where('pd.category IN (:...categories)', { categories })
      .andWhere('pd.status IN (:...statuses)', { statuses: ['Current', 'Review', 'Phase Out', 'New Intro2'] })
      .orderBy('"pd"."category"', 'ASC')
      .getRawMany();

    let groups = new Array<CategoryItemClassGroup>();
    for (let cat of categories) {
      const itemClasses = filter<CategoryItemClass>(rows, row => row.category === cat);
      groups.push({ category: cat, itemClasses: itemClasses });
    }
    return { groups };
  }

  @Query(() => CategoryItemClassGrouped)
  async getItemClassesForCategoriesForUser(@Ctx() { req }: MyContext) {
    let job: UserJob | undefined = undefined;
    let user: User | undefined = undefined;
    let vendor: Vendor | undefined = undefined;
    if (req.user) {
      job = await UserJob.findOne({ userId: req.user!.id, inProgress: true, status: UserJobStatusEnum.InProgress }, { relations: ['userJobCategories'] });
      user = await User.findOne({ id: req.user.id });
    } else {
      throw new Error('Please Log In.');
    }

    if (!job) {
      throw new Error('User Job Not Found.');
    }

    if (user && user.vendorId) {
      vendor = await Vendor.findOne({ id: user.vendorId! });
    }

    const categories = job!.userJobCategories.reduce((prev, current) => prev.concat([current.category]), new Array<string>());
    let rows: any[];

    if (vendor) {
      const vendorItemClasses = await VendorCategoryItemClass.find({ vendorId: vendor.id! });
      const itemClasses = vendorItemClasses ? vendorItemClasses.reduce((prev, current) => prev.concat([current.itemClass]), new Array<string>()) : [];

      rows = await getManager()
        .createQueryBuilder(ProductData, 'pd')
        .select('DISTINCT "pd"."itemClass", "pd"."category", "pd"."itemClassDescription"')
        .where('pd.category IN (:...categories)', { categories })
        .andWhere('pd.status IN (:...statuses)', { statuses: ['Current', 'Review', 'Phase Out', 'New Intro2'] })
        .andWhere('pd.itemClass IN (:...itemClasses)', { itemClasses })
        .orderBy('"pd"."category"', 'ASC')
        .getRawMany();
    } else {
      rows = await getManager()
        .createQueryBuilder(ProductData, 'pd')
        .select('DISTINCT "pd"."itemClass", "pd"."category", "pd"."itemClassDescription"')
        .where('pd.category IN (:...categories)', { categories })
        .andWhere('pd.status IN (:...statuses)', { statuses: ['Current', 'Review', 'Phase Out', 'New Intro2'] })
        .orderBy('"pd"."category"', 'ASC')
        .getRawMany();
    }

    let groups = new Array<CategoryItemClassGroup>();
    for (let cat of categories) {
      const itemClasses = filter<CategoryItemClass>(rows, row => row.category === cat);
      groups.push({ category: cat, itemClasses: itemClasses });
    }
    return { groups };
  }
}
