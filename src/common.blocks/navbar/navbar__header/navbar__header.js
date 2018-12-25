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