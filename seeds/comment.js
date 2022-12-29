const { Comment } = require('../models');

const commentData = [

    {
        commentContent: "True",
        userid: 2,
        postid: 3,
    },
    {
        commentContent: "unbelievable",
        userid: 2,
        postid: 5,
    },
    {
        commentContent: "i feel the same way",
        userid: 2,
        postid: 3,
    },
    {
        commentContent: "Nice",
        user_d: 3,
        post_id: 5
    },
    {
        commentContent: "i don't think so",
        user_id: 2,
        post_id: 1,
    },
    {
        commentContent: "cool story bro",
        user_id: 5,
        post_id: 3,
    },
    {
        commentContent: "will follow this blog",
        user_id: 3,
        post_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;