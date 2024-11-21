//burger menu
const burgerButton = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active');
  nav.classList.toggle('active');
});
 