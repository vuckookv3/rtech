// on page load navigacija na top
// $(document).ready(function(){
//   $('html, body').animate({ scrollTop: 0 }, 'slow');
// });


(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 55)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Smooth scrolling using jQuery easing22
  $('a.js-scroll-trigger2[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top + 85)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });




  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 110
  });

})(jQuery); // End of use strict



// Fixed <-> Non-fixed navigation 1



//height: calc(100vh - 57px);






// back to top anchor



// ===== Scroll to Top ==== 


$(function () {

  var windowHeight = $(window).height();
  var gtop = $(".anchor");

  $(window).scroll(function () {
    if ($(this).scrollTop() > windowHeight + 500) { // If page is scrolled more than 50px
      $('#gotop').fadeIn(200);
      gtop.removeClass('gtopZindexLow').addClass("gtopZindexHigh"); // Fade in the arrow
    } else {
      $('#gotop').fadeOut(200); // Else fade out the arrow
      gtop.removeClass('gtopZindexHigh').addClass("gtopZindexLow");
    }
  });

  $(document).ready(function () {

    // Smooth scroll to element. Not necessary but provides a bit of delight
    $("#gotop").click(function () {
      // This prevents the default 'jump to' behaviour if JavaScript is enabled,
      // whilst keeping the functionality there for when JavaScript isn't enabled
      event.preventDefault();
      $("html, body").animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
      return true;
    });
  });


  // $('#return-to-top').click(function () { // When arrow is clicked
  //   $('body,html').animate({
  //     scrollTop: 0 // Scroll to top of body
  //   }, 500);
  // });
});








$('.slider').each(function () {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function () {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function () {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function () {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});



/* popover custom */

$(function(){
  $('[data-toggle="popover"]').popover()
});

/* 3d menu */

$('.block-menu').find('a').each(function(){

  var el = $(this),
       elText = el.text();
  
  el.addClass("three-d");
  el.append('<span aria-hidden="true" class="three-d-box"><span class="front">'+elText+'</span><span class="back">'+elText+'</span></span>');


});



$(document).ready(function() {
	var s = $(".sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=1000) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
});