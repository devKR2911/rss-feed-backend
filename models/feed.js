const mongoose = require('mongoose');

const feedSchema = mongoose.Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    textColor: {type: String, required: true},
    headlineColor: {type: String, required: true},
    fontSize: {type: String, required: true},
    width: {type: String, required: true},
    height: {type: String, required: true},
})

module.exports = mongoose.model('Feed', feedSchema);
