import { throwNull2NonNull, throwNotObject, throwIsArray, checkArray, checkString, checkBoolean, checkNumber } from './xpoUtils';

export interface CancelShipmentResponse {
  request_header: RequestHeader;
  bookings?: (BookingsEntity)[] | null;
}
export interface RequestHeader {
  id: string;
  version: string;
}
export interface BookingsEntity {
  service_levels?: (string)[] | null;
  ready_date: string;
  organization: Organization;
  options?: (OptionsEntity)[] | null;
  locations?: (LocationsEntity)[] | null;
  containers?: (ContainersEntity)[] | null;
  id: string;
}
export interface Organization {
  company_id: string;
  account_id: string;
}
export interface OptionsEntity {
  option_name: string;
  attributes?: (AttributesEntity)[] | null;
}
export interface AttributesEntity {
  option_value: string;
  option_attribute: string;
}
export interface LocationsEntity {
  id?: string | null;
  type: string;
  address?: Address | null;
  contact?: Contact | null;
  category?: string | null;
}
export interface Address {
  country: string;
  residential: boolean;
  city_locality: string;
  street1: string;
  state_province: string;
  zip_code: string;
}
export interface Contact {
  phone: string;
  last_name: string;
  first_name: string;
  email: string;
  name: string;
}
export interface ContainersEntity {
  id: string;
  measurements: Measurements;
  type: string;
  freight_class: string;
  stackable: boolean;
}
export interface Measurements {
  width: number;
  length: number;
  weight: number;
  height: number;
}

// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class CancelShipmentResponseProxy {
  public readonly request_header: RequestHeaderProxy;
  public readonly bookings: BookingsEntityProxy[] | null;
  public static Parse(d: string): CancelShipmentResponseProxy {
    return CancelShipmentResponseProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CancelShipmentResponseProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    d.request_header = RequestHeaderProxy.Create(d.request_header, field + '.request_header');
    checkArray(d.bookings, field + '.bookings', obj);
    if (d.bookings) {
      for (let i = 0; i < d.bookings.length; i++) {
        d.bookings[i] = BookingsEntityProxy.Create(d.bookings[i], field + '.bookings' + '[' + i + ']');
      }
    }
    if (d.bookings === undefined) {
      d.bookings = null;
    }
    return new CancelShipmentResponseProxy(d);
  }
  private constructor(d: any) {
    this.request_header = d.request_header;
    this.bookings = d.bookings;
  }
}

export class RequestHeaderProxy {
  public readonly id: string;
  public readonly version: string;
  public static Parse(d: string): RequestHeaderProxy {
    return RequestHeaderProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RequestHeaderProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkString(d.id, false, field + '.id', obj);
    checkString(d.version, false, field + '.version', obj);
    return new RequestHeaderProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.version = d.version;
  }
}

export class BookingsEntityProxy {
  public readonly service_levels: string[] | null;
  public readonly ready_date: string;
  public readonly organization: OrganizationProxy;
  public readonly options: OptionsEntityProxy[] | null;
  public readonly locations: LocationsEntityProxy[] | null;
  public readonly containers: ContainersEntityProxy[] | null;
  public readonly id: string;
  public static Parse(d: string): BookingsEntityProxy {
    return BookingsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BookingsEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkArray(d.service_levels, field + '.service_levels', obj);
    if (d.service_levels) {
      for (let i = 0; i < d.service_levels.length; i++) {
        checkString(d.service_levels[i], false, field + '.service_levels' + '[' + i + ']', obj);
      }
    }
    if (d.service_levels === undefined) {
      d.service_levels = null;
    }
    checkString(d.ready_date, false, field + '.ready_date', obj);
    d.organization = OrganizationProxy.Create(d.organization, field + '.organization');
    checkArray(d.options, field + '.options', obj);
    if (d.options) {
      for (let i = 0; i < d.options.length; i++) {
        d.options[i] = OptionsEntityProxy.Create(d.options[i], field + '.options' + '[' + i + ']');
      }
    }
    if (d.options === undefined) {
      d.options = null;
    }
    checkArray(d.locations, field + '.locations', obj);
    if (d.locations) {
      for (let i = 0; i < d.locations.length; i++) {
        d.locations[i] = LocationsEntityProxy.Create(d.locations[i], field + '.locations' + '[' + i + ']');
      }
    }
    if (d.locations === undefined) {
      d.locations = null;
    }
    checkArray(d.containers, field + '.containers', obj);
    if (d.containers) {
      for (let i = 0; i < d.containers.length; i++) {
        d.containers[i] = ContainersEntityProxy.Create(d.containers[i], field + '.containers' + '[' + i + ']');
      }
    }
    if (d.containers === undefined) {
      d.containers = null;
    }
    checkString(d.id, false, field + '.id', obj);
    return new BookingsEntityProxy(d);
  }
  private constructor(d: any) {
    this.service_levels = d.service_levels;
    this.ready_date = d.ready_date;
    this.organization = d.organization;
    this.options = d.options;
    this.locations = d.locations;
    this.containers = d.containers;
    this.id = d.id;
  }
}

export class OrganizationProxy {
  public readonly company_id: string;
  public readonly account_id: string;
  public static Parse(d: string): OrganizationProxy {
    return OrganizationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OrganizationProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkString(d.company_id, false, field + '.company_id', obj);
    checkString(d.account_id, false, field + '.account_id', obj);
    return new OrganizationProxy(d);
  }
  private constructor(d: any) {
    this.company_id = d.company_id;
    this.account_id = d.account_id;
  }
}

export class OptionsEntityProxy {
  public readonly option_name: string;
  public readonly attributes: AttributesEntityProxy[] | null;
  public static Parse(d: string): OptionsEntityProxy {
    return OptionsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OptionsEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkString(d.option_name, false, field + '.option_name', obj);
    checkArray(d.attributes, field + '.attributes', obj);
    if (d.attributes) {
      for (let i = 0; i < d.attributes.length; i++) {
        d.attributes[i] = AttributesEntityProxy.Create(d.attributes[i], field + '.attributes' + '[' + i + ']');
      }
    }
    if (d.attributes === undefined) {
      d.attributes = null;
    }
    return new OptionsEntityProxy(d);
  }
  private constructor(d: any) {
    this.option_name = d.option_name;
    this.attributes = d.attributes;
  }
}

export class AttributesEntityProxy {
  public readonly option_value: string;
  public readonly option_attribute: string;
  public static Parse(d: string): AttributesEntityProxy {
    return AttributesEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AttributesEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkString(d.option_value, false, field + '.option_value', obj);
    checkString(d.option_attribute, false, field + '.option_attribute', obj);
    return new AttributesEntityProxy(d);
  }
  private constructor(d: any) {
    this.option_value = d.option_value;
    this.option_attribute = d.option_attribute;
  }
}

export class LocationsEntityProxy {
  public readonly id: string | null;
  public readonly type: string;
  public readonly address: AddressProxy | null;
  public readonly contact: ContactProxy | null;
  public readonly category: string | null;
  public static Parse(d: string): LocationsEntityProxy {
    return LocationsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LocationsEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkString(d.id, true, field + '.id', obj);
    if (d.id === undefined) {
      d.id = null;
    }
    checkString(d.type, false, field + '.type', obj);
    d.address = AddressProxy.Create(d.address, field + '.address');
    if (d.address === undefined) {
      d.address = null;
    }
    d.contact = ContactProxy.Create(d.contact, field + '.contact');
    if (d.contact === undefined) {
      d.contact = null;
    }
    checkString(d.category, true, field + '.category', obj);
    if (d.category === undefined) {
      d.category = null;
    }
    return new LocationsEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.type = d.type;
    this.address = d.address;
    this.contact = d.contact;
    this.category = d.category;
  }
}

export class AddressProxy {
  public readonly country: string;
  public readonly residential: boolean;
  public readonly city_locality: string;
  public readonly street1: string;
  public readonly state_province: string;
  public readonly zip_code: string;
  public static Parse(d: string): AddressProxy | null {
    return AddressProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AddressProxy | null {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, true, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true, obj);
    }
    checkString(d.country, false, field + '.country', obj);
    checkBoolean(d.residential, false, field + '.residential', obj);
    checkString(d.city_locality, false, field + '.city_locality', obj);
    checkString(d.street1, false, field + '.street1', obj);
    checkString(d.state_province, false, field + '.state_province', obj);
    checkString(d.zip_code, false, field + '.zip_code', obj);
    return new AddressProxy(d);
  }
  private constructor(d: any) {
    this.country = d.country;
    this.residential = d.residential;
    this.city_locality = d.city_locality;
    this.street1 = d.street1;
    this.state_province = d.state_province;
    this.zip_code = d.zip_code;
  }
}

export class ContactProxy {
  public readonly phone: string;
  public readonly last_name: string;
  public readonly first_name: string;
  public readonly email: string;
  public readonly name: string;
  public static Parse(d: string): ContactProxy | null {
    return ContactProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ContactProxy | null {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, true, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true, obj);
    }
    checkString(d.phone, false, field + '.phone', obj);
    checkString(d.last_name, false, field + '.last_name', obj);
    checkString(d.first_name, false, field + '.first_name', obj);
    checkString(d.email, false, field + '.email', obj);
    checkString(d.name, false, field + '.name', obj);
    return new ContactProxy(d);
  }
  private constructor(d: any) {
    this.phone = d.phone;
    this.last_name = d.last_name;
    this.first_name = d.first_name;
    this.email = d.email;
    this.name = d.name;
  }
}

export class ContainersEntityProxy {
  public readonly id: string;
  public readonly measurements: MeasurementsProxy;
  public readonly type: string;
  public readonly freight_class: string;
  public readonly stackable: boolean;
  public static Parse(d: string): ContainersEntityProxy {
    return ContainersEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ContainersEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkString(d.id, false, field + '.id', obj);
    d.measurements = MeasurementsProxy.Create(d.measurements, field + '.measurements');
    checkString(d.type, false, field + '.type', obj);
    checkString(d.freight_class, false, field + '.freight_class', obj);
    checkBoolean(d.stackable, false, field + '.stackable', obj);
    return new ContainersEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.measurements = d.measurements;
    this.type = d.type;
    this.freight_class = d.freight_class;
    this.stackable = d.stackable;
  }
}

export class MeasurementsProxy {
  public readonly width: number;
  public readonly length: number;
  public readonly weight: number;
  public readonly height: number;
  public static Parse(d: string): MeasurementsProxy {
    return MeasurementsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MeasurementsProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d, obj);
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false, obj);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false, obj);
    }
    checkNumber(d.width, false, field + '.width', obj);
    checkNumber(d.length, false, field + '.length', obj);
    checkNumber(d.weight, false, field + '.weight', obj);
    checkNumber(d.height, false, field + '.height', obj);
    return new MeasurementsProxy(d);
  }
  private constructor(d: any) {
    this.width = d.width;
    this.length = d.length;
    this.weight = d.weight;
    this.height = d.height;
  }
}
