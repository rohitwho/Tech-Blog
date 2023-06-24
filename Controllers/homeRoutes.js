const router = require('express').Router();

// const sequelize = require("../config/connection")
const { Comment, Post, User } = require("../models")


router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment }]
    })

    const projects = postData.map((project) => project.get({ plain: true }));

//     const commentData = await Comment.findAll({
//       where:{
//         post_id:req.body.post_id
//       },
//       include:{
//         model:User
//       }

//     })
// const comment= commentData.map((comment)=>comment.get({plain:true}))


    res.render('homepage', {
      projects,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});






router.get('/newPost', async (req, res) => {

  try {
    const user_id = req.session.user_id;
  const newPostData = await Post.findAll({
    where:{
      user_id
    },
    include:{model:User}

  })
  const getPost = newPostData.map((here)=>(here.get({plain:true})))

    res.render('userpost', {
      
      getPost,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      user_id: req.session.user_id
    })

  } catch (err) {
    console.log(err)
  }





})





router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get("/logout" , (req,res)=>{
  res.redirect('/');
})






module.exports = router;
