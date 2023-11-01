import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const appId = process.env.OPENPAY_MERCHANT_ID
    const keyOpenPay = process.env.OPENPAY_PRIVATE_KEY ?? ''
    const url = `https://sandbox-api.openpay.pe/v1/${appId}/charges`;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(keyOpenPay)
    });
    
    const data = JSON.stringify(req.body);
    const options = {
      method: 'POST',
      headers,
      body: data
    };

    console.log({data})
    fetch(url, options)
    .then(response => {
        console.log({response})
        if (response.status === 200) {
        return response.json();
        } else {
            res.status(500).json({ 'error': 'Hubo un error' })
        }
    })
    .then(data => {
        console.log('Respuesta:', data);
        res.status(200).json({ data })
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ error })
    });
        
}