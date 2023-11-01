import mysql from 'mysql2/promise'

const config = {
    host: 'apuestadota.com',
    user: 'apue_api',
    password: 'YZP&3Nb%p085',
    database: 'olimpo_db',
    port: 3306
}
// MYSQL_HOST=apuestadota.com
// MYSQL_DATABASE=olimpo_db
// MYSQL_USER=apue_api
// MYSQL_PASSWORD=YZP&3Nb%p085
const connection = await mysql.createConnection(config)

export class WisefleetModel {
    static async getAll () {
        const [orders] = await connection.query('SELECT * FROM test')
        console.log(orders)
        return orders
    }

    static async create (body: any) {
        const { id, amount, currency, source_id, customer, city, address } = body
        const result = await connection.query(
            "INSERT INTO `test`(`id`, `amount`, `currency`, `source_id`, `customer_name`, `customer_last_name`, `customer_phone`, `customer_email`, `city`, `address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [id, amount, currency, source_id, customer.name, customer.last_name, customer.phone_number, customer.email, city, address ] 
        )
        return 'created'
    }

    static async findLastCode () {
        // SELECT `id` FROM `test` ORDER BY id; 
        const [orders] : any[] = await connection.query(
            "SELECT `id` FROM `test` ORDER BY id DESC;"
        )

        const lastId = orders[0].id

        return Number(lastId) + 1
    }
}