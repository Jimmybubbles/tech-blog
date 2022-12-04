const { User } = require('../models');

const userData = [
    {
        "username": "hannah",
        "email": "hannah@gmail.com",
        "password": "admin123"
    },
    {
        "username": "tom",
        "email": "tom@gmail.com",
        "password": "password111"
    },
    {
        "username": "vida",
        "email": "vida@gmail.com",
        "password": "amazing123"
    },
    {
        "username": "sam",
        "email": "sam@gmail.com",
        "password": "password00"
    },
    {
        "username": "James",
        "email": "james@gmail.com",
        "password": "logon123"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;