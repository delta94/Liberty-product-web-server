import { Arg, Int, Mutation, Query, Resolver, Ctx } from 'type-graphql';
import { VendorCategory } from '../../entity/VendorCategory';
import { VendorCategoryItemClass } from '../../entity/VendorCategoryItemClass';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class VendorCategoryResolver {
  // @Mutation(() => VendorCategory)
  // async createVendorCategory(@Arg('data') data: VendorCategoryInput) {
  //   return VendorCategory.create(data).save();
  // }

  @Mutation(() => Boolean)
  async deleteVendorCategory(@Arg('id', () => Int) id: number) {
    await VendorCategoryItemClass.delete({ vendorCategoryId: id });
    await VendorCategory.delete({ id });
    return true;
  }

  @Query(() => [VendorCategory])
  async vendorCategories() {
    return VendorCategory.find();
  }

  @Query(() => [VendorCategory], { nullable: true, complexity: 5 })
  async vendorCategoriesForUser(@Ctx() ctx: MyContext): Promise<VendorCategory[] | undefined> {
    if (!ctx.req.user) {
      throw new Error('Please Log In.');
    }

    return VendorCategory.find({ vendorId: ctx.req.user!.vendorId });
  }
}
