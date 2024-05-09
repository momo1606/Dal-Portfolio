//Author: Boon Undrajavarapu

import { User } from "../../../models/index.js";

export default async (req, res) => {
  try {
    // Extract the 'user_id' from the request query parameters
    const { user_id } = req.query;

    // Check if 'user_id' is missing
    if (!user_id) {
      // Return a 400 Bad Request response with an error message
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Find a user in the database with the given 'user_id'
    const user = await User.findOne({ _id: user_id });

    // Check if user is not found
    if (!user) {
      // Return a 404 Not Found response with an error message
      return res.status(404).json({ error: "User not found" });
    } else {
      // Return a 200 OK response with the user object
      return res.status(200).json(user);
    }
  } catch (error) {
    // If any error occurs during the execution, log the error and return a 500 Internal Server Error response
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
