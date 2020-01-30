import { ObjectType, Field } from 'type-graphql';
import { CategoryItemClassGroup } from './CategoryItemClassGroup';
@ObjectType()
export class CategoryItemClassGrouped {
  @Field(() => [CategoryItemClassGroup], { nullable: true })
  groups: CategoryItemClassGroup[];
}
