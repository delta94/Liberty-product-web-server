import { login, createShipment, cancelShipment } from './xpoUtils';
// import * as base64Img from 'base64-img';
import * as base64 from 'base-64';
import { createConnection, getRepository } from 'typeorm';
import * as dotenv from 'dotenv';
import { OpenOrderData } from '../entity/OpenOrderDataView';
import { ProductData } from '../entity/ProductData';
import { ProductViewData } from '../entity/ProductViewModel';
import { User } from '../entity/User';
import { UserJob } from '../entity/UserJob';
import { UserJobCategory } from '../entity/UserJobCategory';
import { UserJobCategoryItemClass } from '../entity/UserJobCategoryItemClass';
import { UserJobDownloadLink } from '../entity/UserJobDownloadLink';
import { Vendor } from '../entity/Vendor';
import { VendorCategory } from '../entity/VendorCategory';
import { VendorCategoryItemClass } from '../entity/VendorCategoryItemClass';
import { Sop10107 } from '../entity/Sop10107';
import { Xpo } from '../entity/Xpo';

export const singlePackages = [
  {
    test: '1a-Single-Package',
    testDescription: 'Single package shipment within continental US for standard service level',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953',
        SopType: 2,
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'GROUND',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
    ],
  },
  {
    test: '1i-Alaska-TWO_DAY',
    testDescription: 'Single package shipment within continental US for standard service level',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953',
        SopType: 2,
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'TWO_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Anchorage',
        Address1: '1088 Blackwell Street',
        State: 'AK',
        ZipCode: '99504',
        PHONE1: '907-332-2613',
        ShipToName: 'John Alaskan',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
    ],
  },
];

export const singlePallets = [
  {
    test: '1b-LTL-FRDRPLUS',
    testDescription: 'Single package shipments within continental US for LTL service levels (Overstock has 5 custom LTL service levels – FRDRPLUS, FRNTDOOR, INHOME, RMCHOICE, RMDEBRIS',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'FRDRPLUS',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 85,
      },
    ],
  },
  {
    test: '1b-LTL-FRNTDOOR',
    testDescription: 'Single package shipments within continental US for LTL service levels (Overstock has 5 custom LTL service levels – FRDRPLUS, FRNTDOOR, INHOME, RMCHOICE, RMDEBRIS',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'FRNTDOOR',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 100,
      },
    ],
  },
  {
    test: '1b-LTL-INHOME',
    testDescription: 'Single package shipments within continental US for LTL service levels (Overstock has 5 custom LTL service levels – FRDRPLUS, FRNTDOOR, INHOME, RMCHOICE, RMDEBRIS',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'INHOME',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 85,
      },
    ],
  },
  {
    test: '1b-LTL-RMCHOICE',
    testDescription: 'Single package shipments within continental US for LTL service levels (Overstock has 5 custom LTL service levels – FRDRPLUS, FRNTDOOR, INHOME, RMCHOICE, RMDEBRIS',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'RMCHOICE',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 125,
      },
    ],
  },
  {
    test: '1b-LTL-RMDEBRIS',
    testDescription: 'Single package shipments within continental US for LTL service levels (Overstock has 5 custom LTL service levels – FRDRPLUS, FRNTDOOR, INHOME, RMCHOICE, RMDEBRIS',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'RMDEBRIS',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 150,
      },
    ],
  },
];

export const expeditedSinglePackages = [
  {
    test: '1c-ONE_DAY',
    testDescription: 'Single package shipment within continental US for expedited (ONE_DAY, TWO_DAY, THREE_DAY) service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'ONE_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 85,
      },
    ],
  },
  {
    test: '1c-TWO_DAY',
    testDescription: 'Single package shipment within continental US for expedited (ONE_DAY, TWO_DAY, THREE_DAY) service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'TWO_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 100,
      },
    ],
  },
  {
    test: '1c-THREE_DAY',
    testDescription: 'Single package shipment within continental US for expedited (ONE_DAY, TWO_DAY, THREE_DAY) service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'THREE_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 150,
      },
    ],
  },
];

export const multiPackagesAndPallets = [
  {
    test: '1d-GROUND',
    testDescription: 'Multi-package shipment within continental US for standard service level',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'GROUND',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'GROUND',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600T #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 40,
        EPBOXDEPTH: 18,
        Weight: 16,
        EPBOXHEIGHT: 14,

        Freight_Class: 0,
      },
    ],
  },
  {
    test: '1e-FRDRPLUS',
    testDescription: 'Multi-package shipment within continental US for LTL service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'FRDRPLUS',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S  #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 100,
      },
      {
        SopNumber: 'ORD1526953-',
        AdditionalPO: 'OVER-',
        Service_Level_Code: 'FRDRPLUS',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600T #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 100,
      },
    ],
  },
  {
    test: '1e-FRNTDOOR',
    testDescription: 'Multi-package shipment within continental US for LTL service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'FRNTDOOR',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 125,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'FRNTDOOR',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 125,
      },
    ],
  },
  {
    test: '1e-INHOME',
    testDescription: 'Multi-package shipment within continental US for LTL service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'INHOME',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 150,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'INHOME',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 150,
      },
    ],
  },
  {
    test: '1e-RMCHOICE',
    testDescription: 'Multi-package shipment within continental US for LTL service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'RMCHOICE',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 80,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'RMCHOICE',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 80,
      },
    ],
  },
  {
    test: '1e-RMDEBRIS',
    testDescription: 'Multi-package shipment within continental US for LTL service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'RMDEBRIS',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 100,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'RMDEBRIS',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 100,
      },
    ],
  },
  {
    test: '1f-ONE_DAY',
    testDescription: 'Multi-package shipments within continental US for expedited service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'ONE_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'ONE_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
    ],
  },
  {
    test: '1f-TWO_DAY',
    testDescription: 'Multi-package shipments within continental US for expedited service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'TWO_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'TWO_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
    ],
  },
  {
    test: '1f-THREE_DAY',
    testDescription: 'Multi-package shipments within continental US for expedited service levels',
    testResult: {},
    data: [
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'THREE_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #01',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
      {
        SopNumber: 'ORD1526953-01',
        AdditionalPO: 'OVER-123',
        Service_Level_Code: 'THREE_DAY',
        ESD: '2019-06-22T04:00:00.000Z',
        Country: 'US',
        City: 'Litchfield',
        Address1: '4065 Beach House Tr',
        State: 'IL',
        ZipCode: '62056',
        PHONE1: '80084324460000',
        ShipToName: 'Rhonda Wolff',

        LocationCode: 'ATL WHSE',

        ITEMNMBR: '25-C8600S #02',
        ITEMDESC: 'Slat Back Side Chair (RTA)',
        QTY: 1,
        EPBOXWIDTH: 42,
        EPBOXDEPTH: 20,
        Weight: 18,
        EPBOXHEIGHT: 11,

        Freight_Class: 0,
      },
    ],
  },
];

// const saveResult = (test: any, createResult: any, cancelResult: any) => {
//   const fs = require('fs');
//   createResult.cancelResult = cancelResult;
//   fs.writeFileSync(`./${test.test}.json`, JSON.stringify(createResult, null, 2));

//   createResult.result.value.booking_results.forEach((bookingResult: any) => {
//     bookingResult.service_level_results.forEach((serviceLevelResult: any) => {
//       serviceLevelResult.documents.forEach((label: any) => {
//         const zpl = base64.decode(label.content);
//         fs.writeFileSync(`./${`${createResult.result.value.request_header.id}-${label.id}`}.zpl`, zpl);
//       });
//     });
//   });
// };

const saveXpoResult = (data: any, createResult: any, cancelResult: any) => {
  const fs = require('fs');
  createResult.cancelResult = cancelResult;
  fs.writeFileSync(`./${data[0].SopNumber.trim()}.json`, JSON.stringify(createResult, null, 2));

  createResult.result.value.booking_results.forEach((bookingResult: any) => {
    bookingResult.service_level_results.forEach((serviceLevelResult: any) => {
      serviceLevelResult.documents.forEach((label: any) => {
        const zpl = base64.decode(label.content);
        fs.writeFileSync(`./${`${createResult.result.value.request_header.id}-${label.id}`}.zpl`, zpl);
      });
    });
  });
};

// const executeTest = async (data: any[]) => {
//   const token = await login();

//   for (const test of data) {
//     const createResult = await createShipment(test.data, token);
//     // console.log('createResult', JSON.stringify(createResult, null, 2));

//     // setTimeout(async () => {
//     console.log('createResult.value.request_header.id', createResult.result.value.request_header.id);

//     for (const bookingResult of createResult.result.value.booking_results) {
//       for (const serviceLevelResult of bookingResult.service_level_results) {
//         for (const tracking of serviceLevelResult.routing_instructions.tracking_numbers) {
//           console.log('data and tracking', test.data[0].SopNumber, test.data[0].SopType, tracking);
//           const sopResult = await Sop10107.create({
//             SopNumber: test.data[0].SopNumber,
//             SopType: test.data[0].SopType,
//             TrackingNumber: tracking.xpo_tracking_number,
//           });
//           console.log('sopResult', sopResult);
//         }
//       }
//     }

//     let cancelResult;
//     try {
//       cancelResult = await cancelShipment(createResult.result.value.request_header.id, token);
//     } catch (ex) {
//       console.log('cancelResult >>>> ex', ex);
//     }
//     console.log('cancelResult', cancelResult);
//     saveResult(test, createResult, cancelResult);
//     // }, 1000);
//   }
// };

const executeXpoTest = async (data: Xpo[]) => {
  const token = await login();
  const xpoShipment = { SopNumber: data[0].SopNumber, data };
  const createResult = await createShipment(xpoShipment, token);
  // console.log('createResult', JSON.stringify(createResult, null, 2));

  // setTimeout(async () => {
  console.log('createResult.value.request_header.id', createResult.result.value.request_header.id);
  saveXpoResult(data, createResult, null);

  for (const bookingResult of createResult.result.value.booking_results) {
    for (const serviceLevelResult of bookingResult.service_level_results) {
      for (const tracking of serviceLevelResult.routing_instructions.tracking_numbers) {
        console.log('data and tracking', data[0].SopNumber, data[0].SopType, tracking);
        const sop = await Sop10107.create({
          SopNumber: data[0].SopNumber.trim(),
          SopType: data[0].SopType,
          TrackingNumber: tracking.xpo_tracking_number,
        });
        const newSop = await sop.save();
        console.log('newSop', newSop);
      }
    }
  }

  for (const xpo of data) {
    const xpoRepository = getRepository(Xpo);
    console.log('update result', await xpoRepository.update(xpo.ID, { ProcessedDate: new Date(), LabelReceivedDate: new Date() }));
  }

  let cancelResult;
  try {
    cancelResult = await cancelShipment(createResult.result.value.request_header.id, token);
  } catch (ex) {
    console.log('cancelResult >>>> ex', ex);
  }
  console.log('cancelResult', cancelResult);
  // saveResult(data, createResult, cancelResult);
  saveXpoResult(data, createResult, cancelResult);

  // }, 1000);
};

(async () => {
  dotenv.config({ path: __dirname + `./.env` });

  await createConnection({
    name: 'default',
    type: 'mssql',
    host: 'TEST-1',
    port: 1433,
    username: 'ProductCentral',
    password: 'FDk@h’g9{s',
    database: 'LFI',
    synchronize: false,
    logging: false,
    entities: [
      Sop10107,
      Xpo,
      OpenOrderData,
      ProductData,
      ProductViewData,
      User,
      UserJob,
      UserJobCategory,
      UserJobCategoryItemClass,
      UserJobDownloadLink,
      Vendor,
      VendorCategory,
      VendorCategoryItemClass,
    ],
  });

  const test = await Xpo.find({ skip: 0, take: 1 });
  console.log('test count', test.length);

  // const createResult = await createShipment(test.data, token);
  // console.log('createResult.value.request_header.id', createResult.result.value.request_header.id);

  // let cancelResult;
  // try {
  //   cancelResult = await cancelShipment(createResult.result.value.request_header.id, token);
  // } catch (ex) {
  //   console.log('cancelResult >>>> ex', ex);
  // }
  // console.log('cancelResult', cancelResult);

  await executeXpoTest(test);
  // await executeTest(singlePallets);
  // await executeTest(expeditedSinglePackages);
  // console.log('multiPackages', JSON.stringify(multiPackagesAndPallets, null, 2));
  // await executeTest(multiPackagesAndPallets);

  process.exit(1);
})();
