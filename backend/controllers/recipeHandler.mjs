import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const recipeHandler = async (req, res) => {
    // Placeholder: Fetch recipes from database
    try {
        console.log("request came");
        let rid = req.params.rid;
        let { rows } = await pool.query('SELECT * FROM recipes WHERE rid = $1', [rid]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Recipe not found" });
        } else {
            // return res.json(rows[0]);
            return res.send(rows[0]);
        }
    } catch (error) {
        console.error(error);
        errorHandler(req, res);
    }
};

export default recipeHandler;
