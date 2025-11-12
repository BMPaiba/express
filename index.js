const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
