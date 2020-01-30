import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class ItemClassWithDescriptionInput {
  @Field(() => Int)
  id: number;

  @Field()
  itemClass: string;

  @Field()
  itemClassDescription: string;
}
