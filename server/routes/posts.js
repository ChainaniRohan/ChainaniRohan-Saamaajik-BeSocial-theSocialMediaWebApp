import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyTocken } from "../middleware/auth.js";

const router = express.Router();

//Read
router.get("/", verifyTocken, getFeedPosts);
router.get("/:userId/posts", verifyTocken, getFeedPosts);

//Upadate
router.patch("/:id/like", verifyTocken, likePost);

export default router;
