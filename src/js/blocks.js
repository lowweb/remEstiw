// для корректной работы gulp

$(".summary-error__items").dxValidationSummary({
        validationGroup: "validateItems"
    });

//click checkbox element
  $('.checkbox').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$('#href-' + $(this).parent().parent().attr('id')).remove();
    	$(this).parent().parent().removeClass('field-set--error');
    }
    // console.log ($(this).parent().parent().attr('id'));
    
  });

  //click radiobox element
  $('.radiogroup').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$('#href-' + $(this).parent().parent().attr('id')).remove();
    	$(this).parent().parent().removeClass('field-set--error');
    }
  });

  //jump to link from erro href
	$(document).on("click", ".summary-error__href", function(e){
   	e.preventDefault();
		 // document.querySelector(this.hash).scrollIntoView(true);
		 console.log ($(this.hash).offset().top + '=' + $(this.hash).offset().left);
		 $(".view").animate({scrollTop: $(this.hash).offset().top+ 72 },"slow");	
		});

//check error
$('#submitButton').click(function(){ 

	$('.summary-error').hide();
	DevExpress.validationEngine.validateGroup("validateItems");

	  $('.summary-error__custom-items').empty();//очистили ошибки

	 var checkedFld=false;
	 var fieldSet = document.getElementsByClassName("field-set");

	for(var i=0; i < fieldSet.length; i++){


	  var elementChk = $(fieldSet[i]).find('.checkbox');

	  //check checkbox
	  for(var j=0; j < elementChk.length; j++){
	  	if ($(elementChk[j]).hasClass("dx-checkbox-checked")) { checkedFld=true;}
	  }
	  if (!checkedFld && $(fieldSet[i]).find('.checkbox').length>0) {
	  	$('.summary-error').show();
	  	$(fieldSet[i]).addClass('field-set--error');
	  	$('.summary-error__custom-items').append('<p><a id=href-'+$(fieldSet[i]).attr('id') +' class="summary-error__href" href="#' + $(fieldSet[i]).attr('id') + '">Необходимо выбрать один или несколько вариантов</a></p>');
	  }
	   if (checkedFld && $(fieldSet[i]).find('.checkbox').length>0) {
	  	$(fieldSet[i]).removeClass('field-set--error');
	  	checkedFld=false;
	  }
	  //end check checkbox

	  	  var elementRadioGrp = $(fieldSet[i]).find('.dx-radiobutton');

	  //check radiogroup
	  for(var j=0; j < elementRadioGrp.length; j++){
	  	if ($(elementRadioGrp[j]).hasClass("dx-radiobutton-checked")) { checkedFld=true;}
	  }
	  if (!checkedFld && $(fieldSet[i]).find('.dx-radiobutton').length>0) {
	  	$('.summary-error').show();
	  	$(fieldSet[i]).addClass('field-set--error');
	  	$('.summary-error__custom-items').append('<p><a id=href-'+$(fieldSet[i]).attr('id') +' class="summary-error__href" href="#' + $(fieldSet[i]).attr('id') + '">Необходимо выбрать вариант</a></p>');
	  }
	   if (checkedFld && $(fieldSet[i]).find('.dx-radiobutton').length>0) {
	  	$(fieldSet[i]).removeClass('field-set--error');
	  	checkedFld=false;
	  }
	  //end check radiogroup


	 }
});

//если при заполнении input-field срабаотала валидация 
//свой знак ошибки на поле
$('.input-field__cont').change ( function () {
	// console.log($(this));
	 if( $(this).hasClass('dx-invalid') ){
	 	$(this).parent().find('.input-field__label').addClass('input-field__label--err');
	 }
	 else {
	 	$(this).parent().find('.input-field__label').removeClass('input-field__label--err');
	 }
});


    $("#deliver-cargo__checkbox").dxCheckBox({
        text: "Доставить груз",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });

    $("#bay-cargo__checkbox").dxCheckBox({
        text: "Купить",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });

    $("#law-cargo__checkbox").dxCheckBox({
        text: "Юридическое сопровождение (ваши интересы в суде)",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });


//название запроса
$("#requestName").dxTextBox({
  inputAttr: {
   		 id: "requestName__id",
   		 class:"input-field__value"
   }
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }, {
            type: "pattern",
            pattern: /^[^0-9]+$/,
            message: "Строка не может содержать цифры"
        }, {
            type: "stringLength",
            min: 2,
            message: "Длина строки не меньше 2 символов"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });

//отправление назначеие
$("#departName").dxTextBox({
  inputAttr: {
       id: "departName__id",
       class:"input-field__value"
   }
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
$("#destName").dxTextBox({
  inputAttr: {
       id: "destName__id",
       class:"input-field__value"
   }
})






// $(".navbar").scroll (function () {

//  if ( $(this).scrollTop() > $('.navbar__header-roll').height()) {

//     $(".navbar__header-sticky").addClass("navbar__header-sticky--active");
//     $(".navbar-ul").addClass("navbar-ul--understicky");
//     //прокрутили соседа
//     $('.header-sticky')[0].scrollIntoView(true);

// }  
// if ( $(this).scrollTop() == 0) {

//     $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
//     $(".navbar-ul").removeClass("navbar-ul--understicky");
//     //прокрутили соседа
//     $('.header-currency')[0].scrollIntoView(true);
//  }

//  });
    $("#period__switch").dxSwitch({
        value: false
    });
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


var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
$("#type-deal__radioGroup").dxRadioGroup({
        items: typeDealitem,
        // value: typeDealitem[0]
     });
    //.dxValidator({
    //     validationRules: [{
    //         type: "required",
    //         message: "select one"
    //     }],
    //     validationGroup: "validateItems"
    // });

var volumeItem = ["До 5 м", "Свыше 5 м"];
$("#volume-cargo__radioGroup").dxRadioGroup({
        items: volumeItem,
        // value: volumeItem[0]
    });

var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
$("#cargo-receiver__radioGroup").dxRadioGroup({
        items: cargoReceiverItem,
        // value: cargoReceiverItem[0],
        layout: "horizontal"
    });
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
// $(".main-content").scroll (function () {
//   //move up
//  if ( $(this).scrollTop() > $('.header-currency').height()) {
//     $(".header-sticky").addClass("header-sticky--active");
//     //правим ширину для fix header
//     if ($('.navbar').hasClass('navbar--open'))
//             $('.header-sticky').addClass('header-sticky--fix313');
//     else 
//              $('.header-sticky').addClass('header-sticky--fix78'); 

//     ///$(".header-sticky").attr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
//     $(".view").addClass("view--understicky");
//     $('.header-sticky__progress').addClass('header-sticky__progress--slim');
//     //прокрутили скрол соседа если таковое возможно
//     $('.navbar__header-sticky')[0].scrollIntoView(true);

//   }  
//   //move down
//   if ( $(this).scrollTop() == 0) {
//     $(".header-sticky").removeClass("header-sticky--active");
//     //правим ширину для fix header
//     if ($('.navbar').hasClass('navbar--open'))
//             $('.header-sticky').removeClass('header-sticky--fix313');
//     else 
//              $('.header-sticky').removeClass('header-sticky--fix78');
//     ///$(".header-sticky").removeAttr('style' , "width: calc(100% - " + $('.navbar').width() + "px )" );
//     $(".view").removeClass("view--understicky");
//     $('.navbar__header-roll')[0].scrollIntoView(true);
//     $('.header-sticky__progress').removeClass('header-sticky__progress--slim');
//   }
//  });

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


//Выберите дату
var now = new Date();   
    $("#cargoBeginDate").dxDateBox({
        type: "date",
        placeholder: "Введите дату",
        inputAttr: {
           id: "cargoBeginDate__id",
           class:"input-field__value"
         }
    });
    $("#cargoExpDate").dxDateBox({
        type: "date",
        placeholder: "Введите дату",
        disabled: true,
        inputAttr: {
           id: "cargoExpDate__id",
           class:"input-field__value"
         }
    });
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
		///$('.footer').toggleClass('footer--fix313');
	}
	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');
	$(this).find('.navbar__item-btn-submenu').toggleClass('btn-rotate180');

});


$("#destButton").dxButton({
    text: "",
    onClick: function() {
        alert("The Button was clicked");
    }
});
$("#departButton").dxButton({
    text: "",
    onClick: function() {
        alert("The Button was clicked");
    }
});