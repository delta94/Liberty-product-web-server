import { Field, Float, InputType } from 'type-graphql';

@InputType()
export class UpdateQuantityArgsData {
  @Field()
  orderDocumentId: string;

  @Field()
  itemNumber: string;

  @Field(() => Float)
  quantity: number;
}
