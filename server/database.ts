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
export const connection = await mysql.createConnection(config)

