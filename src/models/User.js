class User {
    constructor(playerId, firstName, lastName, email) {
        this.playerId = playerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getPlayerId() {
        return this.playerId;
    }

    setPlayerId(val) {
        this.playerId = val;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(val) {
        this.firstName = val;
    }
    getLastName() {
        return this.lastName;
    }

    setLastName(val) {
        this.lastName = val;
    }

    getEmail() {
        return this.email;
    }

    setEmail(val) {
        this.email = val;
    }
}
module.exports = User;