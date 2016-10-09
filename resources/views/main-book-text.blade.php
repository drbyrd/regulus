<!DOCTYPE html>

<html class="no-js" dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Regulus Reader | Welcome</title>
    <link href="../../../../css/apps.css" rel="stylesheet">
    <link href="../../../../css/font-awesome.min.css" rel="stylesheet">
	<script src="../../../../js/jquery.js"></script>
  	<script src="../../../../js/custom.js"></script>
    <!-- Byrd -->

    <style>
body {
  background-color:white;
}

    .fixed {
      position: fixed;
      top: 70px;
      left: 0%;
      right: 0%;
      height: 2.25em;
      /* background: rgba(0,0,0,.25); */
      background: #ddd;
      border-bottom: 1px solid #ccc;
      padding-left: 10%;
      z-index: 9;
    }
    .progress-wrap {
      background: #f52451;
      margin-top: 1em;
      height: 2px;
      /* overflow: visible; */
      overflow: hidden;
      position: relative;
      margin-left: 5%;
      width: 90%;
      max-width: 35em;
      border: 1em solid #fff;
      border-top-width: 0;
      border-bottom-width: 0;
      z-index: 0;
    }
    .progress-wrap .progress-bar {
      position: absolute;
      height: .75em;
      /* background: rgba(0,0,0,.5); */
      background: #fff;
      width: 100%;
      top: 0;
      left: 0;
      margin-top: -.25em;
      z-index: 3;
    }
    article {
      background-color: #fff;

    }

    .new-paragraph {
      font-style: italic;
      color: tomato;
    }
    .btn {
      position: fixed;
      top: 2rem; left: 9.9%;
      -webkit-appearance: none;
      -webkit-background-clip: padding;
      -moz-background-clip: padding;
      background-clip: padding-box;
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(100%, #dddddd));
      background-image: -webkit-linear-gradient(#ffffff, #dddddd);
      background-image: -moz-linear-gradient(#ffffff, #dddddd);
      background-image: -o-linear-gradient(#ffffff, #dddddd);
      background-image: linear-gradient(#ffffff, #dddddd);
      border: 1px solid;
      border-color: #dddddd #bbbbbb #999999;
      cursor: pointer;
      color: #333333;
      display: inline-block;
      font: bold 0.875rem/1.3 AvenirNextCondensed-DemiBold, "Lucida Grande", Corbel, "Trebuchet Ms", sans-serif;
      outline: 0;
      overflow: visible;
      margin: 0;
      padding: 3px 10px;
      text-shadow: white 0 1px 1px;
      text-decoration: none;
      vertical-align: top;
      width: auto;
    }
    .btn:hover {
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(1px, #eeeeee), color-stop(100%, #cccccc));
      background-image: -webkit-linear-gradient(#ffffff, #eeeeee 1px, #cccccc);
      background-image: -moz-linear-gradient(#ffffff, #eeeeee 1px, #cccccc);
      background-image: -o-linear-gradient(#ffffff, #eeeeee 1px, #cccccc);
      background-image: linear-gradient(#ffffff, #eeeeee 1px, #cccccc);
      text-decoration: none;
    }
    .btn:active {
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #dddddd), color-stop(100%, #eeeeee));
      background-image: -webkit-linear-gradient(#dddddd, #eeeeee);
      background-image: -moz-linear-gradient(#dddddd, #eeeeee);
      background-image: -o-linear-gradient(#dddddd, #eeeeee);
      background-image: linear-gradient(#dddddd, #eeeeee);
      -webkit-box-shadow: inset rgba(0, 0, 0, 0.25) 0 1px 2px 0;
      -moz-box-shadow: inset rgba(0, 0, 0, 0.25) 0 1px 2px 0;
      box-shadow: inset rgba(0, 0, 0, 0.25) 0 1px 2px 0;
      border-color: #999999 #bbbbbb #dddddd;
    }
    button::-moz-focus-inner {
      border: 0;
      padding: 0;
    }


    /* http://www.ghosthorses.co.uk/production-diary/super-simple-responsive-progress-bar/ */


    /* -- Table of Contents -- */

    #tableOfContents {
        width: 320px;
        color: #fff !important;
        background: #222;
        float: left;
        position: fixed;
        bottom: 0;
        left: calc(25% - 160px);
        z-index: 11;
        font-size: 13px;
        font-weight: normal;
    }

    #tableOfContents h2 {
        padding: 0;
        font-size: 13px;
        font-weight: 700;
        width: 100%;
        margin: 0 !important;
        line-height: 26px;
        z-index: 10;
        background: #EC6060;
        position: relative;
    }

    #tableofContents:hover {
      background: #985f56;
    }

    #tableOfContents h2 a {

        background: url("../img/tocArrow.jpg") no-repeat top left;
        padding: 10px 0 10px 50px;
        width: 270px;
        display: block;
    }

    #tableOfContents h2 a:hover {
        background: #985f56;
    }

    #tableOfContents a {
        color: #fff;
        text-decoration: none;
        width: 280px;
        padding: 6px 10px;
        margin: 0;
        display: block;
    }

    #tableOfContents a:hover {
        background: #333;
    }

    .sectionsWrapper {
        padding-left: 40px;
        background: transparent;
        position: absolute;
        width: 280px;
        bottom: -200px;
        visibility: hidden;
    }

    #tableOfContents dl {
        margin: 0;
        overflow: hidden;
        background: #343E56;
        padding: 0 0 20px 0;
        width: 280px;
        z-index: 10;
    }

    #tableOfContents dt {
        padding: 0;
        font-weight: 400;
    }

    .subsectionContent {
        display: none;
    }

    .subsectionContent dd a {
        color: #eee !important;
        padding-left: 25px !important;
        font-weight: 300;
    }


    * {
      margin: 0;
      padding: 0;
    }
    /* make things look nice */
    body {
      background: #eee;
      font-family: sans-serif;
      line-height: 1.5;
      color: #555;
    }
    p {
      margin-top: 16px;
    }
    h1 a {
      text-decoration: none;
      color: #111;
    }
    /* article base */

    /* wrap-around */
    .wrap-around {
      position: relative;
      display: inline-block;
      margin-top: 32px;
      margin-bottom:23px;
      padding: 10px 24px 10px 48px;
      margin-left: -22px;
      background: red;
      color: #fff;
      text-decoration: none;
    }
    .wrap-around:before {
      content: '';
      position: absolute;
      left: -6px;
      bottom: -3px;
      width: 6px;
      height: 44px;
      background: #800000;
      transform: skewY(-45deg);
    }
    .wrap-around:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: -6px;
      width: 6px;
      height: 6px;
      background: #000000;
      z-index: -1;
    }
    .wrap-around:hover {
      background: lightblue;
    }
    .wrap-around:hover:before {
      background: #4baac8;
    }
    .wrap-around:hover:after {
      background: #235e71;
    }


</style>
</head>

<body>

  <div class="globalWrapper">
<div id="tableOfContents">
    <h2><a id="toc" href="#">Table of Contents</a></h2>
    <div class="sectionsWrapper closed">
    <dl class="sections">
      <dt><a class="subsection" href="#">1. Definitions</a></dt>
        <div class="subsectionContent">
          <dd><a href="#sec11" data=""-offset="70">1.1. What is design?</a></dd>
          <dd><a href="#sec12" data=""-offset="70">1.2. What is good design?</a></dd>
          <dd><a href="#sec13" data=""-offset="70">1.3. Ten principles of good design</a></dd>
          <dd><a href="#sec14" data=""-offset="90">1.4. An example</a></dd>
          <dd><a href="#sec15" data=""-offset="90">1.5. Video: <i>Objectified</i> trailer</a></dd>
          <dd><a href="#sec16" data=""-offset="90">1.6. Is your product well-designed?</a></dd>
        </div>
      <dt><a class="subsection" href="#">2. Different kinds of design</a></dt>
        <div class="subsectionContent">
          <dd><a href="#sec21" data=""-offset="80">2.1. Graphic Design</a></dd>
          <dd><a href="#sec22" data=""-offset="80">2.2. Interaction Design</a></dd>
          <dd><a href="#sec23" data=""-offset="90">2.3. Industrial Design</a></dd>
        </div>
      <dt><a class="subsection" href="#">3. Data: what does the industry think?</a></dt>
        <div class="subsectionContent">
          <dd><a href="#sec31" data=""-offset="90">3.1. What qualities of design do startups <br />consider most important?</a></dd>
          <dd><a href="#sec32" data=""-offset="90">3.2. How important is product design?</a></dd>
          <dd><a href="#sec33" data=""-offset="90">3.3. How deep does design go?</a></dd>
        </div>
      <dt><a class="subsection" href="#">4. Designer Founders: the missing link</a></dt>
        <div class="subsectionContent">
          <dd><a href="#sec41" data=""-offset="90">4.1. Startups + designers = ?</a></dd>
          <dd><a href="#sec42" data=""-offset="90">4.2. Meet the Designer Founders</a></dd>
          <dd><a href="#sec48" data=""-offset="50">4.8. Changing the world</a></dd>
        </div>
      <dt><a class="subsection" href="#">5. Finding great talent</a></dt>
        <div class="subsectionContent">
          <dd><a href="#sec51" data=""-offset="250">5.1. Okay, I need a designer.</a></dd>
          <dd><a href="#sec52" data=""-offset="250">5.2. Go Where the designers are</a></dd>
          <dd><a href="#sec54" data=""-offset="220">5.3. Resources</a></dd>
        </div>
      <dt><a class="subsection" href="#">About me & Acknowledgements</a></dt>
        <div class="subsectionContent">
          <dd><a href="#section6" data=""-offset="70">6.   About me</a></dd>
          <dd><a href="#section7" data=""-offset="90">7.   Acknowledgements</a></dd>
        </div>
    </dl><!-- / sections -->
    </div><!-- / sectionsWrapper -->
  </div><!-- / tableOfContents -->
</div>



  <div class="account">
      <ul>
          <li class="ripple">Sign Out</li>


          <li class="ripple">Switch account</li>


          <li class="ripple">Send feedback</li>


          <li class="ripple">Help</li>
      </ul>
  </div>


  <div class="side-menu">
      <div class="menu-holder">
          <button class="menu"></button>

          <p>Regulus <span>Reader</span></p>
      </div>


      <ul>
          <li class="active">
              <a href="./../../../../">Home</a>
          </li>


          <li>
              <a href="./../../../../library/books/alls">Browse Books</a>
          </li>


          <li>Brows Podcasts</li>


          <li>Browse Video</li>


          <li>Podcasts</li>


          <li>Browse Stations</li>


          <li>Shop</li>
      </ul>
      <button class="cta" type="button">Subscribe Now</button>
  </div>


  <div class="side-menu-overlay">
  </div>


  <header>
      <button class="menu ripple"></button>

      <h1>All Books</h1>
      <input class="desktop-only" id="input" placeholder="Search" type=
      "text"> <label class="mobile-only ripple" for="input"></label>

      <div class="profile">
      </div>

<!--
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
      </ul>
    -->
  </header>

    <!-- MOBILE NAVIGATION -->
    <!-- MAIN SECTION -->

    <main>



@yield('content')

        <!-- //
          Main Wrapper -->
        </main>





        <!-- FOOTER -->

      <script>

      // Table of Contents
      var sectionsHeight = $('.sections').height();
      $('.sectionsWrapper').css({ bottom: '-' + sectionsHeight + 'px', visibility: 'visible' });

      $('#toc').click(function(){
        if($('.sectionsWrapper').hasClass('closed')){
          $('.sectionsWrapper').removeClass('closed');
          $('.sectionsWrapper').stop().animate({ bottom: '34px' }, 200);
        }else{
          $('.subsectionContent').hide(100, function(){
            $('.sectionsWrapper').addClass('closed');
            $('.sectionsWrapper').stop().animate({ bottom: '-' + sectionsHeight + 'px' }, 200);
          });
        }
        return false;
      });

      $('.subsection').click(function(){
        $('.subsectionContent').hide(100);
        $(this).parent().next('.subsectionContent').show(200);

        return false;
      });
      $('#toc').mouseenter(function(){
        if($('.sectionsWrapper').hasClass('closed')){
          $('.sectionsWrapper').removeClass('closed');
          $('.sectionsWrapper').stop().animate({ bottom: '34px' }, 200);
        }else{
          $('.subsectionContent').hide(100, function(){
            $('.sectionsWrapper').addClass('closed');
            $('.sectionsWrapper').stop().animate({ bottom: '-' + sectionsHeight + 'px' }, 200);
          });
        }
        return false;

      });

      $('#tableOfContents').mouseleave(function(){
        $('.subsectionContent').hide(100, function(){
          $('.sectionsWrapper').addClass('closed');
          $('.sectionsWrapper').stop().animate({ bottom: '-' + sectionsHeight + 'px' }, 200);
        });
      });
      </script>
      <script>
      /*
      * Wanted to recreate a progress indicator of a [journalism website](https://decorrespondent.nl/en "online journalism platform")
      * It's basically a fork of [this thing here on CodePen](http://codepen.io/thathurtabit/pen/ymECf "")
      * [tutorial on ghosthorses.co.uk](http://www.ghosthorses.co.uk/production-diary/super-simple-responsive-progress-bar/ "")
      * Simply test this script, by clicking the top-left button; add more paragraphs in the article: it should work, no matter how long or short the article.
      * On mobile please try http://bramdeh.home.xs4all.nl/playground/ui-patterns/reading-progress-bar/ (CodePen's iFrame conflict)
      */
      $(function() {
        $("body").prepend("<div class='fixed'><div class='progress-wrap' data-progress-percent='0'><div class='progress-bar'></div></div></div>");
        });
      $( "#addP" ).click(function() {
      $( "article" ).prepend("<p class='new-paragraph'>New paragraph: adipisicing quasi natus dignissimos veritatis quasi. Nesciunt aliquam harum distinctio nobis modi dolorem incidunt tempora repudiandae harum. Voluptas eum harum mollitia officia non magni quos! Repellat architecto similique fuga aliquid.</p>" );
      });

      // on page load...
      //
      $(window).scroll(function () {

      moveProgressBar();
      // on browser resize...
      $(window).resize(function() {
        moveProgressBar();
      });

      // SIGNATURE PROGRESS
      function moveProgressBar() {
        console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();

        var zeroHeight = jQuery(window).height() // get minimal amount of scroll
      if ($(window).scrollTop() < zeroHeight) {
        var progressTotal = getPercent * getProgressWrapWidth;

        var animationLength = 500;

      }

        var tenthHeight = jQuery(window).height() / 10 // Splits screen in ten parts, to get at least 1/10 of window height
          if ($(window).scrollTop() > tenthHeight) {

            var calcDivider =  ( jQuery(document).height() - jQuery(window).height() ) / 532;

            var progressTotal = (getPercent * getProgressWrapWidth  + $ (window).scrollTop()) / calcDivider;

            var animationLength = 500;
          }

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
          left: progressTotal
        }, animationLength);
      }

      })

      </script>

        <script>
        var xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportOne(this);
            }
        };
        xhttp1.open("GET", "../../../../assets/books/rosicrucian/amorc/h_spencer_lewis/rrb001_-_a_thousand_years_of_yesterdays/rrb001_info.xml", true);
        xhttp1.send();

        function xmlImportOne(xml) {
            var xmlDoc1 = xml.responseXML;
            document.getElementById("book-title").innerHTML =
            xmlDoc1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        }


        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportTwo(this);
            }
        };
        xhttp2.open("GET", "../../../../assets/books/rosicrucian/amorc/h_spencer_lewis/rrb001_-_a_thousand_years_of_yesterdays/rrb001_info.xml", true);
        xhttp2.send();

        function xmlImportTwo(xml) {
            var xmlDoc2 = xml.responseXML;
            document.getElementById("book-author").innerHTML =
            xmlDoc2.getElementsByTagName("author")[0].childNodes[0].nodeValue;
        }

        var xhttp3 = new XMLHttpRequest();
        xhttp3.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportThree(this);
            }
        };
        xhttp3.open("GET", "../../../../assets/books/rosicrucian/amorc/h_spencer_lewis/rrb001_-_a_thousand_years_of_yesterdays/rrb001_info.xml", true);
        xhttp3.send();

        function xmlImportThree(xml) {
            var xmlDoc3 = xml.responseXML;
            document.getElementById("book-discription").innerHTML =
            xmlDoc3.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
        }

        </script>

      </body>
      </html>
