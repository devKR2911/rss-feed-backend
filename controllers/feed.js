const Feed = require('../models/feed');

const feedList = [
    {"id": 0, "feed": "feed 1" },
    {"id": 1, "feed": "feed 2" },
    {"id": 2, "feed": "feed 3" },
    {"id": 3, "feed": "feed 4" }
];

exports.getAllFeeds = (req, resp, next) => {
    console.log('Inside controller');
    const feedQuery = Feed.find();
    let feedList;
    feedQuery.then((documents) => {
        console.log(documents)
        feedList = documents;
        return Feed.count(); // To know the total count of records
      }).then(count => {
        resp.status(200).json({
          message: 'Feeds fetched successfully',
          feeds: feedList,
          totalCount: count,
        });
      }).catch(err => {
        resp.status(500).json({
          message: "Failed to fetch feeds",
          error: err
        })
      });
}

exports.saveFeed = (req, resp, next) => {
    const feed = new Feed(req.body)
    feed.save().then(result => {
        console.log('--- Save Success ----');
        resp.status(200).json({
          post: {
            id: result._id,
            title: result.title,
            url: result.url,
            textColor: result.textColor,
            headlineColor: result.headlineColor,
            fontSize: result.fontSize,
            width: result.fontSize,
            height: result.fontSize,
          },
          message: 'Feed saved sussessfully'
        })
      }).catch(err=> {
        res.status(500).json({
          message: "Failed to create a feed!",
        })
      });
}