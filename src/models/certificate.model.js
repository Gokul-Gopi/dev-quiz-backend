import mongoose from "mongoose";
const { Schema, model } = mongoose;

const certificateSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
    },
    percentageScored: {
      type: Number,
      requried: [true, "Percentage scored required"],
    },
  },
  { timestamps: true }
);

export const Certificate = model("certificate", certificateSchema);
