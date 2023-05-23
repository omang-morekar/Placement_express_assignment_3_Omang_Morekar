const asyncHandler = require("express-async-handler");
const { Blog } = require("../models/Blog");

// @desc    Create a new blog
// @route   POST /blog
// @access  PUBLIC
const createBlog = asyncHandler(async (req, res) => {
  const { name, publishingDate, content, author } = req.body;

  if (name && publishingDate && content) {
    const newBlog = await Blog.create({
      name,
      publishingDate,
      content,
      author,
    });

    console.log(newBlog);

    if (newBlog) {
      res.status(201).json(newBlog);
    } else {
      res.status(400);
      throw new Error("Invalid blog data");
    }
  }
});

// @desc    Get Blogs
// @route   GET /blog
// @access  PUBLIC
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});

  if (blogs) {
    res.status(200).json({
      blogs,
    });
  } else {
    res.status(404);
    throw new Error("Blogs not found");
  }
});

// @desc    Update Blog
// @route   PUT /blog
// @access  PUBLIC
const updateBlog = asyncHandler(async (req, res) => {
  const { name, publishingDate, content, author } = req.body;

  const blog = await Blog.findById(req.query.id);

  console.log(req.query);

  if (blog) {
    blog.name = name || blog.name;
    blog.publishingDate = publishingDate || blog.publishingDate;
    blog.content = content || blog.content;
    blog.author = author || blog.author;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Delete Blog
// @route   DELETE /blog
// @access  PUBLIC

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const blog = await Blog.findByIdAndDelete(id);

  console.log(blog);
  if (blog) {
    res.json({ message: "Blog removed", q: blog });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};
