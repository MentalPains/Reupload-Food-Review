<?php
$servername = "localhost";
$username = "username";
$port:"3306";
$username:"root"
$password = "";
$dbname = "food_review";

// Create connection
$conn = new mysqli($servername, $username, $port, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['uname'];
$email = $_POST['email'];
$password = $_POST['psw'];

$sql = "INSERT INTO food_review.users (username, email, password)
VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>