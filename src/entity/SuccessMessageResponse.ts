import { Field, ObjectType } from 'type-graphql';
@ObjectType()
export class SuccessMessageResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}
