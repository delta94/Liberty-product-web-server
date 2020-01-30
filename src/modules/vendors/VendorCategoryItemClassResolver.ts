import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { VendorCategoryItemClass } from '../../entity/VendorCategoryItemClass';
// import { VendorCategoryInput } from '../../entity/VendorCategoryInput';

@Resolver()
export class VendorCategoryItemClassResolver {
  // @Mutation(() => VendorCategoryItemClass)
  // async createVendorCategoryItemClass(@Arg('data') data: VendorCategoryInput) {
  //   return VendorCategoryItemClass.create(data).save();
  // }

  @Mutation(() => Boolean)
  async deleteVendorCategoryItemClass(@Arg('id', () => Int) id: number) {
    await VendorCategoryItemClass.delete({ id });
    return true;
  }

  @Query(() => [VendorCategoryItemClass])
  async vendorCategoryItemClasses() {
    return VendorCategoryItemClass.find();
  }
}
