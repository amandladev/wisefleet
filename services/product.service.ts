import { connection } from "@/server/database"

const productTable = process.env.PRODUCT_TABLE ?? 'products'
export class ProductModel {
    static async getAll () {
        const [products] = await connection.query(`SELECT * FROM ${productTable}`)
        return products
    }

    static async create (body: any) {
        const { id, amount, currency, source_id, customer, city, address } = body
        await connection.query(
            `INSERT INTO ${productTable} (id, amount, currency, source_id, customer_name, customer_last_name, customer_phone, customer_email, city, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, amount, currency, source_id, customer.name, customer.last_name, customer.phone_number, customer.email, city, address ] 
        )
        return 'created'
    }
    
    static async edit () {

    }

    static async delete () {

    }
}