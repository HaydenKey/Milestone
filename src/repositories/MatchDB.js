const db = [
    {
        id: 0,
        player0: "Meurem",
        player0Rank: "9p",
        player1: "Komugi",
        player1Rank: "10p",
        location: "The Palace",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "1",
        player0: "Chad",
        player0Rank: "12k",
        player1: "Brad",
        player1Rank: "10k",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "2",
        player0: "Chad",
        player0Rank: "12k",
        player1: "Charles",
        player1Rank: "3d",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "3",
        player0: "Brad",
        player0Rank:"10k",
        player1: "Biggie",
        player1Rank: "4d",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "4",
        player0: "Biggie",
       player0Rank: "4d",
        player1: "Charles",
        player1Rank: "3d",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59"
    },
    {
        id: "5",
        player0: "Akuma",
        player0Rank: "8p",
        player1: "Ken",
        player1Rank: "8p",
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