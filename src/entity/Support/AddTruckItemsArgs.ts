import { InputType, Field } from 'type-graphql';

@InputType()
export class AddTruckItemsArgs {
  @Field()
  searchText: string;

  @Field()
  transferLocation: string;

  @Field()
  locationCode: string;
}
