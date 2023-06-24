const router = require('express').Router();

const mainRoutes = require('./main-routes');
const userRoutes = require("./user-routes.js")
const newPosttt = require("./newpost-routes.js")

router.use('/posts', mainRoutes);
router.use("/users",userRoutes);
router.use("/newPost",newPosttt)



module.exports = router;