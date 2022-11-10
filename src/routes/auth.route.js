import express from "express";
import {
  checkApiKey,
  loginUser,
  registerUser,
} from "../controllers/auth.controller";
const router = express.Router();

router.route("/register").post(checkApiKey, registerUser);
router.route("/login").post(checkApiKey, loginUser);

export default router;
