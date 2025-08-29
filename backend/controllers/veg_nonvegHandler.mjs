import pool from "../db.mjs";
import errorHandler from "../error.mjs";

const veg_nonvegHandler = async (req, res) => {
    try {
        let { veg } = req.body;
        if (veg) {
            let query = "SELECT r.rid, r.name, r.imageurl, r.cuisine, r.type , COUNT(l.uid) AS likes_count FROM recipes r LEFT JOIN likes l ON r.rid = l.rid where type = 'veg' GROUP BY r.rid order by count(l.uid) desc";
            let { rows } = await pool.query(query);
            res.status(200).json(rows);
        } else {
            let query = "SELECT r.rid, r.name, r.imageurl, r.cuisine, r.type , COUNT(l.uid) AS likes_count FROM recipes r LEFT JOIN likes l ON r.rid = l.rid where type = 'non veg' GROUP BY r.rid order by count(l.uid) desc";
            let { rows } = await pool.query(query);
            res.status(200).json(rows);
        }
    } catch (err) {
        errorHandler(req, res);
    }
}

export default veg_nonvegHandler;