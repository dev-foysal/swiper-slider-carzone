
"use strict";
(function () {

    if ($(".home-half-slider").length > 0) {
    var j = new Swiper(".home-half-slider", {
        perloadImages: false,
        loop:true,
        grabCursor:true,
        centeredSlides: false,
        resistance:true,
        resistanceRatio: 0.6,
        speed: 2400,
        spaceBetween: 0,
        parallax: false,
        effect: "slide",
        mousewheel: true,
        pagination: {
            el: '.hero-slider-wrap_pagination',
            clickable:true,
        },
        navigation: {
            nextEl: '.hsc-next',
            prevEl: '.hsc-prev',
        },
            autoplay: {
                delay:2500,
               disalbeOnInteraction: true,
            },
    });
    j.on('slideChange', function () {
        var csli = j.realIndex + 1,
            curnum = $('.current'),
            curnumanm = $('.hs_counter .current');
        TweenMax.to(curnumanm, 0.2, {
            force3D: true,
            y: -10,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function () {
                TweenMax.to(curnumanm, 0.1, {
                    force3D: true,
                    y: 10
                });
                curnum.html('0' + csli);
            }
        });
        TweenMax.to(curnumanm, 0.2, {
            force3D: true,
            y: 0,
            delay: 0.3,
            opacity: 1,
            ease: Power2.easeOut
        });
    });
    j.on("slideChangeTransitionStart", function () {
        $(".hc_dec").addClass("start_anim");
        $(".slider-progress-bar").removeClass("act-slider");
    });
    j.on("slideChangeTransitionEnd", function () {
        $(".hc_dec").removeClass("start_anim");
        $(".slider-progress-bar").addClass("act-slider");
    });

    var imageSwiper = new Swiper(".hero-slider-img", {
        preloadImages: false,
        loop: true,
        resistance: true,
        parallax: true,
        effect: "slide",
        
    });
    j.controller.control = imageSwiper;
    imageSwiper.controller.control = j;
    var autobtn = $(".play-pause_slider");
    function autoEnd() {
        autobtn.removeClass("auto_actslider");
        j.autoplay.stop();
    }
    function autoStart() {
        autobtn.addClass("auto_actslider");
        j.autoplay.start();
    }
    autobtn.on("click", function () {
        if (autobtn.hasClass("auto_actslider")) autoEnd();
        else autoStart();
        return false;
    });
    setTimeout(function () {
        j.init();
        var totalSlides = j.slides.length - 2;
        $('.total').html('0' + totalSlides);
    }, 2000);
    }
}());

    