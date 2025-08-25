import errorHandler from "../error.mjs";
import pool from '../db.mjs';

const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Both Email and password are required");
        } else {
            let { rows } = await pool.query("select email, password from husers where email = $1", [email]);
            if (rows.length === 0) {
                return res.status(400).send("Wrong email or password");
            }
            else if (password === rows[0].password) {
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