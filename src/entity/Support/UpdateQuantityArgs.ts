import { Field, InputType } from 'type-graphql';
import { UpdateQuantityArgsData } from './UpdateQuantityArgsData';

@InputType()
export class UpdateQuantityArgs {
  @Field(() => [UpdateQuantityArgsData])
  data: UpdateQuantityArgsData[];
}
