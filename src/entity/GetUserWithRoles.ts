import { ObjectType, Field, Int } from 'type-graphql';
import { Vendor } from './Vendor';

@ObjectType()
export class GetUserWithRoles {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  vendorId?: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  // @Field({ complexity: 3 })
  // fullName(@Root() parent: User): string {
  //   return `${parent.firstName} ${parent.lastName}`;
  // }

  @Field()
  password: string;

  @Field()
  active: boolean;

  @Field({ nullable: true, defaultValue: false })
  alertProductAdded: boolean;

  @Field({ nullable: true, defaultValue: false })
  alertProductDiscontinued: boolean;

  @Field({ nullable: true, defaultValue: false })
  alertProductUpdated: boolean;

  @Field({ nullable: true, defaultValue: '' })
  alertEmail: string;

  @Field({ nullable: true })
  created?: Date;

  @Field({ nullable: true })
  modified?: Date;

  @Field(() => Vendor, { nullable: true })
  vendor?: Vendor;

  @Field(() => [String])
  userRoles: string[];
}
