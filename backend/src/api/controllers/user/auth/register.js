//Author: Mohammed Noor ul Hasan Kothaliya

import { User } from "../../../../models/index.js";

import { validateRegister } from "../../../validators/user.validator.js";

import {
  logger,
  getText,
  errorHelper,
  signConfirmCodeToken,
  generateRandomCode,
} from "../../../../utils/index.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import Verification from "../../../../models/verification.js";
import { sendVerificationEmail } from "../../../../utils/sendEmail.js";

export default async (req, res) => {

  console.log("Validating request...");

  const { error, value } = validateRegister(req.body);
  if (error) {
    logger("00025", req?.user?._id ?? "", error.details[0].message, "Validation Error", req);
    return res.status(400).json(errorHelper("00025", req, getText("en", "00025")));
  }

  const { username, email, password, ...otherDetails } = value;

  try {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      console.log("Username already exists");
      logger("00032", req?.user?._id ?? "", "Username already exists", "Conflict", req);
      return res.status(409).json(errorHelper("00032", req, getText("en", "00032")));
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      logger("00033", req?.user?._id ?? "", "Email already exists", "Conflict", req);
      return res.status(409).json(errorHelper("00033", req, getText("en", "00033")));
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating new user...");
    let newUser = new User({
      username,
      email,
      password: hashedPassword,
      ...otherDetails,
      isVerified: false
    });

    console.log("Saving new user...");
    newUser = await newUser.save();
    newUser.password = undefined;

    const verificationCode = uuidv4();
    const verificationLink = `${process.env.FRONTEND_URL}/verify-email/${newUser.username}/${verificationCode}`;
    console.log("Verification link:", verificationLink);

    let verification = new Verification({
      userId: newUser._id,
      username: newUser.username,
      verificationCode: verificationCode
    });
    console.log("Saving verification info...", newUser._id, verificationCode);


    verification = await verification.save().catch((err) => {
      console.log("Failed to save verification info...");
      console.error('Error saving verification info:', err);
      return res.status(500).json({
        message: "Failed to save verification info",
        error: err.message
      });
    });

    await sendVerificationEmail(newUser.email, verificationLink).catch(err => {
      console.error('Failed to send verification email:', err);
    });

    logger("00035", newUser._id, getText("en", "00035"), "Info", req);
    return res.status(201).json({
      message: getText("en", "00035"),
      user: newUser,
      verificationCode: verificationCode,
    });

  } catch (err) {
    console.log("Server error:", err);
    logger("00031", req?.user?._id ?? "", err.message, "Server Error", req);
    return res.status(500).json(errorHelper("00031", req, getText("en", "00031")));
  }
};
