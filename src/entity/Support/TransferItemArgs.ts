import { Field, InputType, Float, Int } from 'type-graphql';

@InputType()
export class TransferItemArgs {
  @Field()
  OrderDocumentId: string;

  @Field()
  ItemNumber: string;

  @Field(() => Float)
  TransferQuantity: number;

  @Field(() => Int)
  LNITMSEQ: number;
}
