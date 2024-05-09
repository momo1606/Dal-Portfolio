//Author: Sushank Saini
import DiscussionPost from "../../../models/discussionforum/mainpost.js";
import { getText } from "../../../utils/index.js";

export default async (req, res) => {
  try {
    const { postId, replyId } = req.body;

    const updatedPost = await DiscussionPost.findByIdAndUpdate(
      postId,
      { $pull: { replies: { _id: replyId } } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({
        resultMessage: {
          en: getText("en", "00705"),
          fr: getText("fr", "00705"),
        },
        resultCode: "00705",
      });
    }

    res.status(200).json({
      resultMessage: { en: getText("en", "00711"), fr: getText("fr", "00711") },
      resultCode: "00711",
    });
  } catch (error) {
    console.error("Error deleting reply:", error);
    res.status(500).json({
      resultMessage: { en: getText("en", "00712"), fr: getText("fr", "00712") },
      resultCode: "00712",
    });
  }
};
