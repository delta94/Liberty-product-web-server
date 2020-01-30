import { Field, InputType, Int } from 'type-graphql';
import { KitItemInput } from './KitItemInput';

@InputType()
export class KitsInput {
  @Field(() => String!)
  kitItem: string;

  @Field(() => Int!)
  displayOrder: number;

  @Field(() => [KitItemInput])
  kitItems: KitItemInput[];
}
