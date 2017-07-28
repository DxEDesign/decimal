/**
 *
 * [Template Name: Decimal - One Page Creative Template]
 * Version: 1.0.0
 * Author: DxE-Design
 * Website: http://dxe-design.com
 *
 */


/* Preloader */
// preloader loads before any contents are visible
$('body').css('overflow-y', 'hidden'); // set y-overflow to hidden initially
$(document).ready(function() {
    setTimeout(function() {
        // load all functions once every images are loaded
        $('.main__container').imagesLoaded(function() {
            $('.perloader').fadeOut(1000); // cause the preloader to fade out after 1 second
            $('.perloader__container').remove(); // to improve browser performance
            $('body').css('overflow-y', 'visible'); // set y-overflow to visible again
            $("body, html").scrollTop(0); // ensure page reset to top every refresh


            /* Init all functions */
            initStickyNav();
            initIsotope();
            initAOS();
            initCountUp();
            initOwlCarousel();
            initLightBox();
        });
    }, 3000);
});





/* Sticky Nav Fixed On Top */
// this give the styling for the navigation
function initStickyNav() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('nav').addClass('nav-sticky');
        } else {
            $('nav').removeClass('nav-sticky');
        }
    });
}





/* Enable Scroll To Effect */
// When user click the navigation, it will scroll to that particular section
$(function() {
    $('a[href*="#"]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 75
        }, 1500);
        e.preventDefault();
    });

    // Go to Portfolio
    $("#btnPortfolio").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("#portfolio").offset().top - 75
        }, 1500);
    });

    // Go to Contact Us
    $("#btnContactUs").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("#contact").offset().top - 75
        }, 1500);
    });
});





/* Initiate Animate On Scroll */
// this allow certain element to animate during scrolling
function initAOS() {
    AOS.init();
}





/* Count Up Value */
// this feature allow the value count from 0 until the specified value When
// user scroll to a certain point
function initCountUp() {
    var waypoint = new Waypoint({
        element: $('#achievements'),
        handler: function(direction) {

            var options = {  
                useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  decimal: '.',
                  prefix: '',
                  suffix: ''
            };
            var counter1 = new CountUp("countProject", 0, 5521, 0, 3, options);
            var counter2 = new CountUp("countSatisfy", 0, 3621, 0, 3, options);
            var counter3 = new CountUp("countRecommend", 0, 117, 0, 3, options);
            var counter4 = new CountUp("countClient", 0, 231, 0, 3, options);
            counter1.start();
            counter2.start();
            counter3.start();
            counter4.start();

            // destroy once completed
            this.destroy()
        },
        offset: '100%'
    });
}





/* Init Sidebar */
// this allow user to toggle the sidebar, slide in or slide out
var container = document.querySelector('.main__container'),
    content = document.querySelector('.content');

function toggleSidebar() {
    return isShowingSidebar() ? hideSidebar() : showSidebar();
}

function showSidebar() {
    $('.main__container').addClass('show-sidebar');
}

function hideSidebar() {
    $('.main__container').removeClass('show-sidebar');
}

function isShowingSidebar() {
    return container.classList.contains('show-sidebar');
}

document.querySelector('.toogle-sidebar').addEventListener('click', toggleSidebar, false);
container.addEventListener('click', function(e) {
    if (isShowingSidebar() && content.contains(e.target)) {
        e.preventDefault();
        hideSidebar();
    }
}, true);





/* Search Feature */
// allow user to search something when search button is clicked
$(function() {
    $(".search__init").click(function() {
        $('.search').addClass('search--active');
        $(".search__input").focus();
    });

    $(".search__close").click(function() {
        $('.search').removeClass('search--active');
        $(".search__input").val('');
    });
});
$(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        // remove search
        $('.search').removeClass('search--active');
        $(".search__input").val('');

        // hide sidebar
        $('.main__container').removeClass('show-sidebar');
    }
});





/* owl carousel */
// Touch enabled jQuery plugin that lets you create a beautiful responsive
// carousel slider
function initOwlCarousel() {
    $('.team__carousel').owlCarousel({
        center: true,
        loop: true,
        autoWidth: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            375: {
                items: 3,
                margin: 50
            },
            768: {
                items: 5,
                margin: 50
            }
        }
    });

    $('.clients_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 3,
                margin: 50
            },
            600: {
                items: 6,
                margin: 20
            },
            1000: {
                items: 6,
                margin: 100
            }
        }
    });

    $(".header__carousel").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 500,
        autoplayHoverPause: false
    })
    .on('drag.owl.carousel', function(event) {
        removeSliderContents();
    })
    .on('change.owl.carousel', function(event) {
        removeSliderContents();
    })
    .on('translated.owl.carousel', function(event) {
        addSliderContents();
    })
    .on('resized.owl.carousel', function(event) {
        addSliderContents();
    });

    function removeSliderContents(){
        $('.header__carousel .header__heading-2').removeClass('animated').hide();
        $('.header__carousel .header__heading-1').removeClass('animated').hide();
        $('.header__carousel .header__button-1').removeClass('animated').hide();
        $('.header__carousel .header__button-2').removeClass('animated').hide();
        $('.header__img').removeClass('animated').hide();
    }

    function addSliderContents(){
        $('.header__carousel .header__heading-2').addClass('animated fadeInDown').show();
        $('.header__carousel .header__heading-1').addClass('animated fadeInDown_500').show();
        $('.header__carousel .header__button-1').addClass('animated fadeInDown_500').show();
        $('.header__carousel .header__button-2').addClass('animated fadeInDown_500').show();
        $('.header__img').addClass('animated fadeIn_1000').show();
    }
}






/* Isotope */
// isotope provide Filter & sort layouts
function initIsotope() {
    var $grid = $('.portfolio');
    $grid.isotope({
        // options
        itemSelector: '.portfolio__item',
        layoutMode: 'fitRows'
    });


    $('.portfolio__filter').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $(".portfolio__filter a").removeClass("active");
        $(this).addClass("active");
        $grid.isotope({
            filter: filterValue
        });
    });
}





/* Magnific popup */
// Magnific Popup is a responsive lightbox & dialog script
function initLightBox() {
    $('.portfolio__lightbox').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile', // this class is for CSS animation below
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
}
