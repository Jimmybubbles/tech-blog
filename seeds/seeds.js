const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedComments();
    await seedPosts();
    process.exit(0);
}

seedAll() 