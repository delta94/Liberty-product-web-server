import { InputType, Field } from 'type-graphql';
import { TransferItemArgs } from './TransferItemArgs';

@InputType()
export class TransferOrderItemArgs {
  @Field()
  sopNumber: string;

  @Field(() => [TransferItemArgs])
  orderItems: TransferItemArgs[];
}
