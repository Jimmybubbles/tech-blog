const router = require('express').Router();
const { Post, User, Comment } = require('../../config/connection');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) =>  {

})

module.exports = router;