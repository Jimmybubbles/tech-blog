const router = require('../controllers');
const { Post } = require('../models');

const postData = [
    {
        title: "economy heading to a downturn",
        content: "the fed is going to raise rates in america",
        user_id: 1
    },
    {
        title: "new financial analysis",
        content: "Using ETF data to see what the big boys are doing",
        user_id: 2
    },
    {
        title: "Ramen",
        content: "how fucking good is ramen",
        user_id: 2
    },
    {
        title: "vapes",
        content: "i need to get a vape to quit darts",
        user_id: 5
    },
    {
        title: "bootcamps",
        content: "the speed of these bootcamps is hectic when working.",
        user_id: 3
    },
    {
        title: "find work",
        content: "looking for jobs in junior",
        user_id: 4
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;