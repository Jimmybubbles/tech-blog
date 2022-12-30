const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create post model
class Post extends Model { }

// create fields and columns for post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        postTitle: {
            type: DataTypes.STRING,
            validate: {
                //only allow a max of 60 characters for Post title
                max: 60,
            }
        },
        postContent: {
            type: DataTypes.TEXT,
            
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
            allowNull: false
        },



    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;