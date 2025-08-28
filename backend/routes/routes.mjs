import { Router } from 'express';
import loginHandler from '../controllers/loginHandler.mjs';
import registerHandler from "../controllers/registerHandler.mjs"
import logoutHandler from '../controllers/logoutHandler.mjs';
import homeHandler from '../controllers/homeHandler.mjs';
import generateHandler from '../controllers/generateHandler.mjs';
import verifier from '../middleware/verifier.mjs';
import profileHandler from '../controllers/profileHandler.mjs';
import recipeHandler from '../controllers/recipeHandler.mjs';
import sortHandler from '../controllers/sortHandler.mjs';
import LikeHandler from '../controllers/likeHandler.mjs';
import DislikeHandler from '../controllers/dislikeHandler.mjs';
import LikedRecipe from '../controllers/userLikes.mjs';
import userGenerations from '../controllers/userGenerations.mjs';

const router = Router();

router.route("/").get(homeHandler);
router.route("/login").post(loginHandler);
router.route("/register").post(registerHandler);
router.route("/logout").get(verifier, logoutHandler);
router.route("/generate").post(verifier, generateHandler);
router.route("/profile").get(verifier, profileHandler);
router.route("/recipe/:rid").get(recipeHandler);
router.route("/cuisine/:cuisine").get(sortHandler);
router.route("/likes").post(LikeHandler);
router.route("/dislikes").post(DislikeHandler);
router.route("/userLikes").get(verifier,LikedRecipe);
router.route("/userGenerations/:gid").get(verifier,userGenerations);

// fallback route
router.use((req, res) => {
    res.status(404).send("404 Not found");
});

export default router;
