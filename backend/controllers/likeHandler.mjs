import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const LikeHandler = async (req,res)=>{
    try {
        const { uid, rid } = req.body;
        if (!uid || !rid) {
            return res.status(400).send("Both uid and rid are required");
        }else{
            console.log(uid,rid);
            await pool.query("INSERT INTO likes(uid,rid) values($1,$2)",[uid,rid]);
            res.status(200).send("like successful");
        }
    } catch (error) {
        errorHandler(req,res);
    }
}
export default LikeHandler;