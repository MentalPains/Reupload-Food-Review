"use strict";

class User {
    constructor(user_id, username, email, password) {
        this.user_id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    getUser_id() {
        return this.user_id;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }

    setUser_id(user_id) {
        this.user_id = user_id;
    }
    setUsername(username) {
        this.username = username;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }

}
module.exports = User;

