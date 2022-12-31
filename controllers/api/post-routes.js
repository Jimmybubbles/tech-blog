const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth')

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        
        attributes: ['id', 'postTitle', 'postContent', 'dateCreated'],
        
        order: [['created_at', 'DESC']],
        
        include: [
            {
                model:User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'commentContent', 'userId', 'postId', 'dateCreated'],
                include: {
                    model: User,
                    attributes: ['username']
                }

            }
        ]
    })
    .then(dbPostData => res.json(dbPostData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})


// get a single post

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 'postTitle', 'postContent', 'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model:Comment,
                attributes: ['id','commentContent', 'postId', 'userId', 'dataCreated'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// create a post

router.post('/', withAuth, (req, res) => {
    // create 1 post
    Post.create({
        postTitle: req.body.postTitle,
        postContent: req.body.postContent,
        userId: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


// update a poste title

router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        content: req.body.content
    },
    {
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


// delete a post

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;