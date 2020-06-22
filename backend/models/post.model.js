const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  numLikes: { type: Number, required: true },
  numDislikes: { type: Number, required: true },
  date: { type: Date },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
