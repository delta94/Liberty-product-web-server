import { ObjectType, Field, Int } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';

@ObjectType()
@Entity({ name: 'SalesPresentationItemClassImages', synchronize: false })
export class SalesPresentationItemClassImage extends BaseEntity {
  // static fromItemKitGrouping(data: ItemKitGrouping): SalesPresentationItemClassImageInput {
  //   let group: SalesPresentationItemClassImage = new SalesPresentationItemClassImage();
  //   const { FEATURE_1, FEATURE_2, FEATURE_3, FEATURE_4, FEATURE_5, FEATURE_6, FEATURE_7, FEATURE_8, hasId, save, remove, reload, ...rest } = data;
  //   group = Object.assign(new SalesPresentationItemClassImage(), { ...rest });
  //   return group;
  // }

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  salesPresentationId: number;

  @Field(() => Int)
  @Column()
  salesPresentationItemClassId: number;

  @Field()
  @Column()
  itemNumber: string;

  @Field()
  @Column()
  itemClass: string;

  @Field()
  @Column()
  imageUrl: string;

  @Field(() => Int)
  @Column()
  imageIndex: number;

  @Field(() => SalesPresentation)
  @ManyToOne(() => SalesPresentation)
  @JoinColumn({ name: 'salesPresentationId' })
  salesPresentation: SalesPresentation;

  @Field(() => SalesPresentationItemClass)
  @ManyToOne(() => SalesPresentationItemClass)
  @JoinColumn({ name: 'salesPresentationItemClassId' })
  salesPresentationItemClass: SalesPresentationItemClass;
}
