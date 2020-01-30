import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity({ name: 'SOP10107', database: 'LFI', synchronize: false })
export class Sop10107 extends BaseEntity {
  @Field({ name: 'DexRowId' })
  @PrimaryGeneratedColumn()
  public DEX_ROW_ID: string;

  @Field({ name: 'SopNumber' })
  @Column({ name: 'SOPNUMBE' })
  public SopNumber: string;

  @Field({ name: 'SopType' })
  @Column({ name: 'SOPTYPE' })
  public SopType: number;

  @Field({ name: 'TrackingNumber' })
  @Column({ name: 'Tracking_Number' })
  public TrackingNumber: string;
}
