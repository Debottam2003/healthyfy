import { Router } from 'express';
import loginHandler from '../controllers/loginHandler.mjs';
import registerHandler from "../controllers/registerHandler.mjs"
import logoutHandler from '../controllers/logoutHandler.mjs';
import homeHandler from '../controllers/homeHandler.mjs';

const router = Router();

router.route("/").get(homeHandler);
router.route("/login").post(loginHandler);
router.route("/register").post(registerHandler);
router.route("/logout").post(logoutHandler);

// fallback route
router.use((req, res) => {
    res.status(404).send("404 Not found");
});

export default router;
