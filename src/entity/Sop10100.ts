import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity({ name: 'SOP10100', database: 'LFI', synchronize: false })
export class Sop10100 extends BaseEntity {
  @Field()
  @Column({ name: 'SOPTYPE' })
  public SOPTYPE: string;

  @Field()
  @Column({ name: 'SOPNUMBE' })
  public SopNumber: string;

  @Field()
  @Column({ name: 'ORIGTYPE' })
  public ORIGTYPE: string;

  @Field()
  @Column({ name: 'ORIGNUMB' })
  public ORIGNUMB: string;

  @Field()
  @Column({ name: 'DOCID' })
  public DOCID: string;

  @Field()
  @Column({ name: 'DOCDATE' })
  public DOCDATE: string;

  @Field()
  @Column({ name: 'GLPOSTDT' })
  public GLPOSTDT: string;

  @Field()
  @Column({ name: 'QUOTEDAT' })
  public QUOTEDAT: string;

  @Field()
  @Column({ name: 'QUOEXPDA' })
  public QUOEXPDA: string;

  @Field()
  @Column({ name: 'ORDRDATE' })
  public ORDRDATE: string;

  @Field()
  @Column({ name: 'INVODATE' })
  public INVODATE: string;

  @Field()
  @Column({ name: 'BACKDATE' })
  public BACKDATE: string;

  @Field()
  @Column({ name: 'RETUDATE' })
  public RETUDATE: string;

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
  @Column({ name: 'DISCDATE' })
  public DISCDATE: string;

  @Field()
  @Column({ name: 'DUEDATE' })
  public DUEDATE: string;

  @Field()
  @Column({ name: 'REPTING' })
  public REPTING: string;

  @Field()
  @Column({ name: 'TRXFREQU' })
  public TRXFREQU: string;

  @Field()
  @Column({ name: 'TIMEREPD' })
  public TIMEREPD: string;

  @Field()
  @Column({ name: 'TIMETREP' })
  public TIMETREP: string;

  @Field()
  @Column({ name: 'DYSTINCR' })
  public DYSTINCR: string;

  @Field()
  @Column({ name: 'DTLSTREP' })
  public DTLSTREP: string;

  @Field()
  @Column({ name: 'DSTBTCH1' })
  public DSTBTCH1: string;

  @Field()
  @Column({ name: 'DSTBTCH2' })
  public DSTBTCH2: string;

  @Field()
  @Column({ name: 'USDOCID1' })
  public USDOCID1: string;

  @Field()
  @Column({ name: 'USDOCID2' })
  public USDOCID2: string;

  @Field()
  @Column({ name: 'DISCFRGT' })
  public DISCFRGT: string;

  @Field()
  @Column({ name: 'ORDAVFRT' })
  public ORDAVFRT: string;

  @Field()
  @Column({ name: 'DISCMISC' })
  public DISCMISC: string;

  @Field()
  @Column({ name: 'ORDAVMSC' })
  public ORDAVMSC: string;

  @Field()
  @Column({ name: 'DISAVAMT' })
  public DISAVAMT: string;

  @Field()
  @Column({ name: 'ORDAVAMT' })
  public ORDAVAMT: string;

  @Field()
  @Column({ name: 'DISCRTND' })
  public DISCRTND: string;

  @Field()
  @Column({ name: 'ORDISRTD' })
  public ORDISRTD: string;

  @Field()
  @Column({ name: 'DISTKNAM' })
  public DISTKNAM: string;

  @Field()
  @Column({ name: 'ORDISTKN' })
  public ORDISTKN: string;

  @Field()
  @Column({ name: 'DSCPCTAM' })
  public DSCPCTAM: string;

  @Field()
  @Column({ name: 'DSCDLRAM' })
  public DSCDLRAM: string;

  @Field()
  @Column({ name: 'ORDDLRAT' })
  public ORDDLRAT: string;

  @Field()
  @Column({ name: 'DISAVTKN' })
  public DISAVTKN: string;

  @Field()
  @Column({ name: 'ORDATKN' })
  public ORDATKN: string;

  @Field()
  @Column({ name: 'PYMTRMID' })
  public PYMTRMID: string;

  @Field()
  @Column({ name: 'PRCLEVEL' })
  public PRCLEVEL: string;

  @Field()
  @Column({ name: 'LOCNCODE' })
  public LocationCode: string;

  @Field()
  @Column({ name: 'BCHSOURC' })
  public BCHSOURC: string;

  @Field()
  @Column({ name: 'BACHNUMB' })
  public BACHNUMB: string;

  @Field()
  @Column({ name: 'CUSTNMBR' })
  public CUSTNMBR: string;

  @Field()
  @Column({ name: 'CUSTNAME' })
  public CUSTNAME: string;

  @Field()
  @Column({ name: 'CSTPONBR' })
  public CSTPONBR: string;

  @Field()
  @Column({ name: 'PROSPECT' })
  public PROSPECT: string;

  @Field()
  @Column({ name: 'MSTRNUMB' })
  public MSTRNUMB: string;

  @Field()
  @Column({ name: 'PCKSLPNO' })
  public PCKSLPNO: string;

  @Field()
  @Column({ name: 'PICTICNU' })
  public PICTICNU: string;

  @Field()
  @Column({ name: 'MRKDNAMT' })
  public MRKDNAMT: string;

  @Field()
  @Column({ name: 'ORMRKDAM' })
  public ORMRKDAM: string;

  @Field()
  @Column({ name: 'PRBTADCD' })
  public PRBTADCD: string;

  @Field()
  @Column({ name: 'PRSTADCD' })
  public PRSTADCD: string;

  @Field()
  @Column({ name: 'CNTCPRSN' })
  public CNTCPRSN: string;

  @Field()
  @Column({ name: 'ShipToName' })
  public ShipToName: string;

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
  @Column({ name: 'PHNUMBR1' })
  public PHNUMBR1: string;

  @Field()
  @Column({ name: 'PHNUMBR2' })
  public PHNUMBR2: string;

  @Field()
  @Column({ name: 'PHONE3' })
  public PHONE3: string;

  @Field()
  @Column({ name: 'FAXNUMBR' })
  public FAXNUMBR: string;

  @Field()
  @Column({ name: 'COMAPPTO' })
  public COMAPPTO: string;

  @Field()
  @Column({ name: 'COMMAMNT' })
  public COMMAMNT: string;

  @Field()
  @Column({ name: 'OCOMMAMT' })
  public OCOMMAMT: string;

  @Field()
  @Column({ name: 'CMMSLAMT' })
  public CMMSLAMT: string;

  @Field()
  @Column({ name: 'ORCOSAMT' })
  public ORCOSAMT: string;

  @Field()
  @Column({ name: 'NCOMAMNT' })
  public NCOMAMNT: string;

  @Field()
  @Column({ name: 'ORNCMAMT' })
  public ORNCMAMT: string;

  @Field()
  @Column({ name: 'SHIPMTHD' })
  public SHIPMTHD: string;

  @Field()
  @Column({ name: 'TRDISAMT' })
  public TRDISAMT: string;

  @Field()
  @Column({ name: 'ORTDISAM' })
  public ORTDISAM: string;

  @Field()
  @Column({ name: 'TRDISPCT' })
  public TRDISPCT: string;

  @Field()
  @Column({ name: 'SUBTOTAL' })
  public SUBTOTAL: string;

  @Field()
  @Column({ name: 'ORSUBTOT' })
  public ORSUBTOT: string;

  @Field()
  @Column({ name: 'REMSUBTO' })
  public REMSUBTO: string;

  @Field()
  @Column({ name: 'OREMSUBT' })
  public OREMSUBT: string;

  @Field()
  @Column({ name: 'EXTDCOST' })
  public EXTDCOST: string;

  @Field()
  @Column({ name: 'OREXTCST' })
  public OREXTCST: string;

  @Field()
  @Column({ name: 'FRTAMNT' })
  public FRTAMNT: string;

  @Field()
  @Column({ name: 'ORFRTAMT' })
  public ORFRTAMT: string;

  @Field()
  @Column({ name: 'MISCAMNT' })
  public MISCAMNT: string;

  @Field()
  @Column({ name: 'ORMISCAMT' })
  public ORMISCAMT: string;

  @Field()
  @Column({ name: 'TXENGCLD' })
  public TXENGCLD: string;

  @Field()
  @Column({ name: 'TAXEXMT1' })
  public TAXEXMT1: string;

  @Field()
  @Column({ name: 'TAXEXMT2' })
  public TAXEXMT2: string;

  @Field()
  @Column({ name: 'TXRGNNUM' })
  public TXRGNNUM: string;

  @Field()
  @Column({ name: 'TAXSCHID' })
  public TAXSCHID: string;

  @Field()
  @Column({ name: 'TXSCHSRC' })
  public TXSCHSRC: string;

  @Field()
  @Column({ name: 'BSIVCTTL' })
  public BSIVCTTL: string;

  @Field()
  @Column({ name: 'FRTSCHID' })
  public FRTSCHID: string;

  @Field()
  @Column({ name: 'FRTTXAMT' })
  public FRTTXAMT: string;

  @Field()
  @Column({ name: 'ORFRTTAX' })
  public ORFRTTAX: string;

  @Field()
  @Column({ name: 'FRGTTXBL' })
  public FRGTTXBL: string;

  @Field()
  @Column({ name: 'MSCSCHID' })
  public MSCSCHID: string;

  @Field()
  @Column({ name: 'MSCTXAMT' })
  public MSCTXAMT: string;

  @Field()
  @Column({ name: 'ORMSCTAX' })
  public ORMSCTAX: string;

  @Field()
  @Column({ name: 'MISCTXBL' })
  public MISCTXBL: string;

  @Field()
  @Column({ name: 'BKTFRTAM' })
  public BKTFRTAM: string;

  @Field()
  @Column({ name: 'ORBKTFRT' })
  public ORBKTFRT: string;

  @Field()
  @Column({ name: 'BKTMSCAM' })
  public BKTMSCAM: string;

  @Field()
  @Column({ name: 'ORBKTMSC' })
  public ORBKTMSC: string;

  @Field()
  @Column({ name: 'BCKTXAMT' })
  public BCKTXAMT: string;

  @Field()
  @Column({ name: 'OBTAXAMT' })
  public OBTAXAMT: string;

  @Field()
  @Column({ name: 'TXBTXAMT' })
  public TXBTXAMT: string;

  @Field()
  @Column({ name: 'OTAXTAMT' })
  public OTAXTAMT: string;

  @Field()
  @Column({ name: 'TAXAMNT' })
  public TAXAMNT: string;

  @Field()
  @Column({ name: 'ORTAXAMT' })
  public ORTAXAMT: string;

  @Field()
  @Column({ name: 'ECTRX' })
  public ECTRX: string;

  @Field()
  @Column({ name: 'DOCAMNT' })
  public DOCAMNT: string;

  @Field()
  @Column({ name: 'ORDOCAMT' })
  public ORDOCAMT: string;

  @Field()
  @Column({ name: 'PYMTRCVD' })
  public PYMTRCVD: string;

  @Field()
  @Column({ name: 'ORPMTRVD' })
  public ORPMTRVD: string;

  @Field()
  @Column({ name: 'DEPRECVD' })
  public DEPRECVD: string;

  @Field()
  @Column({ name: 'ORDEPRVD' })
  public ORDEPRVD: string;

  @Field()
  @Column({ name: 'CODAMNT' })
  public CODAMNT: string;

  @Field()
  @Column({ name: 'ORCODAMT' })
  public ORCODAMT: string;

  @Field()
  @Column({ name: 'ACCTAMNT' })
  public ACCTAMNT: string;

  @Field()
  @Column({ name: 'ORACTAMT' })
  public ORACTAMT: string;

  @Field()
  @Column({ name: 'SALSTERR' })
  public SALSTERR: string;

  @Field()
  @Column({ name: 'SLPRSNID' })
  public SLPRSNID: string;

  @Field()
  @Column({ name: 'UPSZONE' })
  public UPSZONE: string;

  @Field()
  @Column({ name: 'TIMESPRT' })
  public TIMESPRT: string;

  @Field()
  @Column({ name: 'PSTGSTUS' })
  public PSTGSTUS: string;

  @Field()
  @Column({ name: 'VOIDSTTS' })
  public VOIDSTTS: string;

  @Field()
  @Column({ name: 'ALLOCABY' })
  public ALLOCABY: string;

  @Field()
  @Column({ name: 'NOTEINDX' })
  public NOTEINDX: string;

  @Field()
  @Column({ name: 'CURNCYID' })
  public CURNCYID: string;

  @Field()
  @Column({ name: 'CURRNIDX' })
  public CURRNIDX: string;

  @Field()
  @Column({ name: 'RATETPID' })
  public RATETPID: string;

  @Field()
  @Column({ name: 'EXGTBLID' })
  public EXGTBLID: string;

  @Field()
  @Column({ name: 'XCHGRATE' })
  public XCHGRATE: string;

  @Field()
  @Column({ name: 'DENXRATE' })
  public DENXRATE: string;

  @Field()
  @Column({ name: 'EXCHDATE' })
  public EXCHDATE: string;

  @Field()
  @Column({ name: 'TIME1' })
  public TIME1: string;

  @Field()
  @Column({ name: 'RTCLCMTD' })
  public RTCLCMTD: string;

  @Field()
  @Column({ name: 'MCTRXSTT' })
  public MCTRXSTT: string;

  @Field()
  @Column({ name: 'TRXSORCE' })
  public TRXSORCE: string;

  @Field()
  @Column({ name: 'SOPHDRE1' })
  public SOPHDRE1: string;

  @Field()
  @Column({ name: 'SOPHDRE2' })
  public SOPHDRE2: string;

  @Field()
  @Column({ name: 'SOPLNERR' })
  public SOPLNERR: string;

  @Field()
  @Column({ name: 'SOPHDRFL' })
  public SOPHDRFL: string;

  @Field()
  @Column({ name: 'SOPMCERR' })
  public SOPMCERR: string;

  @Field()
  @Column({ name: 'COMMNTID' })
  public COMMNTID: string;

  @Field()
  @Column({ name: 'REFRENCE' })
  public REFRENCE: string;

  @Field()
  @Column({ name: 'POSTEDDT' })
  public POSTEDDT: string;

  @Field()
  @Column({ name: 'PTDUSRID' })
  public PTDUSRID: string;

  @Field()
  @Column({ name: 'USER2ENT' })
  public USER2ENT: string;

  @Field()
  @Column({ name: 'CREATDDT' })
  public CREATDDT: string;

  @Field()
  @Column({ name: 'MODIFDT' })
  public MODIFDT: string;

  @Field()
  @Column({ name: 'Tax_Date' })
  public Tax_Date: string;

  @Field()
  @Column({ name: 'APLYWITH' })
  public APLYWITH: string;

  @Field()
  @Column({ name: 'WITHHAMT' })
  public WITHHAMT: string;

  @Field()
  @Column({ name: 'SHPPGDOC' })
  public SHPPGDOC: string;

  @Field()
  @Column({ name: 'CORRCTN' })
  public CORRCTN: string;

  @Field()
  @Column({ name: 'SIMPLIFD' })
  public SIMPLIFD: string;

  @Field()
  @Column({ name: 'CORRNXST' })
  public CORRNXST: string;

  @Field()
  @Column({ name: 'DOCNCORR' })
  public DOCNCORR: string;

  @Field()
  @Column({ name: 'SEQNCORR' })
  public SEQNCORR: string;

  @Field()
  @Column({ name: 'SALEDATE' })
  public SALEDATE: string;

  @Field()
  @Column({ name: 'SOPHDRE3' })
  public SOPHDRE3: string;

  @Field()
  @Column({ name: 'EXCEPTIONALDEMAND' })
  public EXCEPTIONALDEMAND: string;

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
  @Column({ name: 'SOPSTATUS' })
  public SOPSTATUS: string;

  @Field()
  @Column({ name: 'SHIPCOMPLETE' })
  public SHIPCOMPLETE: string;

  @Field()
  @Column({ name: 'DIRECTDEBIT' })
  public DIRECTDEBIT: string;

  @Field()
  @Column({ name: 'WorkflowApprStatCreditLm' })
  public WorkflowApprStatCreditLm: string;

  @Field()
  @Column({ name: 'WorkflowPriorityCreditLm' })
  public WorkflowPriorityCreditLm: string;

  @Field()
  @Column({ name: 'WorkflowApprStatusQuote' })
  public WorkflowApprStatusQuote: string;

  @Field()
  @Column({ name: 'WorkflowPriorityQuote' })
  public WorkflowPriorityQuote: string;

  @Field()
  @Column({ name: 'Workflow_Status' })
  public Workflow_Status: string;

  @Field()
  @Column({ name: 'ContractExchangeRateStat' })
  public ContractExchangeRateStat: string;

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
