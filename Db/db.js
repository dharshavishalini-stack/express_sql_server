//import mysql from 'mysql2'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();
const db=mysql.createPool({ //help to maintain multiple connection
    host: process.env.SQL_HOST,
    database : process.env.SQL_DB,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    port: process.env.SQL_PORT,
    waitForConnections:true,
    connectionLimit: 10,
    queueLimit: 0
})

export const connectDB = async () =>{
    try{
        const connection = await db.getConnection(); //connecting express and mysql
        console.log("db connected sucessfully");
        connection.release();
    } catch(err){
        console.error("Connection is not established",err);
    }
}
export default db;
