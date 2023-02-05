"use strict"

var db = require('../db-connections');
class RestaurentDB{
    getAllRestaurent(callback){
        var sql = "SELECT t1.Restaurant_id, t1.restaurant_name, t1.description, t1.location, t1.phone_number," +
            " t1.cuisine, t1.price, t1.opening_hours, t1.image, (IFNULL(t2.rating,'N/A')) as rating FROM `restaurant` t1 " +
            "LEFT JOIN ( SELECT `restaurant_id`, ROUND(SUM(rating)/count(review_id)) as rating FROM `reviews` " +
            "GROUP BY restaurant_id ) t2 ON t1.Restaurant_id=t2.restaurant_id WHERE 1";
        db.query(sql, callback);   
    }

    getSingleRestaurent(id, callback){
        var sql = "SELECT t1.Restaurant_id, t1.restaurant_name, t1.description, t2.location1, t2.phone_number1," +
            " t2.opening_hours1, t1.image, (SELECT round(SUM(rating)/count(review_id)) as rating FROM `reviews` WHERE restaurant_id='" + id + "') as rating FROM `restaurant` t1 INNER JOIN location_phone t2 ON t1.Restaurant_id = t2.restaurant_id1 " +
            "WHERE t1.Restaurant_id='" + id + "'";
        db.query(sql, callback);
    }
}

module.exports = RestaurentDB;