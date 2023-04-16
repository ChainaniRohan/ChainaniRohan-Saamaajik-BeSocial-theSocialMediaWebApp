import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriends,} from "../controllers/users.js";
import { verifyTocken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifyTocken, getUser);
router.get("/:id/friends", verifyTocken, getUserFriends);

// Update
router.patch("/:id/:friendId", verifyTocken, addRemoveFriends);

export default router;