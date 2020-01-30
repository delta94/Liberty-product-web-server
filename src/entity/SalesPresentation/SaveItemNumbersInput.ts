import { Field, InputType, Int } from 'type-graphql';
import { SalesPresentationItemClassItemNumberInput } from './SalesPresentationItemClassItemNumberInput';

@InputType()
export class SaveItemNumbersInput {
  @Field(() => Int)
  salesPresentationId: number;

  @Field(() => Int)
  itemClassId: number;

  @Field()
  itemClass: string;

  @Field(() => [SalesPresentationItemClassItemNumberInput])
  itemNumbers: SalesPresentationItemClassItemNumberInput[];
}
