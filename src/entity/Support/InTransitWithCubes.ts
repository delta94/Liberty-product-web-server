import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'Intransit_Transfer_w_Cubes', database: 'LFI', synchronize: false })
export class InTransitWithCubes {
  @Field()
  @PrimaryColumn({ name: 'ORDDOCID' })
  public OrderDocumentId: string;

  @Field()
  @PrimaryColumn({ name: 'ITEMNMBR' })
  public ItemNumber: string;

  @Field(() => Int)
  @Column({ name: 'STATUS' })
  public Status: number;

  @Field()
  @Column({ name: 'ORDRDATE' })
  public OrderDate: Date;

  @Field()
  @Column({ name: 'CUSTNAME' })
  public CustomerName: string;

  @Field()
  @Column({ name: 'ADDRESS1' })
  public Address1: string;

  @Field()
  @Column({ name: 'ADDRESS2' })
  public Address2: string;

  @Field()
  @Column({ name: 'CITY' })
  public City: string;

  @Field()
  @Column({ name: 'STATE' })
  public State: string;

  @Field()
  @Column({ name: 'ZIPCODE' })
  public ZipCode: string;

  @Field()
  @Column({ name: 'SHIPMTHD' })
  public ShipMethod: string;

  @Field()
  @Column({ name: 'TRNSFLOC' })
  public TransferLocation: string;

  @Field()
  @Column({ name: 'ITLOCN' })
  public ItemLocation: string;

  @Field()
  @Column({ name: 'LOCNCODE' })
  public LocationCode: string;

  @Field()
  @Column({ name: 'DSCRIPTN' })
  public Description: string;

  @Field()
  @Column({ name: 'UOFM' })
  public UOFM: string;

  @Field(() => Float)
  @Column({ name: 'TRNSFQTY', type: 'decimal', precision: 19, scale: 5 })
  public TransferQuantity: number;

  @Field(() => Float)
  @Column({ name: 'QTYFULFI', type: 'decimal', precision: 19, scale: 5 })
  public QuantityFulfilled: number;

  @Field(() => Float)
  @Column({ name: 'QTYSHPPD', type: 'decimal', precision: 19, scale: 5 })
  public QuantityShipped: number;

  @Field(() => Float)
  @Column({ name: 'QTY_To_Receive', type: 'decimal', precision: 19, scale: 5 })
  public QuantityToReceive: number;

  @Field(() => Float)
  @Column({ name: 'QTYRECVD', type: 'decimal', precision: 19, scale: 5 })
  public QuantityReceived: number;

  @Field(() => Float, { nullable: true })
  @Column({ name: 'Cartons', nullable: true, type: 'decimal', precision: 19, scale: 5 })
  public Cartons?: number;

  @Field(() => Float, { nullable: true })
  @Column({ name: 'EPCUBES', nullable: true, type: 'decimal', precision: 19, scale: 5 })
  public EpCubes?: number;

  @Field(() => Float, { nullable: true })
  @Column({ name: 'Cubes_EXT', nullable: true, type: 'decimal', precision: 38, scale: 9 })
  public CubesExtended?: number;

  @Field()
  @Column({ name: 'SOP_Number' })
  public SopNumber: string;

  @Field({ nullable: true })
  @Column({ name: 'SOP_DOC_DATE', nullable: true })
  public SopDocDate?: Date;

  @Field(() => Int)
  @Column({ name: 'LNITMSEQ' })
  public LNITMSEQ: number;
}
