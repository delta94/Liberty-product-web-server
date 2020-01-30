import { Field, ObjectType, Int, Float } from 'type-graphql';
import { Column, Entity, BaseEntity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'SVC00731', database: 'LFI', synchronize: false })
export class Svc00731 extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'ORDDOCID' })
  public OrderDocumentId: string;

  @Field(() => Int)
  @PrimaryColumn({ name: 'LNITMSEQ' })
  public LNITMSEQ: number;

  @Field(() => Int)
  @PrimaryColumn({ name: 'SEQNUMBR' })
  public SEQNUMBR: number;

  @Field(() => Int)
  @PrimaryColumn({ name: 'SVC_Distribution_Type' })
  public SvcDistrType: number;

  @Field()
  @Column({ name: 'DistRef' })
  public DistRef: string;

  @Field(() => Int)
  @Column({ name: 'ACTINDX' })
  public ActIndex: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'DEBITAMT' })
  public DEBITAMT: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'ORDBTAMT' })
  public ORDBTAMT: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'CRDTAMNT' })
  public CRDTAMNT: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'ORCRDAMT' })
  public ORCRDAMT: number;

  @Field(() => Int)
  @Column({ name: 'CURRNIDX' })
  public CurrentIndex: number;

  @Field()
  @Column({ name: 'TRXSORCE' })
  public TRXSORCE: string;

  @Field(() => Int)
  @Column({ name: 'POSTED' })
  public Posted: number;

  @Field()
  @Column({ name: 'POSTEDDT' })
  public PostedDateTime: Date;

  // @Field(() => Int)
  // @Column({ name: 'DEX_ROW_ID' })
  // public DexRowId: number;
}
