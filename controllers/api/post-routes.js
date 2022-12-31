const router = require('express').Router();
const { Post, User, Comment } = require('../../config/connection');
const withAuth = require('../../utils/auth')

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        
        attributes: ['id', 'postTitle', 'postContent', 'created_at'],
        
        order: [['created_at', 'DESC']],
        
        include: [
            {
                model:User,
                attributes: ['username']
            },
            {
                model: comment,
                attributes: ['id', 'commentContent', 'userId', 'postId', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }

            }
        ]
    })
})


// get a single post


// create a post


// update a poste title


// delete a post

module.exports = router;