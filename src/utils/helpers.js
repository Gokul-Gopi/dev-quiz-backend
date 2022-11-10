import mongoose from "mongoose";

export const sendErrorMessageAndStatus = (error, response) => {
  const statusCode = error.status_code || 400;
  let message = error.message || "Something went wrong";

  //Handling mongoDB validation error
  if (error instanceof mongoose.Error.ValidationError) {
    for (const field in error?.errors) {
      message = error.errors[field].message;
    }
  }
  return response.status(statusCode).json({ status: false, message });
};

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
