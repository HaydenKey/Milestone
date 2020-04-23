const MatchDB = require("../repositories/MatchDB");

const matchList = [
    {
        id: "0",
        userName: "hkey8@uncc.edu",
        title: "Meurem vs Komugi",
        rank: "dan",
        location: "The Palace",
        date: "9/9/2020 at 11:59",
        rsvp: "yes"
    },
    {
        id: "1",
        userName: "hkey8@uncc.edu",
        title: "Chad vs Brad",
        rank: "dan",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59",
        rsvp: "yes"
    },
    {
        id: "5",
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

    getUserMatch(username, title) {
        for (let x = 0; x < matchList.length; x++) {
            if (username === matchList[x].userName && title === matchList[x].title) {
                return matchList[x];
            }
        }
    }

    getUserMatches() {
        let userMatches = [];

        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName) {
                userMatches.push(matchList[x]);
            }
        }

        return userMatches;
    }

    getUserMatchesRsvp(username, rsvp) {
        let userMatches = [];
        username = String(username);
        rsvp = String(rsvp);

        for (let x = 0; x < matchList.length; x++) {
            if (matchList[x].userName == username && rsvp == matchList[x].rsvp) {
                userMatches.push(matchList[x]);
            }
        }
        return userMatches;
    }

    addMatch(username, matchId, rsvp) {
        // check if already in list
        for (let x = 0; x < matchList.length; x++) {
            if (username === matchList[x].userName && matchId === matchList[x].id) {
                return;
            }
        }

        let matchData = new MatchDB().getMatches();
        let temp = {};

        for (let i = 0; i < matchData.length; i++) {
            if (matchData[i].id == matchId) {
                temp = {
                    userName: username,
                    id: matchId,
                    rsvp: rsvp,
                    ...matchData[i]
                };
            }
        }



        matchList.push(temp);
    }

    removeMatch(username, match) {
        for (let x = 0; x < matchList.length; x++) {
            if (username === matchList[x].userName && match === matchList[x].title) {
                matchList.splice(x, 1);
            }
        }
    }

    updateRsvp(match, rsvp) {
        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName && match === matchList[x].title) {
                matchList[x].rsvp = rsvp;
            }
        }
    }
}

module.exports = UserProfile;