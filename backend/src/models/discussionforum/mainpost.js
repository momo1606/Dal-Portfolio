//Author: Sushank Saini
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const replySchema = new Schema({
  //schema represents a document in a collection
  userName: String,
  description: String,
  date: String,
});

const mainPostSchema = new Schema(
  {
    //schema represents a document in a collection
    userName: String,
    title: String,
    description: String,
    date: String,
    replies: [replySchema],
  },
  {
    timestamps: true, //for createdAt and updatedAt fields
  }
);

const DiscussionPost = mongoose.model("DiscussionPost", mainPostSchema); //model will be a collection in the dbs
export default DiscussionPost;
