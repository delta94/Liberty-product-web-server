import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';
import { Field, Float, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'item_data_reporting', database: 'LFI', synchronize: false })
export class ProductViewData extends BaseEntity {
  @Field({ nullable: true, name: 'ITEMNMBR' })
  @PrimaryColumn({ name: 'ITEMNMBR' })
  itemNumber: string;

  @Field({ nullable: true, name: 'ITMCLSCD' })
  @Column({ name: 'ITMCLSCD' })
  itemClass: string;

  @Field({ nullable: true, name: 'ITMCLSDC' })
  @Column({ name: 'ITMCLSDC' })
  itemClassDescription: string;

  @Field({ nullable: true, name: 'ITEMDESC' })
  @Column({ name: 'ITEMDESC' })
  itemDescription: string;

  @Field({ nullable: true, name: 'ITMSHNAM' })
  @Column({ name: 'ITMSHNAM' })
  ITMSHNAM: string;

  @Field(() => Float)
  @Column({ name: 'EPCUBES' })
  EPCUBES: number;

  @Field(() => Float)
  @Column({ name: 'BoxW' })
  boxWidth: number;

  @Field(() => Float)
  @Column({ name: 'BoxD' })
  boxDepth: number;

  @Field(() => Float)
  @Column({ name: 'BoxH' })
  boxHeight: number;

  @Field(() => Float)
  @Column({ name: 'W' })
  width: number;

  @Field(() => Float)
  @Column({ name: 'D' })
  depth: number;

  @Field(() => Float)
  @Column({ name: 'H' })
  height: number;

  @Field(() => Float)
  @Column({ name: 'Cartons' })
  cartons: number;

  @Field({ nullable: true, name: 'Weight' })
  @Column({ name: 'Weight' })
  weight: string;

  @Field({ nullable: true, name: 'DROPSHIP' })
  @Column({ name: 'DROPSHIP' })
  DROPSHIP: string;

  @Field({ nullable: true, name: 'DROPSHIP_M' })
  @Column({ name: 'DROPSHIP_M' })
  DROPSHIP_M: string;

  @Field({ nullable: true, name: 'FOB' })
  @Column({ name: 'FOB' })
  FOB: string;

  @Field({ nullable: true, name: 'LEVEL1' })
  @Column({ name: 'LEVEL1' })
  LEVEL1: string;

  @Field({ nullable: true, name: 'LEVEL0' })
  @Column({ name: 'LEVEL0' })
  LEVEL0: string;

  @Field({ nullable: true, name: 'FOB_M' })
  @Column({ name: 'FOB_M' })
  FOB_M: string;

  @Field({ nullable: true, name: 'LEVEL2' })
  @Column({ name: 'LEVEL2' })
  LEVEL2: string;

  @Field({ nullable: true, name: 'LEVEL3' })
  @Column({ name: 'LEVEL3' })
  LEVEL3: string;

  @Field({ nullable: true, name: 'DISC' })
  @Column({ name: 'DISC' })
  DISC: string;

  @Field({ nullable: true, name: 'Factory' })
  @Column({ name: 'Factory' })
  Factory: string;

  @Field({ nullable: true, name: 'Origin' })
  @Column({ name: 'Origin' })
  origin: string;

  @Field({ nullable: true, name: 'Status' })
  @Column({ name: 'Status' })
  status: string;

  @Field({ nullable: true, name: 'Category' })
  @Column({ name: 'Category' })
  category: string;

  @Field({ nullable: true, name: 'ITEMTYPE' })
  @Column({ name: 'ITEMTYPE' })
  ITEMTYPE: string;

  @Field({ nullable: true, name: 'Web_Exclude' })
  @Column({ name: 'Web_Exclude' })
  webExclude: string;

  @Field({ nullable: true, name: 'Wood' })
  @Column({ name: 'Wood' })
  wood: string;

  @Field({ nullable: true, name: 'Finish' })
  @Column({ name: 'Finish' })
  finish: string;

  @Field({ nullable: true, name: 'Item_Style' })
  @Column({ name: 'Item_Style' })
  itemStyle: string;

  @Field({ nullable: true, name: 'Publish_to_Web' })
  @Column({ name: 'Publish_to_Web' })
  publishToWeb: string;

  @Field({ nullable: true, name: 'F1' })
  @Column({ name: 'F1' })
  F1: string;

  @Field({ nullable: true, name: 'F2' })
  @Column({ name: 'F2' })
  F2: string;

  @Field({ nullable: true, name: 'F3' })
  @Column({ name: 'F3' })
  F3: string;

  @Field({ nullable: true, name: 'F4' })
  @Column({ name: 'F4' })
  F4: string;

  @Field({ nullable: true, name: 'F5' })
  @Column({ name: 'F5' })
  F5: string;

  @Field({ nullable: true, name: 'F6' })
  @Column({ name: 'F6' })
  F6: string;

  @Field({ nullable: true, name: 'F7' })
  @Column({ name: 'F7' })
  F7: string;

  @Field({ nullable: true, name: 'F8' })
  @Column({ name: 'F8' })
  F8: string;

  @Field({ nullable: true, name: 'F9' })
  @Column({ name: 'F9' })
  F9: string;

  @Field({ nullable: true, name: 'F10' })
  @Column({ name: 'F10' })
  F10: string;

  @Field({ nullable: true, name: 'F11' })
  @Column({ name: 'F11' })
  F11: string;

  @Field({ nullable: true, name: 'F12' })
  @Column({ name: 'F12' })
  F12: string;

  @Field({ nullable: true, name: 'F13' })
  @Column({ name: 'F13' })
  F13: string;

  @Field({ nullable: true, name: 'F14' })
  @Column({ name: 'F14' })
  F14: string;

  @Field({ nullable: true, name: 'F15' })
  @Column({ name: 'F15' })
  F15: string;

  @Field({ nullable: true, name: 'Feature_1' })
  @Column({ name: 'Feature_1' })
  feature1: string;

  @Field({ nullable: true, name: 'Feature_2' })
  @Column({ name: 'Feature_2' })
  feature2: string;

  @Field({ nullable: true, name: 'Feature_3' })
  @Column({ name: 'Feature_3' })
  feature3: string;

  @Field({ nullable: true, name: 'Feature_4' })
  @Column({ name: 'Feature_4' })
  feature4: string;

  @Field({ nullable: true, name: 'Feature_5' })
  @Column({ name: 'Feature_5' })
  feature5: string;

  @Field({ nullable: true, name: 'Feature_6' })
  @Column({ name: 'Feature_6' })
  feature6: string;

  @Field({ nullable: true, name: 'Feature_7' })
  @Column({ name: 'Feature_7' })
  feature7: string;

  @Field({ nullable: true, name: 'Feature_8' })
  @Column({ name: 'Feature_8' })
  feature8: string;

  @Field({ nullable: true, name: 'Sort_ID' })
  @Column({ name: 'Sort_ID' })
  Sort_ID: string;

  @Field({ nullable: true, name: 'Sales_Image_1' })
  @Column({ name: 'Sales_Image_1' })
  Sales_Image_1: string;

  @Field({ nullable: true, name: 'Sales_Image_2' })
  @Column({ name: 'Sales_Image_2' })
  Sales_Image_2: string;

  @Field({ nullable: true, name: 'Sales_Image_4' })
  @Column({ name: 'Sales_Image_4' })
  Sales_Image_4: string;

  @Field({ nullable: true, name: 'Sales_Image_5' })
  @Column({ name: 'Sales_Image_5' })
  Sales_Image_5: string;

  @Field({ nullable: true, name: 'Sales_Image_6' })
  @Column({ name: 'Sales_Image_6' })
  Sales_Image_6: string;

  @Field({ nullable: true, name: 'Sales_Feature_2' })
  @Column({ name: 'Sales_Feature_2' })
  Sales_Feature_2: string;

  @Field({ nullable: true, name: 'Sales_Feature_4' })
  @Column({ name: 'Sales_Feature_4' })
  Sales_Feature_4: string;

  @Field({ nullable: true, name: 'Sales_Feature_3' })
  @Column({ name: 'Sales_Feature_3' })
  Sales_Feature_3: string;

  @Field({ nullable: true, name: 'Sales_Feature_5' })
  @Column({ name: 'Sales_Feature_5' })
  Sales_Feature_5: string;

  @Field({ nullable: true, name: 'Sales_Feature_6' })
  @Column({ name: 'Sales_Feature_6' })
  Sales_Feature_6: string;

  @Field({ nullable: true, name: 'ITEM_CLASS_STATUS' })
  @Column({ name: 'ITEM_CLASS_STATUS' })
  itemClassStatus: string;

  @Field({ nullable: true, name: 'Full_Item_Class_Name' })
  @Column({ name: 'Full_Item_Class_Name' })
  fullItemClassName: string;

  @Field({ nullable: true, name: 'Combined_Dimensions' })
  @Column({ name: 'Combined_Dimensions' })
  combinedDimensions: string;

  @Field({ nullable: true, name: 'Item_Image_1' })
  @Column({ name: 'Item_Image_1' })
  Item_Image_1: string;

  @Field({ nullable: true, name: 'Item_Image_2' })
  @Column({ name: 'Item_Image_2' })
  Item_Image_2: string;

  @Field({ nullable: true, name: 'Item_Image_3' })
  @Column({ name: 'Item_Image_3' })
  Item_Image_3: string;

  @Field({ nullable: true, name: 'EPKDCUBES' })
  @Column({ name: 'EPKDCUBES' })
  EPKDCUBES: string;

  @Field({ nullable: true, name: 'Freight_Class' })
  @Column({ name: 'Freight_Class' })
  Freight_Class: string;

  @Field({ nullable: true, name: 'Group_Path' })
  @Column({ name: 'Group_Path' })
  Group_Path: string;

  @Field({ nullable: true, name: 'Factory_Assembled' })
  @Column({ name: 'Factory_Assembled' })
  Factory_Assembled: string;

  @Field({ nullable: true, name: 'Product_Path' })
  @Column({ name: 'Product_Path' })
  Product_Path: string;

  @Field({ nullable: true, name: 'Short_Group_Path' })
  @Column({ name: 'Short_Group_Path' })
  Short_Group_Path: string;

  @Field({ nullable: true, name: 'Assembly_Cost' })
  @Column({ name: 'Assembly_Cost' })
  Assembly_Cost: string;

  @Field({ nullable: true, name: 'QC_Cost' })
  @Column({ name: 'QC_Cost' })
  QC_Cost: string;

  @Field({ nullable: true, name: 'Designer_Commission' })
  @Column({ name: 'Designer_Commission' })
  Designer_Commission: string;

  @Field({ nullable: true, name: 'UPC_Code' })
  @Column({ name: 'UPC_Code' })
  upcCode: string;

  @Field({ nullable: true, name: 'Agent' })
  @Column({ name: 'Agent' })
  Agent: string;

  @Field({ nullable: true, name: 'Finish_Category' })
  @Column({ name: 'Finish_Category' })
  finishCategory: string;

  @Field({ nullable: true, name: 'SmallParcel' })
  @Column({ name: 'Small Parcel' })
  smallParcel: string;

  @Field({ nullable: true, name: 'Item_Cost_DC' })
  @Column({ name: 'Item_Cost_DC' })
  Item_Cost_DC: string;

  @Field({ nullable: true, name: 'Item_Cost_WHSE' })
  @Column({ name: 'Item_Cost_WHSE' })
  Item_Cost_WHSE: string;

  @Field({ nullable: true, name: 'Direct_Container' })
  @Column({ name: 'Direct_Container' })
  Direct_Container: string;

  @Field({ nullable: true, name: 'Cubes' })
  @Column({ name: 'Cubes' })
  Cubes: string;

  @Field({ nullable: true, name: 'Sales_Image_3' })
  @Column({ name: 'Sales_Image_3' })
  Sales_Image_3: string;

  @Field({ nullable: true, name: 'Ipad_Sort_ID' })
  @Column({ name: 'Ipad_Sort_ID' })
  Ipad_Sort_ID: string;

  @Field({ nullable: true, name: 'ABCCODE' })
  @Column({ name: 'ABCCODE' })
  ABCCODE: string;

  @Field({ nullable: true, name: 'iPad_Best_Seller' })
  @Column({ name: 'iPad_Best_Seller' })
  iPad_Best_Seller: string;

  @Field({ nullable: true, name: 'Web_Image' })
  @Column({ name: 'Web_Image' })
  Web_Image: string;

  @Field({ nullable: true, name: 'Intro_Market' })
  @Column({ name: 'Intro_Market' })
  Intro_Market: string;

  @Field({ nullable: true, name: 'Market_Write_Up' })
  @Column({ name: 'Market_Write_Up' })
  Market_Write_Up: string;

  @Field({ nullable: true, name: 'Best_Seller' })
  @Column({ name: 'Best_Seller' })
  Best_Seller: string;

  @Field({ nullable: true, name: 'US_Tariff_Code' })
  @Column({ name: 'US_Tariff_Code' })
  US_Tariff_Code: string;

  @Field({ nullable: true, name: 'STNDCOST' })
  @Column({ name: 'STNDCOST' })
  STNDCOST: string;

  @Field({ nullable: true, name: 'Sales_Feature_1' })
  @Column({ name: 'Sales_Feature_1' })
  Sales_Feature_1: string;

  @Field({ nullable: true, name: 'SPECIAL' })
  @Column({ name: 'SPECIAL' })
  SPECIAL: string;

  @Field({ nullable: true, name: 'Key_Item' })
  @Column({ name: 'Key_Item' })
  Key_Item: string;

  @Field({ nullable: true, name: 'Box_Dimension_Combined' })
  @Column({ name: 'Box_Dimension_Combined' })
  boxDimensionCombined: string;

  @Field({ nullable: true, name: 'DROPSHIP_X' })
  @Column({ name: 'DROPSHIP_X' })
  DROPSHIP_X: string;

  @Field({ nullable: true, name: 'MIX_FULL' })
  @Column({ name: 'MIX_FULL' })
  MIX_FULL: string;

  @Field({ nullable: true, name: 'MIX_HALF' })
  @Column({ name: 'MIX_HALF' })
  MIX_HALF: string;

  @Field({ nullable: true, name: 'MIX_QTR' })
  @Column({ name: 'MIX_QTR' })
  MIX_QTR: string;

  @Field({ nullable: true, name: 'Story' })
  @Column({ name: 'Story' })
  story: string;

  @Field({ nullable: true, name: 'ALWBKORD' })
  @Column({ name: 'ALWBKORD' })
  ALWBKORD: string;

  @Field({ nullable: true, name: 'CSNS01' })
  @Column({ name: 'CSNS01' })
  CSNS01: string;

  @Field({ nullable: true, name: 'FOB_IOR' })
  @Column({ name: 'FOB_IOR' })
  FOB_IOR: string;

  @Field({ nullable: true, name: 'FOB_M_IOR' })
  @Column({ name: 'FOB_M_IOR' })
  FOB_M_IOR: string;

  @Field({ nullable: true, name: 'Related_Items' })
  @Column({ name: 'Related_Items' })
  Related_Items: string;
}
