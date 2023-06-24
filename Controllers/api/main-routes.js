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



module.exports = router