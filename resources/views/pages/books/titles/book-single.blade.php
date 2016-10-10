@extends('main-four')

@section('content')
<?php
include 'php/db-book.php';
include 'php/vars-book-single.php';
include 'php/parse.php';
?>


        <div class="wrap row">
            <!-- First Row-->


            <div class="small-12 medium-12 large-7 column">
                <!-- Book Cover 3d -->


                <div class="libro"><span></span> <img alt="" src=
                "../../../img/books/titles/a-thousand-years-of-yesterdays/book-cover.jpg"></div>
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
					<a href="a-thousand-years-of-yesterdays/text">Launch Book</a> <!-- BUG:
            /titles/../ directs to titles/text, must append seo freindly linkback for book titles -->
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

            <!-- //
              First Row-->
            <!-- Second Row -->


            <div class="small-12 medium-12 large-5 column">

            </div>
            <!-- //
              Second Row -->
        </div>

          @endsection
