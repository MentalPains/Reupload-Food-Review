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

// sql to delete a record
$sql = "DELETE FROM MyGuests WHERE id=3";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>