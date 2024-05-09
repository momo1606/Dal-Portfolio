//Author: Hatim Patrawala

import pkg from "jsonwebtoken";
const { sign } = pkg;
import { jwtSecretKey, refreshTokenSecretKey } from "../../config/index.js";

function signAccessToken(userId) {
  const accessToken = sign({ _id: userId }, jwtSecretKey, {
    expiresIn: "1h",
  });
  return accessToken;
}

function signRefreshToken(userId) {
  const refreshToken = sign({ _id: userId }, refreshTokenSecretKey, {
    expiresIn: "7d",
  });
  return refreshToken;
}

function signConfirmCodeToken(userId, confirmCode) {
  const confirmCodeToken = sign(
    { _id: userId, code: confirmCode },
    jwtSecretKey,
    {
      expiresIn: "5m",
    }
  );
  return confirmCodeToken;
}

export { signAccessToken, signRefreshToken, signConfirmCodeToken };
