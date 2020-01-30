import { Field, Int, InputType } from 'type-graphql';
import { UserJobCategoryInput } from './UserJobCategoryInput';
import { UserJobStatusEnum } from './Enums';

@InputType()
export class UserJobInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  userId: number;

  @Field({ nullable: true })
  vendorId: number;

  @Field({ nullable: true })
  uuid: string;

  @Field()
  fileType: string;

  @Field({ nullable: true })
  inProgress: boolean;

  @Field(() => UserJobStatusEnum)
  status: UserJobStatusEnum;

  @Field(() => [UserJobCategoryInput], { nullable: true })
  userJobCategories: UserJobCategoryInput[];
}
