const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// const apiRoutes = require('./api');


router.use('/', homeRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });
// router.use("/api",apiRoutes)
// router.use('/api', apiRoutes);


module.exports = router;
