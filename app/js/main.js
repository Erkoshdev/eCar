//header search
$('#searchForm').keyup(function (e) {
  if(this.value.length) {
    $('.search-result').addClass('show')
  } else {
    $('.search-result').removeClass('show')
  }
})

//toggle mobile menu
$('.menu-toggle').click(function () {
  const btn = $('.menu-toggle-burger');
  const mobileMenu = $('.header-bottom-row')
  btn.toggleClass('active');
  mobileMenu.toggleClass('show');
  $('.header').toggleClass('menu-open');
  if(window.innerWidth < 768) {
    $('body').toggleClass('scroll-locked')
  }
})

//toggle search on mobile
$('.toggle-search').click(function () {
  $('.search-container').addClass('show');
})
$('.close-search').click(function () {
  $('.search-container').removeClass('show');
  $('#searchForm').val('');
  $('.search-result').removeClass('show')
})

//footer slider
const brandsSwiper  = new Swiper('.brands-slider', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.brands-slide-next',
    prevEl: '.brands-slide-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 'auto',
      spaceBetween: 90,
      centeredSlides: false,
    },
  }
});

//mask
$(document).ready(function() {
  $('.phone-mask').mask('+7(000)000-00-00');
})

//change product card img
$('.img-select-item').click(function (e) {
  e.preventDefault();
  const wrapper = $(this).closest('.img-select-list');
  wrapper.find($('.img-select-item')).removeClass('active');
  $(this).addClass('active');
})
