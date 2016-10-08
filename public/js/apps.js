


function tabSlider() {
	var $li1 = $('header li:nth-child(1)').outerWidth(),
		$li2 = $('header li:nth-child(2)').outerWidth(),
		$li3 = $('header li:nth-child(3)').outerWidth(),
		$li4 = $('header li:nth-child(4)').outerWidth(),
		$li5 = $('header li:nth-child(5)').outerWidth(),
		$li6 = $('header li:nth-child(6)').outerWidth();

	if ($('header li:nth-child(1)').hasClass('active')) {
		$('.slider').css({
			'transform': 'translate(0, 0)',
			'width': $li1
		});
	} else if ($('header li:nth-child(2)').hasClass('active')) {
		$('.slider').css({
			'transform': 'translate(' + $li1 + 'px, 0)',
			'width': $li2
		});
	} else if ($('header li:nth-child(3)').hasClass('active')) {
		$('.slider').css({
			'transform': 'translate(' + ($li1 + $li2) + 'px, 0)',
			'width': $li3
		});
	} else if ($('header li:nth-child(4)').hasClass('active')) {
		$('.slider').css({
			'transform': 'translate(' + ($li1 + $li2 + $li3) + 'px, 0)',
			'width': $li4
		});
	} else if ($('header li:nth-child(5)').hasClass('active')) {
		$('.slider').css({
			'transform': 'translate(' + ($li1 + $li2 + $li3 + $li4) + 'px, 0)',
			'width': $li5
		});
	} else if ($('header li:nth-child(6)').hasClass('active')) {
		$('.slider').css({
			'transform': 'translate(' + ($li1 + $li2 + $li3 + $li4 + $li5) + 'px, 0)',
			'width': $li6
		});
	}
};

function cardHeight() {
	$('.card').each(function() {
		$(this).height($(this).width() + 56);
	});
};

function headerPadding() {
	var $headerHeight = $('header').outerHeight();
	$('main').css('padding-top', $headerHeight);
};

$(function() {
	"use strict";

	tabSlider();
	cardHeight();

	// TABS

	$('header li').on('click', function() {
		$('header li').removeClass('active');
		$(this).addClass('active');
		tabSlider();
	});

	// CARD HEIGHT & 'MAIN' PADDING

	$(window, 'main').resize(function() {
		cardHeight();
		headerPadding();
	}).resize();

	// HEADER SHADOW

	$(window).scroll(function() {
		if ($(this).scrollTop() >= 10) {
			$("header").addClass("shadow");
		} else {
			$("header").removeClass("shadow");
		}
	});

	// MENU

	$('.menu, .side-menu-overlay').on('click', function() {
		var $sidebarWidth = $('.side-menu').width();
		$('.side-menu').toggleClass('active');
		if ($('.side-menu').hasClass('active')) {
			$('header, main').css('width', 'calc(100% - ' + $sidebarWidth + 'px)');
		} else {
			$('header, main').css('width', '100%');
		}
	});

	// PROFILE MENU

	$('.profile').on('click', function() {
		$('.account').toggleClass('active');
	});

	$(document).on("click", function(e) {
		if (($(".account").hasClass("active")) && (!$(".account, .account *, .profile").is(e.target))) {
			$(".account").toggleClass("active");
		}
	});

	$(window).scroll(function() {
		$('.account').removeClass('active');
	});

	// MOBILE SEARCH BUTTON

	$('label.mobile-only').on('click', function() {
		$(this).toggleClass('close');
		$('body').toggleClass('mobile-input');
	})

	// RIPPLE
  // CODE FROM HENDRY SADRAK'S PEN - http://codepen.io/hendrysadrak/pen/yNKZWO

	$(document).on('click', '.ripple', function(e) {

		var $ripple = $('<span class="rippling" />'),
			$button = $(this),
			btnOffset = $button.offset(),
			xPos = e.pageX - btnOffset.left,
			yPos = e.pageY - btnOffset.top,
			size = 0,
			animateSize = parseInt(Math.max($button.width(), $button.height()) * Math.PI);

		$ripple.css({
				top: yPos,
				left: xPos,
				width: size,
				height: size,
				backgroundColor: $button.attr("ripple-color"),
				opacity: $button.attr("ripple-opacity")
			})
			.appendTo($button)
			.animate({
				width: animateSize,
				height: animateSize,
				opacity: 0
			}, 500, function() {
				$(this).remove();
			});
	});

	// IOS STUFF

	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		$('body').addClass('ios');
	}

});



















    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // IMPORT XML DATA (rrb****_book-info.xml)
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // Get Chapter One
    var xhttpOneToc = new XMLHttpRequest();
    xhttpOneToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportOneToc(this);
        }
    };
    xhttpOneToc.open("GET", "book-toc.xml", true);
    xhttpOneToc.send();

    function xmlImportOneToc(xml) {
        var xmlDocOneToc = xml.responseXML;
        document.getElementById("book-chapter-one").innerHTML =
        xmlDocOneToc.getElementsByTagName("chapter-one")[0].childNodes[0].nodeValue;
    }





    // Get Chapter Two
    var xhttptwoToc = new XMLHttpRequest();
    xhttptwoToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwoToc(this);
        }
    };
    xhttptwoToc.open("GET", "book-toc.xml", true);
    xhttptwoToc.send();

    function xmlImporttwoToc(xml) {
        var xmlDoctwoToc = xml.responseXML;
        document.getElementById("book-chapter-two").innerHTML =
        xmlDoctwoToc.getElementsByTagName("chapter-two")[0].childNodes[0].nodeValue;
    }




    // Get Chapter three
    var xhttpthreeToc = new XMLHttpRequest();
    xhttpthreeToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthreeToc(this);
        }
    };
    xhttpthreeToc.open("GET", "book-toc.xml", true);
    xhttpthreeToc.send();

    function xmlImportthreeToc(xml) {
        var xmlDocthreeToc = xml.responseXML;
        document.getElementById("book-chapter-three").innerHTML =
        xmlDocthreeToc.getElementsByTagName("chapter-three")[0].childNodes[0].nodeValue;
    }




    // Get Chapter Four
    var xhttpfourToc = new XMLHttpRequest();
    xhttpfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourToc(this);
        }
    };
    xhttpfourToc.open("GET", "book-toc.xml", true);
    xhttpfourToc.send();

    function xmlImportfourToc(xml) {
        var xmlDocfourToc = xml.responseXML;
        document.getElementById("book-chapter-four").innerHTML =
        xmlDocfourToc.getElementsByTagName("chapter-four")[0].childNodes[0].nodeValue;
    }






    // Get Chapter Five
    var xhttpfiveToc = new XMLHttpRequest();
    xhttpfiveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiveToc(this);
        }
    };
    xhttpfiveToc.open("GET", "book-toc.xml", true);
    xhttpfiveToc.send();

    function xmlImportfiveToc(xml) {
        var xmlDocfiveToc = xml.responseXML;
        document.getElementById("book-chapter-five").innerHTML =
        xmlDocfiveToc.getElementsByTagName("chapter-five")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Six
    var xhttpsixToc = new XMLHttpRequest();
    xhttpsixToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixToc(this);
        }
    };
    xhttpsixToc.open("GET", "book-toc.xml", true);
    xhttpsixToc.send();

    function xmlImportsixToc(xml) {
        var xmlDocsixToc = xml.responseXML;
        document.getElementById("book-chapter-six").innerHTML =
        xmlDocsixToc.getElementsByTagName("chapter-six")[0].childNodes[0].nodeValue;
    }




    // Get Chapter Seven
    var xhttpsevenToc = new XMLHttpRequest();
    xhttpsevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsevenToc(this);
        }
    };
    xhttpsevenToc.open("GET", "book-toc.xml", true);
    xhttpsevenToc.send();

    function xmlImportsevenToc(xml) {
        var xmlDocsevenToc = xml.responseXML;
        document.getElementById("book-chapter-seven").innerHTML =
        xmlDocsevenToc.getElementsByTagName("chapter-seven")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Eight
    var xhttpeightToc = new XMLHttpRequest();
    xhttpeightToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporteightToc(this);
        }
    };
    xhttpeightToc.open("GET", "book-toc.xml", true);
    xhttpeightToc.send();

    function xmlImporteightToc(xml) {
        var xmlDoceightToc = xml.responseXML;
        document.getElementById("book-chapter-eight").innerHTML =
        xmlDoceightToc.getElementsByTagName("chapter-eight")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Nine
    var xhttpnineToc = new XMLHttpRequest();
    xhttpnineToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportnineToc(this);
        }
    };
    xhttpnineToc.open("GET", "book-toc.xml", true);
    xhttpnineToc.send();

    function xmlImportnineToc(xml) {
        var xmlDocnineToc = xml.responseXML;
        document.getElementById("book-chapter-nine").innerHTML =
        xmlDocnineToc.getElementsByTagName("chapter-nine")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Ten
    var xhttptenToc = new XMLHttpRequest();
    xhttptenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttenToc(this);
        }
    };
    xhttptenToc.open("GET", "book-toc.xml", true);
    xhttptenToc.send();

    function xmlImporttenToc(xml) {
        var xmlDoctenToc = xml.responseXML;
        document.getElementById("book-chapter-ten").innerHTML =
        xmlDoctenToc.getElementsByTagName("chapter-ten")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Eleven
    var xhttpelevenToc = new XMLHttpRequest();
    xhttpelevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportelevenToc(this);
        }
    };
    xhttpelevenToc.open("GET", "book-toc.xml", true);
    xhttpelevenToc.send();

    function xmlImportelevenToc(xml) {
        var xmlDocelevenToc = xml.responseXML;
        document.getElementById("book-chapter-eleven").innerHTML =
        xmlDocelevenToc.getElementsByTagName("chapter-eleven")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Twelve
    var xhttptwelveToc = new XMLHttpRequest();
    xhttptwelveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwelveToc(this);
        }
    };
    xhttptwelveToc.open("GET", "book-toc.xml", true);
    xhttptwelveToc.send();

    function xmlImporttwelveToc(xml) {
        var xmlDoctwelveToc = xml.responseXML;
        document.getElementById("book-chapter-twelve").innerHTML =
        xmlDoctwelveToc.getElementsByTagName("chapter-twelve")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Thirteen
    var xhttpthirteenToc = new XMLHttpRequest();
    xhttpthirteenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirteenToc(this);
        }
    };
    xhttpthirteenToc.open("GET", "book-toc.xml", true);
    xhttpthirteenToc.send();

    function xmlImportthirteenToc(xml) {
        var xmlDocthirteenToc = xml.responseXML;
        document.getElementById("book-chapter-thirteen").innerHTML =
        xmlDocthirteenToc.getElementsByTagName("chapter-thirteen")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Fourteen
    var xhttpfourteenToc = new XMLHttpRequest();
    xhttpfourteenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourteenToc(this);
        }
    };
    xhttpfourteenToc.open("GET", "book-toc.xml", true);
    xhttpfourteenToc.send();

    function xmlImportfourteenToc(xml) {
        var xmlDocfourteenToc = xml.responseXML;
        document.getElementById("book-chapter-fourteen").innerHTML =
        xmlDocfourteenToc.getElementsByTagName("chapter-fourteen")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Fourteen
    var xhttpfifteenToc = new XMLHttpRequest();
    xhttpfifteenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfifteenToc(this);
        }
    };
    xhttpfifteenToc.open("GET", "book-toc.xml", true);
    xhttpfifteenToc.send();

    function xmlImportfifteenToc(xml) {
        var xmlDocfifteenToc = xml.responseXML;
        document.getElementById("book-chapter-fifteen").innerHTML =
        xmlDocfifteenToc.getElementsByTagName("chapter-fifteen")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Fourteen
    var xhttpsixteenToc = new XMLHttpRequest();
    xhttpsixteenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixteenToc(this);
        }
    };
    xhttpsixteenToc.open("GET", "book-toc.xml", true);
    xhttpsixteenToc.send();

    function xmlImportsixteenToc(xml) {
        var xmlDocsixteenToc = xml.responseXML;
        document.getElementById("book-chapter-sixteen").innerHTML =
        xmlDocsixteenToc.getElementsByTagName("chapter-sixteen")[0].childNodes[0].nodeValue;
    }



    // Get Chapter Fourteen
    var xhttpseventeenToc = new XMLHttpRequest();
    xhttpseventeenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportseventeenToc(this);
        }
    };
    xhttpseventeenToc.open("GET", "book-toc.xml", true);
    xhttpseventeenToc.send();

    function xmlImportseventeenToc(xml) {
        var xmlDocseventeenToc = xml.responseXML;
        document.getElementById("book-chapter-seventeen").innerHTML =
        xmlDocseventeenToc.getElementsByTagName("chapter-seventeen")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttpeighteenToc = new XMLHttpRequest();
    xhttpeighteenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporteighteenToc(this);
        }
    };
    xhttpeighteenToc.open("GET", "book-toc.xml", true);
    xhttpeighteenToc.send();

    function xmlImporteighteenToc(xml) {
        var xmlDoceighteenToc = xml.responseXML;
        document.getElementById("book-chapter-eighteen").innerHTML =
        xmlDoceighteenToc.getElementsByTagName("chapter-eighteen")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Fourteen
    var xhttpnineteenToc = new XMLHttpRequest();
    xhttpnineteenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportnineteenToc(this);
        }
    };
    xhttpnineteenToc.open("GET", "book-toc.xml", true);
    xhttpnineteenToc.send();

    function xmlImportnineteenToc(xml) {
        var xmlDocnineteenToc = xml.responseXML;
        document.getElementById("book-chapter-nineteen").innerHTML =
        xmlDocnineteenToc.getElementsByTagName("chapter-nineteen")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Fourteen
    var xhttptwentyToc = new XMLHttpRequest();
    xhttptwentyToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentyToc(this);
        }
    };
    xhttptwentyToc.open("GET", "book-toc.xml", true);
    xhttptwentyToc.send();

    function xmlImporttwentyToc(xml) {
        var xmlDoctwentyToc = xml.responseXML;
        document.getElementById("book-chapter-twenty").innerHTML =
        xmlDoctwentyToc.getElementsByTagName("chapter-twenty")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Fourteen
    var xhttptwentyoneToc = new XMLHttpRequest();
    xhttptwentyoneToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentyoneToc(this);
        }
    };
    xhttptwentyoneToc.open("GET", "book-toc.xml", true);
    xhttptwentyoneToc.send();

    function xmlImporttwentyoneToc(xml) {
        var xmlDoctwentyoneToc = xml.responseXML;
        document.getElementById("book-chapter-twentyone").innerHTML =
        xmlDoctwentyoneToc.getElementsByTagName("chapter-twentyone")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttptwentytwoToc = new XMLHttpRequest();
    xhttptwentytwoToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentytwoToc(this);
        }
    };
    xhttptwentytwoToc.open("GET", "book-toc.xml", true);
    xhttptwentytwoToc.send();

    function xmlImporttwentytwoToc(xml) {
        var xmlDoctwentytwoToc = xml.responseXML;
        document.getElementById("book-chapter-twentytwo").innerHTML =
        xmlDoctwentytwoToc.getElementsByTagName("chapter-twentytwo")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Fourteen
    var xhttptwentythreeToc = new XMLHttpRequest();
    xhttptwentythreeToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentythreeToc(this);
        }
    };
    xhttptwentythreeToc.open("GET", "book-toc.xml", true);
    xhttptwentythreeToc.send();

    function xmlImporttwentythreeToc(xml) {
        var xmlDoctwentythreeToc = xml.responseXML;
        document.getElementById("book-chapter-twentythree").innerHTML =
        xmlDoctwentythreeToc.getElementsByTagName("chapter-twentythree")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttptwentyfourToc = new XMLHttpRequest();
    xhttptwentyfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentyfourToc(this);
        }
    };
    xhttptwentyfourToc.open("GET", "book-toc.xml", true);
    xhttptwentyfourToc.send();

    function xmlImporttwentyfourToc(xml) {
        var xmlDoctwentyfourToc = xml.responseXML;
        document.getElementById("book-chapter-twentyfour").innerHTML =
        xmlDoctwentyfourToc.getElementsByTagName("chapter-twentyfour")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttptwentyfiveToc = new XMLHttpRequest();
    xhttptwentyfiveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentyfiveToc(this);
        }
    };
    xhttptwentyfiveToc.open("GET", "book-toc.xml", true);
    xhttptwentyfiveToc.send();

    function xmlImporttwentyfiveToc(xml) {
        var xmlDoctwentyfiveToc = xml.responseXML;
        document.getElementById("book-chapter-twentyfive").innerHTML =
        xmlDoctwentyfiveToc.getElementsByTagName("chapter-twentyfive")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttptwentysixToc = new XMLHttpRequest();
    xhttptwentysixToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentysixToc(this);
        }
    };
    xhttptwentysixToc.open("GET", "book-toc.xml", true);
    xhttptwentysixToc.send();

    function xmlImporttwentysixToc(xml) {
        var xmlDoctwentysixToc = xml.responseXML;
        document.getElementById("book-chapter-twentysix").innerHTML =
        xmlDoctwentysixToc.getElementsByTagName("chapter-twentysix")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttptwentysevenToc = new XMLHttpRequest();
    xhttptwentysevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentysevenToc(this);
        }
    };
    xhttptwentysevenToc.open("GET", "book-toc.xml", true);
    xhttptwentysevenToc.send();

    function xmlImporttwentysevenToc(xml) {
        var xmlDoctwentysevenToc = xml.responseXML;
        document.getElementById("book-chapter-twentyseven").innerHTML =
        xmlDoctwentysevenToc.getElementsByTagName("chapter-twentyseven")[0].childNodes[0].nodeValue;
    }


    // Get Chapter Fourteen
    var xhttptwentyeightToc = new XMLHttpRequest();
    xhttptwentyeightToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentyeightToc(this);
        }
    };
    xhttptwentyeightToc.open("GET", "book-toc.xml", true);
    xhttptwentyeightToc.send();

    function xmlImporttwentyeightToc(xml) {
        var xmlDoctwentyeightToc = xml.responseXML;
        document.getElementById("book-chapter-twentyeight").innerHTML =
        xmlDoctwentyeightToc.getElementsByTagName("chapter-twentyeight")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttptwentynineToc = new XMLHttpRequest();
    xhttptwentynineToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImporttwentynineToc(this);
        }
    };
    xhttptwentynineToc.open("GET", "book-toc.xml", true);
    xhttptwentynineToc.send();

    function xmlImporttwentynineToc(xml) {
        var xmlDoctwentynineToc = xml.responseXML;
        document.getElementById("book-chapter-twentynine").innerHTML =
        xmlDoctwentynineToc.getElementsByTagName("chapter-twentynine")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttpthirtyToc = new XMLHttpRequest();
    xhttpthirtyToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtyToc(this);
        }
    };
    xhttpthirtyToc.open("GET", "book-toc.xml", true);
    xhttpthirtyToc.send();

    function xmlImportthirtyToc(xml) {
        var xmlDocthirtyToc = xml.responseXML;
        document.getElementById("book-chapter-thirty").innerHTML =
        xmlDocthirtyToc.getElementsByTagName("chapter-thirty")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttpthirtyoneToc = new XMLHttpRequest();
    xhttpthirtyoneToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtyoneToc(this);
        }
    };
    xhttpthirtyoneToc.open("GET", "book-toc.xml", true);
    xhttpthirtyoneToc.send();

    function xmlImportthirtyoneToc(xml) {
        var xmlDocthirtyoneToc = xml.responseXML;
        document.getElementById("book-chapter-thirtyone").innerHTML =
        xmlDocthirtyoneToc.getElementsByTagName("chapter-thirtyone")[0].childNodes[0].nodeValue;
    }

    // Get Chapter Fourteen
    var xhttpthirtytwoToc = new XMLHttpRequest();
    xhttpthirtytwoToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtytwoToc(this);
        }
    };
    xhttpthirtytwoToc.open("GET", "book-toc.xml", true);
    xhttpthirtytwoToc.send();

    function xmlImportthirtytwoToc(xml) {
        var xmlDocthirtytwoToc = xml.responseXML;
        document.getElementById("book-chapter-thirtytwo").innerHTML =
        xmlDocthirtytwoToc.getElementsByTagName("chapter-thirtytwo")[0].childNodes[0].nodeValue;
    }



    // Get Chapter thirtythree
    var xhttpthirtythreeToc = new XMLHttpRequest();
    xhttpthirtythreeToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtythreeToc(this);
        }
    };
    xhttpthirtythreeToc.open("GET", "book-toc.xml", true);
    xhttpthirtythreeToc.send();

    function xmlImportthirtythreeToc(xml) {
        var xmlDocthirtythreeToc = xml.responseXML;
        document.getElementById("book-chapter-thirtythree").innerHTML =
        xmlDocthirtythreeToc.getElementsByTagName("chapter-thirtythree")[0].childNodes[0].nodeValue;
    }



    // Get Chapter thirtyfour
    var xhttpthirtyfourToc = new XMLHttpRequest();
    xhttpthirtyfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtyfourToc(this);
        }
    };
    xhttpthirtyfourToc.open("GET", "book-toc.xml", true);
    xhttpthirtyfourToc.send();

    function xmlImportthirtyfourToc(xml) {
        var xmlDocthirtyfourToc = xml.responseXML;
        document.getElementById("book-chapter-thirtyfour").innerHTML =
        xmlDocthirtyfourToc.getElementsByTagName("chapter-thirtyfour")[0].childNodes[0].nodeValue;
    }





    // Get Chapter thirtyfive
    var xhttpthirtyfiveToc = new XMLHttpRequest();
    xhttpthirtyfiveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtyfiveToc(this);
        }
    };
    xhttpthirtyfiveToc.open("GET", "book-toc.xml", true);
    xhttpthirtyfiveToc.send();

    function xmlImportthirtyfiveToc(xml) {
        var xmlDocthirtyfiveToc = xml.responseXML;
        document.getElementById("book-chapter-thirtyfive").innerHTML =
        xmlDocthirtyfiveToc.getElementsByTagName("chapter-thirtyfive")[0].childNodes[0].nodeValue;
    }



    // Get Chapter thirtysix
    var xhttpthirtysixToc = new XMLHttpRequest();
    xhttpthirtysixToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtysixToc(this);
        }
    };
    xhttpthirtysixToc.open("GET", "book-toc.xml", true);
    xhttpthirtysixToc.send();

    function xmlImportthirtysixToc(xml) {
        var xmlDocthirtysixToc = xml.responseXML;
        document.getElementById("book-chapter-thirtysix").innerHTML =
        xmlDocthirtysixToc.getElementsByTagName("chapter-thirtysix")[0].childNodes[0].nodeValue;
    }



    // Get Chapter thirtyseven
    var xhttpthirtysevenToc = new XMLHttpRequest();
    xhttpthirtysevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtysevenToc(this);
        }
    };
    xhttpthirtysevenToc.open("GET", "book-toc.xml", true);
    xhttpthirtysevenToc.send();

    function xmlImportthirtysevenToc(xml) {
        var xmlDocthirtysevenToc = xml.responseXML;
        document.getElementById("book-chapter-thirtyseven").innerHTML =
        xmlDocthirtysevenToc.getElementsByTagName("chapter-thirtyseven")[0].childNodes[0].nodeValue;
    }




    // Get Chapter thirtyeight
    var xhttpthirtyeightToc = new XMLHttpRequest();
    xhttpthirtyeightToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtyeightToc(this);
        }
    };
    xhttpthirtyeightToc.open("GET", "book-toc.xml", true);
    xhttpthirtyeightToc.send();

    function xmlImportthirtyeightToc(xml) {
        var xmlDocthirtyeightToc = xml.responseXML;
        document.getElementById("book-chapter-thirtyeight").innerHTML =
        xmlDocthirtyeightToc.getElementsByTagName("chapter-thirtyeight")[0].childNodes[0].nodeValue;
    }





    // Get Chapter thirtynine
    var xhttpthirtynineToc = new XMLHttpRequest();
    xhttpthirtynineToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportthirtynineToc(this);
        }
    };
    xhttpthirtynineToc.open("GET", "book-toc.xml", true);
    xhttpthirtynineToc.send();

    function xmlImportthirtynineToc(xml) {
        var xmlDocthirtynineToc = xml.responseXML;
        document.getElementById("book-chapter-thirtynine").innerHTML =
        xmlDocthirtynineToc.getElementsByTagName("chapter-thirtynine")[0].childNodes[0].nodeValue;
    }





    // Get Chapter fourty
    var xhttpfourtyToc = new XMLHttpRequest();
    xhttpfourtyToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtyToc(this);
        }
    };
    xhttpfourtyToc.open("GET", "book-toc.xml", true);
    xhttpfourtyToc.send();

    function xmlImportfourtyToc(xml) {
        var xmlDocfourtyToc = xml.responseXML;
        document.getElementById("book-chapter-fourty").innerHTML =
        xmlDocfourtyToc.getElementsByTagName("chapter-fourty")[0].childNodes[0].nodeValue;
    }







    // Get Chapter fourtyone
    var xhttpfourtyoneToc = new XMLHttpRequest();
    xhttpfourtyoneToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtyoneToc(this);
        }
    };
    xhttpfourtyoneToc.open("GET", "book-toc.xml", true);
    xhttpfourtyoneToc.send();

    function xmlImportfourtyoneToc(xml) {
        var xmlDocfourtyoneToc = xml.responseXML;
        document.getElementById("book-chapter-fourtyone").innerHTML =
        xmlDocfourtyoneToc.getElementsByTagName("chapter-fourtyone")[0].childNodes[0].nodeValue;
    }






    // Get Chapter fourtytwo
    var xhttpfourtytwoToc = new XMLHttpRequest();
    xhttpfourtytwoToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtytwoToc(this);
        }
    };
    xhttpfourtytwoToc.open("GET", "book-toc.xml", true);
    xhttpfourtytwoToc.send();

    function xmlImportfourtytwoToc(xml) {
        var xmlDocfourtytwoToc = xml.responseXML;
        document.getElementById("book-chapter-fourtytwo").innerHTML =
        xmlDocfourtytwoToc.getElementsByTagName("chapter-fourtytwo")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fourtythree
    var xhttpfourtythreeToc = new XMLHttpRequest();
    xhttpfourtythreeToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtythreeToc(this);
        }
    };
    xhttpfourtythreeToc.open("GET", "book-toc.xml", true);
    xhttpfourtythreeToc.send();

    function xmlImportfourtythreeToc(xml) {
        var xmlDocfourtythreeToc = xml.responseXML;
        document.getElementById("book-chapter-fourtythree").innerHTML =
        xmlDocfourtythreeToc.getElementsByTagName("chapter-fourtythree")[0].childNodes[0].nodeValue;
    }





    // Get Chapter fourtyfour
    var xhttpfourtyfourToc = new XMLHttpRequest();
    xhttpfourtyfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtyfourToc(this);
        }
    };
    xhttpfourtyfourToc.open("GET", "book-toc.xml", true);
    xhttpfourtyfourToc.send();

    function xmlImportfourtyfourToc(xml) {
        var xmlDocfourtyfourToc = xml.responseXML;
        document.getElementById("book-chapter-fourtyfour").innerHTML =
        xmlDocfourtyfourToc.getElementsByTagName("chapter-fourtyfour")[0].childNodes[0].nodeValue;
    }




    // Get Chapter fourtyfour
    var xhttpfourtyfourToc = new XMLHttpRequest();
    xhttpfourtyfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtyfourToc(this);
        }
    };
    xhttpfourtyfourToc.open("GET", "book-toc.xml", true);
    xhttpfourtyfourToc.send();

    function xmlImportfourtyfourToc(xml) {
        var xmlDocfourtyfourToc = xml.responseXML;
        document.getElementById("book-chapter-fourtyfour").innerHTML =
        xmlDocfourtyfourToc.getElementsByTagName("chapter-fourtyfour")[0].childNodes[0].nodeValue;
    }






    // Get Chapter fourtyfive
    var xhttpfourtyfiveToc = new XMLHttpRequest();
    xhttpfourtyfiveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtyfiveToc(this);
        }
    };
    xhttpfourtyfiveToc.open("GET", "book-toc.xml", true);
    xhttpfourtyfiveToc.send();

    function xmlImportfourtyfiveToc(xml) {
        var xmlDocfourtyfiveToc = xml.responseXML;
        document.getElementById("book-chapter-fourtyfive").innerHTML =
        xmlDocfourtyfiveToc.getElementsByTagName("chapter-fourtyfive")[0].childNodes[0].nodeValue;
    }





    // Get Chapter fourtysix
    var xhttpfourtysixToc = new XMLHttpRequest();
    xhttpfourtysixToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtysixToc(this);
        }
    };
    xhttpfourtysixToc.open("GET", "book-toc.xml", true);
    xhttpfourtysixToc.send();

    function xmlImportfourtysixToc(xml) {
        var xmlDocfourtysixToc = xml.responseXML;
        document.getElementById("book-chapter-fourtysix").innerHTML =
        xmlDocfourtysixToc.getElementsByTagName("chapter-fourtysix")[0].childNodes[0].nodeValue;
    }




    // Get Chapter fourtyseven
    var xhttpfourtysevenToc = new XMLHttpRequest();
    xhttpfourtysevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtysevenToc(this);
        }
    };
    xhttpfourtysevenToc.open("GET", "book-toc.xml", true);
    xhttpfourtysevenToc.send();

    function xmlImportfourtysevenToc(xml) {
        var xmlDocfourtysevenToc = xml.responseXML;
        document.getElementById("book-chapter-fourtyseven").innerHTML =
        xmlDocfourtysevenToc.getElementsByTagName("chapter-fourtyseven")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fourtyeight
    var xhttpfourtyeightToc = new XMLHttpRequest();
    xhttpfourtyeightToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtyeightToc(this);
        }
    };
    xhttpfourtyeightToc.open("GET", "book-toc.xml", true);
    xhttpfourtyeightToc.send();

    function xmlImportfourtyeightToc(xml) {
        var xmlDocfourtyeightToc = xml.responseXML;
        document.getElementById("book-chapter-fourtyeight").innerHTML =
        xmlDocfourtyeightToc.getElementsByTagName("chapter-fourtyeight")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fourtynine
    var xhttpfourtynineToc = new XMLHttpRequest();
    xhttpfourtynineToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfourtynineToc(this);
        }
    };
    xhttpfourtynineToc.open("GET", "book-toc.xml", true);
    xhttpfourtynineToc.send();

    function xmlImportfourtynineToc(xml) {
        var xmlDocfourtynineToc = xml.responseXML;
        document.getElementById("book-chapter-fourtynine").innerHTML =
        xmlDocfourtynineToc.getElementsByTagName("chapter-fourtynine")[0].childNodes[0].nodeValue;
    }




    // Get Chapter fifty
    var xhttpfiftyToc = new XMLHttpRequest();
    xhttpfiftyToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftyToc(this);
        }
    };
    xhttpfiftyToc.open("GET", "book-toc.xml", true);
    xhttpfiftyToc.send();

    function xmlImportfiftyToc(xml) {
        var xmlDocfiftyToc = xml.responseXML;
        document.getElementById("book-chapter-fifty").innerHTML =
        xmlDocfiftyToc.getElementsByTagName("chapter-fifty")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fiftyone
    var xhttpfiftyoneToc = new XMLHttpRequest();
    xhttpfiftyoneToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftyoneToc(this);
        }
    };
    xhttpfiftyoneToc.open("GET", "book-toc.xml", true);
    xhttpfiftyoneToc.send();

    function xmlImportfiftyoneToc(xml) {
        var xmlDocfiftyoneToc = xml.responseXML;
        document.getElementById("book-chapter-fiftyone").innerHTML =
        xmlDocfiftyoneToc.getElementsByTagName("chapter-fiftyone")[0].childNodes[0].nodeValue;
    }




    // Get Chapter fiftytwo
    var xhttpfiftytwoToc = new XMLHttpRequest();
    xhttpfiftytwoToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftytwoToc(this);
        }
    };
    xhttpfiftytwoToc.open("GET", "book-toc.xml", true);
    xhttpfiftytwoToc.send();

    function xmlImportfiftytwoToc(xml) {
        var xmlDocfiftytwoToc = xml.responseXML;
        document.getElementById("book-chapter-fiftytwo").innerHTML =
        xmlDocfiftytwoToc.getElementsByTagName("chapter-fiftytwo")[0].childNodes[0].nodeValue;
    }




    // Get Chapter fiftythree
    var xhttpfiftythreeToc = new XMLHttpRequest();
    xhttpfiftythreeToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftythreeToc(this);
        }
    };
    xhttpfiftythreeToc.open("GET", "book-toc.xml", true);
    xhttpfiftythreeToc.send();

    function xmlImportfiftythreeToc(xml) {
        var xmlDocfiftythreeToc = xml.responseXML;
        document.getElementById("book-chapter-fiftythree").innerHTML =
        xmlDocfiftythreeToc.getElementsByTagName("chapter-fiftythree")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fiftyfour
    var xhttpfiftyfourToc = new XMLHttpRequest();
    xhttpfiftyfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftyfourToc(this);
        }
    };
    xhttpfiftyfourToc.open("GET", "book-toc.xml", true);
    xhttpfiftyfourToc.send();

    function xmlImportfiftyfourToc(xml) {
        var xmlDocfiftyfourToc = xml.responseXML;
        document.getElementById("book-chapter-fiftyfour").innerHTML =
        xmlDocfiftyfourToc.getElementsByTagName("chapter-fiftyfour")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fiftyfive
    var xhttpfiftyfiveToc = new XMLHttpRequest();
    xhttpfiftyfiveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftyfiveToc(this);
        }
    };
    xhttpfiftyfiveToc.open("GET", "book-toc.xml", true);
    xhttpfiftyfiveToc.send();

    function xmlImportfiftyfiveToc(xml) {
        var xmlDocfiftyfiveToc = xml.responseXML;
        document.getElementById("book-chapter-fiftyfive").innerHTML =
        xmlDocfiftyfiveToc.getElementsByTagName("chapter-fiftyfive")[0].childNodes[0].nodeValue;
    }





    // Get Chapter fiftysix
    var xhttpfiftysixToc = new XMLHttpRequest();
    xhttpfiftysixToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftysixToc(this);
        }
    };
    xhttpfiftysixToc.open("GET", "book-toc.xml", true);
    xhttpfiftysixToc.send();

    function xmlImportfiftysixToc(xml) {
        var xmlDocfiftysixToc = xml.responseXML;
        document.getElementById("book-chapter-fiftysix").innerHTML =
        xmlDocfiftysixToc.getElementsByTagName("chapter-fiftysix")[0].childNodes[0].nodeValue;
    }




    // Get Chapter fiftyseven
    var xhttpfiftysevenToc = new XMLHttpRequest();
    xhttpfiftysevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftysevenToc(this);
        }
    };
    xhttpfiftysevenToc.open("GET", "book-toc.xml", true);
    xhttpfiftysevenToc.send();

    function xmlImportfiftysevenToc(xml) {
        var xmlDocfiftysevenToc = xml.responseXML;
        document.getElementById("book-chapter-fiftyseven").innerHTML =
        xmlDocfiftysevenToc.getElementsByTagName("chapter-fiftyseven")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fiftyeight
    var xhttpfiftyeightToc = new XMLHttpRequest();
    xhttpfiftyeightToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftyeightToc(this);
        }
    };
    xhttpfiftyeightToc.open("GET", "book-toc.xml", true);
    xhttpfiftyeightToc.send();

    function xmlImportfiftyeightToc(xml) {
        var xmlDocfiftyeightToc = xml.responseXML;
        document.getElementById("book-chapter-fiftyeight").innerHTML =
        xmlDocfiftyeightToc.getElementsByTagName("chapter-fiftyeight")[0].childNodes[0].nodeValue;
    }



    // Get Chapter fiftynine
    var xhttpfiftynineToc = new XMLHttpRequest();
    xhttpfiftynineToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportfiftynineToc(this);
        }
    };
    xhttpfiftynineToc.open("GET", "book-toc.xml", true);
    xhttpfiftynineToc.send();

    function xmlImportfiftynineToc(xml) {
        var xmlDocfiftynineToc = xml.responseXML;
        document.getElementById("book-chapter-fiftynine").innerHTML =
        xmlDocfiftynineToc.getElementsByTagName("chapter-fiftynine")[0].childNodes[0].nodeValue;
    }





    // Get Chapter sixty
    var xhttpsixtyToc = new XMLHttpRequest();
    xhttpsixtyToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtyToc(this);
        }
    };
    xhttpsixtyToc.open("GET", "book-toc.xml", true);
    xhttpsixtyToc.send();

    function xmlImportsixtyToc(xml) {
        var xmlDocsixtyToc = xml.responseXML;
        document.getElementById("book-chapter-sixty").innerHTML =
        xmlDocsixtyToc.getElementsByTagName("chapter-sixty")[0].childNodes[0].nodeValue;
    }



    // Get Chapter sixtyone
    var xhttpsixtyoneToc = new XMLHttpRequest();
    xhttpsixtyoneToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtyoneToc(this);
        }
    };
    xhttpsixtyoneToc.open("GET", "book-toc.xml", true);
    xhttpsixtyoneToc.send();

    function xmlImportsixtyoneToc(xml) {
        var xmlDocsixtyoneToc = xml.responseXML;
        document.getElementById("book-chapter-sixtyone").innerHTML =
        xmlDocsixtyoneToc.getElementsByTagName("chapter-sixtyone")[0].childNodes[0].nodeValue;
    }




    // Get Chapter sixtytwo
    var xhttpsixtytwoToc = new XMLHttpRequest();
    xhttpsixtytwoToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtytwoToc(this);
        }
    };
    xhttpsixtytwoToc.open("GET", "book-toc.xml", true);
    xhttpsixtytwoToc.send();

    function xmlImportsixtytwoToc(xml) {
        var xmlDocsixtytwoToc = xml.responseXML;
        document.getElementById("book-chapter-sixtytwo").innerHTML =
        xmlDocsixtytwoToc.getElementsByTagName("chapter-sixtytwo")[0].childNodes[0].nodeValue;
    }




    // Get Chapter sixtythree
    var xhttpsixtythreeToc = new XMLHttpRequest();
    xhttpsixtythreeToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtythreeToc(this);
        }
    };
    xhttpsixtythreeToc.open("GET", "book-toc.xml", true);
    xhttpsixtythreeToc.send();

    function xmlImportsixtythreeToc(xml) {
        var xmlDocsixtythreeToc = xml.responseXML;
        document.getElementById("book-chapter-sixtythree").innerHTML =
        xmlDocsixtythreeToc.getElementsByTagName("chapter-sixtythree")[0].childNodes[0].nodeValue;
    }




    // Get Chapter sixtyfour
    var xhttpsixtyfourToc = new XMLHttpRequest();
    xhttpsixtyfourToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtyfourToc(this);
        }
    };
    xhttpsixtyfourToc.open("GET", "book-toc.xml", true);
    xhttpsixtyfourToc.send();

    function xmlImportsixtyfourToc(xml) {
        var xmlDocsixtyfourToc = xml.responseXML;
        document.getElementById("book-chapter-sixtyfour").innerHTML =
        xmlDocsixtyfourToc.getElementsByTagName("chapter-sixtyfour")[0].childNodes[0].nodeValue;
    }



    // Get Chapter sixtyfive
    var xhttpsixtyfiveToc = new XMLHttpRequest();
    xhttpsixtyfiveToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtyfiveToc(this);
        }
    };
    xhttpsixtyfiveToc.open("GET", "book-toc.xml", true);
    xhttpsixtyfiveToc.send();

    function xmlImportsixtyfiveToc(xml) {
        var xmlDocsixtyfiveToc = xml.responseXML;
        document.getElementById("book-chapter-sixtyfive").innerHTML =
        xmlDocsixtyfiveToc.getElementsByTagName("chapter-sixtyfive")[0].childNodes[0].nodeValue;
    }





    // Get Chapter sixtysix
    var xhttpsixtysixToc = new XMLHttpRequest();
    xhttpsixtysixToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtysixToc(this);
        }
    };
    xhttpsixtysixToc.open("GET", "book-toc.xml", true);
    xhttpsixtysixToc.send();

    function xmlImportsixtysixToc(xml) {
        var xmlDocsixtysixToc = xml.responseXML;
        document.getElementById("book-chapter-sixtysix").innerHTML =
        xmlDocsixtysixToc.getElementsByTagName("chapter-sixtysix")[0].childNodes[0].nodeValue;
    }




    // Get Chapter sixtyseven
    var xhttpsixtysevenToc = new XMLHttpRequest();
    xhttpsixtysevenToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtysevenToc(this);
        }
    };
    xhttpsixtysevenToc.open("GET", "book-toc.xml", true);
    xhttpsixtysevenToc.send();

    function xmlImportsixtysevenToc(xml) {
        var xmlDocsixtysevenToc = xml.responseXML;
        document.getElementById("book-chapter-sixtyseven").innerHTML =
        xmlDocsixtysevenToc.getElementsByTagName("chapter-sixtyseven")[0].childNodes[0].nodeValue;
    }



    // Get Chapter sixtyeight
    var xhttpsixtyeightToc = new XMLHttpRequest();
    xhttpsixtyeightToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtyeightToc(this);
        }
    };
    xhttpsixtyeightToc.open("GET", "book-toc.xml", true);
    xhttpsixtyeightToc.send();

    function xmlImportsixtyeightToc(xml) {
        var xmlDocsixtyeightToc = xml.responseXML;
        document.getElementById("book-chapter-sixtyeight").innerHTML =
        xmlDocsixtyeightToc.getElementsByTagName("chapter-sixtyeight")[0].childNodes[0].nodeValue;
    }



    // Get Chapter sixtynine
    var xhttpsixtynineToc = new XMLHttpRequest();
    xhttpsixtynineToc.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlImportsixtynineToc(this);
        }
    };
    xhttpsixtynineToc.open("GET", "book-toc.xml", true);
    xhttpsixtynineToc.send();

    function xmlImportsixtynineToc(xml) {
        var xmlDocsixtynineToc = xml.responseXML;
        document.getElementById("book-chapter-sixtynine").innerHTML =
        xmlDocsixtynineToc.getElementsByTagName("chapter-sixtynine")[0].childNodes[0].nodeValue;
    }






        // Get Chapter seventy
        var xhttpseventyToc = new XMLHttpRequest();
        xhttpseventyToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventyToc(this);
            }
        };
        xhttpseventyToc.open("GET", "book-toc.xml", true);
        xhttpseventyToc.send();

        function xmlImportseventyToc(xml) {
            var xmlDocseventyToc = xml.responseXML;
            document.getElementById("book-chapter-seventy").innerHTML =
            xmlDocseventyToc.getElementsByTagName("chapter-seventy")[0].childNodes[0].nodeValue;
        }



        // Get Chapter seventyone
        var xhttpseventyoneToc = new XMLHttpRequest();
        xhttpseventyoneToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventyoneToc(this);
            }
        };
        xhttpseventyoneToc.open("GET", "book-toc.xml", true);
        xhttpseventyoneToc.send();

        function xmlImportseventyoneToc(xml) {
            var xmlDocseventyoneToc = xml.responseXML;
            document.getElementById("book-chapter-seventyone").innerHTML =
            xmlDocseventyoneToc.getElementsByTagName("chapter-seventyone")[0].childNodes[0].nodeValue;
        }




        // Get Chapter seventytwo
        var xhttpseventytwoToc = new XMLHttpRequest();
        xhttpseventytwoToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventytwoToc(this);
            }
        };
        xhttpseventytwoToc.open("GET", "book-toc.xml", true);
        xhttpseventytwoToc.send();

        function xmlImportseventytwoToc(xml) {
            var xmlDocseventytwoToc = xml.responseXML;
            document.getElementById("book-chapter-seventytwo").innerHTML =
            xmlDocseventytwoToc.getElementsByTagName("chapter-seventytwo")[0].childNodes[0].nodeValue;
        }




        // Get Chapter seventythree
        var xhttpseventythreeToc = new XMLHttpRequest();
        xhttpseventythreeToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventythreeToc(this);
            }
        };
        xhttpseventythreeToc.open("GET", "book-toc.xml", true);
        xhttpseventythreeToc.send();

        function xmlImportseventythreeToc(xml) {
            var xmlDocseventythreeToc = xml.responseXML;
            document.getElementById("book-chapter-seventythree").innerHTML =
            xmlDocseventythreeToc.getElementsByTagName("chapter-seventythree")[0].childNodes[0].nodeValue;
        }




        // Get Chapter seventyfour
        var xhttpseventyfourToc = new XMLHttpRequest();
        xhttpseventyfourToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventyfourToc(this);
            }
        };
        xhttpseventyfourToc.open("GET", "book-toc.xml", true);
        xhttpseventyfourToc.send();

        function xmlImportseventyfourToc(xml) {
            var xmlDocseventyfourToc = xml.responseXML;
            document.getElementById("book-chapter-seventyfour").innerHTML =
            xmlDocseventyfourToc.getElementsByTagName("chapter-seventyfour")[0].childNodes[0].nodeValue;
        }



        // Get Chapter seventyfive
        var xhttpseventyfiveToc = new XMLHttpRequest();
        xhttpseventyfiveToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventyfiveToc(this);
            }
        };
        xhttpseventyfiveToc.open("GET", "book-toc.xml", true);
        xhttpseventyfiveToc.send();

        function xmlImportseventyfiveToc(xml) {
            var xmlDocseventyfiveToc = xml.responseXML;
            document.getElementById("book-chapter-seventyfive").innerHTML =
            xmlDocseventyfiveToc.getElementsByTagName("chapter-seventyfive")[0].childNodes[0].nodeValue;
        }





        // Get Chapter seventysix
        var xhttpseventysixToc = new XMLHttpRequest();
        xhttpseventysixToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventysixToc(this);
            }
        };
        xhttpseventysixToc.open("GET", "book-toc.xml", true);
        xhttpseventysixToc.send();

        function xmlImportseventysixToc(xml) {
            var xmlDocseventysixToc = xml.responseXML;
            document.getElementById("book-chapter-seventysix").innerHTML =
            xmlDocseventysixToc.getElementsByTagName("chapter-seventysix")[0].childNodes[0].nodeValue;
        }




        // Get Chapter seventyseven
        var xhttpseventysevenToc = new XMLHttpRequest();
        xhttpseventysevenToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventysevenToc(this);
            }
        };
        xhttpseventysevenToc.open("GET", "book-toc.xml", true);
        xhttpseventysevenToc.send();

        function xmlImportseventysevenToc(xml) {
            var xmlDocseventysevenToc = xml.responseXML;
            document.getElementById("book-chapter-seventyseven").innerHTML =
            xmlDocseventysevenToc.getElementsByTagName("chapter-seventyseven")[0].childNodes[0].nodeValue;
        }



        // Get Chapter seventyeight
        var xhttpseventyeightToc = new XMLHttpRequest();
        xhttpseventyeightToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventyeightToc(this);
            }
        };
        xhttpseventyeightToc.open("GET", "book-toc.xml", true);
        xhttpseventyeightToc.send();

        function xmlImportseventyeightToc(xml) {
            var xmlDocseventyeightToc = xml.responseXML;
            document.getElementById("book-chapter-seventyeight").innerHTML =
            xmlDocseventyeightToc.getElementsByTagName("chapter-seventyeight")[0].childNodes[0].nodeValue;
        }



        // Get Chapter seventynine
        var xhttpseventynineToc = new XMLHttpRequest();
        xhttpseventynineToc.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                xmlImportseventynineToc(this);
            }
        };
        xhttpseventynineToc.open("GET", "book-toc.xml", true);
        xhttpseventynineToc.send();

        function xmlImportseventynineToc(xml) {
            var xmlDocseventynineToc = xml.responseXML;
            document.getElementById("book-chapter-seventynine").innerHTML =
            xmlDocseventynineToc.getElementsByTagName("chapter-seventynine")[0].childNodes[0].nodeValue;
        }






            // Get Chapter eighty
            var xhttpeightyToc = new XMLHttpRequest();
            xhttpeightyToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightyToc(this);
                }
            };
            xhttpeightyToc.open("GET", "book-toc.xml", true);
            xhttpeightyToc.send();

            function xmlImporteightyToc(xml) {
                var xmlDoceightyToc = xml.responseXML;
                document.getElementById("book-chapter-eighty").innerHTML =
                xmlDoceightyToc.getElementsByTagName("chapter-eighty")[0].childNodes[0].nodeValue;
            }



            // Get Chapter eightyone
            var xhttpeightyoneToc = new XMLHttpRequest();
            xhttpeightyoneToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightyoneToc(this);
                }
            };
            xhttpeightyoneToc.open("GET", "book-toc.xml", true);
            xhttpeightyoneToc.send();

            function xmlImporteightyoneToc(xml) {
                var xmlDoceightyoneToc = xml.responseXML;
                document.getElementById("book-chapter-eightyone").innerHTML =
                xmlDoceightyoneToc.getElementsByTagName("chapter-eightyone")[0].childNodes[0].nodeValue;
            }




            // Get Chapter eightytwo
            var xhttpeightytwoToc = new XMLHttpRequest();
            xhttpeightytwoToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightytwoToc(this);
                }
            };
            xhttpeightytwoToc.open("GET", "book-toc.xml", true);
            xhttpeightytwoToc.send();

            function xmlImporteightytwoToc(xml) {
                var xmlDoceightytwoToc = xml.responseXML;
                document.getElementById("book-chapter-eightytwo").innerHTML =
                xmlDoceightytwoToc.getElementsByTagName("chapter-eightytwo")[0].childNodes[0].nodeValue;
            }




            // Get Chapter eightythree
            var xhttpeightythreeToc = new XMLHttpRequest();
            xhttpeightythreeToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightythreeToc(this);
                }
            };
            xhttpeightythreeToc.open("GET", "book-toc.xml", true);
            xhttpeightythreeToc.send();

            function xmlImporteightythreeToc(xml) {
                var xmlDoceightythreeToc = xml.responseXML;
                document.getElementById("book-chapter-eightythree").innerHTML =
                xmlDoceightythreeToc.getElementsByTagName("chapter-eightythree")[0].childNodes[0].nodeValue;
            }




            // Get Chapter eightyfour
            var xhttpeightyfourToc = new XMLHttpRequest();
            xhttpeightyfourToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightyfourToc(this);
                }
            };
            xhttpeightyfourToc.open("GET", "book-toc.xml", true);
            xhttpeightyfourToc.send();

            function xmlImporteightyfourToc(xml) {
                var xmlDoceightyfourToc = xml.responseXML;
                document.getElementById("book-chapter-eightyfour").innerHTML =
                xmlDoceightyfourToc.getElementsByTagName("chapter-eightyfour")[0].childNodes[0].nodeValue;
            }



            // Get Chapter eightyfive
            var xhttpeightyfiveToc = new XMLHttpRequest();
            xhttpeightyfiveToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightyfiveToc(this);
                }
            };
            xhttpeightyfiveToc.open("GET", "book-toc.xml", true);
            xhttpeightyfiveToc.send();

            function xmlImporteightyfiveToc(xml) {
                var xmlDoceightyfiveToc = xml.responseXML;
                document.getElementById("book-chapter-eightyfive").innerHTML =
                xmlDoceightyfiveToc.getElementsByTagName("chapter-eightyfive")[0].childNodes[0].nodeValue;
            }





            // Get Chapter eightysix
            var xhttpeightysixToc = new XMLHttpRequest();
            xhttpeightysixToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightysixToc(this);
                }
            };
            xhttpeightysixToc.open("GET", "book-toc.xml", true);
            xhttpeightysixToc.send();

            function xmlImporteightysixToc(xml) {
                var xmlDoceightysixToc = xml.responseXML;
                document.getElementById("book-chapter-eightysix").innerHTML =
                xmlDoceightysixToc.getElementsByTagName("chapter-eightysix")[0].childNodes[0].nodeValue;
            }




            // Get Chapter eightyseven
            var xhttpeightysevenToc = new XMLHttpRequest();
            xhttpeightysevenToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightysevenToc(this);
                }
            };
            xhttpeightysevenToc.open("GET", "book-toc.xml", true);
            xhttpeightysevenToc.send();

            function xmlImporteightysevenToc(xml) {
                var xmlDoceightysevenToc = xml.responseXML;
                document.getElementById("book-chapter-eightyseven").innerHTML =
                xmlDoceightysevenToc.getElementsByTagName("chapter-eightyseven")[0].childNodes[0].nodeValue;
            }



            // Get Chapter eightyeight
            var xhttpeightyeightToc = new XMLHttpRequest();
            xhttpeightyeightToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightyeightToc(this);
                }
            };
            xhttpeightyeightToc.open("GET", "book-toc.xml", true);
            xhttpeightyeightToc.send();

            function xmlImporteightyeightToc(xml) {
                var xmlDoceightyeightToc = xml.responseXML;
                document.getElementById("book-chapter-eightyeight").innerHTML =
                xmlDoceightyeightToc.getElementsByTagName("chapter-eightyeight")[0].childNodes[0].nodeValue;
            }



            // Get Chapter eightynine
            var xhttpeightynineToc = new XMLHttpRequest();
            xhttpeightynineToc.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    xmlImporteightynineToc(this);
                }
            };
            xhttpeightynineToc.open("GET", "book-toc.xml", true);
            xhttpeightynineToc.send();

            function xmlImporteightynineToc(xml) {
                var xmlDoceightynineToc = xml.responseXML;
                document.getElementById("book-chapter-eightynine").innerHTML =
                xmlDoceightynineToc.getElementsByTagName("chapter-eightynine")[0].childNodes[0].nodeValue;
            }







                // Get Chapter ninety
                var xhttpninetyToc = new XMLHttpRequest();
                xhttpninetyToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetyToc(this);
                    }
                };
                xhttpninetyToc.open("GET", "book-toc.xml", true);
                xhttpninetyToc.send();

                function xmlImportninetyToc(xml) {
                    var xmlDocninetyToc = xml.responseXML;
                    document.getElementById("book-chapter-ninety").innerHTML =
                    xmlDocninetyToc.getElementsByTagName("chapter-ninety")[0].childNodes[0].nodeValue;
                }



                // Get Chapter ninetyone
                var xhttpninetyoneToc = new XMLHttpRequest();
                xhttpninetyoneToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetyoneToc(this);
                    }
                };
                xhttpninetyoneToc.open("GET", "book-toc.xml", true);
                xhttpninetyoneToc.send();

                function xmlImportninetyoneToc(xml) {
                    var xmlDocninetyoneToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetyone").innerHTML =
                    xmlDocninetyoneToc.getElementsByTagName("chapter-ninetyone")[0].childNodes[0].nodeValue;
                }




                // Get Chapter ninetytwo
                var xhttpninetytwoToc = new XMLHttpRequest();
                xhttpninetytwoToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetytwoToc(this);
                    }
                };
                xhttpninetytwoToc.open("GET", "book-toc.xml", true);
                xhttpninetytwoToc.send();

                function xmlImportninetytwoToc(xml) {
                    var xmlDocninetytwoToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetytwo").innerHTML =
                    xmlDocninetytwoToc.getElementsByTagName("chapter-ninetytwo")[0].childNodes[0].nodeValue;
                }




                // Get Chapter ninetythree
                var xhttpninetythreeToc = new XMLHttpRequest();
                xhttpninetythreeToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetythreeToc(this);
                    }
                };
                xhttpninetythreeToc.open("GET", "book-toc.xml", true);
                xhttpninetythreeToc.send();

                function xmlImportninetythreeToc(xml) {
                    var xmlDocninetythreeToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetythree").innerHTML =
                    xmlDocninetythreeToc.getElementsByTagName("chapter-ninetythree")[0].childNodes[0].nodeValue;
                }




                // Get Chapter ninetyfour
                var xhttpninetyfourToc = new XMLHttpRequest();
                xhttpninetyfourToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetyfourToc(this);
                    }
                };
                xhttpninetyfourToc.open("GET", "book-toc.xml", true);
                xhttpninetyfourToc.send();

                function xmlImportninetyfourToc(xml) {
                    var xmlDocninetyfourToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetyfour").innerHTML =
                    xmlDocninetyfourToc.getElementsByTagName("chapter-ninetyfour")[0].childNodes[0].nodeValue;
                }



                // Get Chapter ninetyfive
                var xhttpninetyfiveToc = new XMLHttpRequest();
                xhttpninetyfiveToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetyfiveToc(this);
                    }
                };
                xhttpninetyfiveToc.open("GET", "book-toc.xml", true);
                xhttpninetyfiveToc.send();

                function xmlImportninetyfiveToc(xml) {
                    var xmlDocninetyfiveToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetyfive").innerHTML =
                    xmlDocninetyfiveToc.getElementsByTagName("chapter-ninetyfive")[0].childNodes[0].nodeValue;
                }





                // Get Chapter ninetysix
                var xhttpninetysixToc = new XMLHttpRequest();
                xhttpninetysixToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetysixToc(this);
                    }
                };
                xhttpninetysixToc.open("GET", "book-toc.xml", true);
                xhttpninetysixToc.send();

                function xmlImportninetysixToc(xml) {
                    var xmlDocninetysixToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetysix").innerHTML =
                    xmlDocninetysixToc.getElementsByTagName("chapter-ninetysix")[0].childNodes[0].nodeValue;
                }




                // Get Chapter ninetyseven
                var xhttpninetysevenToc = new XMLHttpRequest();
                xhttpninetysevenToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetysevenToc(this);
                    }
                };
                xhttpninetysevenToc.open("GET", "book-toc.xml", true);
                xhttpninetysevenToc.send();

                function xmlImportninetysevenToc(xml) {
                    var xmlDocninetysevenToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetyseven").innerHTML =
                    xmlDocninetysevenToc.getElementsByTagName("chapter-ninetyseven")[0].childNodes[0].nodeValue;
                }



                // Get Chapter ninetyeight
                var xhttpninetyeightToc = new XMLHttpRequest();
                xhttpninetyeightToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetyeightToc(this);
                    }
                };
                xhttpninetyeightToc.open("GET", "book-toc.xml", true);
                xhttpninetyeightToc.send();

                function xmlImportninetyeightToc(xml) {
                    var xmlDocninetyeightToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetyeight").innerHTML =
                    xmlDocninetyeightToc.getElementsByTagName("chapter-ninetyeight")[0].childNodes[0].nodeValue;
                }



                // Get Chapter ninetynine
                var xhttpninetynineToc = new XMLHttpRequest();
                xhttpninetynineToc.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        xmlImportninetynineToc(this);
                    }
                };
                xhttpninetynineToc.open("GET", "book-toc.xml", true);
                xhttpninetynineToc.send();

                function xmlImportninetynineToc(xml) {
                    var xmlDocninetynineToc = xml.responseXML;
                    document.getElementById("book-chapter-ninetynine").innerHTML =
                    xmlDocninetynineToc.getElementsByTagName("chapter-ninetynine")[0].childNodes[0].nodeValue;
                }

















								// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
								// IMPORT XML DATA (rrb****_book-info.xml)
								//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



								// Get title
								var xhttp1 = new XMLHttpRequest();
								xhttp1.onreadystatechange = function() {
										if (this.readyState == 4 && this.status == 200) {
												xmlImportOne(this);
										}
								};
								xhttp1.open("GET", "book-info.xml", true);
								xhttp1.send();

								function xmlImportOne(xml) {
										var xmlDoc1 = xml.responseXML;
										document.getElementById("book-title").innerHTML =
										xmlDoc1.getElementsByTagName("title")[0].childNodes[0].nodeValue;
								}

								// Get author
								var xhttp2 = new XMLHttpRequest();
								xhttp2.onreadystatechange = function() {
										if (this.readyState == 4 && this.status == 200) {
												xmlImportTwo(this);
										}
								};
								xhttp2.open("GET", "book-info.xml", true);
								xhttp2.send();

								function xmlImportTwo(xml) {
										var xmlDoc2 = xml.responseXML;
										document.getElementById("book-author").innerHTML =
										xmlDoc2.getElementsByTagName("author")[0].childNodes[0].nodeValue;
								}

										// Get discription
								var xhttp3 = new XMLHttpRequest();
								xhttp3.onreadystatechange = function() {
										if (this.readyState == 4 && this.status == 200) {
												xmlImportThree(this);
										}
								};
								xhttp3.open("GET", "book-info.xml", true);
								xhttp3.send();

								function xmlImportThree(xml) {
										var xmlDoc3 = xml.responseXML;
										document.getElementById("book-discription").innerHTML =
										xmlDoc3.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
								}
