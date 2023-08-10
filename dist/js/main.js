//header search
$('#searchForm').keyup(function (e) {
  if(this.value.length) {
    $('.search-result').addClass('show')
  } else {
    $('.search-result').removeClass('show')
  }
})

