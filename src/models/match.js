const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    rank: String,
    location: String,
    date: String,
    rsvp: String
});

module.exports = mongoose.model('Match', matchSchema, 'connections');