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

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected successfully";
  ?>