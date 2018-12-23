 // var navbar = $('.navbar');
// Stickyfill.add(navbar);

$(".navbar").scroll (function () {

 if ( $(this).scrollTop() > $('.navbar__header-roll').height()) {

    $(".navbar__header-sticky").addClass("navbar__header-sticky--active");
    $(".navbar-ul").addClass("navbar-ul--understicky");

 	// $(".header-currency").addClass("header-currency--hide");
  	// $('.header-sticky')[0].scrollIntoView(true);

}  
if ( $(this).scrollTop() == 0) {

    $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
    $(".navbar-ul").removeClass("navbar-ul--understicky");
  	// $('.header-currency')[0].scrollIntoView(true);

  	// $(".header-currency").removeClass("header-currency--hide");
 }

 });