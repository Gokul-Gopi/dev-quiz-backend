import express from "express";
import {
  checkApiKey,
  isAuthenticatedUser,
} from "../controllers/auth.controller";
import { getQuiz } from "../controllers/quiz.controller";
const router = express.Router();

router.route("/:quizId").get(checkApiKey, isAuthenticatedUser, getQuiz);

export default router;
