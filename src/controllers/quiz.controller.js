import { Quiz } from "../models/quiz.model";
import { sendErrorMessageAndStatus } from "../utils/helpers";

export const getQuiz = async (req, res) => {
  const quizId = req.params?.quizId;
  try {
    const quiz = await Quiz.findById(quizId);
    return res.status(200).json({ status: true, data: quiz });
  } catch (error) {
    return sendErrorMessageAndStatus(error, res);
  }
};

export const getQuizes = async (req, res) => {
  try {
    const quizes = await Quiz.find({}).select("-questions");
    return res.status(200).json({ status: true, data: quizes });
  } catch (error) {
    console.log(error);
    return sendErrorMessageAndStatus(error, res);
  }
};
