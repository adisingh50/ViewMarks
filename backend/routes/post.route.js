const router = require("express").Router();
const Post = require(".././models/post.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//main get request called by the primary 3 screens of the app
router.route("/viewPosts").get((req, res) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(400).json((err) => "Error: " + err));
});

//post request used to add a view post to the app
router.route("/addPost").post((req, res) => {
  const d = new Date();
  const dP = d.toLocaleString("en-US");

  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    imagePath: req.body.imagePath,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    numLikes: 0,
    numDislikes: 0,
    date: dP,
  });

  newPost
    .save()
    .then(() => res.status(200).json({ added: newPost }))
    .catch((err) => res.status(400).json("Error: " + err));
});

//image post request - adds image to uploads folder
router.route("/addImage").post(upload.single("image"), (req, res) => {
  res.status(200).json({ imagePath: req.file.originalname });
});

module.exports = router;
