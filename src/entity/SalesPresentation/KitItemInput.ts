import { Field, InputType, Int, Float } from 'type-graphql';

@InputType()
export class KitItemInput {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  kitName?: string;

  @Field(() => String!)
  kitItem: string;

  @Field(() => Int!)
  kitQuantity: number;

  @Field()
  itemNumber: string;

  @Field({ nullable: true })
  itemDescription: string;

  @Field(() => Float)
  cubes: number;

  @Field({ nullable: true })
  dimensions: string;

  @Field(() => Float, { nullable: true })
  DROPSHIP?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  DROPSHIP_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_M?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_M_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  DROPSHIP_M_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_X?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_X_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  DROPSHIP_X_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  FOB?: number;

  @Field(() => Float, { nullable: true })
  FOB_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  FOB_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  FOB_M?: number;

  @Field(() => Float, { nullable: true })
  FOB_M_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  FOB_M_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  LEVEL0?: number;

  @Field(() => Float, { nullable: true })
  LEVEL0_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  LEVEL0_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  LEVEL1?: number;

  @Field(() => Float, { nullable: true })
  LEVEL1_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  LEVEL1_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  LEVEL2?: number;

  @Field(() => Float, { nullable: true })
  LEVEL2_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  LEVEL2_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  LEVEL3?: number;

  @Field(() => Float, { nullable: true })
  LEVEL3_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  LEVEL3_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  MIX_FULL?: number;

  @Field(() => Float, { nullable: true })
  MIX_FULL_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  MIX_FULL_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  MIX_HALF?: number;

  @Field(() => Float, { nullable: true })
  MIX_HALF_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  MIX_HALF_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  MIX_QTR?: number;

  @Field(() => Float, { nullable: true })
  MIX_QTR_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  MIX_QTR_CustomPricing?: number;
}
