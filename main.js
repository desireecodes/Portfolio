var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


$(document).ready(function () {
$('nav a[href*="#"]').on('click', function () {
   $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top - 100
   },  2000);
});

$('#up').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});

AOS.init({
    easing: 'ease',
    duration: 1800
});