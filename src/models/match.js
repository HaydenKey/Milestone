class Match {
    constructor(connectionId, player0, player0Rank, player1, player1Rank, location, date) {
        this.connectionId = connectionId;
        this.player0 = player0;
        this.player1 = player1;
        this.location = location;
        this.date = date;
        this._player0Rank = player0Rank;
        this._player1Rank = player1Rank;
    }

    getConnectionId() {
        return this.connectionId;
    }

    setConnectionId(value) {
        this.connectionId = value;
    }

    getPlayer0() {
        return this.player0;
    }

    setPlayer0(value) {
        this.player0 = value;
    }

    getPlayer0Rank() {
        return this._player0Rank;
    }

    setPlayer0Rank(value) {
        this._player0Rank = value;
    }

    getPlayer1() {
        return this.player1;
    }

    setPlayer1(value) {
        this.player1 = value;
    }

    getPlayer1Rank() {
        return this._player1Rank;
    }

    setPlayer1Rank(value) {
        this._player1Rank = value;
    }

    getLocation() {
        return this.location;
    }

    setLocation(value) {
        this.location = value;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }
}
module.exports = Match;