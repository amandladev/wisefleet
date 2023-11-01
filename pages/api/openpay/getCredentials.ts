import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    appId?: string,
    publicKey?: string,
    error?: string 
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === 'GET') {
        const appId = process.env.OPENPAY_MERCHANT_ID
        const publicKey = process.env.OPENPAY_PUBLIC_KEY ?? ''
        res.status(200).json({ appId, publicKey })
    } else {
        res.status(401).json({ error: 'Bad Request, only GET is supported' })
    } 
}