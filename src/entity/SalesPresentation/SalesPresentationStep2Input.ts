import { Field, InputType, Int, Float } from 'type-graphql';
import { KitsInput } from './KitsInput';
import { MasterGroupInput as SalesPresentationItemClassGroupInput } from './SalesPresentationItemClassGroupInput';
import { SalesPresentationItemClassItemNumberInput } from './SalesPresentationItemClassItemNumberInput';

@InputType()
export class SalesPresentationStep2Input {
  @Field(() => Int!)
  salesPresentationId: number;

  @Field(() => String!)
  itemClass: string;

  @Field(() => Int!)
  itemClassId: number;

  @Field(() => Int, { defaultValue: 0 })
  priceAdjustment: number;

  @Field(() => String, { defaultValue: 'All' })
  priceAdjustmentTo: string;

  @Field(() => Float, { defaultValue: 0 })
  cubeAdjustment: number;

  @Field(() => String, { defaultValue: 'All' })
  cubeAdjustmentTo: string;

  @Field(() => String, { nullable: true })
  DROPSHIP?: string;

  @Field(() => String, { nullable: true })
  DROPSHIP_M?: string;

  @Field(() => String, { nullable: true })
  DROPSHIP_X?: string;

  @Field(() => String, { nullable: true })
  FOB?: string;

  @Field(() => String, { nullable: true })
  FOB_M?: string;

  @Field(() => String, { nullable: true })
  LEVEL0?: string;

  @Field(() => String, { nullable: true })
  LEVEL1?: string;

  @Field(() => String, { nullable: true })
  LEVEL2?: string;

  @Field(() => String, { nullable: true })
  LEVEL3?: string;

  @Field(() => String, { nullable: true })
  MIX_FULL?: string;

  @Field(() => String, { nullable: true })
  MIX_HALF?: string;

  @Field(() => String, { nullable: true })
  MIX_QTR?: string;

  @Field(() => [KitsInput], { nullable: true, defaultValue: [] })
  kits: KitsInput[];

  @Field(() => [SalesPresentationItemClassGroupInput], { nullable: true, defaultValue: [] })
  groups: SalesPresentationItemClassGroupInput[];

  @Field(() => [SalesPresentationItemClassItemNumberInput], { nullable: true, defaultValue: [] })
  items?: SalesPresentationItemClassItemNumberInput[];
}
