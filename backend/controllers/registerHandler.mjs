import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const registerHandler = async (req, res) => {
    try {

        const user = req.body;
        if (!user.email || !user.password || !user.name || !user.nationality) {
            return res.status(400).send("All fields are required");
        }
        if (user) {
            await pool.query("insert into husers ( name , email , password , nationality ) values($1 , $2 , $3  , $4 ) returning uid", [user.name, user.email, user.password, user.nationality]);
            res.status(200).json({ "message": "Registered Successfully" });
        } else {
            res.status(400).json({ "message": "Could'nt Register the user..." });
        }
    } catch (error) {
        console.log(error);
        errorHandler(req, res);
    }
}
export default registerHandler;