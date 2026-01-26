$('.menu-toggle').click(function() {

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

})

$('li').click(function() {
  $('ul').toggleClass('opening');
  $('.menu-toggle').toggleClass('open');
  
})


