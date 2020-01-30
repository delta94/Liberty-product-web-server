import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { VendorCategory } from './VendorCategory';

@ObjectType()
@Entity({ name: 'Vendors', synchronize: false })
export class Vendor extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column()
  logo?: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  @Column(() => Date)
  created?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  modified: Date;

  @Field(() => VendorCategory, { nullable: true })
  @OneToMany(() => VendorCategory, VendorCategory => VendorCategory.vendor)
  vendorCategories: VendorCategory[];
}
