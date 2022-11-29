import mongoose from "mongoose";
const { Schema, model } = mongoose;

const optionSchema = new Schema({
  option: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const questionSchema = new Schema({
  question: {
    type: String,
  },
  options: [optionSchema],
});

const quizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

export const Quiz = model("quiz", quizSchema);
