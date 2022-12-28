const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('---------DATABASE SYNCED-------------')
    await seedUsers();
    console.log('---------USERS SEEDED-------------')
    await seedComments();
    console.log('---------COMMENTS SEEDED-------------')
    await seedPosts();
    console.log('---------POSTS SEEDED-------------')
    process.exit(0);
}

seedAll() 