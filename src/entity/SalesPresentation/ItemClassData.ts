import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity({ name: 'Item_Class_Data', database: 'LFI', synchronize: false })
export class ItemClassData extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'ITMCLSCD' })
  public itemClass: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'ITMCLSDC' })
  public itemClassDescription: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Category' })
  public category: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_1' })
  public Feature_1: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_2' })
  public Feature_2: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_3' })
  public Feature_3: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_4' })
  public Feature_4: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_5' })
  public Feature_5: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_6' })
  public Feature_6: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_7' })
  public Feature_7: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_8' })
  public Feature_8: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_9' })
  public Feature_9: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_10' })
  public Feature_10: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_11' })
  public Feature_11: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_12' })
  public Feature_12: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_13' })
  public Feature_13: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_14' })
  public Feature_14: string;

  @Field({ nullable: true })
  @Column({ nullable: true, name: 'Feature_15' })
  public Feature_15: string;
}
