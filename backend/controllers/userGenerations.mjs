import pool from "../db.mjs";
import errorHandler from "../error.mjs";

const userGenerations = async (req, res) => {
    try {
        let { uid } = req.user;
        let { gid } = req.params;
        let { rows } = await pool.query("select * from generations where generationid = $1 and uid = $2", [gid, uid]);
        // Placeholder logic for user generations handler
        res.status(200).json(rows[0]);
    } catch (error) {
        errorHandler(req, res);
    }
};
export default userGenerations;