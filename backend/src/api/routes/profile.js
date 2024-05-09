//Author: Hatim Patrawala

import { Router } from "express";
import {
  fetchUserDetails,
  updateUserDetails,
  createPortfolio,
  getPortfolios,
  deletePortfolio,
  editPortfolio,
} from "../controllers/profile/index.js";

const router = Router();

router.get("/user/:id", fetchUserDetails);
router.post("/user/:id/update", updateUserDetails);
router.get("/user/:id/portfolios", getPortfolios);

router.post("/portfolio/:user_id/create", createPortfolio);
router.delete("/portfolio/:portfolio_id/delete", deletePortfolio);
router.put("/portfolio/:portfolio_id/edit", editPortfolio);

export default router;
