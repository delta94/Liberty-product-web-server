import { Field, InputType, Int } from 'type-graphql';
import { SalesPresentationPriceLevelInput } from './SalesPresentationPriceLevelInput';
import { ItemClassWithDescriptionInput } from './ItemClassWithDescriptionInput';

@InputType()
export class SalesPresentationInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  name: string;

  @Field()
  customerNumber: string;

  @Field()
  customerName: string;

  @Field(() => [SalesPresentationPriceLevelInput])
  priceLevels: SalesPresentationPriceLevelInput[];

  @Field(() => [ItemClassWithDescriptionInput])
  itemClasses: ItemClassWithDescriptionInput[];
}
