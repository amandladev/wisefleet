import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { GetCompany } from '@/types/enviame/company.type'

type ResponseData = {
    response?: GetCompany
    error?: Error | string | any
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === 'GET') {
        const ENVIAME_URL = process.env.ENVIAME_URL
        const ENVIAME_API_KEY = process.env.ENVIAME_API_KEY
        const ENVIAME_COMPANY_ID = process.env.ENVIAME_COMPANY_ID
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${ENVIAME_URL}companies/${ENVIAME_COMPANY_ID}`,
            headers: { 
              'Accept': 'Application/json', 
              'api-key': ENVIAME_API_KEY
            }
          };
        
        try {
            const { data } = await axios(config)
            res.status(200).json({ response: data })
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(400).json({ error : 'Method not allowed'})
    }
}