import express from 'express';
import cors from 'cors';
import pool from './db.mjs';
import router from './routes/routes.mjs';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors({
    origin: "https://healthyfy-lzod-git-main-debs-projects-792b84f4.vercel.app", 
    credentials: true
}));
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());

app.use("/healthyfy", router);

async function main() { // entry point of the application
    try {
        let { rows } = await pool.query("select name, cuisine, recipe, imageurl from recipes limit 20");
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