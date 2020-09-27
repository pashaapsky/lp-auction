$(document).ready(function () {

    const mainSlider = $('.main-slider__body');   //слайдер
    const slickArrowNext = $('#js-arrow_next');   //стрелки слайдера
    const slickArrowPrev = $('#js-arrow_prev');   //стрелки слайдера

    //инициализация слайдера
    mainSlider.slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 600,
        easing: 'ease',
        initialSlide: 0,
        responsive: [
            // {
            //     breakpoint: 1200,
            //     settings: {
            //         arrows: false,
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            // {
            //     breakpoint: 768,
            //     settings: {
            //         arrows: false,
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //     }
            // },
        ]});

    slickArrowNext.on('click', function (event) {
        event.preventDefault();

        mainSlider.slick('slickNext')
    });

    slickArrowPrev.on('click', function (event) {
        event.preventDefault();

        mainSlider.slick('slickPrev');
    });
});