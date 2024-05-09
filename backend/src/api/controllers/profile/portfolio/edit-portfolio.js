//Author: Hatim Patrawala

import { Portfolio } from "../../../../models/index.js";
import { errorHelper, getText } from "../../../../utils/index.js";
import { validateCreatePortfolio } from "../../../validators/portfolio.validator.js";

export default async (req, res) => {
  const portfolio_id = req.params.portfolio_id;
	const { error, value, warning } = validateCreatePortfolio(req.body);
	if (error) {
		return res
			.status(400)
			.json(errorHelper("00025", req, error.details[0].message));
	}

	let portfolio = await Portfolio.findByIdAndUpdate(portfolio_id, {
		...value,
	},).catch((err) => {
		return res.status(500).json(errorHelper("00034", req, err.message));
	});

	return res.status(200).json({
		resultMessage: { en: getText("en", "00095"), fr: getText("fr", "00095") },
		resultCode: "00035",
		portfolio,
	});
}