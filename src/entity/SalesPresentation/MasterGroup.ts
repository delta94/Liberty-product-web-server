import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class MasterGroup {
  @Field(() => Int!)
  displayOrder: number;

  @Field(() => String!)
  kitItem: string;

  @Field({ nullable: true })
  kitDescription: string;

  @Field(() => Float)
  cubes: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_M?: number;

  @Field(() => Float, { nullable: true })
  DROPSHIP_X?: number;

  @Field(() => Float, { nullable: true })
  FOB?: number;

  @Field(() => Float, { nullable: true })
  FOB_M?: number;

  @Field(() => Float, { nullable: true })
  LEVEL0?: number;

  @Field(() => Float, { nullable: true })
  LEVEL1?: number;

  @Field(() => Float, { nullable: true })
  LEVEL2?: number;

  @Field(() => Float, { nullable: true })
  LEVEL3?: number;

  @Field(() => Float, { nullable: true })
  MIX_FULL?: number;

  @Field(() => Float, { nullable: true })
  MIX_HALF?: number;

  @Field(() => Float, { nullable: true })
  MIX_QTR?: number;
}
