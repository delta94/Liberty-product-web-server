import { InTransitWithCubes } from './InTransitWithCubes';
import { ObjectType, Field, Int } from 'type-graphql';
import { TruckItemOrderItem } from './TruckItemOrderItems';

@ObjectType()
export class TruckItems {
  @Field(() => Int)
  status: number;

  @Field(() => [InTransitWithCubes])
  stockItems: InTransitWithCubes[];

  @Field(() => [TruckItemOrderItem])
  orderItems: TruckItemOrderItem[];

  @Field()
  transferLocation: string;

  @Field()
  locationCode: string;
}
