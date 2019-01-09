// для корректной работы gulp

//название запроса
$("#requestName").dxTextBox({
  inputAttr: {
   		 id: "requestName__id",
   		 class:"input-field__value"
   }
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Name is required"
        }, {
            type: "pattern",
            pattern: /^[^0-9]+$/,
            message: "Строка не может содержать цифры"
        }, {
            type: "stringLength",
            min: 2,
            message: "Длина строки не меньше 2 символов"
        }]
    });

//отправление назначеие
$("#departName").dxTextBox({
  inputAttr: {
       id: "departName__id",
       class:"input-field__value"
   }
})
$("#destName").dxTextBox({
  inputAttr: {
       id: "destName__id",
       class:"input-field__value"
   }
})
$("#conditionDest").dxSelectBox({
        dataSource: [ "FCA", "FAS", "FOB" ],
        placeholder: "",
        inputAttr: {
          id: "conditionDepart__id",
          class:"input-field__value"
         }
    });

$("#conditionDepart").dxSelectBox({
        dataSource: [ "FCA", "FAS", "FOB" ],
        placeholder: "",
        inputAttr: {
           id: "conditionDest__id",
           class:"input-field__value"
         }
});
//в какой валюте расчитать
$("#currency-calc").dxSelectBox({
        dataSource: [ "Доллары США (USD)", "Рубли (RUB)"],
        placeholder: "",
        inputAttr: {
           id: "currency-calc__id",
           class:"input-field__value"
         }
});


//свой знак ошибки на поле
$('.input-field__cont').change ( function () {
	console.log($(this));
	 if( $(this).hasClass('dx-invalid') ){
	 	$(this).parent().find('.input-field__label').addClass('input-field__label--err');
	 }
	 else {
	 	$(this).parent().find('.input-field__label').removeClass('input-field__label--err');
	 }
});


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
var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
$("#type-deal__radioGroup").dxRadioGroup({
        items: typeDealitem,
        value: typeDealitem[0]
    });

var volumeItem = ["До 5 м", "Свыше 5 м"];
$("#volume-cargo__radioGroup").dxRadioGroup({
        items: volumeItem,
        value: volumeItem[0]
    });

var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
$("#cargo-receiver__radioGroup").dxRadioGroup({
        items: cargoReceiverItem,
        value: cargoReceiverItem[0],
        layout: "horizontal"
    });
$('.timezone-popup-menu__title-btn').click(function(){
// console.log ($(',timezone-popup-menu__title-btn').hasClass('app-lnk-disable'));
// if (!$('.timezone-popup-menu__title-btn').hasClass('app-lnk-disable')) {
		$(this).parents(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$(this).toggleClass('btn-rotate180');
		$(this).toggleClass('app-lnk-disable');

	// }
});


$(".timezone-popup-menu__title-btn").click(function(e) {
  e.stopPropagation(); 
});

function timezonePopupClose(e) {
   // if (!$(e.target).closest("timezone-popup-menu").length) {
	if ($('.timezone-popup-menu__title').hasClass('timezone-popup-menu__title--active')){
		$(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$('.timezone-popup-menu__title-btn').toggleClass('btn-rotate180');
		$('.timezone-popup-menu__title-btn').toggleClass('app-lnk-disable');
	}
	// }
}


$('.user-popup-menu__title-btn').click(function(){ //button not global beacause js individual
	// $(this).toggleClass('user-popup-menu__title-btn--up');
	// if (!$('.user-popup-menu__title-btn').hasClass('app-lnk-disable')) {
		$(this).parents(".user-popup-menu").toggleClass('user-popup-menu--active');
		$(this).parents(".user-popup-menu").find('.user-popup-menu__add').toggleClass('user-popup-menu__add--active');
		$(this).toggleClass('btn-rotate180');
		$(this).toggleClass('app-lnk-disable');
	// }
});


$(".user-popup-menu__title-btn").click(function(e) {
  e.stopPropagation(); 
});


function userPopupClose() {
	if ($('.user-popup-menu__title-info-name').hasClass('app-lnk-disable')){
		$(".user-popup-menu--active").toggleClass('user-popup-menu--active');
		$('.user-popup-menu__add--active').toggleClass('user-popup-menu__add--active');
		$('.app-lnk-disable').toggleClass('btn-rotate180');
		$('.app-lnk-disable').toggleClass('app-lnk-disable');
	}
}
$('.progress-bar__step').hover (function(){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
},
function (){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
}
);


var progressPercentValue=10;
  
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runProgressBar() {

// 	while (progressPercentValue < 100) {
// 		$('.progress-bar__status').width((progressPercentValue + 5)+'%');
// 		// console.log('posle='+ Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100));
// 		if(progressPercentValue == 45){
// 			$('.progress-bar__second-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
// 			$('.progress-bar__second-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

// 		}

// 		if(progressPercentValue == 95){
// 			$('.progress-bar__third-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
// 			$('.progress-bar__third-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

// 		}
// 	await sleep(500);
// 	progressPercentValue+=5;	
// 	}

// }


$('.header-sticky__progress').click(function() {

	// progressPercentValue=Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100);
	console.log('do='+progressPercentValue);
	if (progressPercentValue < 100) {
		$('.progress-bar__status').width((progressPercentValue + 5)+'%');
		// console.log('posle='+ Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100));
		if(progressPercentValue == 45){
			$('.progress-bar__second-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
			$('.progress-bar__second-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

		}

		if(progressPercentValue == 95){
			$('.progress-bar__third-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
			$('.progress-bar__third-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

		}
	progressPercentValue+=5;	
	}


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
    //ширина footer
    $('.footer').toggleClass('footer--fix313');
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
    //правим ширину для fix header после тк safari не корректно обрабатывает
    if ($('.header-sticky').hasClass('header-sticky--active'))
    {   
        $('.header-sticky').toggleClass('header-sticky--fix78');
        $('.header-sticky').toggleClass('header-sticky--fix313');
    }

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
		$('.footer').toggleClass('footer--fix313');
	}
	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');
	$(this).find('.navbar__item-btn-submenu').toggleClass('btn-rotate180');

});

