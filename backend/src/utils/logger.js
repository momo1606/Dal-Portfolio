//Author: Hatim Patrawala

import { Log } from "../models/index.js";
import ipHelper from "./helpers/ip.js";

export default async (code, userId, message, level, req) => {
  let ip = "no-ip";
  if (req !== "") ip = ipHelper(req);
  let log = new Log({
    resultCode: code,
    level: level,
    message: message,
    ip: ip,
  });

  if (userId !== "" && userId) log.userId = userId;

  await log.save().catch((err) => {
    console.log("Logging is failed: " + err);
  });
};
