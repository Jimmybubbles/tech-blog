const seedUsers = require('./User');
const seedComments = require('./Comment');
const seedPost = require('./Post');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedComments();
    await seedPost();
    process.exit(0);
}

seedAll();


