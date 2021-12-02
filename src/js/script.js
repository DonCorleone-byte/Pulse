$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 300,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});