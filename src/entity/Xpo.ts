import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Float, Int } from 'type-graphql';

@ObjectType()
@Entity({ name: 'lfi_tb_XPO', database: 'LFI', synchronize: false })
export class Xpo extends BaseEntity {
  @Field({ nullable: true, name: 'ID' })
  @PrimaryGeneratedColumn()
  public ID: string;

  @Field({ nullable: true, name: 'SOPTYPE' })
  @Column({ name: 'SOPTYPE' })
  public SopType: number;

  @Field({ nullable: true, name: 'SopNumber' })
  @Column({ name: 'SOPNUMBE' })
  public SopNumber: string;

  @Field({ nullable: true, name: 'CUSTCLAS' })
  @Column({ name: 'CUSTCLAS' })
  public CustomerClass: string;

  @Field({ nullable: true, name: 'CUSTNMBR' })
  @Column({ name: 'CUSTNMBR' })
  public CustomerNumber: string;

  @Field({ nullable: true, name: 'CUSTNAME' })
  @Column({ name: 'CUSTNAME' })
  public CustomerName: string;

  @Field({ nullable: true, name: 'DOCDATE' })
  @Column({ name: 'DOCDATE' })
  public DocDate: Date;

  @Field({ nullable: true, name: 'ORIGNUMB' })
  @Column({ name: 'ORIGNUMB' })
  public OriginNumber: string;

  @Field({ nullable: true, name: 'CSTPONBR' })
  @Column({ name: 'CSTPONBR' })
  public CustomPONumber: string;

  @Field({ nullable: true, name: 'AdditionalPO' })
  @Column({ name: 'ADD_PO#' })
  public AdditionalPO: string;

  @Field({ nullable: true, name: 'DOCID' })
  @Column({ name: 'DOCID' })
  public DocID: string;

  @Field({ nullable: true, name: 'CRD' })
  @Column({ name: 'CRD' })
  public CRD: Date;

  @Field({ nullable: true, name: 'ESD' })
  @Column({ name: 'ESD' })
  public ESD: Date;

  @Field({ nullable: true, name: 'Org_Date' })
  @Column({ name: 'Org_Date' })
  public OriginalDate: Date;

  @Field({ nullable: true, name: 'Terms' })
  @Column({ name: 'Terms' })
  public Terms: string;

  @Field({ nullable: true, name: 'PRCLEVEL' })
  @Column({ name: 'PRCLEVEL' })
  public PriceLevel: string;

  @Field({ nullable: true, name: 'LocationCode' })
  @Column({ name: 'LOCNCODE' })
  public LocationCode: string;

  @Field({ nullable: true, name: 'OrderLocationCode' })
  @Column({ name: 'Order_LOCNCODE' })
  public OrderLocationCode: string;

  @Field({ nullable: true, name: 'BILLTO_ID' })
  @Column({ name: 'BILLTO_ID' })
  public BillToID: string;

  @Field({ nullable: true, name: 'SHIPTO_ID' })
  @Column({ name: 'SHIPTO_ID' })
  public ShipToID: string;

  @Field({ nullable: true, name: 'ShipToName' })
  @Column({ name: 'ShipToName' })
  public ShipToName: string;

  @Field({ nullable: true, name: 'Address1' })
  @Column({ name: 'ADDRESS1' })
  public Address1: string;

  @Field({ nullable: true, name: 'Address2' })
  @Column({ name: 'ADDRESS2' })
  public Address2: string;

  @Field({ nullable: true, name: 'City' })
  @Column({ name: 'CITY' })
  public City: string;

  @Field({ nullable: true, name: 'State' })
  @Column({ name: 'STATE' })
  public State: string;

  @Field({ nullable: true, name: 'ZipCode' })
  @Column({ name: 'ZIPCODE' })
  public ZipCode: string;

  @Field({ nullable: true, name: 'Address3' })
  @Column({ name: 'ADDRESS3' })
  public Address3: string;

  @Field({ nullable: true, name: 'CNTCPRSN' })
  @Column({ name: 'CNTCPRSN' })
  public CNTCPRSN: string;

  @Field({ nullable: true, name: 'PHNUMBR1' })
  @Column({ name: 'PHNUMBR1' })
  public PhoneNumber1: string;

  @Field({ nullable: true, name: 'Fax' })
  @Column({ name: 'Fax' })
  public Fax: string;

  @Field({ nullable: true, name: 'COUNTRY' })
  @Column({ name: 'COUNTRY' })
  public Country: string;

  @Field({ nullable: true, name: 'Shipping_Method' })
  @Column({ name: 'Shipping_Method' })
  public ShippingMethod: string;

  @Field({ nullable: true, name: 'TRDISAMT' })
  @Column({ name: 'TRDISAMT' })
  public TRDISAMT: number;

  @Field({ nullable: true, name: 'SUBTOTAL' })
  @Column({ name: 'SUBTOTAL' })
  public SubTotal: number;

  @Field({ nullable: true, name: 'REMSUBTO' })
  @Column({ name: 'REMSUBTO' })
  public REMSUBTO: number;

  @Field({ nullable: true, name: 'FRTAMNT' })
  @Column({ name: 'FRTAMNT' })
  public FRTAMNT: number;

  @Field({ nullable: true, name: 'MISCAMNT' })
  @Column({ name: 'MISCAMNT' })
  public MISCAMNT: number;

  @Field({ nullable: true, name: 'DOCAMNT' })
  @Column({ name: 'DOCAMNT' })
  public DOCAMNT: number;

  @Field({ nullable: true, name: 'SLPRSNID' })
  @Column({ name: 'SLPRSNID' })
  public SLPRSNID: string;

  @Field({ nullable: true, name: 'Bank_Trans_Date' })
  @Column({ name: 'Bank_Trans_Date' })
  public Bank_Trans_Date: string;

  @Field({ nullable: true, name: 'Bank_Approval_Date' })
  @Column({ name: 'Bank_Approval_Date' })
  public Bank_Approval_Date: string;

  @Field({ nullable: true, name: 'Ack_Status' })
  @Column({ name: 'Ack_Status' })
  public Ack_Status: string;

  @Field({ nullable: true, name: 'Freight_Percent' })
  @Column({ name: 'Freight_Percent' })
  public Freight_Percent: string;

  @Field({ nullable: true, name: 'Freight_Method' })
  @Column({ name: 'Freight_Method' })
  public Freight_Method: string;

  @Field({ nullable: true, name: 'Bank_Ref' })
  @Column({ name: 'Bank_Ref' })
  public Bank_Ref: string;

  @Field({ nullable: true, name: 'Approval_Status' })
  @Column({ name: 'Approval_Status' })
  public Approval_Status: string;

  @Field({ nullable: true, name: 'PO_Number' })
  @Column({ name: 'PO_Number' })
  public PO_Number: string;

  @Field({ nullable: true, name: 'Customer_Tag' })
  @Column({ name: 'Customer_Tag' })
  public Customer_Tag: string;

  @Field({ nullable: true, name: 'Container_ID' })
  @Column({ name: 'Container_ID' })
  public Container_ID: string;

  @Field({ nullable: true, name: 'Order_Status' })
  @Column({ name: 'Order_Status' })
  public Order_Status: string;

  @Field({ nullable: true, name: 'COMMENT_2' })
  @Column({ name: 'COMMENT_2' })
  public COMMENT_2: string;

  @Field({ nullable: true, name: 'COMMENT_3' })
  @Column({ name: 'COMMENT_3' })
  public COMMENT_3: string;

  @Field({ nullable: true, name: 'COMMENT_4' })
  @Column({ name: 'COMMENT_4' })
  public COMMENT_4: string;

  @Field({ nullable: true, name: 'CMMTTEXT' })
  @Column({ name: 'CMMTTEXT' })
  public CMMTTEXT: string;

  @Field({ nullable: true, name: 'BACHNUMB' })
  @Column({ name: 'BACHNUMB' })
  public BACHNUMB: string;

  @Field({ nullable: true, name: 'COMMNTID' })
  @Column({ name: 'COMMNTID' })
  public COMMNTID: string;

  @Field({ nullable: true, name: 'LNITMSEQ' })
  @Column({ name: 'LNITMSEQ' })
  public LNITMSEQ: number;

  @Field({ nullable: true, name: 'CMPNTSEQ' })
  @Column({ name: 'CMPNTSEQ' })
  public CMPNTSEQ: number;

  @Field({ nullable: true, name: 'ITMCLSCD' })
  @Column({ name: 'ITMCLSCD' })
  public ITMCLSCD: string;

  @Field({ nullable: true, name: 'ITEMNMBR' })
  @Column({ name: 'ITEMNMBR' })
  public ITEMNMBR: string;

  @Field({ nullable: true, name: 'ITEMDESC' })
  @Column({ name: 'ITEMDESC' })
  public ITEMDESC: string;

  @Field({ nullable: true, name: 'UNITPRCE' })
  @Column({ name: 'UNITPRCE' })
  public UNITPRCE: number;

  @Field({ nullable: true, name: 'XTNDPRCE' })
  @Column({ name: 'XTNDPRCE' })
  public XTNDPRCE: number;

  @Field({ nullable: true, name: 'QTY' })
  @Column({ name: 'QTY' })
  public QTY: number;

  @Field({ nullable: true, name: 'QTY_ALLOCATED' })
  @Column({ name: 'QTY_ALLOCATED' })
  public QTY_ALLOCATED: number;

  @Field({ nullable: true, name: 'QTY_BO' })
  @Column({ name: 'QTY_BO' })
  public QTY_BO: number;

  @Field({ nullable: true, name: 'Cubes' })
  @Column({ name: 'Cubes' })
  public Cubes: number;

  @Field({ nullable: true, name: 'EP_Carton' })
  @Column({ name: 'EP_Carton' })
  public EP_Carton: number;

  @Field({ nullable: true, name: 'EP_FREIGHTCLASS' })
  @Column({ name: 'EP_FREIGHTCLASS' })
  public EP_FREIGHTCLASS: number;

  @Field({ nullable: true, name: 'Ext_Carton' })
  @Column({ name: 'Ext_Carton' })
  public Ext_Carton: number;

  @Field({ nullable: true, name: 'Ext_Cubes' })
  @Column({ name: 'Ext_Cubes' })
  public Ext_Cubes: number;

  @Field({ nullable: true, name: 'Ext_Weight' })
  @Column({ name: 'Ext_Weight' })
  public Ext_Weight: number;

  @Field({ nullable: true, name: 'TIMESPRT' })
  @Column({ name: 'TIMESPRT' })
  public TIMESPRT: number;

  @Field({ nullable: true, name: 'RETUDATE' })
  @Column({ name: 'RETUDATE' })
  public RETUDATE: string;

  @Field({ nullable: true, name: 'ORDRDATE' })
  @Column({ name: 'ORDRDATE' })
  public ORDRDATE: string;

  @Field({ nullable: true, name: 'USER2ENT' })
  @Column({ name: 'USER2ENT' })
  public USER2ENT: string;

  @Field({ nullable: true, name: 'USERDEF2' })
  @Column({ name: 'USERDEF2' })
  public USERDEF2: string;

  @Field({ nullable: true, name: 'USERDEF1' })
  @Column({ name: 'USERDEF1' })
  public USERDEF1: string;

  @Field({ nullable: true, name: 'COMMENT1' })
  @Column({ name: 'COMMENT1' })
  public COMMENT1: string;

  @Field({ nullable: true, name: 'COMMENT2' })
  @Column({ name: 'COMMENT2' })
  public COMMENT2: string;

  @Field({ nullable: true, name: 'DATE1' })
  @Column({ name: 'DATE1' })
  public DATE1: string;

  @Field({ nullable: true, name: 'TIME1' })
  @Column({ name: 'TIME1' })
  public TIME1: string;

  @Field({ nullable: true, name: 'Line_Item_Comment' })
  @Column({ name: 'Line_Item_Comment' })
  public Line_Item_Comment: string;

  @Field({ nullable: true, name: 'MSTRNUMB' })
  @Column({ name: 'MSTRNUMB' })
  public MSTRNUMB: number;

  @Field({ nullable: true, name: 'ITEMTYPE' })
  @Column({ name: 'ITEMTYPE' })
  public ITEMTYPE: number;

  @Field({ nullable: true, name: 'Customer_Comments' })
  @Column({ name: 'Customer_Comments' })
  public Customer_Comments: string;

  @Field({ nullable: true, name: 'QTYTOINV' })
  @Column({ name: 'QTYTOINV' })
  public QTYTOINV: number;

  @Field({ nullable: true, name: 'PHONE1' })
  @Column({ name: 'PHONE1' })
  public PHONE1: string;

  @Field({ nullable: true, name: 'EXT_CARTON_wo_KITS' })
  @Column({ name: 'EXT_CARTON_wo_KITS' })
  public EXT_CARTON_wo_KITS: number;

  @Field({ nullable: true, name: 'EXT_CUBES_wo_KITS' })
  @Column({ name: 'EXT_CUBES_wo_KITS' })
  public EXT_CUBES_wo_KITS: number;

  @Field({ nullable: true, name: 'EXT_WEIGHT_wo_KITS' })
  @Column({ name: 'EXT_WEIGHT_wo_KITS' })
  public EXT_WEIGHT_wo_KITS: number;

  @Field({ nullable: true, name: 'Freight_Class' })
  @Column({ name: 'Freight_Class' })
  public Freight_Class: number;

  @Field({ nullable: true, name: 'Status' })
  @Column({ name: 'Status' })
  public Status: string;

  @Field({ nullable: true, name: 'Category' })
  @Column({ name: 'Category' })
  public Category: string;

  @Field({ nullable: true, name: 'Tracking_Number' })
  @Column({ name: 'Tracking_Number' })
  public Tracking_Number: string;

  @Field({ nullable: true, name: 'VOIDSTTS' })
  @Column({ name: 'VOIDSTTS' })
  public VOIDSTTS: number;

  @Field({ nullable: true, name: 'Web_Order_Number' })
  @Column({ name: 'Web_Order_Number' })
  public Web_Order_Number: string;

  @Field({ nullable: true, name: 'ServiceLevelCode' })
  @Column({ name: 'Service_Level_Code' })
  public ServiceLevelCode: string;

  @Field(() => Float, { nullable: true, name: 'EPBOXWIDTH' })
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'EPBOXWIDTH' })
  public EPBOXWIDTH: number;

  @Field(() => Float, { nullable: true, name: 'EPBOXHEIGHT' })
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'EPBOXHEIGHT' })
  public EPBOXHEIGHT: number;

  @Field(() => Float, { nullable: true, name: 'EPBOXDEPTH' })
  @Column({ type: 'decimal', precision: 19, scale: 5, name: 'EPBOXDEPTH' })
  public EPBOXDEPTH: number;

  @Field(() => Int, { nullable: true, name: 'Weight' })
  @Column({ name: 'Weight' })
  public Weight: number;

  @Field(() => Date, { nullable: true, name: 'Inserted_Date' })
  @Column({ name: 'Inserted_Date' })
  public InsertedDate: Date;

  @Field(() => Date, { nullable: true, name: 'Processed_Date' })
  @Column({ name: 'Processed_Date', nullable: true })
  public ProcessedDate?: Date;

  @Field(() => Date, { nullable: true, name: 'Label_Received_Date' })
  @Column({ name: 'Label_Received_Date', nullable: true })
  public LabelReceivedDate?: Date;
}
