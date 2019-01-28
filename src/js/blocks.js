// для корректной работы gulp

$(".summary-error__items").dxValidationSummary({
        validationGroup: "validateItems"
    });

//click checkbox element
$(document.body).on('click', '.checkbox' ,function(){
  // $('.checkbox').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$('#href-' + $(this).parent().parent().attr('id')).remove();
    	$(this).parent().parent().removeClass('field-set--error');
    }
    // console.log ($(this).parent().parent().attr('id'));
    
  });

  //click radiobox element
  $(document.body).on('click', '.radiogroup' ,function(){
  // $('.radiogroup').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$('#href-' + $(this).parent().parent().attr('id')).remove();
    	$(this).parent().parent().removeClass('field-set--error');
    }
  });

  //jump to link from erro href
	$(document).on("click", ".summary-error__href", function(e){
   	e.preventDefault();
		 document.querySelector(this.hash).scrollIntoView(true);
		 $(this.hash).fadeOut(350).fadeIn(350); 
		 // console.log ($('.view-container').offset().top + '=' + $(this.hash).offset().top);
		 // console.log (Math.abs($('.view-container').offset().top) + $('.header').height());
		 $(".view").animate({scrollTop: Math.abs($('.view-container').offset().top) + $('.header').height() - 50  },"slow");	
		});

//check error
$(document.body).on('click', '#footer__button-next' ,function(){
	$('.summary-error').hide();
	DevExpress.validationEngine.validateGroup("validateItems");
	$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
	   

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

$("#danger-cargo__checkbox").dxCheckBox({
        text: "Опасный груз",
        value: false,
    });
$("#oversize-cargo__checkbox").dxCheckBox({
        text: "Негабаритный",
        value: false,
    });
$("#humane-cargo__checkbox").dxCheckBox({
        text: "Гуманитарная помощь",
        value: false,
    });
$("#home-cargo__checkbox").dxCheckBox({
        text: "Домашние вещи",
        value: false,
    });
$("#used-cargo__checkbox").dxCheckBox({
        text: "Бывший в употреблении",
        value: false,
    });
        
// $('#footer__button-save').click(function () {
// 	
// });

$('#footer__button-save').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
					$('.footer__saved-msg').show();                
				}
            });

$('#footer__button-next').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

				}
            });

    //button init
    $('.modal-city__footer-ok-btn').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });

    $('.modal-city__footer-close-btn').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });
    

$("#departButton").dxButton({
    text: "",
    onClick: function() {
        // $('#modal-city').show();
//init modal			
    $(".modal").dxPopup({
        visible: true,
        height:"auto",
        width: 500,
        titleTemplate: function() {
         	return $("<div class='modal-city__title'><div class='modal-city__title-cap'>Выберите пункт отправления</div><div class='modal__btn-close'>&times;</div></div><div class='modal-city__search-block'><div class='modal-city__search'> <div class='input-field input-field__city-search'><div id='citySearch' class='input-field__cont'></div></div></div><div class='modal-city__search-err'>Такого населенного пункта нет в нашей базе. Пожалуйста, выберите ближайшее к нему местоположение</div></div>");
          },
          contentTemplate: function () {
          	return $("<div class='modal-city__step-container'><div class='modal-city__step'><div class='modal-city__block-cap'>Наиболее популярные направления:</div><ul class='modal-city__block-items'><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Россия</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Китай (КНР)</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Республика Корея</a></li></ul><div class='modal-city__block-cap'>Части света:</div><ul class='modal-city__block-items'><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Европа</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Азия</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Америка</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Африка</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Австралия</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Андарктида</a></li></ul></div><div class='modal-city__step'><div class='modal-city__block-cap--link'><a class='modal-city__block-href-back'>Европа</a></div><div class='input-field input-field__country-list'><div id='modal__country-list' class='input-field__cont input-field__icn-dropdown'></div><div class='input-field__label'><label for='modal__country-list__id'>Страна:</label> </div></div> <div class='input-field input-field__region-list'><div id='modal__region-list' class='input-field__cont input-field__icn-dropdown'></div><div class='input-field__label'><label for='modal__region-list__id'>Край, район, область, штат:</label> </div></div><div class='input-field input-field__modal-city'><div id='modalCity' class='input-field__cont'></div><div class='input-field__label'><label for='modalCity__id'>Город, населенный пункт::</label> </div>  </div> </div> </div> <div class='modal-city__footer'><button class='purple-button button-ok modal-city__footer-ok-btn'>Ok</button><button class='basic-button button-cancel modal-city__footer-close-btn'>Отмена</button></div>");
          } 
    });

// //make slidecontent for modal
	const $stepContainer = $('.modal-city__step-container'),
       	  $steps         = $('.modal-city__step'),
      	  numSteps       = $steps.length,
       	  $form          = $('.modal'),
          $next          = $('.modal-city__block-item'),
          $prev          = $('.modal-city__block-cap--link');

	var stepWidth = 500;
	var currentSlide = 0;
	 
	$steps.css({ width: stepWidth + "px" });
	$stepContainer.css("width", stepWidth*numSteps + "px");

	animateSlider();	
	function animateSlider() {
	  $stepContainer.css('transform', 'translateX('+ (-stepWidth * currentSlide)+'px)');
	}
	

	$next.on('click', function() {
	  if(currentSlide < numSteps-1){
	  currentSlide ++;
	  animateSlider();
	  }
	  $('.modal-city__block-href-back').text($(this).text());
	});	

	$prev.on('click', function() {
	  if(currentSlide > 0) {
	    currentSlide --;
	    animateSlider();
	  } 
	});

	//ошибка заполнения города
	$('.modal-city__title').click(function() {
	  $('.modal-city__search-err').toggleClass('modal-city__search-err--show');;
	});	

	//close modal
	$('.modal__btn-close').click( function () {
		$('.modal-city.dx-popup-wrapper').remove();
	});
	//closemodal btn
	$('.modal-city__footer-close-btn').click( function () {
  		$('.modal-city.dx-popup-wrapper').remove();
	});

	//button init
	$('.modal-city__footer-ok-btn').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });

	$('.modal-city__footer-close-btn').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });
	//init inpu-field
	//страна в модальном окне
	$("#modal__country-list").dxSelectBox({
	        dataSource: [ "Россия", "Америка"],
	        placeholder: "",
	        inputAttr: {
	           id: "modal__country-list__id",
	           class:"input-field__value"
	         }
	});
	//край район область в модальном окне
	$("#modal__region-list").dxSelectBox({
	        dataSource: [ "Приморский край", "Камчатский край"],
	        placeholder: "",
	        inputAttr: {
	           id: "modal__region-list__id",
	           class:"input-field__value"
	         }
	});
	$("#citySearch").dxAutocomplete({
	   placeholder: "Начните вводить название",
	  inputAttr: {
	       id: "citySearch__id",
	       class:"input-field__value"
	   },
	   dataSource: cityData,
	   valueExpr: 'name',
	   itemTemplate: function(data) {
	            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
	                "'>" + data.name + "</div>");
	         }
	    
	});	
	

	$("#modalCity").dxAutocomplete({
	   placeholder: "Начните вводить название",
	  inputAttr: {
	       id: "modalCity__id",
	       class:"input-field__value"
	   },
	   dataSource: cityData,
	   valueExpr: 'name',
	   itemTemplate: function(data) {
	            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
	                "'>" + data.name + "</div>");
	         }
	    
	});
    }


});
// //close modal
// $('.modal__btn-close').click( function () {
// 	$('#modal-city').hide();
// });

// $('.modal-city__footer-close-btn').click( function () {
//   $('#modal-city').hide();
// });



//  const $stepContainer = $('.modal-city__step-container'),
//        $steps         = $('.modal-city__step'),
//        numSteps       = $steps.length,
//        $form          = $('.modal-city__content'),
//        $next          = $('.modal-city__block-item'),
//        $prev          = $('.modal-city__block-cap--link');

// var stepWidth = $form.width();
// var currentSlide = 0;
 
//   $steps.css({
//     width: stepWidth + "px"
//   });
//   $stepContainer.css("width", stepWidth*numSteps + "px");

//   animateSlider();

// function animateSlider() {
//   $stepContainer.css('transform', `translateX(${-stepWidth * currentSlide}px)`);
// }

// $next.on('click', function() {
//   if(currentSlide < numSteps-1){
//   currentSlide ++;
//   animateSlider();
//   }
//   if(currentSlide != 0) {
//     $prev.removeClass('disabled');
//   }
//   if(currentSlide === numSteps -1 ) {
//     $(this).addClass('disabled');
//   }
//   $('.modal-city__block-href-back').text($(this).text());
// });

// $prev.on('click', function() {
//   if(currentSlide > 0) {
//     currentSlide --;
//     animateSlider();
//   } 
//   if(currentSlide === 0) {
//     $(this).addClass('disabled');
//   }
//   if(currentSlide != numSteps -1 ) {
//     $next.removeClass('disabled');
//   }
// });

// //ощщибка заполнения города
// $('.modal-city__title').click(function() {
//   $('.modal-city__search-err').toggleClass('modal-city__search-err--show');;
// });
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





//add consignment block
function cnstCargoCheracter (count) { return "<field-set id='field-set__cargo-cheracter--part"+ count + "' class='field-set field-set__cargo-cheracter'><legend class='field-set__cap'>Характеристики груза</legend><div class='field-set__items'><div id='cargo-cheracter__radioGroup' class='radiogroup'></div></div></field-set>"};
function cnstTransportMod (count) { return "<field-set id='field-set__transport-mod--part"+ count + "' class='field-set field-set__transport-mod'><legend class='field-set__cap'>Способ перевозки</legend><div class='field-set__items'><div id='transport-mod__radioGroup' class='radiogroup'></div></div></field-set>"};
function cnstSpecialConditions (count) { return "<field-set id='field-set__special-conditions--part"+ count + "' class='field-set field-set__special-conditions'><legend class='field-set__cap'>Особые условия хранения и перевозки</legend><div class='field-set__items'><div id='special-conditions__radioGroup' class='radiogroup'></div></div></field-set>"};
function cnstAdditionalCharacter (count) { return "<field-set id='field-set__additional-character--part"+ count + "' class='field-set field-set__additional-character'><legend class='field-set__cap'>Дополнительные характеристики</legend><div class='field-set__items checkbox-items'><div id='danger-cargo__checkbox' class='checkbox'></div><div id='oversize-cargo__checkbox' class='checkbox'></div><div id='humane-cargo__checkbox' class='checkbox'></div><div id='home-cargo__checkbox' class='checkbox'></div><div id='used-cargo__checkbox' class='checkbox'></div></div></field-set>"};

$(document.body).on('click', '.step-block__sep-btn-add' ,function(){
//add del btn to first element
	if ($( ".consignment" ).length == 1 )
		$( ".consignment .step-block__sep").append("<div class='step-block__sep-btn-close'></div>");
	
	//add content
	var consignmentCount= $( ".consignment" ).length + 1;

	$( ".consignment" ).last().after($( "<section class='consignment'><div class='step-block__sep'><h2 class='step-block__sep-cap'>Партия №" + consignmentCount +"</h2><div class='step-block__sep-line'></div><div class='step-block__sep-btn-close'></div> </div></section>" ));
	$( ".consignment").last().append(cnstCargoCheracter(consignmentCount));
	$( ".consignment").last().append(cnstTransportMod(consignmentCount));
	$( ".consignment").last().append(cnstSpecialConditions(consignmentCount));
	$( ".consignment").last().append(cnstAdditionalCharacter(consignmentCount));

	var el=$(".consignment #cargo-cheracter__radioGroup").last();
	 	$(el).dxRadioGroup({
   	 	   items: cargoCheracterItem
   		});
   		el=$(".consignment #transport-mod__radioGroup").last();
	 	$(el).dxRadioGroup({
   	 	   items: transportModItem
   		});
   		el=$(".consignment #special-conditions__radioGroup").last();
	 	$(el).dxRadioGroup({
   	 	   items: specialConditionsItem
   		});

	 	el=$(".consignment #danger-cargo__checkbox").last();
	 	$(el).dxCheckBox({
       		 text: "Опасный груз",
       		 value: false
   		 });
	 	el=$(".consignment #oversize-cargo__checkbox").last();
	 	$(el).dxCheckBox({
       		text: "Негабаритный",
        	value: false
   		 });

	 	el=$(".consignment #humane-cargo__checkbox").last();
	 	$(el).dxCheckBox({
       		 text: "Гуманитарная помощь",
       		 value: false,
   		 });
	 	el=$(".consignment #home-cargo__checkbox").last();
	 	$(el).dxCheckBox({
       		 text: "Домашние вещи",
       		 value: false,
   		 });
	 	el=$(".consignment #used-cargo__checkbox").last();
	 	$(el).dxCheckBox({
       		 text: "Бывший в употреблении",
       		 value: false,
   		 });
});


//del consignment block 
$(document.body).on('click', '.step-block__sep-btn-close' ,function(){
	$(this).parent().parent().remove();
	var consignmentElement = document.getElementsByClassName("consignment");
		for(var i=0; i < consignmentElement.length; i++){
			$(consignmentElement[i]).find('.step-block__sep-cap').replaceWith("<h2 class='step-block__sep-cap'>Партия №"+ (i+1) +"</h2>");
		}

	if ($( ".consignment" ).length == 1 )
		$( ".consignment .step-block__sep .step-block__sep-btn-close").remove();
});
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


$('.header-progress').click(function() {

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

var cargoCheracterItem = ["Однородный (массовый)", "Однородный (не массовый)","Однородный в упаковке", "Не однородный в/без упаковки/и", "Одно грузовое место", "Жидкость без упаковки"];
$("#cargo-cheracter__radioGroup").dxRadioGroup({
        items: cargoCheracterItem
    });

var transportModItem = ["Груз навалом", "Загрузить в контейнер", "Уже загружен в контейнер", "По решению исполнителя"];
$("#transport-mod__radioGroup").dxRadioGroup({
        items: transportModItem
  
    });
var specialConditionsItem = ["На верхней палубе судна", "Открытое хранение", "Крытое хранение", "Температурный режим"];
$("#special-conditions__radioGroup").dxRadioGroup({
        items: specialConditionsItem
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
    $("#period__switch").dxSwitch({
        value: false
    });
$("#destButton").dxButton({
    text: "",
    onClick: function() {
  		// $('#modal-city').show();
    }
});

//перенесли в блок с модальным окном
// $("#departButton").dxButton({
//     text: "",
//     onClick: function() {
//         // $('#modal-city').show();
//     }
// });
var cityData = [{
    id: 1,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
},
{
    id: 2,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
},
{
    id: 3,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
},
{
    id: 4,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
}, {
    id: 5,
    name: "Находка",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
}
];


//отправление назначеие
$("#departName").dxAutocomplete({
  inputAttr: {
       id: "departName__id",
       class:"input-field__value"
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
$("#destName").dxAutocomplete({
  inputAttr: {
       id: "destName__id",
       class:"input-field__value"
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
});


$("#citySearch").dxAutocomplete({
   placeholder: "Начните вводить название",
  inputAttr: {
       id: "citySearch__id",
       class:"input-field__value"
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
});


$("#modalCity").dxAutocomplete({
   placeholder: "Начните вводить название",
  inputAttr: {
       id: "modalCity__id",
       class:"input-field__value"
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
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
//страна в модальном окне
$("#modal__country-list").dxSelectBox({
        dataSource: [ "Россия", "Америка"],
        placeholder: "",
        inputAttr: {
           id: "modal__country-list__id",
           class:"input-field__value"
         }
});
//край район область в модальном окне
$("#modal__region-list").dxSelectBox({
        dataSource: [ "Приморский край", "Камчатский край"],
        placeholder: "",
        inputAttr: {
           id: "modal__region-list__id",
           class:"input-field__value"
         }
});