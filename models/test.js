//getRestaurantsByLocation(location, callback){
        var sql = "SELECT * From food_review.restaurant INNER JOIN food.Location ON food.outlet.restaurant_id = food.restaurant.restaurant_id WHERE locations = ?";
        sql += " Group BY food.restaurant.restaurant_id";
        db.query(sql, location, callback);
    //}