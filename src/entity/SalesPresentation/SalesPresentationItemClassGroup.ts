import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { ItemKitGrouping } from './ItemKitGrouping';

@ObjectType()
@Entity({ name: 'SalesPresentationItemClassGroups', synchronize: false })
export class SalesPresentationItemClassGroup extends BaseEntity {
  static fromItemKitGrouping(data: ItemKitGrouping, displayOrder: number | null, salesPresentationId: number, salesPresentationItemClassId: number): SalesPresentationItemClassGroup {
    let group: SalesPresentationItemClassGroup = new SalesPresentationItemClassGroup();
    const { hasId, save, remove, reload, ...rest } = data;
    group = Object.assign(new SalesPresentationItemClassGroup(), { ...rest, displayOrder });
    group.salesPresentationId = salesPresentationId;
    group.salesPresentationItemClassId = salesPresentationItemClassId;
    group.DROPSHIP_Original = group.DROPSHIP;
    group.DROPSHIP_CustomPricing = 0;
    group.DROPSHIP_M_Original = group.DROPSHIP_M;
    group.DROPSHIP_M_CustomPricing = 0;
    group.DROPSHIP_X_Original = group.DROPSHIP_X;
    group.DROPSHIP_X_CustomPricing = 0;
    group.FOB_Original = group.FOB;
    group.FOB_CustomPricing = 0;
    group.FOB_M_Original = group.FOB_M;
    group.FOB_M_CustomPricing = 0;
    group.LEVEL0_Original = group.LEVEL0;
    group.LEVEL0_CustomPricing = 0;
    group.LEVEL1_Original = group.LEVEL1;
    group.LEVEL1_CustomPricing = 0;
    group.LEVEL2_Original = group.LEVEL2;
    group.LEVEL2_CustomPricing = 0;
    group.LEVEL3_Original = group.LEVEL3;
    group.LEVEL3_CustomPricing = 0;
    group.MIX_FULL_Original = group.MIX_FULL;
    group.MIX_FULL_CustomPricing = 0;
    group.MIX_HALF_Original = group.MIX_HALF;
    group.MIX_HALF_CustomPricing = 0;
    group.MIX_QTR_Original = group.MIX_QTR;
    group.MIX_QTR_CustomPricing = 0;

    return group;
  }

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  salesPresentationId: number;

  @Field(() => Int)
  @Column()
  salesPresentationItemClassId: number;

  @Field(() => Int)
  @Column()
  displayOrder: number;

  @Field()
  @Column()
  kitItem: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  kitDescription: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  cubes: number;

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

  @Field(() => SalesPresentation)
  @ManyToOne(() => SalesPresentation)
  @JoinColumn({ name: 'salesPresentationId' })
  salesPresentation: SalesPresentation;

  @Field(() => SalesPresentationItemClass)
  @ManyToOne(() => SalesPresentationItemClass)
  @JoinColumn({ name: 'salesPresentationItemClassId' })
  salesPresentationItemClass: SalesPresentationItemClass;
}
