import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { ItemKitDetail } from './ItemKitDetail';

@ObjectType()
@Entity({ name: 'SalesPresentationItemClassKits', synchronize: false })
export class SalesPresentationItemClassKit extends BaseEntity {
  static fromItemKitDetail(data: ItemKitDetail): SalesPresentationItemClassKit {
    let kit: SalesPresentationItemClassKit = new SalesPresentationItemClassKit();
    const { FEATURE_1, FEATURE_2, FEATURE_3, FEATURE_4, FEATURE_5, FEATURE_6, FEATURE_7, FEATURE_8, hasId, save, remove, reload, ...rest } = data;
    kit = Object.assign(new SalesPresentationItemClassKit(), { ...rest });
    kit.DROPSHIP_Original = kit.DROPSHIP;
    kit.DROPSHIP_CustomPricing = 0;
    kit.DROPSHIP_M_Original = kit.DROPSHIP_M;
    kit.DROPSHIP_M_CustomPricing = 0;
    kit.DROPSHIP_X_Original = kit.DROPSHIP_X;
    kit.DROPSHIP_X_CustomPricing = 0;
    kit.FOB_Original = kit.FOB;
    kit.FOB_CustomPricing = 0;
    kit.FOB_M_Original = kit.FOB_M;
    kit.FOB_M_CustomPricing = 0;
    kit.LEVEL0_Original = kit.LEVEL0;
    kit.LEVEL0_CustomPricing = 0;
    kit.LEVEL1_Original = kit.LEVEL1;
    kit.LEVEL1_CustomPricing = 0;
    kit.LEVEL2_Original = kit.LEVEL2;
    kit.LEVEL2_CustomPricing = 0;
    kit.LEVEL3_Original = kit.LEVEL3;
    kit.LEVEL3_CustomPricing = 0;
    kit.MIX_FULL_Original = kit.MIX_FULL;
    kit.MIX_FULL_CustomPricing = 0;
    kit.MIX_HALF_Original = kit.MIX_HALF;
    kit.MIX_HALF_CustomPricing = 0;
    kit.MIX_QTR_Original = kit.MIX_QTR;
    kit.MIX_QTR_CustomPricing = 0;
    return kit;
  }

  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Int)
  @Column()
  salesPresentationId?: number;

  @Field(() => Int)
  @Column()
  salesPresentationItemClassId?: number;

  @Field(() => Int)
  @Column()
  displayOrder: number;

  @Field()
  @Column()
  itemNumber: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  itemDescription: string;

  @Field(() => String!, { nullable: true })
  @Column({ nullable: true })
  kitName?: string;

  @Field(() => String!)
  @Column({ nullable: true })
  kitItem: string;

  @Field(() => Int!)
  @Column({ nullable: true })
  kitQuantity: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  cubes: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  dimensions: string;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  DROPSHIP?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  DROPSHIP_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  DROPSHIP_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  DROPSHIP_M?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  DROPSHIP_M_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  DROPSHIP_M_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  DROPSHIP_X?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  DROPSHIP_X_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  DROPSHIP_X_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  FOB?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  FOB_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  FOB_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  FOB_M?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  FOB_M_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  FOB_M_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL0?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL0_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  LEVEL0_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL1?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL1_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  LEVEL1_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL2?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL2_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  LEVEL2_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL3?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  LEVEL3_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  LEVEL3_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  MIX_FULL?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  MIX_FULL_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  MIX_FULL_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  MIX_HALF?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  MIX_HALF_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  MIX_HALF_CustomPricing?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  MIX_QTR?: number;

  @Field(() => Float, { nullable: true })
  @Column({ nullable: true })
  MIX_QTR_Original?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Column({ nullable: true })
  MIX_QTR_CustomPricing?: number;

  @Field(() => SalesPresentation, { nullable: true })
  @ManyToOne(() => SalesPresentation, { nullable: true })
  @JoinColumn({ name: 'salesPresentationId' })
  salesPresentation?: SalesPresentation;

  @Field(() => SalesPresentationItemClass, { nullable: true })
  @ManyToOne(() => SalesPresentationItemClass, { nullable: true })
  @JoinColumn({ name: 'salesPresentationItemClassId' })
  salesPresentationItemClass?: SalesPresentationItemClass;
}
