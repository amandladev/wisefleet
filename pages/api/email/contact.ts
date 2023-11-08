import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';
import dayjs from 'dayjs';
import { EmailContactTemplate } from "@/components/emailContactTemplate.component";

const resendKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { fullName, email, phone, message } = req.body;
        const now = dayjs();

        const formattedDate = now.format('DD-MM-YYYY HH:mm:ss');

        try {
            const data = await resend.emails.send({
                from: 'Wisefleet <onboarding@resend.dev>',
                to: 'info.peru@wisetrackcorp.com',
                subject: 'Solicitud de contacto',
                react: EmailContactTemplate({ 
                    fullName,
                    email,
                    phone,
                    message,
                    date: formattedDate
                }),
                text: 'Solicitud de contacto'
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