import { Field, Int, ObjectType } from 'type-graphql';
@ObjectType()
export class SalesPresentationItemClassImageItem {
  @Field()
  itemNumber: string;

  @Field()
  imageUrl: string;

  @Field(() => Int)
  imageIndex: number;
}
