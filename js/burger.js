window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__burger").addEventListener("click", function () {
      document.querySelector(".header__list").classList.toggle("open__menu_list");
    });
  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      document.querySelector(".header__nav").classList.toggle("open__menu_nav");
      document.querySelector(".header__burger").classList.toggle("header__burger_active");
    });
  $(".header__burger").on("click", function (event) {
    $(".header__list").slideToggle(400);
    event.preventDefault();
  });
});
