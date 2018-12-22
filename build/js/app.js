$(document).ready(function(){

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
$(document).ready(function() {
  $('.navbar__header-close-btn').on('click', function() {
     $('.navbar').toggleClass('navbar--open');
     $('.navbar__header-close-btn').toggleClass('btn-rotate180-vert');
     $('.navbar__header-main-menu').toggleClass('navbar-el--hide');
     $('.navbar__header-copyright').toggleClass('navbar-el--hide')
    console.log('dsada');
    // $('.main-content').toggleClass('main-content-wide');
  });
});
//открываем меню
$('.navbar__item-open-btn-link').click(function(){	
	//общий блок навигации расширили
	 $('.navbar').toggleClass('navbar--open');
	 //кнопка второго блока стала закрывающей
	
	function navbarHideShow () {
	 $('.navbar__item-open-btn-link').toggleClass('navbar__item-open-btn-link--open');
	 //добавили класс для второго блока
	 $('.navbar__item-open-btn').toggleClass('navbar__item-open-btn--open');	
	 //в главные пункты меню добавили заголовки
	  $('.navbar__item-caption').toggleClass('navbar__item-caption--open');




	//если сворачиваем меню при открытых субменю то автоматом их сворачиваем и так же возвращаем hover
	 if ($('.navbar__submenu').hasClass('navbar__submenu--open'))
	 {  
	 	//прячем открытые субменю
	 	$('.navbar__submenu').removeClass('navbar__submenu--open');
	 	//вернем для main блока
	 	$('.navbar__item').removeClass('navbar__item-whithsubmenu');
	 	//возвращяем кнопу открытия субменю 
	 	$('.navbar__item-btn-submenu').removeClass('navbar__item-btn-submenu--up');

	 	
	 }
	//если развернули меню показываем копирайт и главное во втором блоке ненужно прячем
	 if ($('.navbar').hasClass('navbar--open'))
	 {
	 	$('.navbar__item-main-menu-link-whide').css('display','flex');
	 	$('.navbar__item-main-menu-link').css('display','none');
	 	$('.navbar__item-copyright').css('display','flex');
	 	//для стики хедера
	 	// $(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
	 }
	 else {
	 	$('.navbar__item-main-menu-link-whide').css('display','none');
	 	$('.navbar__item-main-menu-link').css('display','flex');
	 	$('.navbar__item-copyright').css('display','none');
	 }

	}

	if ($('.navbar').hasClass('navbar--open'))
	{
		setTimeout(navbarHideShow,300);
		//для стики хедера
		if ($('.header-sticky').hasClass('header-sticky--stick'))
		{
		 $(".header-sticky").attr('style' , "width: calc(100% - 313px)" );
		}
	 	
	}
	else {
		navbarHideShow();
		//для стики хедера когда свернули
		if ($('.header-sticky').hasClass('header-sticky--stick'))
		{
	 		$(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
		}
	}

});


//склик по кнопке развернуть субменю в развернутом меню
$('.navbar__item-btn-submenu').click(function(){
	//перевернули кнопку вверх
	$(this).toggleClass('navbar__item-btn-submenu--up');
	//показали/закрыли субменю
	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');
	//признак на общем блоке
	$(this).parents(".navbar__item").toggleClass('navbar__item-whithsubmenu');

});

//если клик на иконку меню
$('.navbar__item-link-tosubmenu').click(function(){	

	//общий блок навигации расширили
	 $('.navbar').addClass('navbar--open');

	// function navbarHideShowSubMenu (element) {
		//кнопка второго блока стала закрывающей
		$('.navbar__item-open-btn-link').addClass('navbar__item-open-btn-link--open');	

		 //добавили класс для второго блока
		 $('.navbar__item-open-btn').addClass('navbar__item-open-btn--open');
		 //в главные пункты меню добавили заголовки
		 $('.navbar__item-caption').addClass('navbar__item-caption--open');	

		 //если развернули меню показываем копирайт и главное во втором блоке ненужно прячем
		 if ($('.navbar').hasClass('navbar--open'))
		 {
		 	$('.navbar__item-main-menu-link-whide').css('display','flex');
		 	$('.navbar__item-main-menu-link').css('display','none');
		 	$('.navbar__item-copyright').css('display','flex');
		 }
		 else {
		 	$('.navbar__item-main-menu-link-whide').css('display','none');
		 	$('.navbar__item-main-menu-link').css('display','flex');
		 	$('.navbar__item-copyright').css('display','none');
	 }	

	//переворачиваем кнопу открытия субменю вверх
	$(this).parents('.navbar__item-header').find('.navbar__item-btn-submenu').addClass('navbar__item-btn-submenu--up');
	//развернули само субменю
	$(this).parents(".navbar__item").find('.navbar__submenu').addClass('navbar__submenu--open');
	 // изменили hover main блока
	 $(this).parents(".navbar__item").addClass('navbar__item-whithsubmenu');
	// }

	// if ($('.navbar').hasClass('navbar--open'))
	// {
	// 	setTimeout(navbarHideShowSubMenu(this),300);
	// }
	// else {
	// 	navbarHideShowSubMenu(this);
	// }
});
});