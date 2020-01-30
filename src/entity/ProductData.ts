import { Entity, Column, PrimaryColumn, BaseEntity, UpdateDateColumn } from 'typeorm';
import { Field, Float, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'ProductData', synchronize: false })
export class ProductData extends BaseEntity {
  @Field({ name: 'Item_Number', nullable: true })
  @PrimaryColumn()
  itemNumber: string;

  @Field({ name: 'Item_Class', nullable: true })
  @Column()
  itemClass: string;

  @Field({ name: 'Item_Class_Description', nullable: true })
  @Column()
  itemClassDescription: string;

  @Field({ name: 'Item_Description', nullable: true })
  @Column()
  itemDescription: string;

  @Field(() => Float, { name: 'Box_Width' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  boxWidth: number;

  @Field(() => Float, { name: 'Box_Depth' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  boxDepth: number;

  @Field(() => Float, { name: 'Box_Height' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  boxHeight: number;

  @Field(() => Float, { name: 'Width' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  width: number;

  @Field(() => Float, { name: 'Depth' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  depth: number;

  @Field(() => Float, { name: 'Height' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  height: number;

  @Field(() => Float, { name: 'Cartons' })
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true })
  cartons: number;

  @Field({ nullable: true, name: 'Weight' })
  @Column({ name: 'Weight' })
  weight: number;

  @Field({ nullable: true, name: 'Origin' })
  @Column({ name: 'Origin' })
  origin: string;

  @Field({ nullable: true, name: 'Status' })
  @Column({ name: 'Status' })
  status: string;

  @Field({ nullable: true, name: 'Category' })
  @Column({ name: 'Category' })
  category: string;

  @Field({ nullable: true, name: 'Web_Exclude' })
  @Column({ nullable: true, name: 'Web_Exclude' })
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

  @Field({ nullable: true, name: 'Publish_To_Web' })
  @Column({ nullable: true, name: 'Publish_to_Web' })
  publishToWeb: string;

  @Field({ nullable: true, name: 'F1' })
  @Column({ nullable: true, name: 'F1' })
  F1: string;

  @Field({ nullable: true, name: 'F2' })
  @Column({ nullable: true, name: 'F2' })
  F2: string;

  @Field({ nullable: true, name: 'F3' })
  @Column({ nullable: true, name: 'F3' })
  F3: string;

  @Field({ nullable: true, name: 'F4' })
  @Column({ nullable: true, name: 'F4' })
  F4: string;

  @Field({ nullable: true, name: 'F5' })
  @Column({ nullable: true, name: 'F5' })
  F5: string;

  @Field({ nullable: true, name: 'F6' })
  @Column({ nullable: true, name: 'F6' })
  F6: string;

  @Field({ nullable: true, name: 'F7' })
  @Column({ nullable: true, name: 'F7' })
  F7: string;

  @Field({ nullable: true, name: 'F8' })
  @Column({ nullable: true, name: 'F8' })
  F8: string;

  @Field({ nullable: true, name: 'F9' })
  @Column({ nullable: true, name: 'F9' })
  F9: string;

  @Field({ nullable: true, name: 'F10' })
  @Column({ nullable: true, name: 'F10' })
  F10: string;

  @Field({ nullable: true, name: 'F11' })
  @Column({ nullable: true, name: 'F11' })
  F11: string;

  @Field({ nullable: true, name: 'F12' })
  @Column({ nullable: true, name: 'F12' })
  F12: string;

  @Field({ nullable: true, name: 'F13' })
  @Column({ nullable: true, name: 'F13' })
  F13: string;

  @Field({ nullable: true, name: 'F14' })
  @Column({ nullable: true, name: 'F14' })
  F14: string;

  @Field({ nullable: true, name: 'F15' })
  @Column({ nullable: true, name: 'F15' })
  F15: string;

  @Field({ nullable: true, name: 'Feature_1' })
  @Column({ nullable: true, name: 'Feature_1' })
  feature1: string;

  @Field({ nullable: true, name: 'Feature_2' })
  @Column({ nullable: true, name: 'Feature_2' })
  feature2: string;

  @Field({ nullable: true, name: 'Feature_3' })
  @Column({ nullable: true, name: 'Feature_3' })
  feature3: string;

  @Field({ nullable: true, name: 'Feature_4' })
  @Column({ nullable: true, name: 'Feature_4' })
  feature4: string;

  @Field({ nullable: true, name: 'Feature_5' })
  @Column({ nullable: true, name: 'Feature_5' })
  feature5: string;

  @Field({ nullable: true, name: 'Feature_6' })
  @Column({ nullable: true, name: 'Feature_6' })
  feature6: string;

  @Field({ nullable: true, name: 'Feature_7' })
  @Column({ nullable: true, name: 'Feature_7' })
  feature7: string;

  @Field({ nullable: true, name: 'Feature_8' })
  @Column({ nullable: true, name: 'Feature_8' })
  feature8: string;

  @Field({ nullable: true, name: 'Item_Class_Status' })
  @Column({ name: 'ITEM_CLASS_STATUS' })
  itemClassStatus: string;

  @Field({ nullable: true, name: 'Full_Item_Class_Name' })
  @Column({ name: 'Full_Item_Class_Name' })
  fullItemClassName: string;

  @Field({ nullable: true, name: 'Combined_Dimensions' })
  @Column({ name: 'Combined_Dimensions' })
  combinedDimensions: string;

  @Field({ nullable: true, name: 'UPC_Code' })
  @Column({ nullable: true, name: 'UPC_Code' })
  upcCode: string;

  @Field({ nullable: true, name: 'Finish_Category' })
  @Column({ name: 'Finish_Category' })
  finishCategory: string;

  @Field({ nullable: true, name: 'Small_Parcel' })
  @Column({ name: 'Small_Parcel' })
  smallParcel: string;

  @Field({ nullable: true, name: 'Box_Dimension_Combined' })
  @Column({ name: 'Box_Dimension_Combined' })
  boxDimensionCombined: string;

  @Field({ nullable: true, name: 'Story' })
  @Column({ nullable: true, name: 'Story' })
  story: string;

  @Field({ nullable: true, name: 'Image_1' })
  @Column({ nullable: true, name: 'Image_1' })
  image1: string;

  @Field({ nullable: true, name: 'Image_2' })
  @Column({ nullable: true, name: 'Image_2' })
  image2: string;

  @Field({ nullable: true, name: 'Image_3' })
  @Column({ nullable: true, name: 'Image_3' })
  image3: string;

  @Field({ nullable: true, name: 'Image_4' })
  @Column({ nullable: true, name: 'Image_4' })
  image4: string;

  @Field({ nullable: true, name: 'Image_5' })
  @Column({ nullable: true, name: 'Image_5' })
  image5: string;

  @Field({ nullable: true, name: 'Image_6' })
  @Column({ nullable: true, name: 'Image_6' })
  image6: string;
  @Field({ nullable: true, name: 'Image_7' })
  @Column({ nullable: true, name: 'Image_7' })
  image7: string;

  @Field({ nullable: true, name: 'Image_8' })
  @Column({ nullable: true, name: 'Image_8' })
  image8: string;

  @Field({ nullable: true, name: 'Image_9' })
  @Column({ nullable: true, name: 'Image_9' })
  image9: string;

  @Field({ nullable: true, name: 'Image_10' })
  @Column({ nullable: true, name: 'Image_10' })
  image10: string;

  @Field({ nullable: true, name: 'Image_11' })
  @Column({ nullable: true, name: 'Image_11' })
  image11: string;

  @Field({ nullable: true, name: 'Image_12' })
  @Column({ nullable: true, name: 'Image_12' })
  image12: string;

  @Field({ nullable: true, name: 'Image_13' })
  @Column({ nullable: true, name: 'Image_13' })
  image13: string;

  @Field({ nullable: true, name: 'Image_14' })
  @Column({ nullable: true, name: 'Image_14' })
  image14: string;

  @Field({ nullable: true, name: 'Image_15' })
  @Column({ nullable: true, name: 'Image_15' })
  image15: string;

  @Field({ nullable: true, name: 'Image_16' })
  @Column({ nullable: true, name: 'Image_16' })
  image16: string;

  @Field({ nullable: true, name: 'Image_17' })
  @Column({ nullable: true, name: 'Image_17' })
  image17: string;

  @Field({ nullable: true, name: 'Image_18' })
  @Column({ nullable: true, name: 'Image_18' })
  image18: string;

  @Field({ nullable: true, name: 'Image_19' })
  @Column({ nullable: true, name: 'Image_19' })
  image19: string;

  @Field({ nullable: true, name: 'Image_20' })
  @Column({ nullable: true, name: 'Image_20' })
  image20: string;

  @Field()
  @UpdateDateColumn({ name: 'LastModified' })
  lastModified?: Date;
}
