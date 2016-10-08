<?php // Database Connection Handler

	$servername = "localhost";
	$username = "root";
	$password = "lc01132la1";
	// Creates Connection
	$conn = new mysqli($servername, $username, $password);
	// Checks Connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	// Selects the DB
	mysqli_select_db($conn,'regulus_main');

	$formBookTitle = $_POST['form-book-title'];
	$formBookAuthor = $_POST['form-book-author'];
	$formBookTopic = $_POST['form-book-topic'];
	$formBookDescription = intval($_POST['form-book-description']);
	
	// Writes the Book Meta
	$sqlBookMetaPost = "INSERT INTO book_meta (Book_Title, Book_Author, Book_Topic, Book_Description);
	VALUES ('John', 'Doe', '$', '')";

	if ($conn->query($sqlBookMetaPost) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sqlBookMetaPost . "<br>" . $conn->error;
	}

$conn->close();	
	
?>