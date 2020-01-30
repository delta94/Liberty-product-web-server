import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class TransferQuantityResponse {
  @Field()
  status: boolean;
}
