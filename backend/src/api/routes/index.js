import { Router } from "express";
import user from "./user.js";
import collaboration from "./collaboration_route.js";
import profile from "./profile.js";
import portfolio from './portfolio.js';
import search  from "./portfolio_search.js";
import discussionforum from './discussionforum.js';
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.use("/user", user);
router.use("/collaboration", collaboration);
router.use("/user", user);
router.use("/profile", profile);
router.use("/portfolio", portfolio);
router.use("/search", search);
router.use("/discussionforum", discussionforum);

export default router;
