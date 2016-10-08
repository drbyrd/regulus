<?php // Defines all the variables. Yay.

	// Gets current Page URL so we can play

	$pageUrl = $_SERVER['REQUEST_URI'];
	$pageUrlProcessed = substr($_SERVER['REQUEST_URI'], 0, -5);
	$book = "SELECT ID FROM book_meta WHERE Book_Link = '$pageUrlProcessed'";
	$bookResult = $conn->query($book);
	if (!$bookResult) {
		echo "No Book Text Found";
	}
	else {
		// output data of each row
		while($row = $bookResult->fetch_assoc()) {
			$singleBookId = utf8_encode($row["ID"]);
		}
	}

	// Gets book main content.
	$bookMain = "SELECT ID, Part_1_Top, Part_1_Content, Part_1_Bottom FROM book_content WHERE ID = '$singleBookId'";
	$bookMainResult = $conn->query($bookMain);
	if ($bookMainResult->num_rows > 0) {
		// output data of each row
		while($row = $bookMainResult->fetch_assoc()) {
			$bodyText = utf8_encode($row["Part_1_Content"]); // Easiest, Smartest Way to Fix PHP/UTF-8 Compatability Issues
		}
	}
	else {
		echo "No Book Content";
	}

	// Gets book meta data
	$bookMeta = "SELECT ID, Book_Link, Book_Image, Book_Topic, Book_Title, Book_Author, Book_Description, Book_Source, Book_Source_Link, Book_Publisher, Book_Edition, Book_ISBN, Publication_Date, Date_Added FROM book_meta WHERE ID = '$singleBookId'";
	$bookMetaResult = $conn->query($bookMeta);
	if ($bookMetaResult->num_rows > 0) {
		// output data of each row
		while($row = $bookMetaResult->fetch_assoc()) {
			$bookId = utf8_encode($row["ID"]);
			$bookLink = utf8_encode($row["Book_Link"]);
			$bookImage = utf8_encode($row["Book_Image"]);
			$bookTopic = utf8_encode($row["Book_Topic"]);
			$bookTitle = utf8_encode($row["Book_Title"]);
			$bookAuthor = utf8_encode($row["Book_Author"]);
			$bookDescription = utf8_encode($row["Book_Description"]);
			$bookSource = utf8_encode($row["Book_Source"]);
			$bookSourceLink = utf8_encode($row["Book_Source_Link"]);
			$bookPublisher = utf8_encode($row["Book_Publisher"]);
			$bookEdition = utf8_encode($row["Book_Edition"]);
			$bookIsbn = utf8_encode($row["Book_ISBN"]);
			$bookPublishDate = utf8_encode($row["Publication_Date"]);
			$bookPublishYear = substr($bookPublishDate, -4);
			$bookRecordedDate = utf8_encode($row["Date_Added"]);
		}
	}
	else {
		echo "No Book Meta Data";
	}

	// Gets author meta data
	$authorMeta = "SELECT ID, Author_Name, Author_Link, Author_Image, Author_Description FROM author_meta";
	$authorMetaResult = $conn->query($authorMeta);
	if ($authorMetaResult->num_rows > 0) {
		// output data of each row
		while($row = $authorMetaResult->fetch_assoc()) {
			$authorId = utf8_encode($row["ID"]);
			$authorName = utf8_encode($row["Author_Name"]);
			$authorLink = utf8_encode($row["Author_Link"]);
			$authorImage = utf8_encode($row["Author_Image"]);
			$authorDescription = utf8_encode($row["Author_Description"]);
		}
	}
	else {
		echo "No Author Meta Data";
	}

	// Gets book topic meta data
	$bookTopicMeta = "SELECT ID, Topic_Name, Topic_Link, Topic_Description, Topic_Image FROM book_topics";
	$bookTopicResult = $conn->query($bookTopicMeta);
	if ($bookTopicResult->num_rows > 0) {
		// output data of each row
		while($row = $bookTopicResult->fetch_assoc()) {
			$bookTopicId = utf8_encode($row["ID"]);
			$bookTopicName = utf8_encode($row["Topic_Name"]);
			$bookTopicLink = utf8_encode($row["Topic_Link"]);
			$bookTopicDescription = utf8_encode($row["Topic_Description"]);
			$bookTopicImage = utf8_encode($row["Topic_Image"]);
		}
	}
	else {
		echo "No Book Topic Meta Data";
	}

	// Gets book publisher meta data
	$bookPublisherMeta = "SELECT ID, Publisher_Name, Publisher_Link, Publisher_Description, Publisher_Image, Publisher_Website, Publisher_Location FROM publisher_meta";
	$bookPublisherResult = $conn->query($bookPublisherMeta);
	if (!$bookPublisherResult) {
		echo "No Book Publisher Meta Data";
	}
	else {
		// output data of each row
		while($row = $bookPublisherResult->fetch_assoc()) {
			$bookPublisherId = utf8_encode($row["ID"]);
			$bookPublisherName = utf8_encode($row["Publisher_Name"]);
			$bookPublisherLink = utf8_encode($row["Publisher_Link"]);
			$bookPublisherWebsite = utf8_encode($row["Publisher_Website"]);
			$bookPublisherDescription = utf8_encode($row["Publisher_Description"]);
			$bookPublisherImage = utf8_encode($row["Publisher_Image"]);
			$bookPublisherLocation = utf8_encode($row["Publisher_Location"]);
		}
	}

$conn->close();
?>
