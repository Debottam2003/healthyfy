import pkg from 'pg';
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
    connectionString: process.env.DB_URL,
    max: 100,
});

export default pool;