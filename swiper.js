
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 15, // px
  grabCursor: true,

  // speed: 850,

  // autoplay: {
  //     delay: 1000,
  // },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      // Window Size >= 0px
      0:{
          slidesPerView: 1
      }, 

      // Window Size >= 768
      768:{
          slidesPerView: 2
      },
      
      1024:{
        slidesPerView: 3
      }
  }
});