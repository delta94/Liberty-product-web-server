import { Field, Int, InputType } from 'type-graphql';
@InputType()
export class SalesPresentationItemClassImagesInput {
  @Field()
  itemNumber: string;

  @Field()
  imageUrl: string;

  @Field(() => Int)
  imageIndex: number;
}
