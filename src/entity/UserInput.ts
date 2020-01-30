import { PrimaryGeneratedColumn } from 'typeorm';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class UserInput {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Int, { nullable: true })
  vendorId?: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field()
  active: boolean;

  @Field()
  alertProductAdded: boolean;

  @Field()
  alertProductDiscontinued: boolean;

  @Field()
  alertProductUpdated: boolean;

  @Field()
  alertEmail: string;

  @Field(() => [String])
  roles: string[];
}
