import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'lfi_tb_XPO_Labels', database: 'LFI', synchronize: false })
export class XpoLabel extends BaseEntity {
  @Field({ nullable: true, name: 'ID' })
  @PrimaryGeneratedColumn()
  public ID: string;

  @Field({ name: 'SopNumber' })
  @Column({ name: 'SOPNUMBE' })
  public SopNumber: string;

  @Field({ name: 'LabelId' })
  @Column({ name: 'LabelID' })
  public LabelId: string;

  @Field({ name: 'Folder' })
  @Column({ name: 'Folder' })
  public Folder: string;

  @Field({ name: 'LabelData' })
  @Column({ type: 'nvarchar', length: 'MAX', name: 'Label_Raw_Data' })
  public LabelData: string;

  @Field({ nullable: true })
  @Column({ name: 'BookingID', nullable: true })
  public BookingId?: string;
}
