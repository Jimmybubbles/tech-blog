const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            // use the ID from session
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'postTitle',
            'postContent',
            'dateCreated'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'commentContent', 'postId', 'userId', 'dateCreated'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

//============================================================================//

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'postTitle',
            'postContent',
            'dateCreated'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'commentContent', 'postId', 'userId', 'dateCreated'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // serialize the data before passing to template
        const post = dbPostData.get({ plain: true });
        res.render('edit-post', { post, loggedIn: true });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//============================================================================//

// redirect the users to sign in page once they sign up.
router.get('/new', (req, res) => {
    res.render('new-post');
})




module.exports = router;