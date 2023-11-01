import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    response?: any,
    error?: Error | any  
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const ENVIAME_URL = process.env.ENVIAME_URL_2
    const ENVIAME_API_KEY = process.env.ENVIAME_API_KEY ?? ''
    const ENVIAME_COMPANY_ID = process.env.ENVIAME_COMPANY_ID
    const data = req.body

    try {
        const response = await fetch(`${ENVIAME_URL}companies/${ENVIAME_COMPANY_ID}/deliveries`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'api-key': ENVIAME_API_KEY
            }
        });
        const json = await response.json();
        const formatJson = JSON.stringify(json)
        // console.log(JSON.stringify(json));
        res.status(200).json({ response: formatJson })
    }
    catch (err) {
        console.error("Hubo un problema en la petición: "+err);
        res.status(500).json({ error: err })
    }
}
