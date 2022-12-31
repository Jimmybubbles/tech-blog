const { Comment } = require('../models');

const commentData = [

    {
        commentContent: "True",
        userId: 2,
        postId: 3,
    },
    {
        commentContent: "unbelievable",
        userId: 2,
        postId: 5,
    },
    {
        commentContent: "i feel the same way",
        userId: 2,
        postId: 3,
    },
    {
        commentContent: "Nice",
        userId: 3,
        postId: 5
    },
    {
        commentContent: "i don't think so",
        userId: 2,
        postId: 1,
    },
    {
        commentContent: "cool story bro",
        userId: 5,
        postId: 3,
    },
    {
        commentContent: "will follow this blog",
        userId: 3,
        postId: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;