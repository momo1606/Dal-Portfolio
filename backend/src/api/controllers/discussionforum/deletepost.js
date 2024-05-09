//Author: Sushank Saini
import DiscussionPost from "../../../models/discussionforum/mainpost.js";
import { getText } from "../../../utils/index.js";

export default async (req, res) => {
  try {
    const { postId } = req.body;

    if (!postId) {
      return res.status(400).json({
        resultMessage: {
          en: getText("en", "00708"),
          fr: getText("fr", "00708"),
        },
        resultCode: "00708",
      });
    }

    const deletedPost = await DiscussionPost.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({
        resultMessage: {
          en: getText("en", "00705"),
          fr: getText("fr", "00705"),
        },
        resultCode: "00705",
      });
    }
    res.status(200).json({
      resultMessage: { en: getText("en", "00709"), fr: getText("fr", "00709") },
      resultCode: "00709",
    });
  } catch (error) {
    console.error("Error deleting discussion post:", error);
    res.status(500).json({
      resultMessage: { en: getText("en", "00710"), fr: getText("fr", "00710") },
      resultCode: "00710",
    });
  }
};
