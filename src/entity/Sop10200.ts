import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity({ name: 'SOP10200', database: 'LFI', synchronize: false })
export class Sop10200 extends BaseEntity {
  @Field()
  @Column({ name: 'SOPTYPE' })
  public SOPTYPE: string;

  @Field()
  @Column({ name: 'SOPNUMBE' })
  public SopNumber: string;

  @Field()
  @Column({ name: 'LNITMSEQ' })
  public LNITMSEQ: string;

  @Field()
  @Column({ name: 'CMPNTSEQ' })
  public CMPNTSEQ: string;

  @Field()
  @Column({ name: 'ITEMNMBR' })
  public ITEMNMBR: string;

  @Field()
  @Column({ name: 'ITEMDESC' })
  public ITEMDESC: string;

  @Field()
  @Column({ name: 'NONINVEN' })
  public NONINVEN: string;

  @Field()
  @Column({ name: 'DROPSHIP' })
  public DROPSHIP: string;

  @Field()
  @Column({ name: 'UOFM' })
  public UOFM: string;

  @Field()
  @Column({ name: 'LOCNCODE' })
  public LocationCode: string;

  @Field()
  @Column({ name: 'UNITCOST' })
  public UNITCOST: string;

  @Field()
  @Column({ name: 'ORUNTCST' })
  public ORUNTCST: string;

  @Field()
  @Column({ name: 'UNITPRCE' })
  public UNITPRCE: string;

  @Field()
  @Column({ name: 'ORUNTPRC' })
  public ORUNTPRC: string;

  @Field()
  @Column({ name: 'XTNDPRCE' })
  public XTNDPRCE: string;

  @Field()
  @Column({ name: 'OXTNDPRC' })
  public OXTNDPRC: string;

  @Field()
  @Column({ name: 'REMPRICE' })
  public REMPRICE: string;

  @Field()
  @Column({ name: 'OREPRICE' })
  public OREPRICE: string;

  @Field()
  @Column({ name: 'EXTDCOST' })
  public EXTDCOST: string;

  @Field()
  @Column({ name: 'OREXTCST' })
  public OREXTCST: string;

  @Field()
  @Column({ name: 'MRKDNAMT' })
  public MRKDNAMT: string;

  @Field()
  @Column({ name: 'ORMRKDAM' })
  public ORMRKDAM: string;

  @Field()
  @Column({ name: 'MRKDNPCT' })
  public MRKDNPCT: string;

  @Field()
  @Column({ name: 'MRKDNTYP' })
  public MRKDNTYP: string;

  @Field()
  @Column({ name: 'INVINDX' })
  public INVINDX: string;

  @Field()
  @Column({ name: 'CSLSINDX' })
  public CSLSINDX: string;

  @Field()
  @Column({ name: 'SLSINDX' })
  public SLSINDX: string;

  @Field()
  @Column({ name: 'MKDNINDX' })
  public MKDNINDX: string;

  @Field()
  @Column({ name: 'RTNSINDX' })
  public RTNSINDX: string;

  @Field()
  @Column({ name: 'INUSINDX' })
  public INUSINDX: string;

  @Field()
  @Column({ name: 'INSRINDX' })
  public INSRINDX: string;

  @Field()
  @Column({ name: 'DMGDINDX' })
  public DMGDINDX: string;

  @Field()
  @Column({ name: 'ITMTSHID' })
  public ITMTSHID: string;

  @Field()
  @Column({ name: 'IVITMTXB' })
  public IVITMTXB: string;

  @Field()
  @Column({ name: 'BKTSLSAM' })
  public BKTSLSAM: string;

  @Field()
  @Column({ name: 'ORBKTSLS' })
  public ORBKTSLS: string;

  @Field()
  @Column({ name: 'TAXAMNT' })
  public TAXAMNT: string;

  @Field()
  @Column({ name: 'ORTAXAMT' })
  public ORTAXAMT: string;

  @Field()
  @Column({ name: 'TXBTXAMT' })
  public TXBTXAMT: string;

  @Field()
  @Column({ name: 'OTAXTAMT' })
  public OTAXTAMT: string;

  @Field()
  @Column({ name: 'BSIVCTTL' })
  public BSIVCTTL: string;

  @Field()
  @Column({ name: 'TRDISAMT' })
  public TRDISAMT: string;

  @Field()
  @Column({ name: 'ORTDISAM' })
  public ORTDISAM: string;

  @Field()
  @Column({ name: 'DISCSALE' })
  public DISCSALE: string;

  @Field()
  @Column({ name: 'ORDAVSLS' })
  public ORDAVSLS: string;

  @Field()
  @Column({ name: 'QUANTITY' })
  public QUANTITY: string;

  @Field()
  @Column({ name: 'ATYALLOC' })
  public ATYALLOC: string;

  @Field()
  @Column({ name: 'QTYINSVC' })
  public QTYINSVC: string;

  @Field()
  @Column({ name: 'QTYINUSE' })
  public QTYINUSE: string;

  @Field()
  @Column({ name: 'QTYDMGED' })
  public QTYDMGED: string;

  @Field()
  @Column({ name: 'QTYRTRND' })
  public QTYRTRND: string;

  @Field()
  @Column({ name: 'QTYONHND' })
  public QTYONHND: string;

  @Field()
  @Column({ name: 'QTYCANCE' })
  public QTYCANCE: string;

  @Field()
  @Column({ name: 'QTYCANOT' })
  public QTYCANOT: string;

  @Field()
  @Column({ name: 'QTYONPO' })
  public QTYONPO: string;

  @Field()
  @Column({ name: 'QTYORDER' })
  public QTYORDER: string;

  @Field()
  @Column({ name: 'QTYPRBAC' })
  public QTYPRBAC: string;

  @Field()
  @Column({ name: 'QTYPRBOO' })
  public QTYPRBOO: string;

  @Field()
  @Column({ name: 'QTYPRINV' })
  public QTYPRINV: string;

  @Field()
  @Column({ name: 'QTYPRORD' })
  public QTYPRORD: string;

  @Field()
  @Column({ name: 'QTYPRVRECVD' })
  public QTYPRVRECVD: string;

  @Field()
  @Column({ name: 'QTYRECVD' })
  public QTYRECVD: string;

  @Field()
  @Column({ name: 'QTYREMAI' })
  public QTYREMAI: string;

  @Field()
  @Column({ name: 'QTYREMBO' })
  public QTYREMBO: string;

  @Field()
  @Column({ name: 'QTYTBAOR' })
  public QTYTBAOR: string;

  @Field()
  @Column({ name: 'QTYTOINV' })
  public QTYTOINV: string;

  @Field()
  @Column({ name: 'QTYTORDR' })
  public QTYTORDR: string;

  @Field()
  @Column({ name: 'QTYFULFI' })
  public QTYFULFI: string;

  @Field()
  @Column({ name: 'QTYSLCTD' })
  public QTYSLCTD: string;

  @Field()
  @Column({ name: 'QTYBSUOM' })
  public QTYBSUOM: string;

  @Field()
  @Column({ name: 'EXTQTYAL' })
  public EXTQTYAL: string;

  @Field()
  @Column({ name: 'EXTQTYSEL' })
  public EXTQTYSEL: string;

  @Field()
  @Column({ name: 'ReqShipDate' })
  public ReqShipDate: string;

  @Field()
  @Column({ name: 'FUFILDAT' })
  public FUFILDAT: string;

  @Field()
  @Column({ name: 'ACTLSHIP' })
  public ACTLSHIP: string;

  @Field()
  @Column({ name: 'SHIPMTHD' })
  public SHIPMTHD: string;

  @Field()
  @Column({ name: 'SALSTERR' })
  public SALSTERR: string;

  @Field()
  @Column({ name: 'SLPRSNID' })
  public SLPRSNID: string;

  @Field()
  @Column({ name: 'PRCLEVEL' })
  public PRCLEVEL: string;

  @Field()
  @Column({ name: 'COMMNTID' })
  public COMMNTID: string;

  @Field()
  @Column({ name: 'BRKFLD1' })
  public BRKFLD1: string;

  @Field()
  @Column({ name: 'BRKFLD2' })
  public BRKFLD2: string;

  @Field()
  @Column({ name: 'BRKFLD3' })
  public BRKFLD3: string;

  @Field()
  @Column({ name: 'CURRNIDX' })
  public CURRNIDX: string;

  @Field()
  @Column({ name: 'TRXSORCE' })
  public TRXSORCE: string;

  @Field()
  @Column({ name: 'SOPLNERR' })
  public SOPLNERR: string;

  @Field()
  @Column({ name: 'ORGSEQNM' })
  public ORGSEQNM: string;

  @Field()
  @Column({ name: 'ITEMCODE' })
  public ITEMCODE: string;

  @Field()
  @Column({ name: 'PURCHSTAT' })
  public PURCHSTAT: string;

  @Field()
  @Column({ name: 'DECPLQTY' })
  public DECPLQTY: string;

  @Field()
  @Column({ name: 'DECPLCUR' })
  public DECPLCUR: string;

  @Field()
  @Column({ name: 'ODECPLCU' })
  public ODECPLCU: string;

  @Field()
  @Column({ name: 'QTYTOSHP' })
  public QTYTOSHP: string;

  @Field()
  @Column({ name: 'XFRSHDOC' })
  public XFRSHDOC: string;

  @Field()
  @Column({ name: 'EXCEPTIONALDEMAND' })
  public EXCEPTIONALDEMAND: string;

  @Field()
  @Column({ name: 'TAXSCHID' })
  public TAXSCHID: string;

  @Field()
  @Column({ name: 'TXSCHSRC' })
  public TXSCHSRC: string;

  @Field()
  @Column({ name: 'PRSTADCD' })
  public PRSTADCD: string;

  @Field()
  @Column({ name: 'ShipToName' })
  public ShipToName: string;

  @Field()
  @Column({ name: 'CNTCPRSN' })
  public CNTCPRSN: string;

  @Field()
  @Column({ name: 'ADDRESS1' })
  public ADDRESS1: string;

  @Field()
  @Column({ name: 'ADDRESS2' })
  public ADDRESS2: string;

  @Field()
  @Column({ name: 'ADDRESS3' })
  public ADDRESS3: string;

  @Field()
  @Column({ name: 'CITY' })
  public CITY: string;

  @Field()
  @Column({ name: 'STATE' })
  public STATE: string;

  @Field()
  @Column({ name: 'ZIPCODE' })
  public ZIPCODE: string;

  @Field()
  @Column({ name: 'CCode' })
  public CCode: string;

  @Field()
  @Column({ name: 'COUNTRY' })
  public COUNTRY: string;

  @Field()
  @Column({ name: 'PHONE1' })
  public PHONE1: string;

  @Field()
  @Column({ name: 'PHONE2' })
  public PHONE2: string;

  @Field()
  @Column({ name: 'PHONE3' })
  public PHONE3: string;

  @Field()
  @Column({ name: 'FAXNUMBR' })
  public FAXNUMBR: string;

  @Field()
  @Column({ name: 'Flags' })
  public Flags: string;

  @Field()
  @Column({ name: 'BackoutTradeDisc' })
  public BackoutTradeDisc: string;

  @Field()
  @Column({ name: 'OrigBackoutTradeDisc' })
  public OrigBackoutTradeDisc: string;

  @Field()
  @Column({ name: 'GPSFOINTEGRATIONID' })
  public GPSFOINTEGRATIONID: string;

  @Field()
  @Column({ name: 'INTEGRATIONSOURCE' })
  public INTEGRATIONSOURCE: string;

  @Field()
  @Column({ name: 'INTEGRATIONID' })
  public INTEGRATIONID: string;

  @Field()
  @Column({ name: 'CONTNBR' })
  public CONTNBR: string;

  @Field()
  @Column({ name: 'CONTLNSEQNBR' })
  public CONTLNSEQNBR: string;

  @Field()
  @Column({ name: 'CONTSTARTDTE' })
  public CONTSTARTDTE: string;

  @Field()
  @Column({ name: 'CONTENDDTE' })
  public CONTENDDTE: string;

  @Field()
  @Column({ name: 'CONTITEMNBR' })
  public CONTITEMNBR: string;

  @Field()
  @Column({ name: 'CONTSERIALNBR' })
  public CONTSERIALNBR: string;

  @Field()
  @Column({ name: 'BULKPICKPRNT' })
  public BULKPICKPRNT: string;

  @Field()
  @Column({ name: 'INDPICKPRNT' })
  public INDPICKPRNT: string;

  @Field()
  @Column({ name: 'ISLINEINTRA' })
  public ISLINEINTRA: string;

  @Field()
  @Column({ name: 'SOFULFILLMENTBIN' })
  public SOFULFILLMENTBIN: string;

  @Field()
  @Column({ name: 'MULTIPLEBINS' })
  public MULTIPLEBINS: string;

  @Field()
  @Column({ name: 'Print_Phone_NumberGB' })
  public Print_Phone_NumberGB: string;

  @Field()
  @Column({ name: 'DEX_ROW_TS' })
  public DEX_ROW_TS: string;

  @Field()
  @PrimaryGeneratedColumn({ name: 'DEX_ROW_ID' })
  public DEX_ROW_ID: string;
}
