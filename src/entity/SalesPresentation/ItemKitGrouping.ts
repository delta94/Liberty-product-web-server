import { ObjectType, Field, Float } from 'type-graphql';
import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'Item_Kit_Groupings', database: 'LFI', synchronize: false })
export class ItemKitGrouping extends BaseEntity {
  @Field(() => String, { name: 'kitItem' })
  @PrimaryColumn({ name: 'Kit_Item' })
  public kitItem: string;

  // @Field({ name: 'itemNumber' })
  // @PrimaryColumn({ name: 'Kit_Item' })
  // public itemNumber: string;

  // @Field()
  // @Column({ name: 'ITEMDESC' })
  // public ITEMDESC: string;

  @Field({ name: 'kitDescription' })
  @Column({ name: 'Kit_Desc' })
  public kitDescription: string;

  @Field(() => Float, { name: 'kitQuantity' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_Quantity' })
  public kitQuantity: number;

  // @Field({ nullable: true, name: 'kitName' })
  // @Column({ name: 'Kit_Name', nullable: true })
  // public kitName: string;

  // @Field()
  // @Column({ name: 'STATUS' })
  // public STATUS: string;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_Cubes' })
  public cubes: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'CARTON' })
  // public CARTON: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'CARTON_EXT' })
  // public CARTON_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'CUBES_EXT' })
  // public CUBES_EXT: number;

  // @Field(() => Int)
  // @Column({ name: 'WEIGHT' })
  // public WEIGHT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 30, scale: 5, nullable: true, name: 'WEIGHT_EXT' })
  // public WEIGHT_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_DROPSHIP_M' })
  public DROPSHIP_M?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'DROPSHIP_M_EXT' })
  // public DROPSHIP_M_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_DROPSHIP' })
  public DROPSHIP?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'DROPSHIP_EXT' })
  // public DROPSHIP_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_FOB' })
  public FOB?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'FOB_EXT' })
  // public FOB_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_FOB_M' })
  public FOB_M?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'FOB_M_EXT' })
  // public FOB_M_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_LEVEL0' })
  public LEVEL0?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'LEVEL0_EXT' })
  // public LEVEL0_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_LEVEL1' })
  public LEVEL1?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'LEVEL1_EXT' })
  // public LEVEL1_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_LEVEL2' })
  public LEVEL2?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'LEVEL2_EXT' })
  // public LEVEL2_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_LEVEL3' })
  public LEVEL3?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'LEVEL3_EXT' })
  // public LEVEL3_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DISC' })
  // public DISC: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'DISC_EXT' })
  // public DISC_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 5, nullable: true, name: 'QUANTITY_TOTAL' })
  // public QUANTITY_TOTAL: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'QUANTITY_TOTAL_EXT' })
  // public QUANTITY_TOTAL_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 21, scale: 5, nullable: true, name: 'QUANTITY_ATL' })
  // public QUANTITY_ATL: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 18, nullable: true, name: 'QUANTITY_ATL_EXT' })
  // public QUANTITY_ATL_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 21, scale: 5, nullable: true, name: 'QUANTITY_CAL' })
  // public QUANTITY_CAL: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 18, nullable: true, name: 'QUANITY_CAL_EXT' })
  // public QUANITY_CAL_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 5, nullable: true, name: 'QUANTITY_CHI' })
  // public QUANTITY_CHI: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'QUANTITY_CHI_EXT' })
  // public QUANTITY_CHI_EXT: number;

  @Field({ name: 'ITMCLSCD' })
  @Column({ name: 'ITMCLSCD' })
  public itemClass: string;

  // @Field(() => Int)
  // @Column({ name: 'ITEMTYPE' })
  // public ITEMTYPE: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'CMPITQTY' })
  // public CMPITQTY: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 5, nullable: true, name: 'QTY_AVAIL_TOTAL' })
  // public QTY_AVAIL_TOTAL: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 20, scale: 5, nullable: true, name: 'QTY_AVAIL_ATL' })
  // public QTY_AVAIL_ATL: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 20, scale: 5, nullable: true, name: 'QTY_AVAIL_CAL' })
  // public QTY_AVAIL_CAL: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 5, nullable: true, name: 'QTY_AVAIL_CHI' })
  // public QTY_AVAIL_CHI: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 18, nullable: true, name: 'QTY_AVAIL_ATL_EXT' })
  // public QTY_AVAIL_ATL_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 18, nullable: true, name: 'QTY_AVAIL_CAL_EXT' })
  // public QTY_AVAIL_CAL_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'QTY_AVAIL_CHI_EXT' })
  // public QTY_AVAIL_CHI_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'QTY_AVAIL_TOTAL_EXT' })
  // public QTY_AVAIL_TOTAL_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'NET_RATIO' })
  // public NET_RATIO: number;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_1' })
  // public FEATURE_1: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_2' })
  // public FEATURE_2: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_3' })
  // public FEATURE_3: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_4' })
  // public FEATURE_4: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_5' })
  // public FEATURE_5: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_6' })
  // public FEATURE_6: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_7' })
  // public FEATURE_7: string;

  // @Field({ nullable: true })
  // @Column({ name: 'FEATURE_8' })
  // public FEATURE_8: string;

  // @Field(() => Int, { nullable: true })
  // @Column({ name: 'WEIGHT_ITEM' })
  // public WEIGHT_ITEM: number;

  // @Field({ nullable: true, name: 'Dimensions' })
  // @Column({ name: 'DIMENSIONS' })
  // public DIMENSIONS: string;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'COST_EXT' })
  // public COST_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'ON_THE_WATER_ATL' })
  // public ON_THE_WATER_ATL: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'ON_THE_WATER_CAL' })
  // public ON_THE_WATER_CAL: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'ON_THE_WATER_CHI' })
  // public ON_THE_WATER_CHI: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_MIX_QTR' })
  public MIX_QTR?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_MIX_HALF' })
  public MIX_HALF?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_MIX_FULL' })
  public MIX_FULL?: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'MIX_QTR_EXT' })
  // public MIX_QTR_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'MIX_HALF_EXT' })
  // public MIX_HALF_EXT: number;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'MIX_FULL_EXT' })
  // public MIX_FULL_EXT: number;

  // @Field(() => Int)
  // @Column({ name: 'ABCCODE' })
  // public ABCCODE: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'PO_QTY_ATL_EXT' })
  // public PO_QTY_ATL_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'PO_QTY_CAL_EXT' })
  // public PO_QTY_CAL_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'PO_QTY_CHI_EXT' })
  // public PO_QTY_CHI_EXT: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'PO_QTY_TOTAL_EXT' })
  // public PO_QTY_TOTAL_EXT: number;

  // @Field({ nullable: true })
  // @Column({ name: 'NEXT_ETA_CHI' })
  // public NEXT_ETA_CHI: string;

  // @Field({ nullable: true })
  // @Column({ name: 'NEXT_ETA_TOTAL' })
  // public NEXT_ETA_TOTAL: string;

  // @Field({ nullable: true })
  // @Column({ name: 'NEXT_ETA_ATL' })
  // public NEXT_ETA_ATL: string;

  // @Field({ nullable: true })
  // @Column({ name: 'NEXT_ETA_CAL' })
  // public NEXT_ETA_CAL: string;

  // @Field(() => Float, { nullable: true })
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'AVG_COST' })
  // public AVG_COST: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 6, nullable: true, name: 'AVG_COST_EXT' })
  // public AVG_COST_EXT: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Kit_DROPSHIP_X' })
  public DROPSHIP_X: number;

  // @Field(() => Float)
  // @Column({ type: 'decimal', precision: 38, scale: 9, nullable: true, name: 'DROPSHIP_X_EXT' })
  // public DROPSHIP_X_EXT: number;
}
