import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    response?: any,
    error?: Error | string | any
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === 'POST') {
        const ENVIAME_URL = process.env.ENVIAME_URL_2
        const ENVIAME_API_KEY = process.env.ENVIAME_API_KEY ?? ''
        const ENVIAME_COMPANY_ID = process.env.ENVIAME_COMPANY_ID
        const data = req.body

        try {
            const response = await fetch(`${ENVIAME_URL}companies/${ENVIAME_COMPANY_ID}/labels`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'api-key': ENVIAME_API_KEY
                }
            });
            const { data: enviameResponse } = await response.json();
            res.status(200).json({ response: enviameResponse })
        }
        catch (err) {
            console.error("Hubo un problema en la petición: "+err);
            res.status(500).json({ error: err })
        }
    } else {
        res.status(400).json({ error : 'Method not allowed'})
    }
}
