"use strict";

var db = require('../db-connections');
class UsersDB {
    getAllUsers(callback) {
        var sql = "SELECT username, user_id From food_review.users";
        db.query(sql, callback);
    }

    addUser(users, callback) {
        var sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [users.getUsername(), users.getEmail(), users.getPassword()], callback);
    }

    updateUser(users, callback) {
        var sql = "UPDATE users SET username = ?, password = ? WHERE user_id = ?";
        return db.query(sql, [users.getUsername(), users.getPassword(), users.getUser_id()], callback);
    }

    deleteUser(user_Id, callback) {
        var sql = "DELETE from users WHERE user_id = ?";
        return db.query(sql, [user_Id], callback);
    }
}

module.exports = UsersDB;