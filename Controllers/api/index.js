const router = require('express').Router();
// const commentRoutes = require('./category-routes');
const postRoutes = require('./post-routes.js');
// const userRoutes = require('./tag-routes');

// router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;