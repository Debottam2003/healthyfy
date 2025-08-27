import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const DislikeHandler = async (req, res) => {
    try {
        const { uid, rid } = req.body;
        if (!uid || !rid) {
            return res.status(400).json({ message: "Both uid and rid are required" });
        } else {
            console.log(uid, rid);
            await pool.query("DELETE FROM likes WHERE uid=($1) AND rid=($2)", [uid, rid]);
            res.status(200).json({ message: "Dislike successful" });
        }
    } catch (error) {
        errorHandler(req, res);
    }
}
export default DislikeHandler;