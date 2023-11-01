export interface GetCompany {
    success: boolean;
    data: Data;
    errors?: (null)[] | null;
  }
  export interface Data {
    identifier: number;
    name: string;
    corporate_name: string;
    dni: string;
    website?: null;
    logo?: null;
    code: string;
    api_key: string;
    country: string;
    rule?: null;
    created_at: string;
    updated_at: string;
    deleted_at?: null;
    links?: (LinksEntity)[] | null;
  }
  export interface LinksEntity {
    rel: string;
    href: string;
  }
  
  