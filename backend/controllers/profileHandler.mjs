import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const profileHandler = async (req, res) => {
    try {
        const { uid } = req.params;
        const query = 'SELECT name, email, nationality FROM husers WHERE uid = $1';
        let { rows } = await pool.query(query, [uid]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        } else {
            const user = rows[0];
            return res.status(200).json(user);
        }
    } catch (err) {
        errorHandler(req, res);
    }
};

export default profileHandler;
