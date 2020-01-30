import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Entity, BaseEntity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { ItemDataReporting } from './ItemDataReporting';

@ObjectType()
@Entity({ name: 'SalesPresentationItemClassItemNumbers', synchronize: false })
export class SalesPresentationItemClassItemNumber extends BaseEntity {
  static fromItemDataReporting(data: ItemDataReporting, displayOrder: number, salesPresentationId: number, salesPresentationItemClassId: number): SalesPresentationItemClassItemNumber {
    let itemNumber: SalesPresentationItemClassItemNumber = new SalesPresentationItemClassItemNumber();
    const { hasId, save, remove, reload, ...rest } = data;
    itemNumber = Object.assign(new SalesPresentationItemClassItemNumber(), { ...rest, displayOrder });
    itemNumber.salesPresentationId = salesPresentationId;
    itemNumber.salesPresentationItemClassId = salesPresentationItemClassId;
    itemNumber.DROPSHIP_Original = itemNumber.DROPSHIP;
    itemNumber.DROPSHIP_CustomPricing = 0;
    itemNumber.DROPSHIP_M_Original = itemNumber.DROPSHIP_M;
    itemNumber.DROPSHIP_M_CustomPricing = 0;
    itemNumber.DROPSHIP_X_Original = itemNumber.DROPSHIP_X;
    itemNumber.DROPSHIP_X_CustomPricing = 0;
    itemNumber.FOB_Original = itemNumber.FOB;
    itemNumber.FOB_CustomPricing = 0;
    itemNumber.FOB_M_Original = itemNumber.FOB_M;
    itemNumber.FOB_M_CustomPricing = 0;
    itemNumber.LEVEL0_Original = itemNumber.LEVEL0;
    itemNumber.LEVEL0_CustomPricing = 0;
    itemNumber.LEVEL1_Original = itemNumber.LEVEL1;
    itemNumber.LEVEL1_CustomPricing = 0;
    itemNumber.LEVEL2_Original = itemNumber.LEVEL2;
    itemNumber.LEVEL2_CustomPricing = 0;
    itemNumber.LEVEL3_Original = itemNumber.LEVEL3;
    itemNumber.LEVEL3_CustomPricing = 0;
    itemNumber.MIX_FULL_Original = itemNumber.MIX_FULL;
    itemNumber.MIX_FULL_CustomPricing = 0;
    itemNumber.MIX_HALF_Original = itemNumber.MIX_HALF;
    itemNumber.MIX_HALF_CustomPricing = 0;
    itemNumber.MIX_QTR_Original = itemNumber.MIX_QTR;
    itemNumber.MIX_QTR_CustomPricing = 0;
    return itemNumber;
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
  itemNumber: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  itemDescription: string;

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

  @Field(() => SalesPresentation)
  @ManyToOne(() => SalesPresentation)
  @JoinColumn({ name: 'salesPresentationId' })
  salesPresentation: SalesPresentation;

  @Field(() => SalesPresentationItemClass)
  @ManyToOne(() => SalesPresentationItemClass)
  @JoinColumn({ name: 'salesPresentationItemClassId' })
  salesPresentationItemClass: SalesPresentationItemClass;
}
