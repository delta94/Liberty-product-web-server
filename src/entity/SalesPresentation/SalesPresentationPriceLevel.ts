import { ObjectType, Field, Int } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SalesPresentation } from './SalesPresentation';

@ObjectType()
@Entity({ name: 'SalesPresentationPriceLevels', synchronize: false })
export class SalesPresentationPriceLevel extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  salesPresentationId: number;

  @Field()
  @Column()
  priceLevel: string;

  @Field()
  @Column()
  displayName: string;

  @Field(() => SalesPresentation)
  @ManyToOne(() => SalesPresentation)
  @JoinColumn({ name: 'salesPresentationId' })
  salesPresentation: SalesPresentation;
}
