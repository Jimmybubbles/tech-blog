const { Post } = require('../models');

const postData = [
    {
        title: "economy heading to a downturn",
        content: "the fed is going to raise rates in america",
        userId: 1
    },
    {
        title: "new financial analysis",
        content: "Using ETF data to see what the big boys are doing",
        userId: 2
    },
    {
        title: "Ramen",
        content: "how fucking good is ramen",
        userId: 2
    },
    {
        title: "vapes",
        content: "i need to get a vape to quit darts",
        userId: 5
    },
    {
        title: "bootcamps",
        content: "the speed of these bootcamps is hectic when working.",
        userId: 3
    },
    {
        title: "find work",
        content: "looking for jobs in junior",
        userId: 4
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;