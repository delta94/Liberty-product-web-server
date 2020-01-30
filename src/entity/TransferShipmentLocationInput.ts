import { Field, ArgsType } from 'type-graphql';

@ArgsType()
export class TransferShipmentLocationInput {
  @Field()
  SopNumber: string;

  @Field()
  NewLocation: string;

  @Field({ nullable: true, defaultValue: false })
  ForceUpdate: boolean;

  @Field({ nullable: true, defaultValue: false })
  UpdateReadyDate: boolean;
}
