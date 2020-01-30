import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClassItemNumber } from './SalesPresentationItemClassItemNumber';
import { SalesPresentationItemClassGroup } from './SalesPresentationItemClassGroup';
import { SalesPresentationItemClassKit } from './SalesPresentationItemClassKit';

@ObjectType()
@Entity({ name: 'SalesPresentationItemClasses', synchronize: false })
export class SalesPresentationItemClass extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  salesPresentationId: number;

  @Field()
  @Column()
  itemClass: string;

  @Field()
  @Column()
  itemClassDescription: string;

  @Field(() => Int)
  @Column()
  priceAdjustment: number;

  @Field(() => String)
  @Column()
  priceAdjustmentTo: string;

  @Field(() => Float)
  @Column()
  cubeAdjustment: number;

  @Field(() => String)
  @Column()
  cubeAdjustmentTo: string;

  @Field(() => Int)
  @Column()
  hasBeenSaved: number;

  @Field(() => String, { nullable: true })
  @Column()
  DROPSHIP?: string;

  @Field(() => String, { nullable: true })
  @Column()
  DROPSHIP_M?: string;

  @Field(() => String, { nullable: true })
  @Column()
  DROPSHIP_X?: string;

  @Field(() => String, { nullable: true })
  @Column()
  FOB?: string;

  @Field(() => String, { nullable: true })
  @Column()
  FOB_M?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL0?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL1?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL2?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL3?: string;

  @Field(() => String, { nullable: true })
  @Column()
  MIX_FULL?: string;

  @Field(() => String, { nullable: true })
  @Column()
  MIX_HALF?: string;

  @Field(() => String, { nullable: true })
  @Column()
  MIX_QTR?: string;

  @Field(() => SalesPresentation)
  @ManyToOne(() => SalesPresentation)
  @JoinColumn({ name: 'salesPresentationId' })
  salesPresentation: SalesPresentation;

  @Field(() => [SalesPresentationItemClassItemNumber], { nullable: true })
  @OneToMany(
    () => SalesPresentationItemClassItemNumber,
    SalesPresentationItemClassItemNumber => SalesPresentationItemClassItemNumber.salesPresentationItemClass
  )
  itemNumbers: SalesPresentationItemClassItemNumber[];

  @Field(() => [SalesPresentationItemClassKit], { nullable: true })
  @OneToMany(() => SalesPresentationItemClassKit, SalesPresentationItemClassKit => SalesPresentationItemClassKit.salesPresentationItemClass)
  kits: SalesPresentationItemClassKit[];

  @Field(() => [SalesPresentationItemClassGroup], { nullable: true })
  @OneToMany(() => SalesPresentationItemClassGroup, SalesPresentationItemClassGroup => SalesPresentationItemClassGroup.salesPresentationItemClass)
  groups: SalesPresentationItemClassGroup[];
}
