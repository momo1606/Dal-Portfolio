import { Router } from "express";
import { portfolio, project } from "../controllers/portfolio/index.js";

const router = Router();

router.get("/:portfolio_id", portfolio);
router.get("/:portfolio_id/project", project);

export default router;
