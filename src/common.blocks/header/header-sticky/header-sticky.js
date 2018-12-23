
$(".main-content").scroll (function () {
console.log ('двигаем');
 if ( $(this).scrollTop() > $('.header-currency').height()) {

    $(".header-sticky").addClass("header-sticky--active");
     $(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
    // $(".navbar-ul").addClass("navbar-ul--understicky");

 	// $(".header-currency").addClass("header-currency--hide");
  	// $('.header-sticky')[0].scrollIntoView(true);

}  
if ( $(this).scrollTop() == 0) {

     $(".header-sticky").removeClass("header-sticky--active");
    // $(".navbar-ul").removeClass("navbar-ul--understicky");
  	// $('.header-currency')[0].scrollIntoView(true);

  	// $(".header-currency").removeClass("header-currency--hide");
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



