import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'SVC00701', database: 'LFI', synchronize: false })
export class Svc00701 extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'ORDDOCID' })
  public OrderDocumentId: string;

  @Field(() => Int)
  @PrimaryColumn({ name: 'LNITMSEQ' })
  public LNITMSEQ: number;

  @Field(() => Int)
  @PrimaryColumn({ name: 'STATUS' })
  public Status: number;

  @Field()
  @Column({ name: 'ITEMNMBR' })
  public ItemNumber: string;

  @Field()
  @Column({ name: 'DSCRIPTN' })
  public Description: string;

  @Field()
  @Column({ name: 'UOFM' })
  public UnitOfMeasure: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'TRNSFQTY' })
  public TransferQuantity: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'QTYFULFI' })
  public QuantityFulfilled: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'QTYSHPPD' })
  public QuantityShipped: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'QTY_To_Receive' })
  public QuantityToReceive: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'QTYRECVD' })
  public QuantityReceived: number;

  @Field()
  @Column({ name: 'CALLNBR' })
  public CALLNBR: string;

  @Field(() => Int)
  @Column({ name: 'SRVRECTYPE' })
  public SRVRECTYPE: number;

  @Field(() => Int)
  @Column({ name: 'SERVLITEMSEQ' })
  public SERVLITEMSEQ: number;

  @Field(() => Int)
  @Column({ name: 'EQPLINE' })
  public EQPLINE: number;

  @Field()
  @Column({ name: 'LINITMTYP' })
  public LINITMTYP: string;

  @Field()
  @Column({ name: 'RETDOCID' })
  public RETDOCID: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'LNSEQNBR' })
  public LNSEQNBR: number;

  @Field()
  @Column({ name: 'RTV_Number' })
  public RtvNumber: string;

  @Field(() => Int)
  @Column({ name: 'WORECTYPE' })
  public WORECTYPE: number;

  @Field()
  @Column({ name: 'WORKORDNUM' })
  public WORKORDNUM: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'QTYBSUOM' })
  public QTYBSUOM: number;

  @Field()
  @Column({ name: 'TRNSFLOC' })
  public TransferLocation: string;

  @Field()
  @Column({ name: 'ITLOCN' })
  public ItemLocation: string;

  @Field()
  @Column({ name: 'TRNSTLOC' })
  public LocationCode: string;

  @Field(() => Int)
  @Column({ name: 'TRFQTYTY' })
  public TRFQTYTY: number;

  @Field(() => Int)
  @Column({ name: 'TRTQTYTY' })
  public TRTQTYTY: number;

  @Field(() => Int)
  @Column({ name: 'DECPLCUR' })
  public DECPLCUR: number;

  @Field(() => Int)
  @Column({ name: 'DECPLQTY' })
  public DECPLQTY: number;

  @Field()
  @Column({ name: 'Landed_Cost_Group_ID' })
  public Landed_Cost_Group_ID: string;

  @Field()
  @Column({ name: 'Reason_Code' })
  public Reason_Code: string;

  // @Field(() => Int)
  // @Column({ name: 'DEX_ROW_ID' })
  // public DexRowId: number;
}
