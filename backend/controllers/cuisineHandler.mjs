import pool from "../db.mjs";
import errorHandler from "../error.mjs";

const cuisineHandler = async (req, res) => {
    try {
        let {rows} = await pool.query("select cuisine FROM recipes GROUP BY cuisine LIMIT 100;");
        res.status(200).json(rows);
    } catch(err) {
        console.log(err.message);
        errorHandler(req, res);
    }
}

export default cuisineHandler;