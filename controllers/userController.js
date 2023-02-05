"use strict"
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');

var usersDB = new UsersDB();

function getAllUsers(request, respond) {
    usersDB.getAllUsers(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addUser(request, respond) {
    var user = new User(null, request.body.username, request.body.email, request.body.password);
    usersDB.addUser(user, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    })
};

function updateUser(request, respond) {
    var user = new User(parseInt(request.params.id), request.body.username, request.body.email, request.body.password);
    usersDB.updateUser(user, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    });
}

function deleteUser(request, respond) {
    var userID = parseInt(request.params.id);
    usersDB.deleteUser(userID, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAllUsers, addUser, updateUser, deleteUser };