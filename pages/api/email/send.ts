import { EmailTemplate } from "@/components/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resendKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const email = req.body;

        // {
        //     from: 'onboarding@resend.dev',
        //     to: 'sreyescurotto@gmail.com',
        //     subject: 'Hello World',
        //     html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        //     }

        try {
            // const data = await resend.emails.send({
            // from: 'onboarding@resend.dev',
            // to: 'sreyescurotto@gmail.com',
            // subject: 'Hello World',
            // html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
            // })
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'sreyescurotto@gmail.com',
                subject: 'Compra Confirmada',
                // html: ''
                react: EmailTemplate({ firstName: 'John'}),
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