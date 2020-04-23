const matchList = [
    {
        id: "0",
        userName: "hkey8@uncc.edu",
        match: "Meurem vs Komugi",
        rank: "dan",
        location: "The Palace",
        date: "9/9/2020 at 11:59",
        rsvp: "yes"
    },
    {
        id: "1",
        userName: "hkey8@uncc.edu",
        match: "Chad vs Brad",
        rank: "dan",
        location: "The ThunderDome",
        date: "9/9/2020 at 11:59",
        rsvp: "yes"
    },
    {
        id: "5",
        userName: "hkey8@uncc.edu",
        match: "Akuma vs Ken",
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

    getUserMatch(username, match) {
        for (let x = 0; x < matchList.length; x++) {
            if (username === matchList[x].userName && match === matchList[x].match) {
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

    addMatch(username, match, rsvp) {
        // check if already in list
        for (let x = 0; x < matchList.length; x++) {
            if (username === matchList[x].userName && match === matchList[x].match) {
                return;
            }
        }

        let temp = {
            userName: this.userName,
            match: match,
            rsvp: rsvp
        };

        matchList.push(temp);
    }

    removeMatch(username, match) {
        for (let x = 0; x < matchList.length; x++) {
            if (username === matchList[x].userName && match === matchList[x].match) {
                console.log("ligma");
                matchList.splice(x, 1);
            }
        }
    }

    updateRsvp(match, rsvp) {
        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName && match === matchList[x].match) {
                matchList[x].rsvp = rsvp;
            }
        }
    }
}

module.exports = UserProfile;