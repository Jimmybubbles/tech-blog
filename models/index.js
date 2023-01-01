const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'userId',
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: "cascade"
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: "cascade"
});





module.exports = { User, Post, Comment };