$(function () {
    "use strict";

    /*fixed menu*/

    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function () {
        menuscroll();
    });

    /* navbar close on click*/
    $('.navbar-nav > li:not(.dropdown) > a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    /*navbar toggle bg*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function (e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function (e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })


    // Scrolling
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    /* owl */
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }
});
/* owl kraj */


/* go-top dugme*/
$(document).ready(function () {
    // Show or hide the sticky footer button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })
});
/* go-top dugme kraj */















(function ($) {
    'use strict';

    // [ JS Active Code Index ]

    // :: 1.0 Owl Carousel Active Code
    // :: 2.0 Slick Active Code
    // :: 3.0 Footer Reveal Active Code
    // :: 4.0 ScrollUp Active Code
    // :: 5.0 CounterUp Active Code
    // :: 6.0 onePageNav Active Code
    // :: 7.0 Magnific-popup Video Active Code
    // :: 8.0 Sticky Active Code
    // :: 9.0 Preloader Active code

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".clients").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
        $(".products").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
        $(".team").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
        $('.owl-carousel').owlCarousel({
            autoplay: true,
            center: true,
            loop: true,
            nav: true,
            navText: ["<span class='icon icon-arrow-left7'></span>", "<span class='icon icon-arrow-right7'></span>"],
            items: 1,
            responsive: {
                768: {
                    items: 3,
                }
            }
        });
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // :: 2.0 Slick Active Code
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }

    // :: 3.0 Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('footer').footerReveal({
            shadow: true,
            shadowOpacity: 0.3,
            zIndex: -101
        });
    }



    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // :: 7.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 8.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
        } else {
            $('.header_area').removeClass('sticky slideInDown');
        }
    });

    // :: 9.0 Preloader Active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Strut = {
    random: function random(e, t) {
        return Math.random() * (t - e) + e;
    },
    arrayRandom: function arrayRandom(e) {
        return e[Math.floor(Math.random() * e.length)];
    },
    interpolate: function interpolate(e, t, n) {
        return e * (1 - n) + t * n;
    },
    rangePosition: function rangePosition(e, t, n) {
        return (n - e) / (t - e);
    },
    clamp: function clamp(e, t, n) {
        return Math.max(Math.min(e, n), t);
    },
    queryArray: function queryArray(e, t) {
        return t || (t = document.body), Array.prototype.slice.call(t.querySelectorAll(e));
    },
    ready: function ready(e) {
        document.readyState == 'complete' ? e() : document.addEventListener('DOMContentLoaded', e);
    }
};
var reduceMotion = matchMedia("(prefers-reduced-motion)").matches;

{
    // =======
    // helpers
    // =======

    var setState = function setState(state, speed) {
        return directions.forEach(function (axis) {
            state[axis] += speed[axis];
            if (Math.abs(state[axis]) < 360) return;
            var max = Math.max(state[axis], 360);
            var min = max == 360 ? Math.abs(state[axis]) : 360;
            state[axis] = max - min;
        });
    };

    var cubeIsHidden = function cubeIsHidden(left) {
        return left > parentWidth + 30;
    };

    // =================
    // shared references
    // =================

    var headerIsHidden = false;

    var template = document.getElementById("cube-template");

    var parent = document.getElementById("header-hero");
    var getParentWidth = function getParentWidth() {
        return parent.getBoundingClientRect().width;
    };
    var parentWidth = getParentWidth();
    window.addEventListener("resize", function () {
        return parentWidth = getParentWidth();
    });

    var directions = ["x", "y"];

    var palette = {
        white: {
            color: [255, 255, 255],
            shading: [160, 190, 218]
        },
        orange: {
            color: [255, 250, 230],
            shading: [255, 120, 50]
        },
        green: {
            color: [205, 255, 204],
            shading: [0, 211, 136]
        }
    };

    // ==============
    // cube instances
    // ==============

    var setCubeStyles = function setCubeStyles(_ref) {
        var cube = _ref.cube,
            size = _ref.size,
            left = _ref.left,
            top = _ref.top;

        Object.assign(cube.style, {
            width: size + 'px',
            height: size + 'px',
            left: left + 'px',
            top: top + 'px'
        });

        Object.assign(cube.querySelector(".shadow").style, {
            filter: 'blur(' + Math.round(size * .6) + 'px)',
            opacity: Math.min(size / 120, .4)
        });
    };

    var createCube = function createCube(size) {
        var fragment = document.importNode(template.content, true);
        var cube = fragment.querySelector(".cube");

        var state = {
            x: 0,
            y: 0
        };

        var speed = directions.reduce(function (object, axis) {
            var max = size > sizes.m ? .3 : .6;
            object[axis] = Strut.random(-max, max);
            return object;
        }, {});

        var sides = Strut.queryArray(".sides div", cube).reduce(function (object, side) {
            object[side.className] = {
                side: side,
                hidden: false,
                rotate: {
                    x: 0,
                    y: 0
                }
            };
            return object;
        }, {});

        sides.top.rotate.x = 90;
        sides.bottom.rotate.x = -90;
        sides.left.rotate.y = -90;
        sides.right.rotate.y = 90;
        sides.back.rotate.y = -180;

        return { fragment: fragment, cube: cube, state: state, speed: speed, sides: Object.values(sides) };
    };

    var sizes = {
        xs: 15,
        s: 25,
        m: 40,
        l: 100,
        xl: 120
    };

    var cubes = [{
        tint: palette.green,
        size: sizes.xs,
        left: 35,
        top: 465
    }, {
        tint: palette.white,
        size: sizes.s,
        left: 55,
        top: 415
    }, {
        tint: palette.white,
        size: sizes.xl,
        left: 140,
        top: 400
    }, {
        tint: palette.white,
        size: sizes.m,
        left: 420,
        top: 155
    }, {
        tint: palette.green,
        size: sizes.xs,
        left: 440,
        top: 280
    }, {
        tint: palette.orange,
        size: sizes.s,
        left: 480,
        top: 228
    }, {
        tint: palette.white,
        size: sizes.l,
        left: 580,
        top: 255
    }, {
        tint: palette.green,
        size: sizes.s,
        left: 780,
        top: 320
    }, {
        tint: palette.white,
        size: sizes.xl,
        left: 780,
        top: 120
    }, {
        tint: palette.orange,
        size: sizes.l,
        left: 900,
        top: 310
    }, {
        tint: palette.green,
        size: sizes.m,
        left: 1030,
        top: 200
    }].map(function (object) {
        return Object.assign(createCube(object.size), object);
    });

    cubes.forEach(setCubeStyles);

    // =======================
    // cube rotating animation
    // =======================

    var getDistance = function getDistance(state, rotate) {
        return directions.reduce(function (object, axis) {
            object[axis] = Math.abs(state[axis] + rotate[axis]);
            return object;
        }, {});
    };

    var getRotation = function getRotation(state, size, rotate) {
        var axis = rotate.x ? "Z" : "Y";
        var direction = rotate.x > 0 ? -1 : 1;

        return '\n      rotateX(' + (state.x + rotate.x) + 'deg)\n      rotate' + axis + '(' + direction * (state.y + rotate.y) + 'deg)\n      translateZ(' + size / 2 + 'px)\n    ';
    };

    var getShading = function getShading(tint, rotate, distance) {
        var darken = directions.reduce(function (object, axis) {
            var delta = distance[axis];
            var ratio = delta / 180;
            object[axis] = delta > 180 ? Math.abs(2 - ratio) : ratio;
            return object;
        }, {});

        if (rotate.x) darken.y = 0; else {
            var x = distance.x;

            if (x > 90 && x < 270) directions.forEach(function (axis) {
                return darken[axis] = 1 - darken[axis];
            });
        }

        var alpha = (darken.x + darken.y) / 2;
        var blend = function blend(value, index) {
            return Math.round(Strut.interpolate(value, tint.shading[index], alpha));
        };

        var _tint$color$map = tint.color.map(blend),
            _tint$color$map2 = _slicedToArray(_tint$color$map, 3),
            r = _tint$color$map2[0],
            g = _tint$color$map2[1],
            b = _tint$color$map2[2];

        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    };

    var shouldHide = function shouldHide(rotateX, x, y) {
        if (rotateX) return x > 90 && x < 270;
        if (x < 90) return y > 90 && y < 270;
        if (x < 270) return y < 90;
        return y > 90 && y < 270;
    };

    var updateSides = function updateSides(_ref2) {
        var state = _ref2.state,
            speed = _ref2.speed,
            size = _ref2.size,
            tint = _ref2.tint,
            sides = _ref2.sides,
            left = _ref2.left;

        if (headerIsHidden || cubeIsHidden(left)) return;

        var animate = function animate(object) {
            var side = object.side,
                rotate = object.rotate,
                hidden = object.hidden;

            var distance = getDistance(state, rotate);

            // don't animate hidden sides
            if (shouldHide(rotate.x, distance.x, distance.y)) {
                if (!hidden) {
                    side.hidden = true;
                    object.hidden = true;
                }
                return;
            }

            if (hidden) {
                side.hidden = false;
                object.hidden = false;
            }

            side.style.transform = getRotation(state, size, rotate);
            side.style.backgroundColor = getShading(tint, rotate, distance);
        };

        setState(state, speed);
        sides.forEach(animate);
    };

    var tick = function tick() {
        cubes.forEach(updateSides);
        if (reduceMotion) return;
        requestAnimationFrame(tick);
    };

    // ===============
    // parallax scroll
    // ===============

    // give it some extra space to account for the parallax and the shadows of the cubes
    var parallaxLimit = document.querySelector("main > header").getBoundingClientRect().height + 80;

    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        if (scroll < parallaxLimit) {
            headerIsHidden = false;
            cubes.forEach(function (_ref3) {
                var cube = _ref3.cube,
                    speed = _ref3.speed;
                return cube.style.transform = 'translateY(' + Math.abs(speed.x * .5) * scroll + 'px)';
            });
            return;
        }
        headerIsHidden = true;
    });

    // ==========
    // initialize
    // ==========

    var container = document.createElement("div");
    container.className = "cubes";
    cubes.forEach(function (_ref4) {
        var fragment = _ref4.fragment;
        return container.appendChild(fragment);
    });

    var start = function start() {
        tick();
        parent.appendChild(container);
    };

    'requestIdleCallback' in window ? requestIdleCallback(start) : start();
}