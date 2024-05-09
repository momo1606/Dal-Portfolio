//Author: Hatim Patrawala

import { Portfolio } from "../../../../models/index.js";
import { errorHelper, getText } from "../../../../utils/index.js";
import { validateCreatePortfolio } from "../../../validators/portfolio.validator.js";

export default async (req, res) => {
  const user_id = req.params.user_id;
  const { error, value, warning } = validateCreatePortfolio(req.body);
  console.log("error", error);
  if (error) {
    return res
      .status(400)
      .json(errorHelper("00025", req, error.details[0].message));
  }

  let portfolio = new Portfolio({
    ...value,
    user_id: user_id,
  });

  portfolio = await portfolio.save().catch((err) => {
    return res.status(500).json(errorHelper("00034", req, err.message));
  });

  return res.status(200).json({
    resultMessage: { en: getText("en", "00094"), fr: getText("fr", "00094") },
    resultCode: "00035",
    portfolio,
  });
};
