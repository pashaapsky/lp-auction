$(document).ready(function () {

    const mainSlider = $('.main-slider__body');   //слайдер
    const mainSlickArrowNext = $('#js-main-arrow_next');   //стрелки слайдера
    const mainSlickArrowPrev = $('#js-main-arrow_prev');   //стрелки слайдера

    const lotsSlider = $('.slider-lots__body');   //слайдер
    const lotsSlickArrowNext = $('#js-lots-arrow_next');   //стрелки слайдера
    const lotsSlickArrowPrev = $('#js-lots-arrow_prev');   //стрелки слайдера

    const quotesSlider = $('.slider-quotes__body');   //слайдер
    const quotesSliderArrowNext = $('#js-quotes-slider-arrow-next');   //стрелки слайдера
    // const quotesSliderArrowPrev = $('#js-lots-arrow_prev');   //стрелки слайдера

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

    mainSlickArrowNext.on('click', function (event) {
        event.preventDefault();

        mainSlider.slick('slickNext')
    });

    mainSlickArrowPrev.on('click', function (event) {
        event.preventDefault();

        mainSlider.slick('slickPrev');
    });

    lotsSlider.slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 800,
        easing: 'ease',
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 567,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]});

    lotsSlickArrowNext.on('click', function (event) {
        event.preventDefault();

        lotsSlider.slick('slickNext')
    });

    lotsSlickArrowPrev.on('click', function (event) {
        event.preventDefault();

        lotsSlider.slick('slickPrev');
    });

    quotesSlider.slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        speed: 1000,
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

    quotesSliderArrowNext.on('click', function (event) {
        event.preventDefault();

        quotesSlider.slick('slickNext')
    });

});