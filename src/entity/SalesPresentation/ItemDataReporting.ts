import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Float, Int, GraphQLISODateTime } from 'type-graphql';

@ObjectType()
@Entity({ name: 'Item_Data_Reporting', database: 'LFI', synchronize: false })
export class ItemDataReporting extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'ITEMNMBR' })
  public itemNumber: string;

  @Field()
  @Column({ nullable: true, name: 'ITMCLSCD' })
  public itemClass: string;

  @Field()
  @Column({ nullable: true, name: 'ITMCLSDC' })
  public itemClassDescription: string;

  @Field()
  @Column({ nullable: true, name: 'ITEMDESC' })
  public itemDescription: string;

  @Field()
  @Column({ nullable: true, name: 'ITMSHNAM' })
  public ITMSHNAM: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'EPCUBES' })
  public EPCUBES: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'BoxW' })
  public BoxW: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'BoxD' })
  public BoxD: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'BoxH' })
  public BoxH: number;

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

  @Field()
  @Column({ nullable: true, name: 'Weight' })
  public Weight: string;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DROPSHIP' })
  public DROPSHIP: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DROPSHIP_M' })
  public DROPSHIP_M: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'FOB' })
  public FOB: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL1' })
  public LEVEL1: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL0' })
  public LEVEL0: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'FOB_M' })
  public FOB_M: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL2' })
  public LEVEL2: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'LEVEL3' })
  public LEVEL3: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DISC' })
  public DISC: number;

  @Field()
  @Column({ nullable: true, name: 'Factory' })
  public Factory: string;

  @Field()
  @Column({ nullable: true, name: 'Origin' })
  public Origin: string;

  @Field()
  @Column({ nullable: true, name: 'Status' })
  public Status: string;

  @Field()
  @Column({ nullable: true, name: 'Category' })
  public Category: string;

  @Field(() => Int)
  @Column({ nullable: true, name: 'ITEMTYPE' })
  public ITEMTYPE: number;

  @Field()
  @Column({ nullable: true, name: 'Web_Exclude' })
  public Web_Exclude: string;

  @Field()
  @Column({ nullable: true, name: 'Wood' })
  public Wood: string;

  @Field()
  @Column({ nullable: true, name: 'Finish' })
  public Finish: string;

  @Field()
  @Column({ nullable: true, name: 'Item_Style' })
  public Item_Style: string;

  @Field()
  @Column({ nullable: true, name: 'Publish_to_Web' })
  public Publish_to_Web: string;

  @Field()
  @Column({ nullable: true, name: 'F1' })
  public F1: string;

  @Field()
  @Column({ nullable: true, name: 'F2' })
  public F2: string;

  @Field()
  @Column({ nullable: true, name: 'F3' })
  public F3: string;

  @Field()
  @Column({ nullable: true, name: 'F4' })
  public F4: string;

  @Field()
  @Column({ nullable: true, name: 'F5' })
  public F5: string;

  @Field()
  @Column({ nullable: true, name: 'F6' })
  public F6: string;

  @Field()
  @Column({ nullable: true, name: 'F7' })
  public F7: string;

  @Field()
  @Column({ nullable: true, name: 'F8' })
  public F8: string;

  @Field()
  @Column({ nullable: true, name: 'F9' })
  public F9: string;

  @Field()
  @Column({ nullable: true, name: 'F10' })
  public F10: string;

  @Field()
  @Column({ nullable: true, name: 'F11' })
  public F11: string;

  @Field()
  @Column({ nullable: true, name: 'F12' })
  public F12: string;

  @Field()
  @Column({ nullable: true, name: 'F13' })
  public F13: string;

  @Field()
  @Column({ nullable: true, name: 'F14' })
  public F14: string;

  @Field()
  @Column({ nullable: true, name: 'F15' })
  public F15: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_1' })
  public Feature_1: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_2' })
  public Feature_2: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_3' })
  public Feature_3: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_4' })
  public Feature_4: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_5' })
  public Feature_5: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_6' })
  public Feature_6: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_7' })
  public Feature_7: string;

  @Field()
  @Column({ nullable: true, name: 'Feature_8' })
  public Feature_8: string;

  @Field()
  @Column({ nullable: true, name: 'Sort_ID' })
  public Sort_ID: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Image_1' })
  public Sales_Image_1: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Image_2' })
  public Sales_Image_2: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Image_4' })
  public Sales_Image_4: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Image_5' })
  public Sales_Image_5: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Image_6' })
  public Sales_Image_6: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Feature_2' })
  public Sales_Feature_2: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Feature_4' })
  public Sales_Feature_4: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Feature_3' })
  public Sales_Feature_3: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Feature_5' })
  public Sales_Feature_5: string;

  @Field()
  @Column({ nullable: true, name: 'Sales_Feature_6' })
  public Sales_Feature_6: string;

  @Field()
  @Column({ nullable: true, name: 'ITEM_CLASS_STATUS' })
  public ITEM_CLASS_STATUS: string;

  @Field()
  @Column({ nullable: true, name: 'Full_Item_Class_Name' })
  public Full_Item_Class_Name: string;

  @Field()
  @Column({ nullable: true, name: 'Combined_Dimensions' })
  public dimensions: string;

  @Field()
  @Column({ nullable: true, name: 'Item_Image_1' })
  public Item_Image_1: string;

  @Field()
  @Column({ nullable: true, name: 'Item_Image_2' })
  public Item_Image_2: string;

  @Field()
  @Column({ nullable: true, name: 'Item_Image_3' })
  public Item_Image_3: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'EPKDCUBES' })
  public EPKDCUBES: number;

  @Field(() => Int)
  @Column({ nullable: true, name: 'Freight_Class' })
  public Freight_Class: number;

  @Field()
  @Column({ nullable: true, name: 'Group_Path' })
  public Group_Path: string;

  @Field()
  @Column({ nullable: true, name: 'Factory_Assembled' })
  public Factory_Assembled: string;

  @Field()
  @Column({ nullable: true, name: 'Product_Path' })
  public Product_Path: string;

  @Field()
  @Column({ nullable: true, name: 'Short_Group_Path' })
  public Short_Group_Path: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Assembly_Cost' })
  public Assembly_Cost: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'QC_Cost' })
  public QC_Cost: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Designer_Commission' })
  public Designer_Commission: number;

  @Field()
  @Column({ nullable: true, name: 'UPC_Code' })
  public UPC_Code: string;

  @Field()
  @Column({ nullable: true, name: 'Agent' })
  public Agent: string;

  @Field()
  @Column({ nullable: true, name: 'Finish_Category' })
  public Finish_Category: string;

  @Field()
  @Column({ nullable: true, name: 'Small Parcel' })
  public SmallParcel: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 17, scale: 0, nullable: true, name: 'Item_Cost_DC' })
  public Item_Cost_DC: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 17, scale: 0, nullable: true, name: 'Item_Cost_WHSE' })
  public Item_Cost_WHSE: number;

  @Field()
  @Column({ nullable: true, name: 'Direct_Container' })
  public Direct_Container: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Cubes' })
  public cubes: number;

  @Field()
  @Column({ nullable: true, name: 'Sales_Image_3' })
  public Sales_Image_3: string;

  @Field()
  @Column({ nullable: true, name: 'Ipad_Sort_ID' })
  public Ipad_Sort_ID: string;

  @Field(() => Int)
  @Column({ nullable: true, name: 'ABCCODE' })
  public ABCCODE: number;

  @Field()
  @Column({ nullable: true, name: 'iPad_Best_Seller' })
  public iPad_Best_Seller: string;

  @Field()
  @Column({ nullable: true, name: 'Web_Image' })
  public Web_Image: string;

  @Field(() => GraphQLISODateTime)
  @Column({ nullable: true, name: 'Intro_Market' })
  public Intro_Market: Date;

  @Field()
  @Column({ nullable: true, name: 'Market_Write_Up' })
  public Market_Write_Up: string;

  @Field()
  @Column({ nullable: true, name: 'Best_Seller' })
  public Best_Seller: string;

  @Field()
  @Column({ nullable: true, name: 'US_Tariff_Code' })
  public US_Tariff_Code: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'STNDCOST' })
  public STNDCOST: number;

  @Field()
  @Column({ nullable: true, name: 'Sales_Feature_1' })
  public Sales_Feature_1: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'SPECIAL' })
  public SPECIAL: number;

  @Field()
  @Column({ nullable: true, name: 'Key_Item' })
  public Key_Item: string;

  @Field()
  @Column({ nullable: true, name: 'Box_Dimension_Combined' })
  public Box_Dimension_Combined: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'DROPSHIP_X' })
  public DROPSHIP_X: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'MIX_FULL' })
  public MIX_FULL: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'MIX_HALF' })
  public MIX_HALF: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'MIX_QTR' })
  public MIX_QTR: number;

  @Field()
  @Column({ nullable: true, name: 'Story' })
  public Story: string;

  @Field()
  @Column({ nullable: true, name: 'ALWBKORD' })
  public ALWBKORD: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'CSNS01' })
  public CSNS01: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'FOB_IOR' })
  public FOB_IOR: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'FOB_M_IOR' })
  public FOB_M_IOR: number;

  @Field()
  @Column({ nullable: true, name: 'Related_Items' })
  public Related_Items: string;

  [key: string]: any;
}
