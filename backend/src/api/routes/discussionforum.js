//Author: Sushank Saini
import { Router } from "express";
import {
  deletePost,
  deleteReply,
  saveDiscussionPost,
  saveReply,
} from "../controllers/discussionforum/index.js";
import { getAllPosts } from "../controllers/discussionforum/index.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.post("/add-post", authMiddleware, saveDiscussionPost);
router.get("/get-all-posts", getAllPosts);
router.post("/add-reply", authMiddleware, saveReply);
router.post("/delete-post", authMiddleware, deletePost);
router.post("/delete-reply", authMiddleware, deleteReply);
export default router;
