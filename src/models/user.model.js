import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { emailRegex } from "../utils/helpers";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Firstname is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Lastname is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already registered"],
    match: [emailRegex, "Invalid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

export const User = model("user", userSchema);
