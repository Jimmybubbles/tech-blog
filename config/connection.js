const Sequelize = require('sequelize');
require('dotenv')
// adding dotenv file so that password login is hidden 


const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    }
);

module.exports = sequelize