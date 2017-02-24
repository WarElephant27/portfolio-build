$(document).ready( function() {

$('.menu, .close').click(
  function() {
    $('.menu-expanded').toggleClass('closed').toggleClass('open'),
    $('.wrapper').toggleClass('overflow-hidden');
  });

}); //end document.ready