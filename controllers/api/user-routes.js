const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // access out user models and run .findall() -- similar to SELECT * FROM users
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbUserDate => res.json(dbUserDate))
    .catch(err => {
        console.log(err);
        res.status(500).json
    })
});

// GET /api/users/1


// POST /api/users - similar to INSERT INTO users/ values



// POST to identify users


// USERS to log out


// PUT /api/users/1


// DELETE /api/users/1


module.exports = router;