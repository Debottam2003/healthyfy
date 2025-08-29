import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const DislikeHandler = async (req, res) => {
    try {
        const { rid } = req.body;
        const { uid } = req.user;
        if (!uid || !rid) {
            return res.status(400).json({ message: "Both uid and rid are required" });
        } else {
            let result = pool.query("select * from recipes where uid = $1 AND rid = $2",[uid,rid]);
            if(result.rows.length===0){
                return res.status(400).json({message:"recipe is not liked"});
            }
            await pool.query("DELETE FROM likes WHERE uid=($1) AND rid=($2)", [uid, rid]);
            res.status(200).json({ message: "Dislike successful" });
        }
    } catch (error) {
        errorHandler(req, res);
    }
}
export default DislikeHandler;