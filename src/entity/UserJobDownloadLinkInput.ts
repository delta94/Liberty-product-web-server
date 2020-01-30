import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class UserJobDownloadLinkInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int)
  userJobId: number;

  @Field()
  category: string;

  @Field()
  categoryDisplayText: string;

  @Field()
  downloadUrl: string;

  @Field()
  fileSize: string;

  @Field()
  notifyEmail?: string;
}
