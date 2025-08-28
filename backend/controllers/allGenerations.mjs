import pool from "../db.mjs";
import errorHandler from "../error.mjs";
const allGenerations = async (req, res) => {
    try {
        res.status(200).json({ message: "All generations endpoint" });
    } catch (error) {
        console.log(error.message);
        errorHandler(req, res);
    }
}
export default allGenerations;