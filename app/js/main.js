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
  if(btn.hasClass('active')) {
    mobileMenu.addClass('show')
  } else {
    mobileMenu.removeClass('show')
  }
  if(window.innerWidth < 768) {
    const headerHeight = $('.header').height();
    const windowHeight = window.innerHeight;
    mobileMenu.css({
      top: headerHeight,
      height: windowHeight - headerHeight,
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
