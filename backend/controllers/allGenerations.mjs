import pool from "../db.mjs";
import errorHandler from "../error.mjs";
const allGenerations = async (req, res) => {
    try {
        let { uid } = req.user;
        let { rows } = await pool.query("select * from generations where uid = $1", [uid]);
        // Placeholder logic for user generations handler
        res.status(200).json(rows);
    } catch (error) {
        errorHandler(req, res);
    }
}
export default allGenerations;