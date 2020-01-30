import { Field, InputType } from 'type-graphql';

@InputType()
export class SalesPresentationPriceLevelInput {
  @Field()
  key: string;

  @Field()
  label: string;
}
