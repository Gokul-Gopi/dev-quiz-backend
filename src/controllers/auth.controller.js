import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendErrorMessageAndStatus } from "../utils/helpers";

export const checkApiKey = (req, res, next) => {
  try {
    const apiKey = req?.headers["x-api-key"];

    if (!apiKey || apiKey !== process.env.API_KEY) {
      throw {
        status_code: 403,
        message: "Access denied",
      };
    }
    next();
  } catch (error) {
    return sendErrorMessageAndStatus(error, res);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw {
        status_code: 401,
        message: "Invalid email/password",
      };
    }

    //comparing password input by user with password in DB
    const isPasswordCorrect = await bcrypt.compare(password, user?.password);
    if (!isPasswordCorrect) {
      throw {
        status_code: 401,
        message: "Invalid email/password",
      };
    }

    //creating JWT token with userId as payload inside
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    const response = {
      token,
      firstname: user?.firstname,
      lastName: user?.lastname,
    };

    return res.status(200).json({ status: true, data: response });
  } catch (error) {
    return sendErrorMessageAndStatus(error, res);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { email, password, confirmPassword, ...rest } = req.body;
    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      throw {
        status_code: 401,
        message: "Email already regsitered",
      };
    }

    if (password !== confirmPassword) {
      throw {
        status_code: 401,
        message: "Passwords doesn't matches",
      };
    }

    //hash password before saving it to DB
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      ...rest,
    });
    await user.save();
    return res.status(201).json({ status: true });
  } catch (error) {
    return sendErrorMessageAndStatus(error, res);
  }
};

export const isAuthenticatedUser = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded?.id);

    if (!user) {
      throw {
        status_code: 401,
        message: "You are not authenticated to do this",
      };
    }
    req.user = user;
    return next();
  } catch (error) {
    return sendErrorMessageAndStatus(error, res);
  }
};
