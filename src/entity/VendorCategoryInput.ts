import { Field, InputType } from 'type-graphql';

@InputType()
export class VendorCategoryInput {
  @Field()
  category: string;

  @Field(() => [String], { nullable: true })
  itemClasses: string[];
}
