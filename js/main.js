/*const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween:70,
    centeredSlides:true,
    slideToClickedSlide:true,
    toggle:true,
  });*/

  const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4
    }
  }
});