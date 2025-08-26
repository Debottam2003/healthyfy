import errorHandler from "../error.mjs";
import pool from '../db.mjs';
import jwt from 'jsonwebtoken';
let secret = "this is the secret key for healthyfy app";

const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Both Email and password are required");
        } else {
            let { rows } = await pool.query("select uid, email, password from husers where email = $1", [email]);
            if (rows.length === 0) {
                return res.status(400).send("Wrong email or password");
            }
            else if (password === rows[0].password) {
                let token = jwt.sign({ uid: rows[0].uid }, secret, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' });
                return res.status(200).json({ message: "Welcome to Healthyfy again." });
            } else {
                return res.status(400).send("Wrong email or password");
            }
        }
    } catch (error) {
        errorHandler(req, res);
    }
}

export default loginHandler;