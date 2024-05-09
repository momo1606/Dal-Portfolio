// Author: Zainuddin Saiyed

import { User, Portfolio } from "../../../../models/index.js";
import { getText, errorHelper } from "../../../../utils/index.js";

// Retrieve a Project detail for a specific user given a project ID
export default async (request, response) => {
  const user_name  = request.body.user_name;
  const project_id = request.body.project_id;

  try {
    // Check if user exists in the database in user collection
    const exists = await User.exists({ username: user_name });
    
    // If user does not exists, return user not found error
    if (!exists) {
      return response.status(404).json(errorHelper("00052", request, "User not found"));
    } 
    
    // Fetch portfolio details for the user
    var portfolio = await Portfolio.findOne({ username: user_name });

    // If portfolio is not found, return portfolio not created by user error
    if (portfolio === null) {
      return response.status(404).json(errorHelper("00800", request, "Portfolio does not exist for this user"));
    }

     // Find the project in the portfolio using the project_id
     const project = portfolio.projects.find(project => project.project_id.toString() === project_id);

     // If project is not found, return project not found error
     if (!project) {
       return response.status(404).json(errorHelper("00803", request, "Project not found in the portfolio"));
     }

    // Else Return the project details
    return response.status(200).json({
      resultCode: "00802",
      resultMessage: {
        en: getText("en", "00802"),
        fr: getText("fr", "00802"),
      },
        "project_detail": project,
      }
    );

  } catch (error) {
    return response.status(500).json(errorHelper("00803", request, error.message));
  }
};
