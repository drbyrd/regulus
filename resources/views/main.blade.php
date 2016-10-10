<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6 ielt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7 ielt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class="no-js" dir="ltr" lang="en">
<!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta content="ie=edge" http-equiv="x-ua-compatible">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<meta content="@yield('meta-description')" name="description">
	<meta content= "@yield('meta-keywords')" name="Keywords">
	<meta name="twitter:card" content="@yield('twitter-card')" />
	<meta name="twitter:site" content="@yield('twitter-site')" />
	<meta name="twitter:creator" content="@yield('twitter-creator')" />
	<meta content="@yield('og-url')" property="og:url">
	<meta content="@yield('og-type')" property="og:type">
	<meta content="@yield('og-title')" property="og:title">
	<meta content="@yield('og-discription')" property="og:description">
	<meta content="@yield('og-image')" property="og:image">
	<meta content="259008020869851" property="fb:app_id">

	<title>Reguls Reader | @yield('title')</title>

	<link href="@yield('relation')css/vendor/bootstrap.min.css" rel="stylesheet">
	<link href="@yield('relation')css/vendor/font-awesome.min.css" rel="stylesheet">
	<link href="@yield('relation')css/apps.css" rel="stylesheet">
	<script src="@yield('relation')js/vendor/jquery.min.js">
	</script>
	<script src="@yield('relation')js/vendor/bootstrap.min.js">
	</script>
	<script src="@yield('relation')js/custom.js">
	</script>
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
	</div><!-- //
      Profile dropdown -->
	<!-- left side off canvas men -->
	<div class="side-menu">
		<div class="menu-holder">
			<button class="menu"></button>
			<p>Regulus <span>Reader</span></p>
		</div>
		<ul>
			<li class="active">
				<a href="./@yield('relation')">Home</a>
			</li>
			<li>
				<a href="./@yield('relation')library/books/alls">Browse Books</a>
			</li>
			<li>Brows Podcasts</li>
			<li>Browse Video</li>
			<li>Podcasts</li>
			<li>Browse Stations</li>
			<li>Shop</li>
		</ul><button class="cta" type="button">Subscribe Now</button>
	</div><!-- //
      left side off canvas men -->
	<!-- Off canvas menu overlay -->
	<div class="side-menu-overlay"></div><!-- //
    Off canvas menu overlay -->
	<!-- - - - - - - - - - - - - - - - - - - -
    HEADER
    - - - - - - - - - - - - - - - - - - - - - -->
	<header>
		<!-- Header Hamberger -->
		<button class="menu ripple"></button> <!-- //
        Header Hamberger -->
		 <!-- Header Title -->
		<h1>All Books</h1><input class="desktop-only" id="input" placeholder="Search" type="text"> <label class="mobile-only ripple" for="input"></label> <!-- //
        Header Title -->
		 <!-- Profile Avatar -->
		<div class="profile"></div><!-- //
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
	</header><!-- //
    HEADER -->
	<!-- - - - - - - - - - - - - - - - - - - -
    MAIN CONTENT
    - - - - - - - - - - - - - - - - - - - - - -->
	<main>
		<!-- Main Wrapper -->
		@yield('content')
    <!-- //
          Main Wrapper -->
	</main><!-- //
        MAIN CONTENT -->
</body>
</html>
