import { ObjectType, Field, Int } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CustomerData } from '../CustomerData';
import { ItemDataReporting } from './ItemDataReporting';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { SalesPresentationPriceLevel } from './SalesPresentationPriceLevel';

@ObjectType()
@Entity({ name: 'SalesPresentations', synchronize: false })
export class SalesPresentation extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Int)
  @Column()
  userId: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  customerName: string;

  @Field()
  @Column()
  customerNumber: string;

  @Field(() => [SalesPresentationPriceLevel])
  @OneToMany(() => SalesPresentationPriceLevel, SalesPresentationPriceLevel => SalesPresentationPriceLevel.salesPresentation)
  priceLevels: SalesPresentationPriceLevel[];

  @Field(() => [SalesPresentationItemClass])
  @OneToMany(() => SalesPresentationItemClass, SalesPresentationItemClass => SalesPresentationItemClass.salesPresentation)
  itemClasses: SalesPresentationItemClass[];

  // [key: string]: any;
}

@ObjectType()
export class SalesPresentationTableResult {
  @Field(() => [SalesPresentation])
  presentations: SalesPresentation[];

  @Field()
  totalRows: number;

  [key: string]: any;
}

@ObjectType()
export class FindCustomerTableResult {
  @Field(() => [CustomerData])
  customers: CustomerData[];

  @Field()
  totalRows: number;

  [key: string]: any;
}

@ObjectType()
export class FindItemClassTableResult {
  @Field(() => [ItemDataReporting])
  itemClasses: ItemDataReporting[];

  @Field()
  totalRows: number;
}

@ObjectType()
export class ItemDataTableResult {
  @Field(() => [ItemDataReporting])
  items: ItemDataReporting[];

  @Field()
  totalRows: number;

  [key: string]: any;
}
