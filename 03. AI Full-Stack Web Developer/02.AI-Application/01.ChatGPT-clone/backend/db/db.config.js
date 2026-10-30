
import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,'gpt-admin',
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE ,
})

console.log({
     host: process.env.DB_HOST, 
    user: process.env.DB_USER,'gpt-admin',
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE ,
})
export default db