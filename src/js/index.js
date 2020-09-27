
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

document.documentElement.addEventListener('click', function (event) {

});

