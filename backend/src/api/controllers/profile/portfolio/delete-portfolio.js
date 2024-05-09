//Author: Hatim Patrawala

import { Portfolio } from "../../../../models/index.js";
import { errorHelper, getText } from "../../../../utils/index.js";

export default async (req, res) => {
  const portfolio_id = req.params.portfolio_id;
  const portfolio = await Portfolio.findByIdAndDelete(portfolio_id).catch(
    (err) => {
      return res.status(500).json(errorHelper("00034", req, err.message));
    }
  );
  return res.status(200).json({
    resultMessage: { en: getText("en", "00096"), fr: getText("fr", "00096") },
    resultCode: "00035",
    portfolio,
  });
};
