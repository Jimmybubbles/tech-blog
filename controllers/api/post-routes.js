const router = require('express').Router();
const { Post, User, Comment } = require('../../config/connection');
const withAuth = require('../../utils/auth')

// create route for post
router.get('/', (req, res) =>  {
    const body = req.body;
    console.log(req.session.userId)
})

module.exports = router;