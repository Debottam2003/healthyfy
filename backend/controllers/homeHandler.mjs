import pool from '../db.mjs';
import errorHandler from '../error.mjs';
const homeHandler = async (req, res) => {
    try {
        console.log("homeHandler called");
        let { rows } = await pool.query('select * from recipes limit 72');
        res.status(200).json(rows);
    } catch (error) {
        console.log(error.message);
        errorHandler(req, res);
    }
}
export default homeHandler;