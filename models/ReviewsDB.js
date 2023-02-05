"use strict";

var db = require('../db-connections');
class ReviewsDB {
    getAllReviews(review_id, callback) {
        var sql = "SELECT t1.review_id, t1.rating, t1.comments, DATE_FORMAT(`date`, '%m/%d/%Y %H:%i:%s') as date, t2.username " +
            "FROM `reviews` t1 INNER JOIN users t2 ON t1.user_id = t2.user_id WHERE restaurant_id='"+ review_id +"'";
        db.query(sql, callback);
    }

    addReview(review, callback) {
        var sql = "INSERT INTO reviews (rating, comments, timestamp, user_id, restaurant_id, pictures) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getRating(), review.getComments(), review.getTimeStamp(), review.getUser_id(), review.getRestaurant_id(), review.getPictures()], callback);
    }

    updateReview(review, callback) {
        var sql = "UPDATE reviews SET rating = ?, comments = ? WHERE review_id = ?";
        return db.query(sql, [review.getRating(), review.getComments(), review.getReview_id()], callback);
    }

    deleteReview(review_id, callback) {
        var sql = "DELETE from reviews WHERE review_id = ?";
        return db.query(sql, [review_id], callback);
    }
}

module.exports = ReviewsDB;