import pool from "../db.mjs";
import errorHandler from "../error.mjs";

const LikedRecipe = async (req, res) => {
  try {
    let { uid } = req.user;
    const q =
      "SELECT r.rid as rid, r.name as name, r.imageurl as imageurl FROM recipes r JOIN likes l ON r.rid = l.rid WHERE l.uid = $1";
    let response = await pool.query(q, [uid]);
    if (response.rows.length > 0) {
      res.status(200).send(response.rows);
    } else {
      res.status(400).json({ message: "No liked recipes found" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(req, res);
  }
};
export default LikedRecipe;
