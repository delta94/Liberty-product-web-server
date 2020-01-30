import { Field, ObjectType } from 'type-graphql';
import { UpdateQuantityItem } from './UpdateQuantityItem';

@ObjectType()
export class UpdateQuantityResponse {
  @Field(() => [UpdateQuantityItem])
  data: UpdateQuantityItem[];
}
