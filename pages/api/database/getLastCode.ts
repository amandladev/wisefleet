import { WisefleetModel } from "@/server/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await WisefleetModel.findLastCode()
        console.log({data})
        res.status(200).json({ code: data })
    } else {
        res.status(401).json({ message: 'Bad Request'})
    }
 }