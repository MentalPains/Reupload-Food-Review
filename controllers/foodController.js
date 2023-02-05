"use strict";
const FoodDB = require('../models/FoodDB');

var foodDB = new FoodDB();

function getAllFood(request, respond) {
    foodDB.getAllFood(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAllFood };