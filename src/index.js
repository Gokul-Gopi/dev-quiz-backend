import express from "express";
import dotenv from "dotenv";
import { initialiseDBConnection } from "./utils/initialiseDBConnection";
const app = express();
dotenv.config();
initialiseDBConnection()
app.get("/", (req, res) => {
  res.send("Server in running...");
});

const PORT = process.env.PORT;
const ENVIRONMENT = process.env.NODE_ENV;

app.listen(PORT, () => {
  return console.log(
    `⚡️ Server is running on port ${PORT} in ${ENVIRONMENT} mode..`
  );
});
