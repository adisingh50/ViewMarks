const router = require("express").Router();
const Post = require(".././models/post.model");

//add like route
router.route("/addLike/:id").post((req, res) => {
  Post.findById(req.params.id).then((post) => {
    const newLikes = post.numLikes + 1;
    post.numLikes = newLikes;

    post
      .save()
      .then(() => res.status(200).json("Num Likes Incremented for Post"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//remove like route
router.route("/removeLike/:id").post((req, res) => {
  Post.findById(req.params.id).then((post) => {
    const newLikes = post.numLikes == 0 ? 0 : post.numLikes - 1;
    post.numLikes = newLikes;

    post
      .save()
      .then(() => res.status(200).json("Num Likes Decremented for Post"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//add dislike route
router.route("/addDislike/:id").post((req, res) => {
  Post.findById(req.params.id).then((post) => {
    const newDislikes = post.numDislikes + 1;
    post.numDislikes = newDislikes;

    post
      .save()
      .then(() => res.status(200).json("Num Dislikes Incremented for Post"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//remove dislike route
router.route("/removeDislike/:id").post((req, res) => {
  Post.findById(req.params.id).then((post) => {
    const newDislikes = post.numDislikes == 0 ? 0 : post.numDislikes - 1;
    post.numDislikes = newDislikes;

    post
      .save()
      .then(() => res.status(200).json("Num Dislikes Decremented for Post"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
