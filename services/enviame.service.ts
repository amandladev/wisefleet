import { ClientType } from "@/types/client.type"
import axios from "axios"

export class EnviameModel { 
    static async sendData (client: ClientType, price: string, orderId: string) {
        const body = {
            "n_packages": 1,
            "content_description": "Orden",
            "imported_id": orderId,
            "order_price": price,
            "weight": "2",
            "volumen": "2",
            "type": "delivery",
            "place": client.address.line3,
            "shipping_origin": {
              "warehouse_code": "2222"
            },
            "shipping_destination": {
              "customer": {
                "name": client.name + " " + client.lastname,
                "email": client.email,
                "phone": client.phone
              }
            },
            "delivery_address": {
              "place": client.address.line3,
              "level1": client.address.city,
              "full_address": client.address.line1,
              "information": client.address.line2,
              "pickup_point_code": ""
            },
            "carrier": {
              // "carrier_code": "OLV",
              "carrier_code": client.address.city === 'Lima' ? 'OLV' : 'OLV ',
              "carrier_service": "normal"
            }
          }
      
          try {
            const { data } = await axios.post('/api/enviame/createShipment', body)
            console.log({data})
          } catch (error) {
            console.error('DELIVERY ENVIAME FALLO @@@', error)
          }
    }
}