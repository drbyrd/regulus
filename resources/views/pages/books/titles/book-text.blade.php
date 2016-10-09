@extends('main-book-text')

@section('content')
<?php
include 'php/db-book.php';
include 'php/vars-book-text.php';
include 'php/parse.php';
?>


      <!--button id="addP" class="btn">add a paragraph</button>-->
      <!-- <h1><a href="http://codepen.io/atelierbram/pen/nKGoD">Reading Progress Indicator</a></h1> -->
    <div class="wrap row">
        <div class="small-12 medium-12 column">

            <div class="letter">
                <article>
				<?php echo $needle;?>
                <a href="#" class="wrap-around">Keep Reading &rarr;</a>
				</article>
            </div>

        </div>
	</div>
    <div class="wrap row">
            <div class="small-12 medium-12 column">
            <hr>
      </div>
    </div>





    @endsection
