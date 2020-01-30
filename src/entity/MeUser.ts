import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class MeUser {
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
