import express from 'express';
import cors from 'cors';
import pool from './db.mjs';

const app = express();
app.use(cors());
const PORT = 3333;

async function main() { // entry point of the application
    try {
        let { rows } = await pool.query("select * from recipes order by rid asc limit 70");
        app.get("/", (req, res) => {
            res.send(rows);
        });
        console.log(rows);
        app.listen(PORT, () => {
            console.log('Server is listening and serving on port ', PORT);
        });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
main();