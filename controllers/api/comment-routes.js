const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

// route to get all the comments
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

// route to get 1 comment
router.get('/:id', (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)

        })
})


// route to create a comment
router.post('/', withAuth, (req, res) => {
    //check session
    if (req.session) {
        Comment.create({
            commentContent: req.body.commentContent,
            postId: req.body.post_id,
            // use the Id from the session
            user_id: req.session.user_id
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
})


// route to update a comment
router.put('/:id', withAuth, (req, res) => {
    Comment.update({
        commentContent: req.body.commentContent
    },
        {
            where: {
                id: req.params.id
            }
        }).then(dbCommentData => {
            if(!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id'});
            }
            res.json(dbCommentData);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// route to delete a comment

router.delete('/id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'})
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router