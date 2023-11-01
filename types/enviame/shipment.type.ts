export interface Shipment {
    data: Data;
  }
  export interface Data {
    identifier: number;
    imported_id: string;
    tracking_number: string;
    status: Status;
    customer: Customer;
    shipping_address: ShippingAddress;
    country: string;
    carrier: string;
    service: string;
    label: Label;
    barcodes?: null;
    deadline_at: string;
    created_at: string;
    updated_at: string;
    links?: (LinksEntity)[] | null;
  }
  export interface Status {
    id: number;
    name: string;
    code: string;
    info: string;
    created_at: string;
  }
  export interface Customer {
    full_name: string;
    phone?: null;
    email?: null;
  }
  export interface ShippingAddress {
    full_address: string;
    place: string;
    type: string;
  }
  export interface Label {
    PDF: string;
    ZPL?: null;
    PNG?: null;
  }
  export interface LinksEntity {
    rel: string;
    href: string;
  }
  