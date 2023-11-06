import { OrderModel } from "@/services/order.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await OrderModel.getAll()
        res.status(200).json({ data })
    } else {
        res.status(401).json({ message: 'Bad Request'})
    }
 }