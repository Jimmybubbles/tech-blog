const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    Comment.create({ ...req.body, userId: req.session.user_id })
    .then(newComment => {
        res.json(newComment);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router