import { ObjectType, Field } from 'type-graphql';
import { CategoryItemClass } from './CategoryItemClass';
@ObjectType()
export class CategoryItemClassGroup {
  @Field()
  category: string;

  @Field(() => [CategoryItemClass], { nullable: true })
  itemClasses: CategoryItemClass[];
}
