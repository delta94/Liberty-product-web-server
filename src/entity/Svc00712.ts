import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { Field, ObjectType, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'SVC00712', database: 'LFI', synchronize: false })
export class Svc00712 extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'ORDDOCID' })
  public OrderDocumentId: string;

  @Field(() => Int)
  @PrimaryColumn({ name: 'LNITMSEQ' })
  public LNITMSEQ: number;

  @Field(() => Int)
  @PrimaryColumn({ name: 'SEQNUMBR' })
  public SEQNUMBR: number;

  @Field()
  @Column({ name: 'ITEMNMBR' })
  public ItemNumber: string;

  @Field()
  @Column({ name: 'TRNSFLOC' })
  public TransferLocation: string;

  @Field()
  @Column({ name: 'LOCNCODE' })
  public LocationCode: string;

  @Field()
  @Column({ name: 'BIN' })
  public BIN: string;

  @Field()
  @Column({ name: 'TOBIN' })
  public TOBIN: string;

  @Field(() => Int)
  @Column({ name: 'QTYTYPE' })
  public QuantityType: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'QUANTITY' })
  public Quantity: number;

  @Field(() => Int)
  @Column({ name: 'POSTED' })
  public Posted: number;

  // @Field(() => Int)
  // @Column({ name: 'DEX_ROW_ID' })
  // public DexRowId: number;
}
