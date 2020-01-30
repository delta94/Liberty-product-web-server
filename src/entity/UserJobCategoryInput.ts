import { Field, Int, InputType } from 'type-graphql';
import { UserJobCategoryItemClassInput } from './UserJobCategoryItemClassInput';

@InputType()
export class UserJobCategoryInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  userJobId: number;

  @Field()
  category?: string;

  @Field({ nullable: true })
  filePath?: string;

  @Field({ nullable: true })
  downloaded?: boolean;

  @Field({ nullable: true })
  available?: Date;

  @Field({ nullable: true })
  created?: Date;

  // @Field(() => UserJobInput, { nullable: true })
  // @ManyToOne(() => UserJobInput)
  // userJob: string[];

  @Field(() => [UserJobCategoryItemClassInput], { nullable: true })
  userJobCategoryItemClasses: UserJobCategoryItemClassInput[];
}
