$(function() {
    var mixer = mixitup('.products__inner--box');
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true


    });
    $('.product__slider-inner').slick({

        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true

    });
});