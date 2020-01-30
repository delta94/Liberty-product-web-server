import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CategoryItemClass {
  @Field({ nullable: true })
  itemClass: string;

  @Field({ nullable: true })
  itemClassDescription: string;

  @Field()
  category: string;
}
