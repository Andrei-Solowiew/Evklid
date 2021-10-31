const swiper = new Swiper('.swiper', {
  loop: true,
  
  // If we need pagination

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  grabCursor: true,
});

document.querySelector(".swiper-pagination-bullet:first-child").tabIndex = 7;
document.querySelector(".swiper-pagination-bullet:nth-child(2)").tabIndex = 8;
document.querySelector(".swiper-pagination-bullet:last-child").tabIndex = 9;