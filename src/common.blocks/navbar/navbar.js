// var navbar = $('.navbar');
// Stickyfill.add(navbar);

$(".navbar").scroll (function () {

 if ( $(this).scrollTop() > $('.navbar__item-main-menu').height()) {
    $(".navbar__item-open-btn").addClass("navbar__item--sticky");
    $(".navbar-ul").addClass("navbar-ul--forticky");
      console.log('chf,jnfk');
 	// $(".header-currency").addClass("header-currency--hide");
  	$('.header-sticky')[0].scrollIntoView(true);

}  
if ( $(this).scrollTop() == 0) {

  $(".navbar__item-open-btn").removeClass("navbar__item--sticky");
   $(".navbar-ul").removeClass("navbar-ul--forticky");
  	$('.header-currency')[0].scrollIntoView(true);

  	// $(".header-currency").removeClass("header-currency--hide");
 }

 });