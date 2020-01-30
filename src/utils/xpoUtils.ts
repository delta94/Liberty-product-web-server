import axios from 'axios';
import { some } from 'lodash';
import { Xpo } from '../../src/entity/Xpo';
import * as shortid from 'shortid';

// START Common Function for Interface and Class Proxies

export function throwNull2NonNull(field: string, d: any, obj: any): never {
  return errorHelper(field, d, 'non-nullable object', false, obj);
}
export function throwNotObject(field: string, d: any, nullable: boolean, obj: any): never {
  return errorHelper(field, d, 'object', nullable, obj);
}
export function throwIsArray(field: string, d: any, nullable: boolean, obj: any): never {
  return errorHelper(field, d, 'object', nullable, obj);
}
export function checkArray(d: any, field: string, obj: any): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, 'array', true, obj);
  }
}
export function checkNumber(d: any, nullable: boolean, field: string, obj: any): void {
  if (typeof d !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'number', nullable, obj);
  }
}
export function checkString(d: any, nullable: boolean, field: string, obj: any): void {
  if (typeof d !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'string', nullable, obj);
  }
}
export function checkBoolean(d: any, nullable: boolean, field: string, obj: any): void {
  if (typeof d !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'boolean', nullable, obj);
  }
}
export function errorHelper(field: string, d: any, type: string, nullable: boolean, obj: any): never {
  if (nullable) {
    type += ', null, or undefined';
  }
  throw new TypeError('Expected ' + type + ' at ' + field + ' but found:\n' + JSON.stringify(d) + '\n\nFull object:\n' + JSON.stringify(obj));
}

// END Common Function for Interface and Class Proxies

export const freightClasses = [85, 100, 125, 150];
export const LtlServiceLevels = ['FRDRPLUS', 'FRNTDOOR', 'INHOME', 'RMCHOICE', 'RMDEBRIS'];
export const expeditedServiceLevels = ['NEXT_DAY', 'TWO_DAY', 'THREE_DAY'];
export const packageServiceLevels = ['GROUND', 'STANDARD', 'NEXT_DAY', 'TWO_DAY', 'THREE_DAY'];

export const xpo = {
  host: 'xpodirect.sc.xpo.com',
  urls: {
    login: '/api/oauth2/login',
    createShipment: '/xpo-fn-shipment-api/api/xfnsg/shipment',
    cancelShipment: '/xpo-fn-shipment-api/api/xfnsg/shipment/',
  },
};

export const login = async (): Promise<string> => {
  var axiosInstance = axios.create({
    baseURL: `https://${xpo.host}`,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json', 'X-Client-Id': 'X0091' },
  });

  let result = await axiosInstance.post(xpo.urls.login, {
    username: 'X0091_PROD',
    password: '2w67+^ejBhqxp3WUkEL8',
  });
  return result.data.access_token;
};

export const addLoosePackage = (data: any, index: number = 1, totalBoxes: number = 1): any => {
  return {
    type: 'Package',
    marked: true,
    id: `${data.ITEMNMBR.trim()} #${('00000000' + index).substr(-2)} of ${('00000000' + totalBoxes).substr(-2)}`,
    measurements: {
      width: data.EPBOXWIDTH,
      length: data.EPBOXDEPTH,
      weight: data.Weight,
      height: data.EPBOXHEIGHT,
    },
  };
};

export const addPalletPackage = (type: string, data: any, index: number = 1, totalBoxes: number = 1): any => {
  return {
    type,
    id: `${data.ITEMNMBR.trim()} #${('00000000' + index).substr(-2)} of ${('00000000' + totalBoxes).substr(-2)}`,
    measurements: {
      width: data.EPBOXWIDTH,
      length: data.EPBOXDEPTH,
      weight: data.Weight,
      height: data.EPBOXHEIGHT,
    },
    contents: [
      {
        sku: data.ITEMNMBR.trim(),
        description: data.ITEMDESC.trim(),
        quantity: Math.floor(data.Ext_Carton > 0 ? data.Ext_Carton / data.QTY : 0),
      },
    ],
    freight_class: data.Freight_Class.toString(),
    stackable: true,
  };
};

const getCountryCode = (country: string): string => {
  switch (country.toLowerCase()) {
    case 'united states':
      return 'US';

    case 'canada':
      return 'CN';

    default:
      return country;
  }
};

export const addLocations = (booking: Xpo): any[] => {
  const names = booking.ShipToName.trim().split(' ');

  const data: any[] = [
    {
      id: booking.OrderLocationCode.trim() === 'ATL WHSE' ? 'X0091_001' : 'X0091_002',
      type: 'Origin',
    },
  ];

  const phone = booking.PhoneNumber1.trim().slice(0, 10) === '' ? booking.PHONE1.trim().slice(0, 10) : booking.PhoneNumber1.trim().slice(0, 10);
  const location: any = {
    address: {
      country: getCountryCode(booking.Country.trim()),
      residential: true,
      city_locality: booking.City.trim(),
      street1: booking.Address1.trim(),
      state_province: booking.State.trim(),
      zip_code: booking.ZipCode.trim(),
    },
    contact: {
      phone,
      last_name: names[0],
      first_name: names[names.length - 1],
      email: 'customerservice@libertyfurn.com',
    },
    category: 'CUSTOMER',
    type: 'Destination',
  };

  if (booking.Address2.trim() !== '') {
    location.address.street2 = booking.Address2.trim();
  }

  data.push(location);
  return data;
};

export const createContainers = (type: string, data: Xpo[]) => {
  let totalBoxes: number = 1;
  try {
    totalBoxes = data.reduce((prev, current) => (prev += current.Ext_Carton), 0);
  } catch (ex) {
    // catch and move on...
  }

  if (type === 'Loose') {
    let packages: any[] = [];
    let labelNumber = 1;

    data.forEach(current => {
      for (let cartons = 0; cartons < current.Ext_Carton; cartons++) {
        packages.push(addLoosePackage(current, labelNumber, totalBoxes));
        labelNumber++;
      }
    });

    return [
      {
        type,
        packages,
      },
    ];
  } else {
    let containers: any[] = [];
    let labelNumber = 1;
    data.forEach(current => {
      for (let cartons = 0; cartons < current.Ext_Carton; cartons++) {
        containers.push(addPalletPackage(type, current, labelNumber, totalBoxes));
        labelNumber++;
      }
    });
    return containers;
  }
};

export interface XpoShipmentData {
  SopNumber: string;
  data: Xpo[];
}

const saveRequest = (data: any) => {
  try {
    const fs = require('fs');
    const filePath =
      process.env.NODE_ENV === 'development' ? `./${`${data.request.request_header.id}`}.json` : `D:\\XPO\\Processed\\${data.request.request_header.id}.json`;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (ex) {
    // do nothing - swallow error
  }
};

const saveError = (request: any, error: any) => {
  try {
    const fs = require('fs');
    const filePath = process.env.NODE_ENV === 'development' ? `./${`${request.request_header.id}`}.json` : `D:\\XPO\\Errors\\${request.request_header.id}.json`;
    fs.writeFileSync(filePath, JSON.stringify({ request, error }, null, 2));
  } catch (ex) {
    // do nothing - swallow error
  }
};

export const createShipment = async (xpoData: XpoShipmentData, token: string): Promise<any> => {
  shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

  const id = `${xpoData.SopNumber.trim()}-${shortid.generate()}`;
  const xpoServiceLevel = xpoData.data[0].ServiceLevelCode.trim();
  const xpoReadyDate = xpoData.data[0].ESD;
  const overstockOrderId = xpoData.data[0].AdditionalPO.trim();
  const containerType = some(packageServiceLevels, serviceLevel => serviceLevel === xpoServiceLevel) ? 'Loose' : 'PALLET';

  const request = {
    request_header: {
      id,
      version: '1.1.0',
    },
    bookings: [
      {
        service_levels: [xpoServiceLevel],
        ready_date: xpoReadyDate,
        organization: {
          company_id: 'X0091',
          account_id: 'X000100001',
        },
        references: [
          {
            type: 'ORDER#',
            value: overstockOrderId,
          },
        ],
        options: [
          {
            option_name: 'DOCUMENT',
            attributes: [
              {
                option_value: 'ZPL',
                option_attribute: 'LABEL_TYPE',
              },
            ],
          },
        ],
        locations: addLocations(xpoData.data[0]),
        containers: createContainers(containerType, xpoData.data),
        id,
      },
    ],
  };

  // console.log('request', JSON.stringify(request, null, 2));
  try {
    var axiosAuth = axios.create({
      baseURL: `https://${xpo.host}`,
      timeout: 60000,
      headers: { 'Content-Type': 'application/json', 'X-Client-Id': 'X0091', Authorization: `Bearer ${token}` },
    });

    const result = await axiosAuth.post(xpo.urls.createShipment, request);
    if (result && result.data.data.trim() === 'Shipment Processing failure') {
      // Failed shipment
      saveRequest(result ? { request, result: result.data } : { request });
      return { status: result.data.data.trim(), request, result: result ? result.data : null };
    } else {
      // console.log('****************** result', JSON.stringify(result.data, null, 2));
      saveRequest(result ? { request, result: result.data } : { request });
      return { status: result.data.data.trim(), request, result: result ? result.data : null };
    }
  } catch (ex) {
    //ex.response.data.error.forEach((err: any) => console.log('** Error **', err));
    // console.log('>>>>>>>>>>>>>>>> ex', JSON.stringify(ex.response.data, null, 2));
    saveError(request, ex.response.data);
    throw ex;
  }
};

export const cancelShipment = async (sopNumber: string, token: string): Promise<boolean> => {
  var axiosAuth = axios.create({
    baseURL: `https://${xpo.host}`,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json', 'X-Client-Id': 'X0091', Authorization: `Bearer ${token}` },
  });
  // console.log(`${xpo.urls.cancelShipment}${sopNumber.trim()}`);
  const result = await axiosAuth.delete(`${xpo.urls.cancelShipment}${sopNumber.trim()}`);
  // console.log('create result', result.status, JSON.stringify(result.data, null, 2));
  return result.status === 200;
};
