

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
$('.timezone-popup-menu__title-btn').click(function(){
	// console.log ('fsdf');
	// $(this).toggleClass('timezone-popup-menu__title-btn--up');
	$(this).parents(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
	$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
	// $(this).toggleClass('btn-rotate180');
});
$('.user-popup-menu__title-btn').click(function(){
	// $(this).toggleClass('user-popup-menu__title-btn--up');
	$(this).parents(".user-popup-menu").toggleClass('user-popup-menu--active');
	$(this).parents(".user-popup-menu").find('.user-popup-menu__add').toggleClass('user-popup-menu__add--active');
	$(this).toggleClass('btn-rotate180');
});


//пример анимации
$('.user-popup-menu__title-pic').click(function(){
	$(this).find('.user-popup-menu__title-pic-msg').toggleClass('user-popup-menu__title-pic-msg--active');
});
//скролим правую часть
$(".main-content").scroll (function () {
  //move up
 if ( $(this).scrollTop() > $('.header-currency').height()) {
    $(".header-sticky").addClass("header-sticky--active");
    //правим ширину для fix header
    if ($('.navbar').hasClass('navbar--open'))
            $('.header-sticky').addClass('header-sticky--fix313');
    else 
             $('.header-sticky').addClass('header-sticky--fix78'); 

    ///$(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
    $(".view").addClass("view--understicky");
    $('.header-sticky__progress').addClass('header-sticky__progress--slim');
    //прокрутили скрол соседа если таковое возможно
    $('.navbar__header-sticky')[0].scrollIntoView(true);

  }  
  //move down
  if ( $(this).scrollTop() == 0) {
    $(".header-sticky").removeClass("header-sticky--active");
    //правим ширину для fix header
    if ($('.navbar').hasClass('navbar--open'))
            $('.header-sticky').removeClass('header-sticky--fix313');
    else 
             $('.header-sticky').removeClass('header-sticky--fix78');
    ///$(".header-sticky").removeAttr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
    $(".view").removeClass("view--understicky");
    $('.navbar__header-roll')[0].scrollIntoView(true);
    $('.header-sticky__progress').removeClass('header-sticky__progress--slim');
  }
 });

//open close menu
  $('.navbar__header-close-btn').on('click', function() {
  	openNavbar ();
  });

function openNavbar () {
     $('.navbar__header-close-btn').toggleClass('btn-rotate180');
     $('.navbar__header-main-menu').toggleClass('navbar-el--hide');
     $('.navbar__header-copyright').toggleClass('navbar-el--hide');
     //показываем caption и  кнопку раскрытия субменю
     $('.navbar__item-caption').toggleClass('navbar-item-el--hide');
     $('.navbar__item-btn-submenu').toggleClass('navbar-item-el--hide');
     $('.navbar__item-icon').css('margin','0 10px 0 27px'); //отступ от иконки при раскрытом меню
    

        //правим ширину для fix header
    if ($('.header-sticky').hasClass('header-sticky--active'))
    {   
        $('.header-sticky').toggleClass('header-sticky--fix78');
        $('.header-sticky').toggleClass('header-sticky--fix313');
    } 

     //сворачиваем все  submenu
     if ($('.navbar').hasClass('navbar--open'))//меню открыо
	 { 
        //правим ширину для fix header
        if ($('.header-sticky').hasClass('header-sticky--active'))
        {   
            // $('.header-sticky').toggleClass('header-sticky--fix78');
            // $('.header-sticky').toggleClass('header-sticky--fix313');
           /// $(".header-sticky").removeAttr('style' , "width: calc(100% - 313px)" );
            ///$(".header-sticky").attr('style' , "width: calc(100% - 78px)" );
        }
        else {
          /// $(".header-sticky").removeAttr('style' , "width: calc(100% - 313px)" ); 
           //$('.header-sticky').toggleClass('header-sticky--fix313');
        }    

        //убрали sticky  и закрыли все  submenu
        $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
        $(".navbar-ul").removeClass("navbar-ul--understicky");
    	 	$('.navbar__submenu').removeClass('navbar__submenu--open');
        $('.navbar__header-roll')[0].scrollIntoView(true);

	 } 
     else { //меню закрыто
        postHeaderStickyResize=true;
        //правим ширину для fix элемента
        if ($('.header-sticky').hasClass('header-sticky--active'))
        {
             // $('.header-sticky').toggleClass('header-sticky--fix313');
           /// $(".header-sticky").removeAttr('style' , "width: calc(100% - 78px)" );
           /// $(".header -sticky").attr('style' , "width: calc(100% - 313px)" );
        }
        else {
             // $('.header-sticky').toggleClass('header-sticky--fix313');
          /// $(".header-sticky").removeAttr('style' , "width: calc(100% - 78px)" ); 
        } 
     }


	 $('.navbar').toggleClass('navbar--open'); //после всех тк ориентир на класс
}
//эффект на иконке при hover тк заголовок всегда 1
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
	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');
	$(this).find('.navbar__item-btn-submenu').toggleClass('btn-rotate180');

});

