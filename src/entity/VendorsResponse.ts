import { ObjectType, Field, Int } from 'type-graphql';
import { Vendor } from './Vendor';

@ObjectType()
export class VendorsResponse {
  @Field(() => Vendor)
  vendors: Vendor[];

  @Field(() => Int)
  totalRows: number;
}
