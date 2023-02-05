<?php

$servername = "localhost";
$username = "username";
$port:"3306";
$username:"root"
$password = "";
$dbname = "food_review";



function login() {
    $conn = new mysqli($servername, $username, $port, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    // Get the values from the form
    $username = $_POST['uname'];
    $password = $_POST['psw'];

    // Query the database to find the user
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    // Check if the query returns a row
    if (mysqli_num_rows($result) > 0) {
        return true;
    } else {
        return false;
    }

    // Close the connection
    mysqli_close($conn);
}

// Call the function when the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (login()) {
        // Redirect to the desired page after successful login
        header('Location: /home.php');
        exit();
    } else {
        // Show an error message on unsuccessful login
        echo "Login failed! Please try again.";
    }
}

