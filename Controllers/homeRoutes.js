const router = require('express').Router();

const sequelize = require("../config/connection")
const{Comment,Post,User} = require("../models")


router.get('/', async (req, res) => {
try{

  const postData = await Post.findAll({
    include: [{ model: User }, { model: Comment }]
  })
  
  const projects = postData.map((project) => project.get({ plain: true }));
  // console.log(pos)
  
  
  res.render('homepage',{projects,
    loggedIn: req.session.loggedIn,});
}catch(err){
  res.status(500).json(err);
}
});





router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});









module.exports = router;
