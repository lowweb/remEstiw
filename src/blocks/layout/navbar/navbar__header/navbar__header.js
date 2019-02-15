//эффект на иконке при hover тк заголовок всегда 1
$('.navbar__header-link').hover(  
function(){
    $(this).find(".navbar__header-icon").css('opacity','1')
},
function(){
    $(this).find(".navbar__header-icon").css('opacity','0.6')

});



//open close menu
  $('.navbar__header-close-btn').on('click', function() {
  	openNavbar ();
    //ширина footer
    ///$('.footer').toggleClass('footer--fix313');
  });

function openNavbar () {
     $('.navbar__header-close-btn').toggleClass('btn-rotate180');
     $('.navbar__header-main-menu').toggleClass('navbar-el--hide');
     $('.navbar__header-copyright').toggleClass('navbar-el--hide');
     //показываем caption и  кнопку раскрытия субменю
     $('.navbar__item-caption').toggleClass('navbar-item-el--hide');
     $('.navbar__item-btn-submenu').toggleClass('navbar-item-el--hide');
     $('.navbar__item-icon').css('margin','0 10px 0 27px'); //отступ от иконки при раскрытом меню
    
 

     //сворачиваем все  submenu
     if ($('.navbar').hasClass('navbar--open'))//меню открыо
	 { 
        if ($('.navbar__submenu').hasClass('navbar__submenu--open')){
          $('.navbar__submenu--open').parent().find('.navbar__item-header').find('.navbar__item-btn-submenu').toggleClass('btn-rotate180');
        }
        
        //убрали sticky  и закрыли все  submenu
        $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
        $(".navbar-ul").removeClass("navbar-ul--understicky");
    	$('.navbar__submenu').removeClass('navbar__submenu--open');
        $('.navbar__header-roll')[0].scrollIntoView(true);

	 } 


	$('.navbar').toggleClass('navbar--open'); //после всех тк ориентир на класс
    //правим ширину для fix header после тк safari не корректно обрабатывает
    /// if ($('.header-sticky').hasClass('header-sticky--active'))
    /// {   
    ///     $('.header-sticky').toggleClass('header-sticky--fix78');
    ///     $('.header-sticky').toggleClass('header-sticky--fix313');
    /// }

}