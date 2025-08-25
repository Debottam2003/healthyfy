import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const logoutHandler = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        errorHandler(req, res);
    }
}

export default logoutHandler;