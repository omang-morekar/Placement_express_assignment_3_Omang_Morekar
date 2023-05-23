const express = require("express");
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/").post(createBlog);
router.route("/").get(getBlogs);
router.route("/").put(updateBlog);
router.route("/").delete(deleteBlog);

module.exports = {
  router,
};
