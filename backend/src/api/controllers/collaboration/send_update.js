//Author: Boon Undrajavarapu

import { CollabRequests, User } from "../../../models/index.js";
import nodemailer from "nodemailer";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const { project_title, sender_user_id, receiver_user_id, status, _id } =
      req.body;

    // Check if required fields are missing
    if (
      !receiver_user_id ||
      !sender_user_id ||
      !project_title ||
      !status ||
      !_id
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const filter = { _id: new ObjectId(_id) };
    const projectUpdate = {
      $set: { "projects.$[elem].status": status },
    };

    const projectArrayFilters = {
      arrayFilters: [{ "elem.project_id": { $eq: project_title } }],
    };

    // Update the project status in the CollabRequests collection
    const projectUpdateResult = await CollabRequests.updateOne(
      filter,
      projectUpdate,
      projectArrayFilters
    );

    if (projectUpdateResult.modifiedCount > 0) {
      const sender_user_obj = await User.findOne({
        _id: ObjectId(sender_user_id),
      });

      if (sender_user_obj) {
        console.log(sender_user_obj.email);
      } else {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }

      // Create a nodemailer transporter
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Configure email options
      var mailOptions = {
        from: process.env.EMAIL, // DalPortfolio email ID
        to: sender_user_obj.email, // potential collaborator email ID
        subject: "You have a response to your Collaboration Request",
        text:
          "There is a response on your request for your " +
          project_title +
          ".\n Please check your account for more details.",
      };

      // Send the email
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return res.status(200).json({ message: "Status updated successfully" });
    } else {
      return res.status(404).json({ error: "No data found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to write request info" + error.message });
  }
};
