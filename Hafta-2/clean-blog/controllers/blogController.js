const Blog = require("../models/Blog");

// Getting all blogs
exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", {
    blogs,
  });
};

// Creating blog
exports.createBlog = async (req, res) => {
  await Blog.create(...req.body);
  res.redirect("/");
};

// Finding blog by id
exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", { blog });
};

// Updating existed blog
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();
  res.redirect(`/post/${req.params.id}`);
};

// Deleting blog
exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
