import { Field, Int, InputType } from 'type-graphql';
import { UserJobCategoryInput } from './UserJobCategoryInput';

@InputType()
export class UserJobCategoryItemClassInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  userJobId: number;

  @Field({ nullable: true })
  userJobCategoryId: number;

  @Field()
  itemClass: string;

  @Field()
  itemClassDescription: string;

  @Field(() => [UserJobCategoryInput], { nullable: true })
  userJobCategory: UserJobCategoryInput[];
}
