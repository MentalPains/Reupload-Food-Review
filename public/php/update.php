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
$password = $_['psw'];

$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>