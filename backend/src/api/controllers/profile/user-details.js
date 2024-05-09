//Author: Hatim Patrawala

import { User } from "../../../models/index.js";
import { errorHelper, getText } from "../../../utils/index.js";
import { validateUpdateUser } from "../../validators/user.validator.js";

const fetchUserDetails = async (req, res) => {
  const user_id = req.params.id;
  if (!user_id) {
    return res
      .status(500)
      .json(errorHelper("00007", req, "User ID is required!"));
  }

  const user = await User.findById(user_id, { password: 0 }).catch((err) => {
    return res.status(500).json(errorHelper("00013", req, err.message));
  });

  return res.status(200).json({
    resultMessage: {
      en: getText("en", "00004"),
      fr: getText("fr", "00004"),
    },
    resultCode: "00004",
    user: user,
  });
};

const updateUserDetails = async (req, res) => {
  const user_id = req.params.id;
  const { error, value, warning } = validateUpdateUser(req.body);
  if (error) {
    return res
      .status(400)
      .json(errorHelper("00025", req, error.details[0].message));
  }

  if (!user_id) {
    return res
      .status(500)
      .json(errorHelper("00007", req, "User ID is required!"));
  }

  const user = await User.findByIdAndUpdate(user_id, value, {
    new: true,
  }).catch((err) => {
    return res.status(500).json(errorHelper("00014", req, err.message));
  });

  return res.status(200).json({
    resultMessage: {
      en: getText("en", "00093"),
      fr: getText("fr", "00093"),
    },
    resultCode: "00093",
  });
};

const updateUserTheme = async (req, res) => {
  const user_id = req.params.id;
  const { theme = "light" } = req.body;

  if (!user_id || ["dark", "light"].includes(theme)) {
    return res
      .status(500)
      .json(errorHelper("00007", req, "User ID is required!"));
  }

  const user = await User.findByIdAndUpdate(
    user_id,
    { theme: theme },
    { new: true }
  ).catch((err) => {
    return res.status(500).json(errorHelper("00014", req, err.message));
  });

  return res.status(200).json({
    resultMessage: {
      en: getText("en", "00093"),
      fr: getText("fr", "00093"),
    },
    resultCode: "00093",
    user: user,
  });
};

export { fetchUserDetails, updateUserDetails, updateUserTheme };
