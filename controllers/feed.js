const Feed = require('../models/feed');


exports.getAllFeeds = (req, resp, next) => {
    const feedQuery = Feed.find();
    let feedList;
    feedQuery.then((documents) => {
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
    const feed = new Feed(req.body);
    feed.save().then(result => {
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

exports.getFeed = (req, resp, next) => {
    Feed.findById(req.params.id).then(res => {
        if (res) {
            resp.status(200).json({
            message: 'Feed fetched sussessfully',
            feed: res
          })
        } else {
          resp.status(404).json({
            message: 'Feed not found'
          })
        }
    }).catch(err => {
        resp.status(500).json({
            message: "Failed to fetch feed",
        })
    });
}


exports.updateFeed = (req, resp, next) => {
    const feed = new Feed({
        _id: req.body.id,
        title: req.body.title,
        url: req.body.url,
        textColor: req.body.textColor,
        headlineColor: req.body.headlineColor,
        backgroundColor: req.body.backgroundColor,
        fontSize: req.body.fontSize,
        width: req.body.width,
        height: req.body.height,

    });
    Feed.updateOne({ _id: req.body.id }, feed).then(res => {
        if (res.n > 0) {
            resp.status(200).json({
            message: 'Feed updated sussessfully',
            feed: res
          })
        } else {
          resp.status(401).json({
            message: 'Feed not found'
          })
        }
    }).catch(err => {
        resp.status(500).json({
            message: "Failed to update feed",
        })
    });
}

exports.deleteFeed = (req, resp, next) => {
    Feed.deleteOne({
        _id: req.params.id,
      }).then(result => {
        if(result.n > 0) {
          resp.status(200).json({ message: 'Feed deleted sussessfully' });
        } else {
          resp.status(401).json({ message: 'Feed with specified id not found' });
        }
      }).catch(err => {
        resp.status(500).json({
          message: "Failed to delete Feed",
        })
      });
}