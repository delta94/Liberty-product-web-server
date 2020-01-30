import { throwNull2NonNull, throwNotObject, throwIsArray, checkString, checkArray, checkNumber } from './xpoUtils';

/// START CreateShipmentResponse

export interface CreateShipmentResponse {
  data: string;
  status: string;
  value: Value;
}
export interface Value {
  Simple_BookingResponseExample: SimpleBookingResponseExample;
}
export interface SimpleBookingResponseExample {
  summary: string;
  value: Value1;
}
export interface Value1 {
  data: string;
  status: string;
  value: Value2;
}
export interface Value2 {
  request_header: RequestHeader;
  booking_results?: (BookingResultsEntity)[] | null;
}
export interface RequestHeader {
  version: string;
  id: string;
}
export interface BookingResultsEntity {
  booking_id: string;
  service_level_results?: (ServiceLevelResultsEntity)[] | null;
}
export interface ServiceLevelResultsEntity {
  service_level: string;
  status: string;
  alerts?: (AlertsEntity)[] | null;
  rate: number;
  rate_type: string;
  routing_instructions: RoutingInstructions;
  documents?: (DocumentsEntity)[] | null;
}
export interface AlertsEntity {
  type: string;
  severity: number;
  code: string;
  message: string;
}
export interface RoutingInstructions {
  xpo_booking_id: string;
  route: string;
  events?: (EventsEntity)[] | null;
  tracking_numbers?: (TrackingNumbersEntity)[] | null;
}
export interface EventsEntity {
  type: string;
  planned_date: string;
  carrier: string;
  carrier_mode: string;
  special_instructions?: string | null;
}
export interface TrackingNumbersEntity {
  level: string;
  id: string;
  xpo_tracking_number: string;
  delivery_carrier_tracking_number: string;
}
export interface DocumentsEntity {
  id: string;
  document_type: string;
  document_format: string;
  content: string;
}

let obj: any = null;
export class CreateShipmentResponseProxy {
  public readonly data: string;
  public readonly status: string;
  public readonly value: ValueProxy;
  public static Parse(d: string): CreateShipmentResponseProxy {
    return CreateShipmentResponseProxy.Create(JSON.parse(d));
  }
  public static Create(d: CreateShipmentResponse, field: string = 'root'): CreateShipmentResponseProxy {
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
    checkString(d.data, false, field + '.data', obj);
    checkString(d.status, false, field + '.status', obj);
    d.value = ValueProxy.Create(d.value, field + '.value');
    return new CreateShipmentResponseProxy(d);
  }
  private constructor(d: any) {
    this.data = d.data;
    this.status = d.status;
    this.value = d.value;
  }
}

export class ValueProxy {
  public readonly Simple_BookingResponseExample: SimpleBookingResponseExampleProxy;
  public static Parse(d: string): ValueProxy {
    return ValueProxy.Create(JSON.parse(d));
  }
  public static Create(d: Value, field: string = 'root'): ValueProxy {
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
    d.Simple_BookingResponseExample = SimpleBookingResponseExampleProxy.Create(d.Simple_BookingResponseExample, field + '.Simple_BookingResponseExample');
    return new ValueProxy(d);
  }
  private constructor(d: any) {
    this.Simple_BookingResponseExample = d.Simple_BookingResponseExample;
  }
}

export class SimpleBookingResponseExampleProxy {
  public readonly summary: string;
  public readonly value: Value1Proxy;
  public static Parse(d: string): SimpleBookingResponseExampleProxy {
    return SimpleBookingResponseExampleProxy.Create(JSON.parse(d));
  }
  public static Create(d: SimpleBookingResponseExample, field: string = 'root'): SimpleBookingResponseExampleProxy {
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
    checkString(d.summary, false, field + '.summary', obj);
    d.value = Value1Proxy.Create(d.value, field + '.value');
    return new SimpleBookingResponseExampleProxy(d);
  }
  private constructor(d: any) {
    this.summary = d.summary;
    this.value = d.value;
  }
}

export class Value1Proxy {
  public readonly data: string;
  public readonly status: string;
  public readonly value: Value2Proxy;
  public static Parse(d: string): Value1Proxy {
    return Value1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: Value1, field: string = 'root'): Value1Proxy {
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
    checkString(d.data, false, field + '.data', obj);
    checkString(d.status, false, field + '.status', obj);
    d.value = Value2Proxy.Create(d.value, field + '.value');
    return new Value1Proxy(d);
  }
  private constructor(d: any) {
    this.data = d.data;
    this.status = d.status;
    this.value = d.value;
  }
}

export class Value2Proxy {
  public readonly request_header: RequestHeaderProxy;
  public readonly booking_results: BookingResultsEntityProxy[] | null;
  public static Parse(d: string): Value2Proxy {
    return Value2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: Value2, field: string = 'root'): Value2Proxy {
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
    checkArray(d.booking_results, field + '.booking_results', obj);
    if (d.booking_results) {
      for (let i = 0; i < d.booking_results.length; i++) {
        d.booking_results[i] = BookingResultsEntityProxy.Create(d.booking_results[i], field + '.booking_results' + '[' + i + ']');
      }
    }
    if (d.booking_results === undefined) {
      d.booking_results = null;
    }
    return new Value2Proxy(d);
  }
  private constructor(d: any) {
    this.request_header = d.request_header;
    this.booking_results = d.booking_results;
  }
}

export class RequestHeaderProxy {
  public readonly version: string;
  public readonly id: string;
  public static Parse(d: string): RequestHeaderProxy {
    return RequestHeaderProxy.Create(JSON.parse(d));
  }
  public static Create(d: RequestHeader, field: string = 'root'): RequestHeaderProxy {
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
    checkString(d.version, false, field + '.version', obj);
    checkString(d.id, false, field + '.id', obj);
    return new RequestHeaderProxy(d);
  }
  private constructor(d: any) {
    this.version = d.version;
    this.id = d.id;
  }
}

export class BookingResultsEntityProxy {
  public readonly booking_id: string;
  public readonly service_level_results: ServiceLevelResultsEntityProxy[] | null;
  public static Parse(d: string): BookingResultsEntityProxy {
    return BookingResultsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: BookingResultsEntity, field: string = 'root'): BookingResultsEntityProxy {
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
    checkString(d.booking_id, false, field + '.booking_id', obj);
    checkArray(d.service_level_results, field + '.service_level_results', obj);
    if (d.service_level_results) {
      for (let i = 0; i < d.service_level_results.length; i++) {
        d.service_level_results[i] = ServiceLevelResultsEntityProxy.Create(d.service_level_results[i], field + '.service_level_results' + '[' + i + ']');
      }
    }
    if (d.service_level_results === undefined) {
      d.service_level_results = null;
    }
    return new BookingResultsEntityProxy(d);
  }
  private constructor(d: any) {
    this.booking_id = d.booking_id;
    this.service_level_results = d.service_level_results;
  }
}

export class ServiceLevelResultsEntityProxy {
  public readonly service_level: string;
  public readonly status: string;
  public readonly alerts: AlertsEntityProxy[] | null;
  public readonly rate: number;
  public readonly rate_type: string;
  public readonly routing_instructions: RoutingInstructionsProxy;
  public readonly documents: DocumentsEntityProxy[] | null;
  public static Parse(d: string): ServiceLevelResultsEntityProxy {
    return ServiceLevelResultsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: ServiceLevelResultsEntity, field: string = 'root'): ServiceLevelResultsEntityProxy {
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
    checkString(d.service_level, false, field + '.service_level', obj);
    checkString(d.status, false, field + '.status', obj);
    checkArray(d.alerts, field + '.alerts', obj);
    if (d.alerts) {
      for (let i = 0; i < d.alerts.length; i++) {
        d.alerts[i] = AlertsEntityProxy.Create(d.alerts[i], field + '.alerts' + '[' + i + ']');
      }
    }
    if (d.alerts === undefined) {
      d.alerts = null;
    }
    checkNumber(d.rate, false, field + '.rate', obj);
    checkString(d.rate_type, false, field + '.rate_type', obj);
    d.routing_instructions = RoutingInstructionsProxy.Create(d.routing_instructions, field + '.routing_instructions');
    checkArray(d.documents, field + '.documents', obj);
    if (d.documents) {
      for (let i = 0; i < d.documents.length; i++) {
        d.documents[i] = DocumentsEntityProxy.Create(d.documents[i], field + '.documents' + '[' + i + ']');
      }
    }
    if (d.documents === undefined) {
      d.documents = null;
    }
    return new ServiceLevelResultsEntityProxy(d);
  }
  private constructor(d: any) {
    this.service_level = d.service_level;
    this.status = d.status;
    this.alerts = d.alerts;
    this.rate = d.rate;
    this.rate_type = d.rate_type;
    this.routing_instructions = d.routing_instructions;
    this.documents = d.documents;
  }
}

export class AlertsEntityProxy {
  public readonly type: string;
  public readonly severity: number;
  public readonly code: string;
  public readonly message: string;
  public static Parse(d: string): AlertsEntityProxy {
    return AlertsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: AlertsEntity, field: string = 'root'): AlertsEntityProxy {
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
    checkString(d.type, false, field + '.type', obj);
    checkNumber(d.severity, false, field + '.severity', obj);
    checkString(d.code, false, field + '.code', obj);
    checkString(d.message, false, field + '.message', obj);
    return new AlertsEntityProxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.severity = d.severity;
    this.code = d.code;
    this.message = d.message;
  }
}

export class RoutingInstructionsProxy {
  public readonly xpo_booking_id: string;
  public readonly route: string;
  public readonly events: EventsEntityProxy[] | null;
  public readonly tracking_numbers: TrackingNumbersEntityProxy[] | null;
  public static Parse(d: string): RoutingInstructionsProxy {
    return RoutingInstructionsProxy.Create(JSON.parse(d));
  }
  public static Create(d: RoutingInstructions, field: string = 'root'): RoutingInstructionsProxy {
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
    checkString(d.xpo_booking_id, false, field + '.xpo_booking_id', obj);
    checkString(d.route, false, field + '.route', obj);
    checkArray(d.events, field + '.events', obj);
    if (d.events) {
      for (let i = 0; i < d.events.length; i++) {
        d.events[i] = EventsEntityProxy.Create(d.events[i], field + '.events' + '[' + i + ']');
      }
    }
    if (d.events === undefined) {
      d.events = null;
    }
    checkArray(d.tracking_numbers, field + '.tracking_numbers', obj);
    if (d.tracking_numbers) {
      for (let i = 0; i < d.tracking_numbers.length; i++) {
        d.tracking_numbers[i] = TrackingNumbersEntityProxy.Create(d.tracking_numbers[i], field + '.tracking_numbers' + '[' + i + ']');
      }
    }
    if (d.tracking_numbers === undefined) {
      d.tracking_numbers = null;
    }
    return new RoutingInstructionsProxy(d);
  }
  private constructor(d: any) {
    this.xpo_booking_id = d.xpo_booking_id;
    this.route = d.route;
    this.events = d.events;
    this.tracking_numbers = d.tracking_numbers;
  }
}

export class EventsEntityProxy {
  public readonly type: string;
  public readonly planned_date: string;
  public readonly carrier: string;
  public readonly carrier_mode: string;
  public readonly special_instructions: string | null;
  public static Parse(d: string): EventsEntityProxy {
    return EventsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: EventsEntity, field: string = 'root'): EventsEntityProxy {
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
    checkString(d.type, false, field + '.type', obj);
    checkString(d.planned_date, false, field + '.planned_date', obj);
    checkString(d.carrier, false, field + '.carrier', obj);
    checkString(d.carrier_mode, false, field + '.carrier_mode', obj);
    checkString(d.special_instructions, true, field + '.special_instructions', obj);
    if (d.special_instructions === undefined) {
      d.special_instructions = null;
    }
    return new EventsEntityProxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.planned_date = d.planned_date;
    this.carrier = d.carrier;
    this.carrier_mode = d.carrier_mode;
    this.special_instructions = d.special_instructions;
  }
}

export class TrackingNumbersEntityProxy {
  public readonly level: string;
  public readonly id: string;
  public readonly xpo_tracking_number: string;
  public readonly delivery_carrier_tracking_number: string;
  public static Parse(d: string): TrackingNumbersEntityProxy {
    return TrackingNumbersEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: TrackingNumbersEntity, field: string = 'root'): TrackingNumbersEntityProxy {
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
    checkString(d.level, false, field + '.level', obj);
    checkString(d.id, false, field + '.id', obj);
    checkString(d.xpo_tracking_number, false, field + '.xpo_tracking_number', obj);
    checkString(d.delivery_carrier_tracking_number, false, field + '.delivery_carrier_tracking_number', obj);
    return new TrackingNumbersEntityProxy(d);
  }
  private constructor(d: any) {
    this.level = d.level;
    this.id = d.id;
    this.xpo_tracking_number = d.xpo_tracking_number;
    this.delivery_carrier_tracking_number = d.delivery_carrier_tracking_number;
  }
}

export class DocumentsEntityProxy {
  public readonly id: string;
  public readonly document_type: string;
  public readonly document_format: string;
  public readonly content: string;
  public static Parse(d: string): DocumentsEntityProxy {
    return DocumentsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: DocumentsEntity, field: string = 'root'): DocumentsEntityProxy {
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
    checkString(d.document_type, false, field + '.document_type', obj);
    checkString(d.document_format, false, field + '.document_format', obj);
    checkString(d.content, false, field + '.content', obj);
    return new DocumentsEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.document_type = d.document_type;
    this.document_format = d.document_format;
    this.content = d.content;
  }
}

// END CreateShipmentResponse
