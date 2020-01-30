import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class ItemClassWithDescription {
  @Field(() => Int)
  id: number;

  @Field()
  itemClass: string;

  @Field()
  itemClassDescription: string;
}
