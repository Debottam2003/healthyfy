import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const LikeHandler = async (req, res) => {
    try {
        const { rid } = req.body;
        const { uid } = req.user;
        if (!uid || !rid) {
            return res.status(400).json({ message: "Both uid and rid are required" });
        } else {
            // console.log(uid, rid);
            let result = await pool.query("select * from likes where uid = $1 AND rid = $2", [uid, rid]);
            if (result.rows.length > 0) {
                return res.status(400).json({ message: "recipe is already liked" });
            }
            await pool.query("INSERT INTO likes(uid,rid) values($1,$2)", [uid, rid]);
            res.status(200).json({ message: "like successful" });
        }
    } catch (error) {
        console.log(error.message);
        errorHandler(req, res);
    }
}
export default LikeHandler;