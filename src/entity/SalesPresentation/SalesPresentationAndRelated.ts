import { ObjectType, Field, Int } from 'type-graphql';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { KitItemsResult } from './KitItemsResult';
import { SalesPresentationItemClassItemNumber } from './SalesPresentationItemClassItemNumber';
import { SalesPresentationItemClassGroup } from './SalesPresentationItemClassGroup';
import { SalesPresentation } from './SalesPresentation';

@ObjectType()
export class SalesPresentationAndRelated {
  @Field(() => SalesPresentation)
  presentation: SalesPresentation;

  @Field(() => Int)
  itemClassIndex: number;

  @Field(() => Boolean)
  anyUnsavedItemClasses: boolean;

  @Field(() => SalesPresentationItemClass)
  presentationItemClass: SalesPresentationItemClass;

  @Field(() => [KitItemsResult], { nullable: true })
  presentationItemClassKits?: KitItemsResult[];

  @Field(() => [SalesPresentationItemClassItemNumber], { nullable: true })
  presentationItemClassItemNumbers?: SalesPresentationItemClassItemNumber[];

  @Field(() => [SalesPresentationItemClassGroup], { nullable: true })
  presentationItemClassGroups?: SalesPresentationItemClassGroup[];

  @Field(() => [KitItemsResult], { nullable: true })
  kits?: KitItemsResult[];

  @Field(() => [SalesPresentationItemClassItemNumber], { nullable: true })
  itemNumbers?: SalesPresentationItemClassItemNumber[];

  @Field(() => [SalesPresentationItemClassGroup], { nullable: true })
  groups?: SalesPresentationItemClassGroup[];

  // [key: string]: any;
}
