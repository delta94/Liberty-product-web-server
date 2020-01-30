import { ObjectType, Field, Int } from 'type-graphql';
import { SalesPresentation } from './SalesPresentation';
import { ProductData } from '../ProductData';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { SalesPresentationItemClassImageItem } from './SalesPresentationItemClassImageItem';

@ObjectType()
export class PresentationAndProductData {
  @Field(() => SalesPresentation)
  presentation: SalesPresentation;

  @Field(() => SalesPresentationItemClass)
  itemClass: SalesPresentationItemClass;

  @Field(() => Int)
  itemClassIndex: number;

  @Field(() => [ProductData])
  productData: ProductData[];

  @Field(() => [SalesPresentationItemClassImageItem])
  presentationImages: SalesPresentationItemClassImageItem[];
}
