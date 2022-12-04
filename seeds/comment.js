const { Comment } = require('../models');

const commentData = [

    {
        comment_text: "True",
        user_id: 2,
        post_id: 3,
    },
    {
        comment_text: "unbelievable",
        user_id: 2,
        post_id: 5,
    },
    {
        comment_text: "i feel the same way",
        user_id: 2,
        post_id: 3,
    },
    {
        comment_text: "Nice",
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: "i dont think so",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "cool story bro",
        user_id: 5,
        post_id: 3,
    },
    {
        comment_text: "will follow this blog",
        user_id: 3,
        post_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;