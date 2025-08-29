import errorHandler from "../error.mjs";
import pool from "../db.mjs";

const sortHandler = async (req, res) => {
    try {
        let { cuisine } = req.body;
        console.log(cuisine);
        let { rows } = await pool.query("SELECT r.rid, r.name, r.imageurl, r.cuisine, r.type , COUNT(l.uid) AS likes_count FROM recipes r LEFT JOIN likes l ON r.rid = l.rid where r.cuisine = $1 GROUP BY r.rid", [cuisine]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No recipes found for this cuisine" });
        }
        res.status(200).json(rows);
    } catch (error) {
        errorHandler(req, res);
    }
}

export default sortHandler;