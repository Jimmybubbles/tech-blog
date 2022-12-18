const seedUsers = require('./User');
const seedComments = require('./Comment');
const seedPost = require('./Post');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n------ DATABASE SYNCED ------\n');
    await seedUsers();
    console.log('\n------ USERS SYNCED ------\n');
    await seedComments();
    console.log('\n------ COMMENTS SYNCED ------\n');
    await seedPost();
    console.log('\n------ POSTS SYNCED ------\n');
    process.exit(0);
}

seedAll();


