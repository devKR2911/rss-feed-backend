var express = require('express');
var router = express.Router();

const feedController = require('../controllers/feed');

router.get('/getAllFeeds', feedController.getAllFeeds);
router.post('/saveFeed', feedController.saveFeed);

module.exports = router;

