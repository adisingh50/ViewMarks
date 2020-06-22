const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const http = require("http");
const path = require("path");

dotenv.config();
const app = express();
app.use("/uploads", express.static("uploads"));
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
mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successfully established.");
});

const postRouter = require("./routes/post.route");
const ratingRouter = require("./routes/rating.route");
app.use("/post", postRouter);
app.use("/rating", ratingRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
