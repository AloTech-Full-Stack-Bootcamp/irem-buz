const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//connect DB
mongoose.connect(
  "mongodb+srv://localhost/cleanblog-test-db?retryWrites=true&w=majority"
);
