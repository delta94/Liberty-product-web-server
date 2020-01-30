import { Field, InputType, Int } from 'type-graphql';
import { VendorCategoryInput } from './VendorCategoryInput';

@InputType()
export class VendorInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  logo?: string;

  @Field(() => [VendorCategoryInput!], { nullable: true })
  vendorCategories: VendorCategoryInput[];
}
