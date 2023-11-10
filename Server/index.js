const express = require("express");
const env = require('dotenv').config();
const databaseUrl = process.env.REACT_APP_DATABASE;
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");
const bcrypt = require("bcrypt");
const UserModel = require("./model/user");

// middleware

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(databaseUrl);


app.post("/registrations", (req, res) => {
    const { password, ...rest } = req.body;
    bcrypt
     .hash(password, 10)
     .then((hash) => {
    userModel.create({ password: hash, ...rest})
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    });
  })
})

app.get("/users", (req, res) => {
  userModel.find()
  .then(use => res.json(use))
  .catch(err => console.log(err))
 });
// app.post("/login", (req, res) => {
//   const { phoneNumber, email, password } = req.body;
//   userModel.find({ email: email }).then((account) => {
//     if (account) {
//       bcrypt.compare(password, account.password, (err, response) => {
//         if (response) {
//           res.json({
//             auth: true,
//             account,
//           });
//         } else {
//           res.json({
//             auth: false,
//           });
//         }
//       });
//     } else {
//       res.json({
//         auth: false,
//         mssg: "Account Does not Exist",
//       });
//     }
//   });
// });

app.listen(8000, () => {
  console.log("server is running");
});
