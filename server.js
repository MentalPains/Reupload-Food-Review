var express = require("express");

var reviewController = require('./controllers/foodController');
var commentController = require('./controllers/reviewController');
var userController = require('./controllers/userController');
var restaurentController = require('./controllers/restaurentController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/restaurant').get(reviewController.getAllFood);
app.route('/comments/:id').get(commentController.getAllReviews);
app.route('/comments').post(commentController.addReview);
app.route('/comments/:id').post(commentController.updateReview);
app.route('/comments/:id').delete(commentController.deleteReview);
app.route('/user').get(userController.getAllUsers);
app.route('/user').post(userController.addUser);
app.route('/user/:id').put(userController.updateUser);
app.route('/user/:id').delete(userController.deleteUser);

app.route('/arestaurant').get(restaurentController.getAllRestaurent);
app.route('/arestaurant/:id').get(restaurentController.getSingleRestaurent);

app.listen(8080, "127.0.0.1");
console.log("Web server running @ http://127.0.0.1:8080");