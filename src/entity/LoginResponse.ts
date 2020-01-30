import { ObjectType, Field } from 'type-graphql';
import { LoginResponseUser } from './LoginResponseUser';
@ObjectType()
export class LoginResponse {
  @Field()
  user: LoginResponseUser;
  @Field()
  token: string;
}
