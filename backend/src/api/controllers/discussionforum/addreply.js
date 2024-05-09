//Author: Sushank Saini
import DiscussionPost from "../../../models/discussionforum/mainpost.js";
import { getText } from "../../../utils/index.js";

export default async (req, res) => {
  try {
    const { postId, userName, description, date } = req.body;

    const discussionPost = await DiscussionPost.findById(postId);

    if (!discussionPost) {
      return res.status(404).json({
        resultMessage: {
          en: getText("en", "00705"),
          fr: getText("fr", "00705"),
        },
        resultCode: "00705",
      });
    }
    //add the reply
    discussionPost.replies.push({ userName, description, date });
    //update the document
    await discussionPost.save();
    console.log("Reply added successfully.");
    res.status(201).json({
      updatedPost: discussionPost,
      resultMessage: { en: getText("en", "00706"), fr: getText("fr", "00706") },
      resultCode: "00706",
    });
  } catch (error) {
    console.error("Error adding reply to discussion post:", error);
    res.status(500).json({
      resultMessage: { en: getText("en", "00707"), fr: getText("fr", "00707") },
      resultCode: "00707",
    });
  }
};
