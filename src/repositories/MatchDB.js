const mongoose = require('mongoose');
const MatchSchema = require('../models/match');

mongoose.connect('mongodb://localhost/goDB', {useNewUrlParser: true});

const db = [
    {
        id: "5ea2718352613ab27b89bacb",
        title: "Meurem vs Komugi",
        rank: "dan",
        location: "The Palace",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5ea2718352613ab27b89bacb",
        title: "Chad vs Brad",
        rank: "dan",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5ea2718352613ab27b89bacc",
        title: "Chad vs Charles",
        rank: "dan",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5ea2718352613ab27b89bacd",
        title: "Brad vs Biggie",
        rank: "kyu",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5ea2718352613ab27b89bace",
        title: "Biggie vs Charles",
        rank: "kyu",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5ea2718352613ab27b89bacf",
        title: "Akuma vs Ken",
        rank: "kyu",
        location: "Caesar's Palace",
        date: "9/9/2020 at 11:59"
    }
];

class MatchDB {
    async getMatches() {
        try {
            let data = await MatchSchema.find().exec();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async getMatch(id) {
        try {
            let data = await MatchSchema.find().exec();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    getKyuMatches() {
        let kyuMatches = [];
        for (let i = 0; i < db.length; i++) {
            if (db[i].rank == "kyu") {
                kyuMatches.push(db[i]);
            }
        }
        return kyuMatches;
    }

    getDanMatches() {
        let danMatches = [];
        for (let i = 0; i < db.length; i++) {
            if (db[i].rank == "dan") {
                danMatches.push(db[i]);
            }
        }
        return danMatches;
    }
}

module.exports = MatchDB;