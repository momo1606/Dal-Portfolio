//Author: Sushank Saini
import DiscussionPost from "../../../models/discussionforum/mainpost.js";
import { getText } from "../../../utils/index.js";

export default async (req, res) => {
  try {
    const discussionPosts = await DiscussionPost.find().sort({ createdAt: -1 });
    console.log("All discussion posts fetched successfully");
    res.status(200).json({
      listOfPosts: discussionPosts,
      resultMessage: { en: getText("en", "00703"), fr: getText("fr", "00703") },
      resultCode: "00703",
    });
  } catch (error) {
    console.error("Error fetching discussion posts:", error);
    res.status(500).json({
      resultMessage: { en: getText("en", "00704"), fr: getText("fr", "00704") },
      resultCode: "00704",
    });
  }
};
