import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Float, Int } from 'type-graphql';

@ObjectType()
@Entity({ name: 'Item_Price_List_Data_Groupings_With_Kings', database: 'LFI', synchronize: false })
export class ItemPriceListDataGroupingsWithKings extends BaseEntity {
  @Field({ nullable: true })
  @PrimaryColumn({ name: 'ITEMNMBR' })
  public ITEMNMBR: string;

  @Field({ nullable: true })
  @Column({ name: 'ITMCLSCD', nullable: true })
  public ITMCLSCD: string;

  @Field({ nullable: true })
  @Column({ name: 'ITMCLSDC', nullable: true })
  public ITMCLSDC: string;

  @Field({ nullable: true })
  @Column({ name: 'ITEMDESC', nullable: true })
  public ITEMDESC: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Cubes' })
  public Cubes: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'EPCUBES' })
  public EPCUBES: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'EPKDCUBES' })
  public EPKDCUBES: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'W' })
  public W: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'D' })
  public D: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'H' })
  public H: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Cartons' })
  public Cartons: number;

  @Field(() => Int)
  @Column({ name: 'Weight', nullable: true })
  public Weight: number;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DROPSHIP' })
  public DROPSHIP: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DROPSHIP_M' })
  public DROPSHIP_M: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'FOB' })
  public FOB: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'FOB_M' })
  public FOB_M: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL1' })
  public LEVEL1: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL0' })
  public LEVEL0: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL2' })
  public LEVEL2: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL3' })
  public LEVEL3: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DISC' })
  public DISC: string;

  @Field({ nullable: true })
  @Column({ name: 'Category', nullable: true })
  public Category: string;

  @Field(() => Int)
  @Column({ name: 'ITEMTYPE', nullable: true })
  public ITEMTYPE: number;

  @Field({ nullable: true })
  @Column({ name: 'Ipad_Sort_ID', nullable: true })
  public Ipad_Sort_ID: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 17, scale: 0, nullable: true, name: 'Item_Cost_WHSE' })
  public Item_Cost_WHSE: string;

  @Field({ nullable: true })
  @Column({ type: 'decimal', precision: 17, scale: 0, nullable: true, name: 'Item_Cost_DC' })
  public Item_Cost_DC: string;

  @Field({ nullable: true })
  @Column({ name: 'Sort_Key' })
  public Sort_Key: string;

  @Field({ nullable: true })
  @Column({ name: 'Sort_ID' })
  public Sort_ID: string;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DROPSHIP_X' })
  public DROPSHIP_X: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'CSNS01' })
  public CSNS01: number;

  [key: string]: any;
}
