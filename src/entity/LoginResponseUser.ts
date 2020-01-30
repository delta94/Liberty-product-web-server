import { ObjectType, Field, Int } from 'type-graphql';
@ObjectType()
export class LoginResponseUser {
  @Field(() => Int)
  id: number;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field(() => [String])
  userRoles: string[];
}
