import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const homeHandler = async (req, res) => {
    try {
        console.log("homeHandler called");
        let query = "SELECT r.rid, r.name, r.imageurl, r.cuisine, r.type , COUNT(l.uid) AS likes_count FROM recipes r LEFT JOIN likes l ON r.rid = l.rid GROUP BY r.rid";
        let { rows } = await pool.query(query);
        console.log(rows[0]);
        res.status(200).json(rows);
    } catch (error) {
        console.log(error.message);
        errorHandler(req, res);
    }
}
export default homeHandler;