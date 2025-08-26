import errorHandler from "../error.mjs";
import pool from "../db.mjs";

const sortHandler = async (req, res) => {
    try {
        let { rows } = await pool.query("SELECT * FROM recipes where cuisine = $1 ORDER BY name ASC", [req.params.cuisine]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No recipes found for this cuisine" });
        }
        res.status(200).json(rows);
    } catch (error) {
        errorHandler(req, res);
    }
}

export default sortHandler;