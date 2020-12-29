var express = require('express');
var router = express.Router();

const feedController = require('../controllers/feed');

router.get('/getAllFeeds', feedController.getAllFeeds);
router.post('/saveFeed', feedController.saveFeed);
router.get('/getFeed/:id', feedController.getFeed);
router.put('/updateFeed', feedController.updateFeed);
router.delete('/deleteFeed/:id', feedController.deleteFeed);

module.exports = router;

