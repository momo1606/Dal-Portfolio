//This file is created by "JINAY SHAH (B00928737)"
import { Portfolio } from "../../../../models/index.js";
import { errorHelper } from "../../../../utils/index.js";

export default async (req, res) => {
    try {
        console.log(req.body);
        const searchString = req.body.search;
        console.log(searchString);
        console.log("inside try");
        const regex = new RegExp(searchString, 'i');
        const query = { $or: [
          {'configuration.name': {$regex: regex}}, 
          {'bio.first_name': { $regex: regex } },
          {'bio.last_name': { $regex: regex } },
          {'bio.email': { $regex: regex } },
          {'bio.about': { $regex: regex } },
          {'bio.city' : {$regex:regex}},
          {'bio.country' : {$regex:regex}},
          {'bio.about' : {$regex:regex}},
          {'education.degree': { $regex: regex } },
          {'education.field_of_study': { $regex: regex } },
          {'education.university': { $regex: regex } },
          {'experience.company_name': { $regex: regex } },
          {'experience.role': { $regex: regex } },
          {'projects.title': { $regex: regex } },
          {'projects.description': { $regex: regex } },
          {'skills.name': { $regex: regex } },
          {'certifications.title': { $regex: regex } },
        ] };

        const result = await Portfolio.find(query);
        
        res.status(200).json({
            resultMessage: { en: "Fetched documents successfully", fr: "Documents récupérés avec succès" },
            resultCode: "00703",
            listOfDocuments: result
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json(errorHelper("00704", req, "Error fetching documents"));
    }
};
