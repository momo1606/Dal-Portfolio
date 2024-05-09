// Author: Zainuddin Saiyed

import { User, Portfolio } from "../../../../models/index.js";
import { getText, errorHelper } from "../../../../utils/index.js";

// Retrieve Portfolio details for a specific user
export default async (request, response) => {
  const portfolioId = request.params.portfolio_id;

  var portfolio = await Portfolio.findById(portfolioId).catch((error) => {
    return response
      .status(500)
      .json(errorHelper("00800", request, error.message));
  });

  // Return portfolio details
  return response.status(200).json({
    resultCode: "00801",
    resultMessage: {
      en: getText("en", "00801"),
      fr: getText("fr", "00801"),
    },
    portfolio,
  });
};
