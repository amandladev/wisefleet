import { OrderModel } from "@/services/order.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const data = await OrderModel.create(req.body)
        console.log({data})
        res.status(200).json({ data })
    } else {
        res.status(401).json({ message: 'Bad Request'})
    }
 }