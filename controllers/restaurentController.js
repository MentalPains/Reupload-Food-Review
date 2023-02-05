"use strict";
const RestaurentDB = require('../models/RestaurentDB');

var restaurentDB = new RestaurentDB();

function getAllRestaurent(request, respond) {
    restaurentDB.getAllRestaurent(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function getSingleRestaurent(request, respond) {
    var id = request.params.id;
    restaurentDB.getSingleRestaurent(id, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
module.exports = { getAllRestaurent, getSingleRestaurent };