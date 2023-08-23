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
  if(window.innerWidth > 767 && window.innerWidth < 1200) {
    const btnLeftPosition = $('.menu-toggle').offset().left
    console.log(btnLeftPosition)
    mobileMenu.css({
      'left': `${btnLeftPosition - 315}px`
    })
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
      slidesPerView: 3,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    1300: {
      slidesPerView: 5,
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
$('.img-select-link').click(function () {
  let attr = $(this).attr('data-img')
  let img = $(this).closest('.product-card-img').find('img')
  img.attr('src', attr)
})


//toggle filter brand list
$('.toggle-filter-brand').click(function () {
  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).html('скрыть')
    $(this).prev('.filter-brand-lg').slideDown(400)
  } else {
    $(this).html('посмотреть все')
    $(this).prev('.filter-brand-lg').slideUp(400)
  }

})
