import { Field, Int, InputType } from 'type-graphql';
import { SalesPresentationItemClassImagesInput } from './SalesPresentationItemClassImagesInput';

@InputType()
export class SalesPresentationItemClassImageInput {
  @Field(() => Int)
  salesPresentationId: number;

  @Field(() => Int)
  salesPresentationItemClassId: number;

  @Field()
  itemClass: string;

  @Field(() => Int)
  itemClassIndex: number;

  @Field(() => [SalesPresentationItemClassImagesInput])
  images: SalesPresentationItemClassImagesInput[];
}
