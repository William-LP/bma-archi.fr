/* ------------------------------------------

[ Custom settings ]

01. ScrollIt
02. Progress bar
03. Preloader
04. Logo & Menu scroll sticky
05. Menu Navigation
06. Sub Menu
07. Sections background image
08. YouTubePopUp
09. Isotope Active
10. Animations
11. Accordion Box (for Faqs)
12. MagnificPopup
13. Hero owlCarousel
14. Slider owlCarousel
15. Project owlCarousel
16. Project Page owlCarousel
17. Services owlCarousel
18. Blog Grid owlCarousel
19. Team owlCarousel
20. Testimonials owlCarousel
21. Contact Form
22. Scroll back to top

------------------------------------------ */

(function () {
    "use strict";
    
    var wind = $(window);
    
    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    

	// Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'images/logo-dark.png');
        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'images/logo.png');
        }
    });

    // Close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    // Progress bar
    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
    var c4 = $('.circle');
    var myVal = $(this).attr('data-value');
    $(".sk-progress .circle").each(function () {
        c4.circleProgress({
            startAngle: -Math.PI / 4 * 2,
            value: myVal,
            fill: {
              gradient: ["#7fa1c6", "#7fa1c6"]
            }
        });

    });
    
    var DURU = {
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.enableGridGallery();
            this.enablePopupGallery();
        }
        , cacheDom: function () {
            this._body = $('body');
            this.archsanGalleryTabs = $('.archsan-toolbar-item');
            this.archsanGalleryItem = $('.archsan-gallery-item');
        }
        , bindEvents: function () {
            var self = this;
            this.archsanGalleryTabs.on('click', self.changeActiveTab);
            this.archsanGalleryTabs.on('click', self.addGalleryFilter);
        }
        , /* ======= popup gallery ======= */
        enablePopupGallery: function () {
            $('.archsan-popup-gallery').each(function () {
                $(this).magnificPopup({
                    delegate: 'a'
                    , type: 'image'
                    , gallery: {
                        enabled: true
                    }
                });
            });
        }
        , /* ======= gallery tab ======= */
        changeActiveTab: function () {
            $(this).closest('.archsan-gallery-toolbar').find('.active').removeClass('active');
            $(this).addClass('active');
        }
        , /* ======= gallery filter ======= */
        addGalleryFilter: function () {
            var value = $(this).attr('data-filter');
            if (value === 'all') {
                DURU.archsanGalleryItem.show('3000');
            }
            else {
                DURU.archsanGalleryItem.not('.' + value).hide('3000');
                DURU.archsanGalleryItem.filter('.' + value).show('3000');
            }
        }
        , /* ======= grid gallery ======= */
        enableGridGallery: function () {
            $('.archsan-grid-gallery').each(function (i, el) {
                var item = $(el).find('.archsan-grid-item');
                $(el).masonry({
                    itemSelector: '.archsan-grid-item'
                    , columnWidth: '.archsan-grid-item'
                    , horizontalOrder: true
                });
            });
        }
     };
    
    // Preloader
	$("#preloader").fadeOut(700);
	$(".preloader-bg").delay(600).fadeOut(700);
	var wind = $(window);  
    

    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Isotope Active
    $('.projects2-items').imagesLoaded(function () {
    // Add isotope on click function
    $('.projects2-filter li').on('click', function () {
            $(".projects2-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects2-items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                , }
            });
            return false;
        });
    $(".projects2-items").isotope({
            itemSelector: '.single-item'
            , layoutMode: 'masonry'
        , });
    });
    
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // Accordion Box (for Faqs)
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                //return false;
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }
    
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
    // Slider 
    $(document).ready(function() {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
         nav: true,
         navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        mouseDrag: false,
        onInitialized: function (e) {
            var a = this.items().length;
            $("#snh-1").html("<span>01</span><span>" + "0" + a + "</span>");
            var presentage = Math.round((100 / a));
            $('.slider__progress span').css("width", presentage + "%");
        }
    });
    owl.on('changed.owl.carousel', function(e) {
        var item = e.item.index - 2;     // Position of the current item
        var b = --e.item.index,
            a = e.item.count;
        $("#snh-1").html("<span> " + "0" + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + "0" + a + "</span>");

        var current = e.page.index + 1;
        var presentage = Math.round((100 / e.page.count) * current);
        $('.slider__progress span').css("width", presentage + "%");
            
            $('h4').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.button-light').removeClass('animated fadeInUp');
            $('.button-light2').removeClass('animated fadeInUp');
            $('.button-dark').removeClass('animated fadeInUp');
            $('.button-dark2').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-light').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-light2').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-dark').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-dark2').addClass('animated fadeInUp');
        });
        
    // Slider-fade owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        mouseDrag: false,
        onInitialized: function (e) {
            var a = this.items().length;
            $("#snh-1").html("<span>01</span><span>" + "0" + a + "</span>");
            var presentage = Math.round((100 / a));
            $('.slider__progress span').css("width", presentage + "%");
        }
    });
    owl.on('changed.owl.carousel', function(e) {
        var item = e.item.index - 2;     // Position of the current item
        var b = --e.item.index,
            a = e.item.count;
        $("#snh-1").html("<span> " + "0" + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + "0" + a + "</span>");

        var current = e.page.index + 1;
        var presentage = Math.round((100 / e.page.count) * current);
        $('.slider__progress span').css("width", presentage + "%");
            
            $('h4').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.button-light').removeClass('animated fadeInUp');
            $('.button-light2').removeClass('animated fadeInUp');
            $('.button-dark').removeClass('animated fadeInUp');
            $('.button-dark2').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-light').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-light2').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-dark').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-dark2').addClass('animated fadeInUp');
        });
    });
    
    // Hero owlCarousel
    $('.hero .owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        mouseDrag:true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // Project owlCarousel
    $('.projects .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , navText: ["<span class='lnr ti-arrow-left'></span>","<span class='lnr ti-arrow-right'></span>"]
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Project Page owlCarousel
    $('.project-page .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: true
        , navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    
    // Services owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , navText: ["<span class='lnr ti-arrow-left'></span>","<span class='lnr ti-arrow-right'></span>"]
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Blog Grid owlCarousel
    $('.blog-home .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , navText: ["<span class='lnr ti-arrow-left'></span>","<span class='lnr ti-arrow-right'></span>"]
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , navText: ["<span class='lnr ti-arrow-left'></span>","<span class='lnr ti-arrow-right'></span>"]
        , autoplayHoverPause:true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin: 20,
        mouseDrag: true,
        autoplay: true,
        dots: false,
        nav: false, 
        navText: ["<span class='lnr ti-arrow-left'></span>","<span class='lnr ti-arrow-right'></span>"],
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });

    //  Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
    
    DURU.init();
    
})();