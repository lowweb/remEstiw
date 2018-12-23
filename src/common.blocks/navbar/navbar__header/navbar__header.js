$(document).ready(function() {
  $('.navbar__header-close-btn').on('click', function() {

  	openNavbar ();
    // console.log('dsada');
    // $('.main-content').toggleClass('main-content-wide');
  });
});

function openNavbar () {
     $('.navbar__header-close-btn').toggleClass('btn-rotate180-vert');
     $('.navbar__header-main-menu').toggleClass('navbar-el--hide');
     $('.navbar__header-copyright').toggleClass('navbar-el--hide')
    
     //показываем caption и  кнопку раскрытия субменю
     $('.navbar__item-caption').toggleClass('navbar-item-el--hide');
     $('.navbar__item-btn-submenu').toggleClass('navbar-item-el--hide');
     $('.navbar__item-icon').css('margin','0 10px 0 27px')
    
     //сворачиваем все  submenu
     if ($('.navbar').hasClass('navbar--open'))
	 { 
    //убрали sticky  и закрыли все  submenu
    $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
    $(".navbar-ul").removeClass("navbar-ul--understicky");
	 	$('.navbar__submenu').removeClass('navbar__submenu--open');
    $('.navbar__header-roll')[0].scrollIntoView(true);
	 } 


	 $('.navbar').toggleClass('navbar--open');
}