const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const uri = process.env.ATLAS_URI;
mongoose.connect("open", () => {
  console.log("MongoDB connection successfully established.");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
