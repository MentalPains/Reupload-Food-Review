"use strict"
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Reviews');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond) {
    var resId = parseInt(request.params.id);
    reviewsDB.getAllReviews(resId, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addReview(request, respond) {

    var now = new Date();
    var review = new Review(null, request.body.rating, request.body.comments,
        now.toString(),request.body.username, request.body.restaurant_id, request.body.pictures);
    reviewsDB.addReview(review, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    })
};

function updateReview(request, respond) {
    var now = new Date();
    /*var review = new Review(parseInt(request.params.id), request.body.rating, request.body.comments,
    request.body.user_id);*/
    var review = new Review(request.params.id, request.body.rating, request.body.comments,
        now.toString(),request.body.username, request.body.restaurant_id, request.body.pictures);
    reviewsDB.updateReview(review, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    });
}

function deleteReview(request, respond) {
    var reviewID = parseInt(request.params.id);
    reviewsDB.deleteReview(reviewID, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getAllReviews, addReview, updateReview, deleteReview };