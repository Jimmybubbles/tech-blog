const { User } = require('../models');

const userData = [
    {
        "username": "hannah",
        "email": "hannah@gmail.com",
        "password": "PASSWORD"
    },
    {
        "username": "tom",
        "email": "tom@gmail.com",
        "password": "password111"
    },
    {
        "username": "vida",
        "email": "vida@gmail.com",
        "password": "PASSWORD"
    },
    {
        "username": "sam",
        "email": "sam@gmail.com",
        "password": "PASSWORD"
    },
    {
        "username": "James",
        "email": "james@gmail.com",
        "password": "PASSWORD"
    },
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;