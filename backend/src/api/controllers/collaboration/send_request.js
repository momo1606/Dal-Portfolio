//Author: Boon Undrajavarapu

import { CollabRequests, User } from "../../../models/index.js";
import nodemailer from "nodemailer";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const { receiver_user_id, sender_user_id, projects, researchs, status } =
      req.body;

    var projectStatuses = [];
    var researchStatuses = [];

    if (req.body.hasOwnProperty("projects") && req.body.projects.length > 0) {
      projectStatuses = projects.map((project_id) => {
        return {
          project_id: project_id,
          status: status,
        };
      });
    }

    if (req.body.hasOwnProperty("researchs") && researchs.length > 0) {
      researchStatuses = researchs.map((project_id) => {
        return {
          project_id: project_id,
          status: status,
        };
      });
    }
    console.log(projectStatuses);
    console.log(researchStatuses);

    const newRequest = new CollabRequests({
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      projects: projectStatuses,
      researchs: researchStatuses,
      status: status,
    });

    console.log(receiver_user_id);
    const receiver_user_obj = await User.findOne({
      _id: ObjectId(receiver_user_id),
    });
    if (receiver_user_obj) {
      console.log(receiver_user_obj.email);
    } else {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    var transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL, // DalPortfolio email ID
      to: receiver_user_obj.email, // potential collaborator email ID
      subject: "Please respond to the Collaboration Request",
      text: "You received a collaboration request based on your profile. Please respond to the request at your conveinence.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const savedRequest = await newRequest.save();

    return res.status(200).json(savedRequest);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to write request info" + error.message });
  }
};
