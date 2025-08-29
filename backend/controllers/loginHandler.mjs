import errorHandler from "../error.mjs";
import pool from '../db.mjs';
import jwt from 'jsonwebtoken';

let secret = "this is the secret key for healthyfy app";

const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Both Email and password are required" });
        } else {
            let { rows } = await pool.query("select uid, email, password from husers where email = $1", [email]);
            if (rows.length === 0) {
                return res.status(400).json({ message: "Wrong email or password" });
            }
            else if (password === rows[0].password) {
                let token = jwt.sign({ uid: rows[0].uid }, secret, { expiresIn: '10m' });
                res.cookie('token', token, { maxAge: 20 * 60 * 1000, httpOnly: true });
                return res.status(200).json({ message: "Welcome to Healthyfy again." });
            } else {
                return res.status(400).json({ message: "Wrong email or password" });
            }
        }
    } catch (error) {
        errorHandler(req, res);
    }
}

export default loginHandler;

// credentials: "include"

// send the cookie with request and if the server sets accept that too

// ✅ “If the backend sets a cookie (with Set-Cookie), store it in the browser.”

// ✅ “When making future requests to that domain, automatically send that cookie back.”