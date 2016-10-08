<?php
include 'php/db-book.php';
include 'php/vars-book-single.php';
include 'php/parse.php';
?>

<!DOCTYPE html>

<html class="no-js" dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Regulus Reader | Welcome</title>
    <link href="css/apps.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel=
    "stylesheet">
    <style>
    </style>
</head>

<body>

    <!-- - - - - - - - - - - - - - - - - - - -
  OFF CANVAS MENUS
  - - - - - - - - - - - - - - - - - - - - - -->
    <!-- Profile dropdown -->


    <div class="account">
        <ul>
            <li class="ripple">Sign Out</li>


            <li class="ripple">Switch account</li>


            <li class="ripple">Send feedback</li>


            <li class="ripple">Help</li>
        </ul>
    </div>
    <!-- //
      Profile dropdown -->
    <!-- left side off canvas men -->


    <div class="side-menu">
        <div class="menu-holder">
            <button class="menu"></button>

            <p>Regulus <span>Reader</span></p>
        </div>


        <ul>
            <li class="active">
                <a href="../../../../">Home</a>
            </li>


            <li>
                <a href="../../">Browse Books</a>
            </li>


            <li>Brows Podcasts</li>


            <li>Browse Video</li>


            <li>Podcasts</li>


            <li>Browse Stations</li>


            <li>Shop</li>
        </ul>
        <button class="cta" type="button">Subscribe Now</button>
    </div>
    <!-- //
      left side off canvas men -->
    <!-- Off canvas menu overlay -->


    <div class="side-menu-overlay">
    </div>
    <!-- //
    Off canvas menu overlay -->
    <!-- - - - - - - - - - - - - - - - - - - -
    HEADER
    - - - - - - - - - - - - - - - - - - - - - -->


    <header>
        <!-- Header Hamberger -->
        <button class="menu ripple"></button> <!-- //
        Header Hamberger -->
         <!-- Header Title -->


        <h1>All Books</h1>
        <input class="desktop-only" id="input" placeholder="Search" type=
        "text"> <label class="mobile-only ripple" for="input"></label> <!-- //
        Header Title -->
         <!-- Profile Avatar -->


        <div class="profile">
        </div>
        <!-- //
        Profile Avatar -->
        <!-- Secondary Hearder Menu


        <ul>
            <li class="ripple">
                <a href="../all/">All</a>
            </li>


            <li class="ripple">
                <a href="../new/">New</a>
            </li>


            <li class="ripple">
                <a href="../genre/">Genre</a>
            </li>


            <li class="ripple">
                <a href="../../topic/">Topics</a>
            </li>


            <li style="list-style: none; display: inline">
                <div class="slider">
                </div>
            </li>
        </ul> -->
        <!--//
        Secondary Hearder Menu -->
    </header>
    <!-- //
    HEADER -->
    <!-- - - - - - - - - - - - - - - - - - - -
    MAIN CONTENT
    - - - - - - - - - - - - - - - - - - - - - -->


    <main>
        <!-- Main Wrapper -->


        <div class="wrap row">
            <!-- First Row-->


            <div class="small-12 medium-12 large-7 column">
                <!-- Book Cover 3d -->


                <div class="libro"><span></span> <img alt="" src=
                "book-cover.jpg"></div>
                <br>
                <br>
                <!-- //
                Book Cover 3d -->
                 <!-- Progress bar -->


                <div class="progress-radial progress-25">
                    <div class="overlay">
                        25%
                    </div>
                </div>
                <!-- //
                  Progress bar -->
                <!--
                Book Information via XML import Title, Athor, Discription
                (see books.js for more documentation)
              -->
                <!-- Book Title -->


                <h3 id="book-title">
					<?php 
						echo $bookTitle;
					?>
                </h3>
                <!-- //
                  Book Title -->
                <!-- Book Author -->
                <a href="<?php echo $authorLink;?>">
                <h5 id="book-author">
					<?php 
						echo $authorName;
					?>
                </h5></a><br>
                <!-- //
                Book Author -->
                 <!-- Book Discription -->


                <p id="book-discription"> <!-- NOTE: Spelling "description" -->
					<?php echo $bookDescription;?>
                </p>
				<div id="book-launch-button">
					<a href="/text">Launch Book</a>
				</div>
				<p id="book-edition">
					<span class="edition-card">Edition:</span>&nbsp;
						<?php echo $bookEdition;?>
				</p>
				<p id="book-publisher">
					<span class="publisher-card">Publisher:</span>&nbsp;
					<a href="<?php echo $bookPublisherLink;?>" title="<?php echo $bookPublisher;?>">
						<?php echo $bookPublisher;?>
					</a>
                </p>
				<p id="book-topic">
					<span class="topic-card">Topic:</span>&nbsp;
					<a href="<?php echo $bookTopicLink;?>" title="<?php echo $bookTopic;?>">
						<?php echo $bookTopic;?>
					</a>
                </p>
				<p id="book-publish-date"> <!-- Store this as numbers, not fulltext -->
					<span class="publish-date-card">Publish Date:</span>&nbsp;
					<a href="<?php echo "search?y=" . $bookPublishYear;?>" title="Search books from <?php echo $bookPublishYear;?>">
						<?php echo $bookPublishDate;?>
					</a>
                </p>
				<p id="book-recorded-date"> <!-- Store this as numbers, not fulltext -->
					<span class="book-recorded-date-card">Recorded On:</span>&nbsp;
						<?php echo $bookRecordedDate;?>
                </p>
				<p id="book-isbn">
					<span class="isbn-card">ISBN:</span>&nbsp;
					<a href="http://www.isbnsearch.org/search?s=<?php echo $bookIsbn;?>" title="$bookIsbn" target="_blank">
						<?php echo $bookIsbn;?>
					</a>
				</p>
				<p id="book-source">
				<span class="isbn-card">Source:</span>&nbsp;
					<a href="<?php echo $bookSourceLink;?>" title="Visit <?php echo $bookSource;?>" target="_blank">
					<?php echo $bookSource;?>
					</a>
                </p>
				</a>
                <!-- //
                    Book Discription -->
					<?php print_r($needle); ?><br /><br />
            </div>
            <!-- //
              First Row-->
            <!-- Second Row -->


            <div class="small-12 medium-12 large-5 column">
                
            </div>
            <!-- //
              Second Row -->
        </div>
		
		
        <!-- //
          Main Wrapper -->
    </main>
    <!-- //
        MAIN CONTENT -->
</body>
</html>