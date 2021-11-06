const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");

const blogController = require("./controllers/blogController");
const pageController = require("./controllers/pageController");

const app = express();

// We use Atlas as MongoDB Server
mongoose.connect(
  "mongodb+srv://mongodb:mysecretpassword@cluster0.nu60a.mongodb.net/cleanblog-test-db?retryWrites=true&w=majority"
);

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// Routes
app.get("/", blogController.getAllBlogs);
app.get("/post/:id", blogController.getBlog);
app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);
app.get("/blogs/edit/:id", pageController.getEditPage);
app.get("/", blogController.getAllBlogs);
app.get("/post/:id", blogController.getBlog);
app.post("/addblog", blogController.createBlog);
app.put("/blog/:id", blogController.updateBlog);
app.delete("/blog/:id", blogController.deleteBlog);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
