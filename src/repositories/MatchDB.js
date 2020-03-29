const db = [
    {
        id: 0,
        title: "Meurem vs Komugi",
        location: "The Palace",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "1",
        title: "Chad vs Brad",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "2",
        title: "Chad vs Charles",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "3",
        title: "Brad vs Biggie",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "4",
        title: "Biggie vs Charles",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5",
        title: "Akuma vs Ken",
        location: "Caesar's Palace",
        date: "9/9/2020 at 11:59"
    }
];

class MatchDB {
    getMatches() {
        return db;
    }

    getMatch(id) {
        let currentMatches;
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == id) {
                currentMatches = db[i];
            }
        }
        return currentMatches;
    }
}

module.exports = MatchDB;