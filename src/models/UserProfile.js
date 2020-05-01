const MatchDB = require("../repositories/MatchDB");
const mongoose = require('mongoose');
const Match = require("../models/match");
const User = require("../models/User");


mongoose.connect('mongodb://localhost/goDB', {useNewUrlParser: true});

const matchList = [
    {
        id: "5ea2718352613ab27b89baca",
        userName: "hkey8@uncc.edu",
        title: "Meurem vs Komugi",
        rank: "dan",
        location: "The Palace",
        date: "9/9/2020 at 11:59",
        rsvp: "yes"
    },
    {
        id: "5ea2718352613ab27b89bacb",
        userName: "hkey8@uncc.edu",
        title: "Chad vs Brad",
        rank: "dan",
        location: "Your mom's house",
        date: "9/9/2020 at 11:59",
        rsvp: "yes"
    },
    {
        id: "5ea2718352613ab27b89bacf",
        userName: "hkey8@uncc.edu",
        title: "Akuma vs Ken",
        rank: "kyu",
        location: "Caesar's Palace",
        date: "9/9/2020 at 11:59",
        rsvp: "maybe"
    }
];


class UserProfile {
    constructor(userName) {
        this.userName = userName;
    }

    async getUserMatches(username) {
        let user = await User.find({username: username});
        return user[0].connections;
    }

    async getUserMatchesRsvp(username, rsvp) {
        let user = await User.find({username: username});
        let matches = [];

        for (let i = 0; i < user[0].connections.length; i++) {
            if (user[0].connections[i].rsvp === rsvp) {
                matches.push(user[0].connections[i]);
            }
        }

        return matches;
    }

    async addMatch(username, matchId, rsvp) {
        // TODO: make sure this works
        // gets match from Match Collection
        let match = await Match.find({_id: matchId})
            .catch(err => {
                return {error: err};
            });



        // saves object to user collection
        await User.findOneAndUpdate(
            { username: username },
            { $push: { connections: {
                        _id: matchId,
                        title: match[0].title,
                        rank: match[0].rank,
                        location: match[0].location,
                        date: match[0].date,
                        rsvp: rsvp
                    } } },
        );
    }

    async removeMatch(username, matchId) {
        // saves object to user collection
        let temp = await User.findOneAndUpdate(
            { username: username },
            { $pull: { connections: { _id: matchId } } },
        );
    }
}

module.exports = UserProfile;