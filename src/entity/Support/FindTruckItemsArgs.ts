import { InputType, Field } from 'type-graphql';

@InputType()
export class FindTruckItemsArgs {
  @Field()
  searchText: string;

  @Field()
  transferLocation: string;

  @Field()
  locationCode: string;

  @Field()
  searchWhere: string;
}
