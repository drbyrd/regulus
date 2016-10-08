<?php // Creates the DB Connection

	$servername = "localhost";
	$username = "root";
	$password = "lc01132la1";
	// Create connection
	$conn = new mysqli($servername, $username, $password);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	// Selects the DB
	mysqli_select_db($conn,'regulus_main');

?>