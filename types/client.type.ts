export type ClientType = {
    card_number: string,
    holder_name: string,
    expiration_year: string,
    expiration_month: string,
    cvv2: string,
    address: {
      city: string,
      line3: string,
      postal_code: string,
      line1: string,
      line2: string,
      state: string,
      country_code: "PE",
    },
    name?: string,
    lastname?: string,
    phone?: string,
    email?: string
}

export type ClientSimpleType = {
  address: {
    city: string,
    line3: string,
    postal_code: string,
    line1: string,
    line2: string,
    state: string,
    country_code: string,
  },
  email: string,
  lastname: string,
  name: string,
  phone: string,
};