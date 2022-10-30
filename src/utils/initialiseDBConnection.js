import mongoose from "mongoose";

export const initialiseDBConnection = async () => {
	await mongoose.connect(process.env.MONGODB_URI);
  try {
    console.log("🔋 MongoDB connected");
  } catch (error) {
    console.log(`DB connection error:${error.message}`);
  }
};
