import express from "express";
import dotenv from "dotenv";
import { initialiseDBConnection } from "./utils/initialiseDBConnection";
import authRoutes from "./routes/auth.route";
import quizRoutes from "./routes/quiz.route";
import { addQuiz } from "./utils/addQuiz";

const app = express();
dotenv.config();
initialiseDBConnection();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/quiz", quizRoutes);

app.get("/", (req, res) => {
  return res.send("Server is running...");
});

// addQuiz();

const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;

app.listen(PORT, () => {
  return console.log(
    `⚡️ Server is running on port ${PORT} in ${ENVIRONMENT} mode..`
  );
});
