import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Vendor } from './Vendor';
import { VendorCategoryItemClass } from './VendorCategoryItemClass';

@ObjectType()
@Entity({ name: 'VendorCategories', synchronize: false })
export class VendorCategory extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  vendorId: number;

  @Field()
  @Column()
  category: string;

  @Field(() => Vendor, { nullable: true })
  @ManyToOne(() => Vendor)
  // @JoinColumn({ name: 'vendorId' })
  vendor: Vendor;

  @Field(() => VendorCategoryItemClass, { nullable: true })
  @OneToMany(() => VendorCategoryItemClass, VendorCategoryItemClass => VendorCategoryItemClass.vendorCategory)
  itemClasses: VendorCategoryItemClass[];
}
