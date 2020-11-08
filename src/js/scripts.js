document.addEventListener('DOMContentLoaded', function (event) {
    const userIcon = document.querySelector('.user-header__icon');
    const userMenu = document.querySelector('.user-header__menu');
    const burgerMenuBtn = document.querySelector('#js-burger-menu');
    const navigationMenu = document.querySelector('#js-menu__body');

    //меню профиля
    userIcon.addEventListener('click', function (event) {
        userMenu.classList.toggle('_active');
    });

    //бургер кнопка
    burgerMenuBtn.addEventListener('click', function (event) {
        event.preventDefault();

        this.classList.toggle('_open');
        navigationMenu.classList.toggle('_open');
    });

    //плавный скролл Nav
    //скролл по навигационным ссылкам
    const navItems = document.querySelectorAll('.menu__link');

    navItems.forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            const elementClass = '.' + item.dataset.scroll;
            const scrolledElement = document.querySelector(elementClass);

            const y = scrolledElement.getBoundingClientRect().top + window.scrollY - 75;

            window.scroll({
                top: y,
                behavior: 'smooth'
            });

            // scrolledElement.scrollIntoView({behavior: "smooth"});
        })
    })

});




