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
