import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from 'type-graphql';

@ObjectType()
@Entity({ name: 'Customer_Data', database: 'LFI', synchronize: false })
export class CustomerData extends BaseEntity {
  @Field()
  @PrimaryColumn({ name: 'Customer_Number' })
  public Customer_Number: string;

  @Field()
  @Column({ name: 'Customer_Name' })
  public Customer_Name: string;

  @Field()
  @Column({ name: 'Customer_Class' })
  public Customer_Class: string;

  @Field()
  @Column({ name: 'Salesperson' })
  public Salesperson: string;

  @Field()
  @Column({ name: 'Customer_Service' })
  public Customer_Service: string;

  @Field()
  @Column({ name: 'Bank_Account' })
  public Bank_Account: string;

  @Field()
  @Column({ name: 'Freight_Percent' })
  public Freight_Percent: string;

  @Field()
  @Column({ name: 'Delivery_Instructions' })
  public Delivery_Instructions: string;

  @Field()
  @Column({ name: 'Special_Instructions' })
  public Special_Instructions: string;

  @Field()
  @Column({ name: 'Price_Level' })
  public Price_Level: string;

  @Field()
  @Column({ name: 'Payment_Terms' })
  public Payment_Terms: string;

  @Field()
  @Column({ name: 'Bill_To_Address' })
  public Bill_To_Address: string;

  @Field()
  @Column({ name: 'Ship_To_Address' })
  public Ship_To_Address: string;

  @Field()
  @Column({ name: 'Shipping_Method' })
  public Shipping_Method: string;

  @Field()
  @Column({ name: 'PHONE_1' })
  public PHONE_1: string;

  @Field()
  @Column({ name: 'PHONE_2' })
  public PHONE_2: string;

  @Field()
  @Column({ name: 'PHONE_3' })
  public PHONE_3: string;

  @Field(() => Int)
  @Column({ name: 'SHIPCOMPLETE' })
  public SHIPCOMPLETE: number;

  @Field(() => Int)
  @Column({ name: 'INACTIVE' })
  public INACTIVE: number;

  @Field()
  @Column({ nullable: true, name: 'Key_Account' })
  public Key_Account: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Freight_$_Minimum' })
  public Freight_Minimum: number;

  @Field()
  @Column({ nullable: true, name: 'Pallets_Required' })
  public Pallets_Required: string;

  @Field()
  @Column({ nullable: true, name: 'Barcodes_Required' })
  public Barcodes_Required: string;

  @Field()
  @Column({ nullable: true, name: 'Custom_Shipping_Documents' })
  public Custom_Shipping_Documents: string;

  @Field()
  @Column({ nullable: true, name: 'Status_Level' })
  public Status_Level: string;

  @Field()
  @Column({ nullable: true, name: 'Delivery_Notice_Hours' })
  public Delivery_Notice_Hours: string;

  @Field()
  @Column({ nullable: true, name: 'EDI_Setup' })
  public EDI_Setup: string;

  @Field()
  @Column({ nullable: true, name: 'Alternative_Warehouse_Shipment' })
  public Alternative_Warehouse_Shipment: string;

  @Field()
  @Column({ nullable: true, name: 'Ship_Incomplete_Collections' })
  public Ship_Incomplete_Collections: string;

  @Field()
  @Column({ nullable: true, name: 'Truckload_Only' })
  public Truckload_Only: string;

  @Field(() => Float)
  @Column({ nullable: true, name: 'Truckload_%' })
  public TruckloadPercent: number;

  @Field(() => Float)
  @Column({ nullable: true, name: 'Half_Truckload_%' })
  public HalfTruckloadPercent: number;

  @Field(() => Float)
  @Column({ nullable: true, name: 'LTL_%' })
  public LTLPercent: number;

  @Field()
  @Column({ nullable: true, name: 'Website_User' })
  public Website_User: string;

  @Field()
  @Column({ nullable: true, name: 'Domain_Name_1' })
  public Domain_Name_1: string;

  @Field()
  @Column({ nullable: true, name: 'Domain_Name_2' })
  public Domain_Name_2: string;

  @Field()
  @Column({ nullable: true, name: 'Domain_Name_3' })
  public Domain_Name_3: string;

  @Field()
  @Column({ nullable: true, name: 'Domain_Name_4' })
  public Domain_Name_4: string;

  @Field()
  @Column({ nullable: true, name: 'Domain_Name_5' })
  public Domain_Name_5: string;

  @Field()
  @Column({ nullable: true, name: 'iPad_PRCLEVEL' })
  public iPad_PRCLEVEL: string;

  @Field()
  @Column({ nullable: true, name: 'Report_ID' })
  public Report_ID: string;

  @Field()
  @Column({ nullable: true, name: 'LFI_Username' })
  public LFI_Username: string;

  @Field()
  @Column({ nullable: true, name: 'LFI_Password' })
  public LFI_Password: string;

  @Field()
  @Column({ nullable: true, name: 'Web_Email' })
  public Web_Email: string;

  @Field()
  @Column({ nullable: true, name: 'FTP_Site' })
  public FTP_Site: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 4' })
  public Phone4: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 5' })
  public Phone5: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 6' })
  public Phone6: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 7' })
  public Phone7: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 8' })
  public Phone8: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 9' })
  public Phone9: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 10' })
  public Phone10: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 11' })
  public Phone11: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 12' })
  public Phone12: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 13' })
  public Phone13: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 14' })
  public Phone14: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 15' })
  public Phone15: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 16' })
  public Phone16: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 17' })
  public Phone17: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 18' })
  public Phone18: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 19' })
  public Phone19: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 20' })
  public Phone20: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 21' })
  public Phone21: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 22' })
  public Phone22: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 23' })
  public Phone23: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 24' })
  public Phone24: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 26' })
  public Phone26: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 27' })
  public Phone27: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 28' })
  public Phone28: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 29' })
  public Phone29: string;

  @Field()
  @Column({ nullable: true, name: 'Phone 30' })
  public Phone30: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Return_Allowance' })
  public Return_Allowance: number;

  @Field()
  @Column({ nullable: true, name: 'Return_Apply_Method' })
  public Return_Apply_Method: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Advertising_Allowance' })
  public Advertising_Allowance: number;

  @Field()
  @Column({ nullable: true, name: 'Advertising_Apply_Method' })
  public Advertising_Apply_Method: string;

  @Field()
  @Column({ nullable: true, name: 'Credits_Not_Authorized' })
  public Credits_Not_Authorized: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Floor_Sample_Discount' })
  public Floor_Sample_Discount: number;

  @Field()
  @Column({ nullable: true, name: 'SOP_Document' })
  public SOP_Document: string;

  @Field()
  @Column({ nullable: true, name: 'Notes' })
  public Notes: string;

  @Field()
  @Column({ nullable: true, name: 'LFI_Financing' })
  public LFI_Financing: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 19, scale: 5, nullable: true, name: 'Credit_Limit' })
  public Credit_Limit: number;

  @Field()
  @Column({ nullable: true, name: 'Credit_Application' })
  public Credit_Application: string;

  @Field()
  @Column({ name: 'CITY' })
  public CITY: string;

  @Field()
  @Column({ name: 'STATE' })
  public STATE: string;

  @Field()
  @Column({ name: 'ZIP' })
  public ZIP: string;

  @Field(() => Int)
  @Column({ name: 'HOLD' })
  public HOLD: number;

  @Field()
  @Column({ nullable: true, name: 'Alt Payment Terms' })
  public AltPaymentTerms: string;

  @Field()
  @Column({ nullable: true, name: 'Visitor_Group' })
  public Visitor_Group: string;

  @Field()
  @Column({ nullable: true, name: 'Buying_Group' })
  public Buying_Group: string;

  @Field(() => Int)
  @Column({ name: 'CRLMTPER' })
  public CRLMTPER: number;

  @Field(() => Int)
  @Column({ name: 'Trade_Discount' })
  public Trade_Discount: number;

  [key: string]: any;
}
