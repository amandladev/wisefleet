import { ClientSimpleType, ClientType } from "@/types/client.type"

export const validatePaymentData = (client: ClientType) => {
    const { card_number, holder_name, expiration_month, expiration_year, cvv2} = client
    if (card_number.length < 15 && holder_name?.length < 3 && !expiration_month && !expiration_year && cvv2.length > 2) {
      return false
    }
    return true
}

export const validateClientData = (client: ClientSimpleType) => {
    const { email, phone, name, lastname, address } = client
    if (email && phone && name && lastname && address.city && address.line3 && address.line2 && address.line1 && address.state) {
        return true
      }
    return false
}