const router = require("express").Router();
const { Post, User, Comment } = require("../../models")





// router.get('/', (req, res) => {
//     console.log('======================');
//     Post.findAll({
//       attributes: [
//         'id',
//         'description',
//         'title',
//         'created_at'
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username']
//         }
//       ]
//     })
//       .then(dbPostData => res.json(dbPostData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


router.get("/", async (res, req) => {

    try {
        const postData = await Post.findAll({
            include: [{ model: User }, { model: Comment }]

        })
        res.status(200).json(postData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})