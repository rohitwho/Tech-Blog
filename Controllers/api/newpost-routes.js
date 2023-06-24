const router = require("express").Router()
const { Post, User, Comment } = require("../../models")






// router.get('/posts',async (req,res)=>{
//     try{
//         const user_id = req.session.user_id;
//         const existingPost = await Post.findAll({
//           where: { user_id },
//           include: [{ model: User }, { model: Comment }]
//         });
    
    
//         const getPost = existingPost.map((posts) => posts.get({ plain: true }));
//         res.status(200).json(getPost)
//     }catch(err){

//     }
// })



// router.post('/',(req,res)=>{
//     try{

//         const newPost = Post.update({
//             title:req.body.title,
//             description:req.body.description,
//         })
//     }catch(err)
// {

// }})
router.delete('/:id', (req, res) => {
    try {
      const deletePost =  Post.destroy({
        where: {
          id: req.params.id,
        }
      })
  
      if (!deletePost) {
        res.status(404).json({ message: 'No Blog found with this id!' });
        return;
      }
  
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.post('/',async (req,res)=>{

    try{
        const newPost = await Post.create({
            title:req.body.title,
            description:req.body.description,
            user_id: req.session.user_id,
        
          })
          res.status(200).json(newPost)
    }catch(err){
        console.log(err)
    }
   
  })
  
  module.exports=router;