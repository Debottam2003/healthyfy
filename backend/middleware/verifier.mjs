import jwt from "jsonwebtoken";
let secret = "this is the secret key for healthyfy app";
const verifier = async (req, res, next) => {
    console.log("This is the verifier middleware");
    try{
        let token = req.cookies.token;
        if(!token) {
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            token = jwt.verify(token, secret);
            req.user = token;
            next();
        }
    } catch(err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
export default verifier;