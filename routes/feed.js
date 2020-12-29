var express = require('express');
var router = express.Router();

const feedController = require('../controllers/feed');

router.get('/getAllFeeds', feedController.getAllFeeds);

module.exports = router;

