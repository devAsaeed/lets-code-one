$(document).ready(function () {
    /* nav button click */
    var clicked = false;
    var $header = $("header");
    $header.find(".nav-btn").click(function () {
        if (!clicked) {
            clicked = true;
            $(this).parent().toggleClass('active');
            setTimeout(function () {
                clicked = false;
            }, 1500);
        }
    });

    // when clicked on any place on document will close the nav on mobile screen
    $(document).on("click", function (e) {
        var clickOver = $(e.target);
        if (!clickOver.closest('header').length && $("nav").hasClass("active")) {
            $('nav').removeClass('active');
        }
    });
    /* when window scroll and change nav color */
    var $mainSection = $(".main-section");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $mainSection.height() - 100) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

    // make slider >> menu slider
    function menuSlider() {

        var $sliderContainer = $('.menu-slider'),
            $slider = $sliderContainer.find('.slider'),
            $sliderBanner = $sliderContainer.find('.slider-banner'),
            $sliderItem = $sliderBanner.find('.slider-item'),
            itemsLength = $sliderItem.length,
            $nextBtn = $sliderContainer.find('.arrow.next'),
            $prevBtn = $sliderContainer.find('.arrow.prev');

        var slideToShow = 3;
        var activeSlider = slideToShow;

        function responsiveSlides() {
            activeSlider -= slideToShow;
            if ($(window).width() <= 991 && $(window).width() > 550) {
                slideToShow = 2;
            } else if ($(window).width() <= 550) {
                slideToShow = 1;
            } else {
                slideToShow = 3;
            }
            activeSlider += slideToShow;
        }
        responsiveSlides();

        $sliderItem.outerWidth(parseInt($slider.width() / slideToShow));

        var itemWidth;
        var itemsWidth;

        function fixWidth() {
            itemWidth = $('.menu-slider .slider-item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBanner.width(itemsWidth);
        }
        fixWidth();

        function leftCalc() {
            return itemWidth * itemMove;
        }

        $(window).resize(function () {

            responsiveSlides();
            $sliderItem.outerWidth(parseInt($slider.width() / slideToShow));
            fixWidth();
            leftCalc();
            $sliderBanner.css('left', -leftCalc());
        });

        var left = 0;
        var clicked = false;
        var itemMove = 0;

        function checkStatus() {
            if (activeSlider == itemsLength) {
                $nextBtn.addClass('disabled');
            } else {
                $nextBtn.removeClass('disabled');
            }

            if (activeSlider == slideToShow) {
                $prevBtn.addClass('disabled');
            } else {
                $prevBtn.removeClass('disabled');
            }
        }
        checkStatus();

        $nextBtn.click(function () {
            if (!clicked) {
                if (activeSlider != itemsLength) {
                    clicked = true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlider++;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

        $prevBtn.click(function () {
            if (!clicked) {
                if (activeSlider > slideToShow) {
                    clicked = true;
                    itemMove--;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlider--;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

    }
    menuSlider();

    //chief slider 
    function chiefSlider() {

        var $sliderContainer = $('.chief-slider'),
            $slider = $sliderContainer.find('.slider'),
            $sliderBanner = $sliderContainer.find('.slider-banner'),
            $sliderItem = $sliderBanner.find('.slider-item'),
            itemsLength = $sliderItem.length,
            $nextBtn = $sliderContainer.find('.arrow.next'),
            $prevBtn = $sliderContainer.find('.arrow.prev');

        var slideToShow = 1;
        var activeSlider = slideToShow;
        /*function responsiveSlides() {
            activeSlider -= slideToShow;
            if($(window).width() <= 991 && $(window).width() > 550 ) {
                slideToShow = 2;
            } else if($(window).width() <= 550) {
                slideToShow = 1;
            } else {
                slideToShow = 3;
            }
            activeSlider += slideToShow;
        }responsiveSlides();
        */
        $sliderItem.outerWidth(parseInt($slider.width() / slideToShow));

        var itemWidth;
        var itemsWidth;

        function fixWidth() {
            itemWidth = $('.chief-slider .slider-item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBanner.width(itemsWidth);
        }
        fixWidth();

        function leftCalc() {
            return itemWidth * itemMove;
        }

        $(window).resize(function () {


            $sliderItem.outerWidth(parseInt($slider.width() / slideToShow));
            fixWidth();

            $sliderBanner.css('left', -leftCalc());
        });

        var left = 0;
        var clicked = false;
        var itemMove = 0;

        function checkStatus() {
            if (activeSlider == itemsLength) {
                $nextBtn.addClass('disabled');
            } else {
                $nextBtn.removeClass('disabled');
            }

            if (activeSlider == slideToShow) {
                $prevBtn.addClass('disabled');
            } else {
                $prevBtn.removeClass('disabled');
            }
        }
        checkStatus();

        $nextBtn.click(function () {
            if (!clicked) {
                if (activeSlider != itemsLength) {
                    clicked = true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlider++;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

        $prevBtn.click(function () {
            if (!clicked) {
                if (activeSlider > slideToShow) {
                    clicked = true;
                    itemMove--;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlider--;
                    setTimeout(function () {
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        });

    }
    chiefSlider();

});
