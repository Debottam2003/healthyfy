import pool from "../db.mjs";
import errorHandler from "../error.mjs";

const deleteGeneratedRecipe = async (req, res) => {
    try {
        let { gid } = req.body;
        let { uid } = req.user;
        await pool.query("delete from generations where generationid = $1 and uid = $2", [gid, uid]);
        res.status(200).json({ message: "Delete successfully" });
    } catch (error) {
        errorHandler(req, res);
    }
}
export default deleteGeneratedRecipe;