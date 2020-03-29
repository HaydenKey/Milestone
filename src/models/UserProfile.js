const matchList = [
    {
        userName: "hkey8@uncc.edu",
        match: "Meurem vs Komugi",
        rsvp: "yes"
    },
    {
        userName: "hkey8@uncc.edu",
        match: "Chad vs Brad",
        rsvp: "yes"
    },
    {
        userName: "hkey8@uncc.edu",
        match: "Akuma vs Ken",
        rsvp: "maybe"
    },
    {
        userName: "fufi@uncc.edu",
        match: "Akuma vs Ken",
        rsvp: "maybe"
    },
];

class UserProfile {
    constructor(userName) {
        this.userName = userName;
    }

    getUserMatch(match) {
        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName && match === matchList[x].match) {
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

    getUserMatchesRsvp(rsvp) {
        let userMatches = [];

        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName && rsvp === matchList[x].rsvp) {
                userMatches.push(matchList[x]);
            }
        }

        return userMatches;
    }

    addMatch(match, rsvp) {
        // check if already in list
        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName && match === matchList[x].match) {
                return;
            }
        }

        let temp = {
            userName: this.userName,
            match: match,
            rsvp: rsvp
        };

        match.push(temp);
    }

    removeMatch(match) {
        for (let x = 0; x < matchList.length; x++) {
            if (this.userName === matchList[x].userName && match === matchList[x].match) {
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