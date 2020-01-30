import { Field, InputType } from 'type-graphql';
import { TransferItemArgs } from './TransferItemArgs';
import { TransferOrderItemArgs } from './TransferOrderItemArgs';

@InputType()
export class TransferFromArgs {
  @Field()
  toTruckItem: string;

  @Field(() => [TransferItemArgs])
  stockItems: TransferItemArgs[];

  @Field(() => [TransferOrderItemArgs])
  orderItems: TransferOrderItemArgs[];
}
