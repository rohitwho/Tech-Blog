const router = require("express").Router()
const withAuth = require("../../utils/auth")
const { Post, User, Comment } = require("../../models")



router.delete('/:id', (req, res) => {
  try {
    const deletePost = Post.destroy({
      where: {
        id: req.params.id,
      }
    })



    res.status(200).json(deletePost);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/:id", async (req, res) => {
  try {
    const editPost = await Post.update(
      {
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(editPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/', async (req, res) => {

  try {
    const newPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id,

    })
    res.status(200).json(newPost)
  } catch (err) {
    console.log(err)
  }

})

module.exports = router;