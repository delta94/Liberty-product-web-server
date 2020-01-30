import { InTransitWithCubes } from './InTransitWithCubes';
import { ObjectType, Field, GraphQLISODateTime } from 'type-graphql';

@ObjectType()
export class TruckItemOrderItem {
  @Field()
  SopNumber: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  SopDocDate?: Date;

  @Field(() => [InTransitWithCubes])
  orderItems: InTransitWithCubes[];
}
