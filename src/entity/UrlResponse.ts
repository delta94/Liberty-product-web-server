import { Field, ObjectType } from 'type-graphql';
@ObjectType()
export class UrlResponse {
  @Field()
  url: string;
}
