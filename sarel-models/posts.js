const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  text: String,
  location: String,
  Date: String,
});

const linkSchema = new Schema({
  title: String,
  url: String,
  description: String,
});

module.exports = mongoose.model("Post", postSchema);
