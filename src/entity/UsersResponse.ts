import { ObjectType, Field, Int } from 'type-graphql';
import { User } from './User';
@ObjectType()
export class UsersResponse {
  @Field(() => User)
  users: User[];
  @Field(() => Int)
  totalRows: number;
}
