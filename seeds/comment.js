const { Comment } = require('../models');

const commentData = [

    {
        commentContent: "True",
        userId: 2,
        post_id: 3,
    },
    {
        commentContent: "unbelievable",
        userId: 2,
        post_id: 5,
    },
    {
        commentContent: "i feel the same way",
        userId: 2,
        post_id: 3,
    },
    {
        commentContent: "Nice",
        userId: 3,
        post_Id: 5
    },
    {
        commentContent: "i don't think so",
        userId: 2,
        post_Id: 1,
    },
    {
        commentContent: "cool story bro",
        userId: 5,
        post_Id: 3,
    },
    {
        commentContent: "will follow this blog",
        userId: 3,
        post_Id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;