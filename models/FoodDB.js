"use strict"

var db = require('../db-connections');
class FoodDB{
    getAllFood(callback){
        var sql = "SELECT * from food_review.reviews";
        db.query(sql, callback);   
    }
}

module.exports = FoodDB;