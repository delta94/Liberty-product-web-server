import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity({ name: 'IV40700', database: 'LFI', synchronize: false })
export class IV40700 extends BaseEntity {
  @Field()
  @Column({ name: 'LOCNCODE' })
  public locationCode: string;

  @Field()
  @Column({ name: 'LOCNDSCR' })
  public LOCNDSCR: string;

  @Field()
  @Column({ name: 'NOTEINDX' })
  public noteIndex: string;

  @Field()
  @Column({ name: 'ADDRESS1' })
  public address1: string;

  @Field()
  @Column({ name: 'ADDRESS2' })
  public address2: string;

  @Field()
  @Column({ name: 'ADDRESS3' })
  public address3: string;

  @Field()
  @Column({ name: 'CITY' })
  public city: string;

  @Field()
  @Column({ name: 'STATE' })
  public state: string;

  @Field()
  @Column({ name: 'ZIPCODE' })
  public zipCode: string;

  @Field()
  @Column({ name: 'COUNTRY' })
  public country: string;

  @Field()
  @Column({ name: 'PHONE1' })
  public phone1: string;

  @Field()
  @Column({ name: 'PHONE2' })
  public phone2: string;

  @Field()
  @Column({ name: 'PHONE3' })
  public phone3: string;

  @Field()
  @Column({ name: 'FAXNUMBR' })
  public faxNumber: string;

  @Field()
  @Column({ name: 'Location_Segment' })
  public locationSegment: string;

  @Field()
  @Column({ name: 'STAXSCHD' })
  public STAXSCHD: string;

  @Field()
  @Column({ name: 'PCTAXSCH' })
  public PCTAXSCH: string;

  @Field()
  @Column({ name: 'INCLDDINPLNNNG' })
  public INCLDDINPLNNNG: string;

  @Field()
  @Column({ name: 'PORECEIPTBIN' })
  public PORECEIPTBIN: string;

  @Field()
  @Column({ name: 'PORETRNBIN' })
  public PORETRNBIN: string;

  @Field()
  @Column({ name: 'SOFULFILLMENTBIN' })
  public SOFULFILLMENTBIN: string;

  @Field()
  @Column({ name: 'SORETURNBIN' })
  public SORETURNBIN: string;

  @Field()
  @Column({ name: 'BOMRCPTBIN' })
  public BOMRCPTBIN: string;

  @Field()
  @Column({ name: 'MATERIALISSUEBIN' })
  public MaterialIssueBin: string;

  @Field()
  @Column({ name: 'MORECEIPTBIN' })
  public MORECEIPTBIN: string;

  @Field()
  @Column({ name: 'REPAIRISSUESBIN' })
  public REPAIRISSUESBIN: string;

  @Field()
  @Column({ name: 'WMSINT' })
  public WMSINT: string;

  @Field()
  @Column({ name: 'PICKTICKETSITEOPT' })
  public PICKTICKETSITEOPT: string;

  @Field()
  @Column({ name: 'BINBREAK' })
  public binBreak: string;

  @Field()
  @Column({ name: 'CCode' })
  public CCode: string;

  @Field()
  @Column({ name: 'DECLID' })
  public declined: string;

  @Field()
  @Column({ name: 'INACTIVE' })
  public inactive: string;

  @Field()
  @PrimaryGeneratedColumn({ name: 'DEX_ROW_ID' })
  public id: string;
}
