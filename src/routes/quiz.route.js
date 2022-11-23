import express from "express";
import {
  checkApiKey,
  isAuthenticatedUser,
} from "../controllers/auth.controller";
import { getQuiz, getQuizes } from "../controllers/quiz.controller";
const router = express.Router();

router.route("/").get(checkApiKey, isAuthenticatedUser, getQuizes);
router.route("/:quizId").get(checkApiKey, isAuthenticatedUser, getQuiz);

export default router;
