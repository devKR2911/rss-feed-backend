// const Employee = require('../models/employee');

const feedList = [
    {"id": 0, "feed": "feed 1" },
    {"id": 1, "feed": "feed 2" },
    {"id": 2, "feed": "feed 3" },
    {"id": 3, "feed": "feed 4" }
];

exports.getAllFeeds = (req, resp, next) => {
    resp.status(200).json({
        message: 'Feed List retrived successfully',
        employees: feedList,
        totalCount: feedList.length,
    });
}