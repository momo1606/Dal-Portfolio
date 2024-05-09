//Author: Mohammed Noor ul Hasan Kothaliya

import { User, Token } from "../../models/index.js";
import { errorHelper } from "../../utils/index.js";
import { jwtSecretKey } from "../../config/index.js";
import pkg from "mongoose";
const { Types } = pkg;
import jwt from "jsonwebtoken";
const { verify } = jwt;

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
      return res.status(401).json(errorHelper("00006", req, "Access denied. No token provided."));
  }

  token = token.replace('Bearer ', '');  

  try {
      const decoded = jwt.verify(token, jwtSecretKey);
      req.user = decoded;  

      const user = await User.findOne({ _id: decoded._id, isVerified: true });
      if (!user) {
          return res.status(404).json(errorHelper("00009", req, "User not found or not verified."));
      }

      const tokenExists = await Token.findOne({ userId: decoded._id, refreshToken: { $ne: null } });
      if (!tokenExists) {
          return res.status(401).json(errorHelper("00011", req, "Session expired or invalid."));
      }

      next();
  } catch (error) {
      console.error("Token validation error:", error);
      return res.status(401).json(errorHelper("00012", req, "Invalid token or token expired."));
  }
};

export default authMiddleware;