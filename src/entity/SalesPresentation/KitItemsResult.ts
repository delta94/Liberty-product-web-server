import { ObjectType, Field, Int } from "type-graphql";
import { SalesPresentationItemClassKit } from "./SalesPresentationItemClassKit";
import { ItemKitDetail } from "./ItemKitDetail";

@ObjectType()
export class KitItemsResult {
  @Field(() => String!)
  kitItem: string;

  @Field(() => Int!)
  displayOrder: number;

  @Field(() => [SalesPresentationItemClassKit])
  kitItems: SalesPresentationItemClassKit[];
}

@ObjectType()
export class KitItemDetailsResult {
  @Field(() => String!)
  kitItem: string;

  @Field(() => [ItemKitDetail])
  kitItems: ItemKitDetail[];
}
