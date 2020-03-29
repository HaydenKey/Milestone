class UserConnection {
    constructor(match, rsvp) {
        this.match = match;
        this.rsvp = rsvp;
    }

    getMatch() {
        return this.match;
    }

    setMatch(val) {
        this.match = val;
    }

    getRsvp() {
        return this.rsvp;
    }

    setRsvp(val) {
        this.rsvp = val;
    }
}
module.exports = UserConnection;