import { ObjectType, Field, Int } from 'type-graphql';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';

@ObjectType()
export class PresentationSaveImagesResponse {
  @Field(() => SalesPresentation)
  presentation: SalesPresentation;

  @Field(() => SalesPresentationItemClass, { nullable: true })
  itemClass?: SalesPresentationItemClass | null;

  @Field(() => Int)
  itemClassIndex: number;
}
