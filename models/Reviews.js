"use strict";

class Review {
    constructor(review_id, rating, comments, timestamp, user_id, restaurant_id, pictures) {
        this.review_id = review_id;
        this.rating = rating;
        this.comments = comments;
        this.timestamp = timestamp;
        this.user_id = user_id;
        this.restaurant_id = restaurant_id;
        this.pictures = pictures;
    }
    getReview_id() {
        return this.review_id;
    }
    getRating() {
        return this.rating;
    }
    getComments() {
        return this.comments;
    }
    getTimeStamp() {
        return this.timestamp;
    }
    getUser_id() {
        return this.user_id;
    }
    getRestaurant_id() {
        return this.restaurant_id;
    }
    getPictures() {
        return this.pictures;
    }

    setReview_id(review_id) {
        this.review_id = review_id;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setComments(comments) {
        this.comments = comments;
    }
    setTimestamp(timestamp) {
        this.timestamp = timestamp;
    }
    setUser_id(user_id) {
        this.user_id = user_id;
    }
    setRestaurant_id(restaurant_id) {
        this.restaurant_id = restaurant_id;
    }
    setPictures(pictures) {
        this.pictures = pictures;
    }

}
module.exports = Review;

