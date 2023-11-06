import { EmailTemplate } from "@/components/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resendKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { product, deliveryPrice, client, orderId } = req.body;
        const products = []
        products.push({
        productId: product.id,
        quantity: 1,
        price: product.price,
        subtotal : product.price * 1
        })
        const customer = {
        name : client.name,
        lastName : client.lastname,
        phoneNumber : client.phone,
        email : client.email
        }

        const productTotal = products.reduce((total, product) => total + product.subtotal, 0);

        const invoice = {
        subtotal: productTotal.toFixed(2),
        envio: deliveryPrice.toFixed(2),
        total: (productTotal + deliveryPrice).toFixed(2)
        }

        const delivery = {
        address : client.address.line1,
        reference: client.address.line2,
        city: client.address.city,
        district: client.address.line3
        }

        try {
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: customer.email,
                subject: 'Compra Confirmada',
                // html: ''
                react: EmailTemplate({ 
                    firstName: customer.name,
                    lastName: customer.lastName,
                    orderId,
                    delivery,
                    products,
                    invoice
                }),
                text: 'Compra Confirmada'
            })
            console.log({data})
            res.status(200).json({ message: 'Correo enviado' });

        } catch (err) {
            console.error('ERROR SENDING EMAIL', err);
            res.status(501).json({ message: 'ERROR'});
        }
    } else {
        res.status(401).json({ message: 'Bad Request'});
    }
 }