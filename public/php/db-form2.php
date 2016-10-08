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

	$sql = "INSERT INTO book_meta (firstname, lastname, email)
	VALUES ('John', 'Doe', 'john@example.com')";

	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

$conn->close();	
	
?>