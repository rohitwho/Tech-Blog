const  Comment = require("../models/comment");






const commentData = [
    {
        comment_text: "this a text"
},
{
    comment_text: "this a text 2"
}

]




const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment
