import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Vendor } from './Vendor';
import { VendorCategory } from './VendorCategory';

@ObjectType()
@Entity({ name: 'VendorCategoryItemClasses', synchronize: false })
export class VendorCategoryItemClass extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  vendorId: number;

  @Field(() => Int)
  @Column()
  vendorCategoryId: number;

  @Field()
  @Column()
  itemClass: string;

  @Field(() => Vendor)
  @ManyToOne(() => Vendor)
  @JoinColumn({ name: 'vendorId' })
  vendor: Vendor;

  @Field(() => VendorCategory, { nullable: true })
  @ManyToOne(() => VendorCategory)
  @JoinColumn({ name: 'vendorCategoryId' })
  vendorCategory: VendorCategory;
}
