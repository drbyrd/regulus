

<!DOCTYPE html>

<html class="no-js" dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Regulus Reader | Welcome</title>
    <link href="../../../css/apps.css" rel="stylesheet">
    <link href="../../../css/font-awesome.min.css" rel=
    "stylesheet">
    <script src="../../../js/jquery.js"></script>
    <script src="../../../js/custom.js"></script>
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
                <a href="./../../../">Home</a>
            </li>


            <li>
                <a href="./../../../library/books/alls">Browse Books</a>
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

@yield('content')

        <!-- //
          Main Wrapper -->
    </main>
    <!-- //
        MAIN CONTENT -->
</body>
</html>
