import { EmailTemplate } from "@/components/EmailTemplate";
import dayjs from 'dayjs';

export default function Test () {
    const products = [
        {
            "id": "12",
            "price": "300.00",
            "image": "product1.jpg",
            "name": "hola",
            "quantity": 1,
            "subtotal": "300.00"
          },
    ]
    const invoice = {
        total: "130.00",
        subtotal: "100.00",
        delivery: "30.00"
    }
    const now = dayjs();

    const formattedDate = now.format('DD-MM-YYYY HH:mm:ss');

    const test = { 
        deliveryPrice: 1.00, 
        client: {
          "name": "sergio",
          "lastname": "reyes",
          "phone": "9321",
          "email": "sreyescurotto@gmail.com",
          address: {
            "line1": "Jr rio orinoco 292",
            "line2": "A dos cuadras de la comisaria",
            "line3": "La Molina",
            "city": "Lima"
          }
        }, 
        orderId: "12" 
      }
    return (
        <EmailTemplate firstName={test.client.name} 
        lastName="Reyes" orderId="123" delivery={test.client.address} 
        products={products}  invoice={invoice} date={formattedDate}/>
    )
}