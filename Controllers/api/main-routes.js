const router = require("express").Router();
const { Post, User, Comment } = require("../../models")


// router.get("/", async (req, res) => {

//     try {
//         const postData = await Post.findAll({
//             include: [{ model: User }, { model: Comment }]

//         })
//         res.status(200).json(postData)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }

// })



router.post("/comment", async (req,res)=>{
try{
const comment = await Comment.create({
    comment_text :req.body.comment_text,
    user_id: req.session.user_id,
    post_id:req.body.post_id
    
})
res.status(200).json(comment)
}catch(err){
    console.log(err)

}


})

router.delete('/comment/:id', async (req, res) => {
    try {
      const deleteComment = await Comment.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (deleteComment === 0) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
      res.status(400).json(err);
    }
  });








module.exports = router