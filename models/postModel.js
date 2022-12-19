const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    author: String,
    location: String,
    description: String,
    image: String,
    date: String
});
const Posts = mongoose.model("instaposts", PostSchema);
module.exports = Posts;