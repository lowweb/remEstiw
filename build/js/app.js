$(document).ready(function(){


$(".navbar").scroll (function () {

 if ( $(this).scrollTop() > $('.navbar__header-roll').height()) {

    $(".navbar__header-sticky").addClass("navbar__header-sticky--active");
    $(".navbar-ul").addClass("navbar-ul--understicky");
    //прокрутили соседа
    $('.header-sticky')[0].scrollIntoView(true);

}  
if ( $(this).scrollTop() == 0) {

    $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
    $(".navbar-ul").removeClass("navbar-ul--understicky");
    //прокрутили соседа
    $('.header-currency')[0].scrollIntoView(true);
 }

 });
$('.user-popup-menu__title-btn').click(function(){
	$(this).toggleClass('user-popup-menu__title-btn--up');
	$(this).parents(".user-popup-menu").toggleClass('user-popup-menu--active');
	$(this).parents(".user-popup-menu").find('.user-popup-menu__add').toggleClass('user-popup-menu__add--active');

});

$('.user-popup-menu__title-pic').click(function(){
	$(this).find('.user-popup-menu__title-pic-msg').toggleClass('user-popup-menu__title-pic-msg--active');
});

$(".main-content").scroll (function () {

 if ( $(this).scrollTop() > $('.header-currency').height()) {
console.log ('up');
    $(".header-sticky").addClass("header-sticky--active");
    $(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
    $(".view").addClass("view--understicky");
    //прокрутили соседа
    $('.navbar__header-sticky')[0].scrollIntoView(true);

}  
if ( $(this).scrollTop() == 0) {
console.log ('top 0');
    $(".header-sticky").removeClass("header-sticky--active");
    $(".header-sticky").removeAttr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
    $(".view").removeClass("view--understicky");
    $('.navbar__header-roll')[0].scrollIntoView(true);
 }

 });




// var header = $('.header-sticky');
// Stickyfill.add(header);


// $(".main-content").scroll (function () {

// // console.log (window.innerHeight, $('.navbar-ul').prop('scrollHeight'));
// //надо обьединить блоки с хедерами чтоб работало


// // if (window.innerHeight < $('.navbar-ul').prop('scrollHeight') - 44 && $('.navbar__submenu').hasClass('navbar__submenu--open')) {
// 	 console.log ('двигаем');
// // 	 // console.log ('obratno');
// 	if ( $(this).scrollTop() > $('.header-currency').height() /*&& $('.navbar__submenu').hasClass('navbar__submenu--open')*/) {
	  
// 	   // $('.navbar__item-open-btn')[0].scrollIntoView(true);
// 	   $(".header-sticky").addClass("header-sticky--stick");
	   
// 	   $(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );

// 	   $(".view").attr('style' , "padding-top: 218px;" );
// 	   // $('.navbar__item-main-menu').addClass('navbar__item-main-menu--hide');
// 	}  

// if ( $(this).scrollTop() == 0) {
// 	console.log ('v nol');
// 	//заскролили меню в 0
// 	// $('.navbar__item-main-menu')[0].scrollIntoView(true);
// 	//когда ушли в ноль надо убрать класс вызванный другой функцией
// 	$(".navbar__item-open-btn").removeClass("navbar__item--sticky");

// 	//убрали липки промежуточный  header
// 	$(".header-sticky").removeClass("header-sticky--stick");
// 	//вернули относительную ширину
// 	$(".header-sticky").attr('style','width: 100%');
// 	//
	

// 	$(".view").removeAttr('style' , "padding-top: 218px;" );
//     // $('.navbar__item-main-menu').removeClass('navbar__item-main-menu--hide');
//  }

// }

// else {
//   console.log ('не двигаем');
//   $(".header").addClass("header--stick");
//   $(".view").attr('style' , "padding-top: 262px;" );
//   $(".header--stick").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );


// if ( $(this).scrollTop() == 0) {

// 	console.log ('v nol2');
// 		$(".header--stick").attr('style' , "width: 100%" );
// 	$(".header").removeClass("header--stick");

// 	$(".view").removeAttr('style' , "padding-top: 262px;" );
// }
// }


// }); //scroll

// $('.navbar__item-open-btn').Stickyfill();

 // var stickybit = stickybits('.header-sticky');

//отлавливаем изменение высоты в контене
 // $(".content").scroll (function () {
        
 //  var height = $('.header-currency').height();

 //  if ($(this).scrollTop() >= height) {
    

 //    // $('html,body').animate({
 //    //         scrollTop: $(".navbar__item-open-btn").offset().top},
 //    //         'slow');

 //    // $(window).scrollTop($('.navbar__item-open-btn').offset().top);
 //    // $('.navbar__item-open-btn')[0].scrollIntoView(true);
    
 //    $(".navbar__item-main-menu").addClass("navbar__item-main-menu--hide");
 //    // $(".header-currency").addClass("header-currency--hide");
 //   // // $(".navbar").scrollTop(39);
 //  	$(".header-sticky__progress").addClass("to-min");
 //    //// $(".header-sticky").addClass(".header-sticky--top");
 //  }
 //  else {
 //    $(".navbar__item-main-menu").removeClass("navbar__item-main-menu--hide");
 //    // $(".header-currency").removeClass("header-currency--hide");
 //    // // $(".navbar").scrollTop(0);
	//  $(".header-sticky__progress").removeClass("to-min");


 //  }
 // });




$(document).ready(function() {
  $('.navbar__header-close-btn').on('click', function() {
//пересчитат длину стики хедера при открытии и закрытии
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
        $(".header-sticky").removeAttr('style' , "width: calc(100% - 78px)" );
	 } 
     else {
        $(".header-sticky").attr('style' , "width: calc(100% - 313px)" );
     }


	 $('.navbar').toggleClass('navbar--open');
}
$('.navbar__item-header').hover(
function(){
	$(this).find(".navbar__item-icon").css('opacity','1')
},
function(){
	$(this).find(".navbar__item-icon").css('opacity','0.6')

});

$('.navbar__item-header').click(function(){

	if (!$('.navbar').hasClass('navbar--open')){
		openNavbar ();
	}
	// console.log ($(this).parents(".navbar__item").find('.navbar__submenu'));
	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');

});



// //открываем меню
// $('.navbar__item-open-btn-link').click(function(){	
// 	//общий блок навигации расширили
// 	 $('.navbar').toggleClass('navbar--open');
// 	 //кнопка второго блока стала закрывающей
	
// 	function navbarHideShow () {
// 	 $('.navbar__item-open-btn-link').toggleClass('navbar__item-open-btn-link--open');
// 	 //добавили класс для второго блока
// 	 $('.navbar__item-open-btn').toggleClass('navbar__item-open-btn--open');	
// 	 //в главные пункты меню добавили заголовки
// 	  $('.navbar__item-caption').toggleClass('navbar__item-caption--open');




// 	//если сворачиваем меню при открытых субменю то автоматом их сворачиваем и так же возвращаем hover
// 	 if ($('.navbar__submenu').hasClass('navbar__submenu--open'))
// 	 {  
// 	 	//прячем открытые субменю
// 	 	$('.navbar__submenu').removeClass('navbar__submenu--open');
// 	 	//вернем для main блока
// 	 	$('.navbar__item').removeClass('navbar__item-whithsubmenu');
// 	 	//возвращяем кнопу открытия субменю 
// 	 	$('.navbar__item-btn-submenu').removeClass('navbar__item-btn-submenu--up');

	 	
// 	 }
// 	//если развернули меню показываем копирайт и главное во втором блоке ненужно прячем
// 	 if ($('.navbar').hasClass('navbar--open'))
// 	 {
// 	 	$('.navbar__item-main-menu-link-whide').css('display','flex');
// 	 	$('.navbar__item-main-menu-link').css('display','none');
// 	 	$('.navbar__item-copyright').css('display','flex');
// 	 	//для стики хедера
// 	 	// $(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
// 	 }
// 	 else {
// 	 	$('.navbar__item-main-menu-link-whide').css('display','none');
// 	 	$('.navbar__item-main-menu-link').css('display','flex');
// 	 	$('.navbar__item-copyright').css('display','none');
// 	 }

// 	}

// 	if ($('.navbar').hasClass('navbar--open'))
// 	{
// 		setTimeout(navbarHideShow,300);
// 		//для стики хедера
// 		if ($('.header-sticky').hasClass('header-sticky--stick'))
// 		{
// 		 $(".header-sticky").attr('style' , "width: calc(100% - 313px)" );
// 		}
	 	
// 	}
// 	else {
// 		navbarHideShow();
// 		//для стики хедера когда свернули
// 		if ($('.header-sticky').hasClass('header-sticky--stick'))
// 		{
// 	 		$(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
// 		}
// 	}

// });


// //склик по кнопке развернуть субменю в развернутом меню
// $('.navbar__item-btn-submenu').click(function(){
// 	//перевернули кнопку вверх
// 	$(this).toggleClass('navbar__item-btn-submenu--up');
// 	//показали/закрыли субменю
// 	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');
// 	//признак на общем блоке
// 	$(this).parents(".navbar__item").toggleClass('navbar__item-whithsubmenu');

// });

// //если клик на иконку меню
// $('.navbar__item-link-tosubmenu').click(function(){	

// 	//общий блок навигации расширили
// 	 $('.navbar').addClass('navbar--open');

// 	// function navbarHideShowSubMenu (element) {
// 		//кнопка второго блока стала закрывающей
// 		$('.navbar__item-open-btn-link').addClass('navbar__item-open-btn-link--open');	

// 		 //добавили класс для второго блока
// 		 $('.navbar__item-open-btn').addClass('navbar__item-open-btn--open');
// 		 //в главные пункты меню добавили заголовки
// 		 $('.navbar__item-caption').addClass('navbar__item-caption--open');	

// 		 //если развернули меню показываем копирайт и главное во втором блоке ненужно прячем
// 		 if ($('.navbar').hasClass('navbar--open'))
// 		 {
// 		 	$('.navbar__item-main-menu-link-whide').css('display','flex');
// 		 	$('.navbar__item-main-menu-link').css('display','none');
// 		 	$('.navbar__item-copyright').css('display','flex');
// 		 }
// 		 else {
// 		 	$('.navbar__item-main-menu-link-whide').css('display','none');
// 		 	$('.navbar__item-main-menu-link').css('display','flex');
// 		 	$('.navbar__item-copyright').css('display','none');
// 	 }	

// 	//переворачиваем кнопу открытия субменю вверх
// 	$(this).parents('.navbar__item-header').find('.navbar__item-btn-submenu').addClass('navbar__item-btn-submenu--up');
// 	//развернули само субменю
// 	$(this).parents(".navbar__item").find('.navbar__submenu').addClass('navbar__submenu--open');
// 	 // изменили hover main блока
// 	 $(this).parents(".navbar__item").addClass('navbar__item-whithsubmenu');
// 	// }

// });
});