import jwt from "jsonwebtoken";
const verifier = async (req, res, next) => {
    console.log("This is the verifier middleware");
    next();
}
export default verifier;