const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishingDate: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "John",
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = {
  Blog,
};
