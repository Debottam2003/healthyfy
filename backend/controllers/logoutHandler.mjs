import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const logoutHandler = async (req, res) => {
    res.send("ok");
}

export default logoutHandler;