const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://siphomkhize8705:sipho2002@cluster0.fxycyto.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(8000, () => {
    console.log("server is running");
  });