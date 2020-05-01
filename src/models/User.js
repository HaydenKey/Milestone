const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    password: String,
    connections: [{
        id: mongoose.Schema.Types.ObjectId,
        title: String,
        rank: String,
        location: String,
        date: String,
        rsvp: String
        }]
});

module.exports = mongoose.model('User', userSchema, 'users');