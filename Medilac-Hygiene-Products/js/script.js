$(document).ready(function () {
    // Mobile Menu Toggle
    $('.mobile-menu').click(function () {
        $('.nav').toggleClass('active');
        $(this).find('i').toggleClass('fa-times');
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 80,
            },
            500,
            'linear'
        );

        // Close mobile menu when clicking a link
        if ($('.nav').hasClass('active')) {
            $('.nav').removeClass('active');
            $('.mobile-menu i').removeClass('fa-times');
        }
    });

    // Header Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    // Hero Slider
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    // Product Slider
    $('.product-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // About Image Slider
    $('.about-image-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    });

    // Upcoming products slider
    $('.upcoming-products-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.upcoming-products-slider').on('setPosition', function () {
        var maxHeight = 0;
        $('.upcoming-product-item').css('height', 'auto').each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $('.upcoming-product-item').height(maxHeight);
    });


    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // Animation on Scroll
    function animateOnScroll() {
        $('.animate__animated').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                var animation = $(this).data('animation');
                $(this).addClass(animation);
            }
        });
    }

    // Run on page load
    animateOnScroll();

    // Run on scroll
    $(window).scroll(function () {
        animateOnScroll();
    });

    // Form Submission
    $('#enquiryForm').submit(function (e) {
        e.preventDefault();
        // Get the form data and send it to mailto
        var formData = $(this).serialize();
        window.location.href = "mailto:ttenterprisetipu@gmail.com?" + formData;
        this.reset();
    });

    // Update current year in footer
    var currentYear = new Date().getFullYear();
    $('#currentYearFooter').text(currentYear);
});