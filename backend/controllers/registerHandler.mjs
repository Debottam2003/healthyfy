import pool from '../db.mjs';
import errorHandler from '../error.mjs';
import jwt from 'jsonwebtoken';
let secret = "this is the secret key for healthyfy app";

const registerHandler = async (req, res) => {
    try {

        const user = req.body;
        if (!user.email || !user.password || !user.name || !user.nationality) {
            return res.status(400).json({ message: "All fields are required" });
        }
        let Auser = await pool.query("select uid from husers where email = $1", [user.email]);
        if (Auser.rows.length > 0) {
            return res.status(400).json({ message: "Email already registered" });
        }
        let { rows } = await pool.query("insert into husers ( name , email , password , nationality ) values($1 , $2 , $3  , $4 ) returning uid", [user.name, user.email, user.password, user.nationality]);
        let token = jwt.sign({ uid: rows[0].uid }, secret, { expiresIn: '10m' });
        res.cookie('token', token, { maxAge: 10 * 60 * 1000, httpOnly: true });
        res.status(200).json({ message: "Registered Successfully" });
    } catch (error) {
        console.log(error);
        errorHandler(req, res);
    }
}
export default registerHandler;