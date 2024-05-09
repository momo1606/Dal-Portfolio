//Author: Hatim Patrawala

import { Portfolio } from "../../../../models/index.js";
import { errorHelper, getText } from "../../../../utils/index.js";

export default async (req, res) => {
	const user_id = req.params.id;
	const portfolios = await Portfolio.find({ user_id: user_id }).catch((err) => {
		return res.status(500).json(errorHelper("00034", req, err.message));
	});

	return res.status(200).json({
		resultMessage: { en: getText("en", "00094"), fr: getText("fr", "00094") },
		resultCode: "00035",
		portfolios,
	});
}