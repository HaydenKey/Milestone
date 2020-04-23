const db = [
    {
        id: "0",
        title: "Meurem vs Komugi",
        rank: "dan",
        location: "The Palace",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "1",
        title: "Chad vs Brad",
        rank: "dan",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "2",
        title: "Chad vs Charles",
        rank: "dan",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "3",
        title: "Brad vs Biggie",
        rank: "kyu",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "4",
        title: "Biggie vs Charles",
        rank: "kyu",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5",
        title: "Akuma vs Ken",
        rank: "kyu",
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