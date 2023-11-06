import { connection } from "@/server/database"

export class OrderModel {
    static async getAll () {
        const [orders] = await connection.query('SELECT * FROM test')
        return orders
    }

    static async create (body: any) {
        const { id, amount, currency, source_id, customer, city, address } = body
        await connection.query(
            "INSERT INTO `test`(`id`, `amount`, `currency`, `source_id`, `customer_name`, `customer_last_name`, `customer_phone`, `customer_email`, `city`, `address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [id, amount, currency, source_id, customer.name, customer.last_name, customer.phone_number, customer.email, city, address ] 
        )
        return 'created'
    }

    static async findLastCode () {
        const [orders] : any[] = await connection.query(
            "SELECT `id` FROM `test` ORDER BY id DESC;"
        )

        const lastId = orders[0].id
        return Number(lastId) + 1
    }
}