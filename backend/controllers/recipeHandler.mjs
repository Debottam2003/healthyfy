import pool from '../db.mjs';
import errorHandler from '../error.mjs';

const recipeHandler = (req, res) => {
    // Placeholder: Fetch recipes from database
    res.json({ message: "List of recipes" });
};

export default recipeHandler;
