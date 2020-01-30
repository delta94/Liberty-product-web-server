import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'SVC00700', database: 'LFI', synchronize: false })
export class Svc00700 extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'ORDDOCID' })
  public OrderDocumentId: string;

  @Field()
  @Column({ name: 'RFRNCDOC' })
  public RFRNCDOC: string;

  @Field()
  @Column({ name: 'TECHID' })
  public TECHID: string;

  @Field()
  @Column({ name: 'OFFID' })
  public OffId: string;

  @Field(() => Int)
  @Column({ name: 'STATUS' })
  public Status: number;

  @Field()
  @Column({ name: 'ORDRDATE' })
  public OrdDate: Date;

  @Field()
  @Column({ name: 'ETADTE' })
  public EtaDate: Date;

  @Field()
  @Column({ name: 'CUSTNAME' })
  public CustName: string;

  @Field()
  @Column({ name: 'ADDRESS1' })
  public Address1: string;

  @Field()
  @Column({ name: 'ADDRESS2' })
  public Address: 2;

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
  public ShipMthd: string;

  @Field()
  @Column({ name: 'TRNSFLOC' })
  public TransferLocation: string;

  @Field()
  @Column({ name: 'ITLOCN' })
  public ITLOCN: string;

  @Field()
  @Column({ name: 'LOCNCODE' })
  public LocationCode: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'NOTEINDX' })
  public NoteIndex: number;

  @Field(() => Int)
  @Column({ name: 'SVC_Address_Option' })
  public SvcAddressOption: number;

  @Field()
  @Column({ name: 'SVC_Misc_Address_Code' })
  public SvcMiscAddressCode: string;

  @Field()
  @Column({ name: 'ADDRESS3' })
  public Address3: string;

  @Field()
  @Column({ name: 'COUNTRY' })
  public Country: string;

  @Field()
  @Column({ name: 'USERID' })
  public UserId: string;

  // @Field(() => Int)
  // @Column({ name: 'DEX_ROW_ID' })
  // public DexRowID: number;
}
