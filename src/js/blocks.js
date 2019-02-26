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
function initButton (Element) {
    $('.' + Element).dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
             
                }
            });
};

initButton("button");

// initButton("footer__button-next");
// initButton("footer__button-prev");
// initButton("modal-city__footer-ok-btn");
// initButton("modal-city__footer-close-btn");

$(".input-field__btn").dxButton({
    text: "",
    onClick: function() {}
});

$('#footer__button-save').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
                    $('.footer__saved-msg').show();                
                }
            });
     
function checkboxInit (element, text) {
    $("#" + element).dxCheckBox({
        text: text,
        value: false,
    });
};

checkboxInit ("used-cargo__checkbox", "Бывший в употреблении");
checkboxInit ("home-cargo__checkbox", "Домашние вещи");
checkboxInit ("humane-cargo__checkbox", "Гуманитарная помощь");
checkboxInit ("oversize-cargo__checkbox", "Негабаритный");
checkboxInit ("danger-cargo__checkbox", "Опасный груз");
checkboxInit ("law-cargo__checkbox", "Юридическое сопровождение (ваши интересы в суде)");
checkboxInit ("bay-cargo__checkbox", "Купить");
checkboxInit ("deliver-cargo__checkbox", "Доставить груз");
checkboxInit ("safer__checkbox", "Надежнёе");
checkboxInit ("faster__checkbox", "Быстрее");
checkboxInit ("cheaper__checkbox", "Дешевле");

checkboxInit ("custom-clearence__import-checkbox", "При импорте");
checkboxInit ("custom-clearence__export-checkbox", "При экспорте");

checkboxInit ("cargo-escort__gun-checkbox", "С огнестрельным оружием");
checkboxInit ("cargo-escort__gun-checkbox2", "С огнестрельным оружием");
checkboxInit ("cargo-escort__gun-checkbox3", "С огнестрельным оружием");
checkboxInit ("cargo-escort__gun-checkbox4", "С огнестрельным оружием");
checkboxInit ("cargo-escort__gun-checkbox5", "С огнестрельным оружием");


checkboxInit ("cargo-expertise__accept-checkbox ", "При приёмке");
checkboxInit ("cargo-expertise__delivery-checkbox ", "При сдаче");  

checkboxInit ("documentary-credit__add-checkbox", "Данные аккредитива сообщу дополнительно");  

var employees = [{
    "ID": 1,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 2,
    "Forma": "ЗАО",
    "Name": "Простое название контрагента",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "Елизово ул. Бассейная, 76",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 3,
    "Forma": "ПАО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "Мохачкала",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 4,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
} ];


 var dataGrid =  $("#gridContainer").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        selection: {
            mode: "single"
        },
        hoverStateEnabled: true,
        showBorders: true,
        columns: 

        [{
            dataField: "Forma",
            caption: "Форма собств.",
            width: 115
        },
        {
            dataField: "Name",
            caption: "Наименование контрагента",
             width: 249,

            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку, навешиваем элемент radiogroup
            $('<div class="datagrid__custom-radio-cell">')    //навешиваем  template иницилизируем его как radiogroup
            .appendTo(cellElement)
            .dxRadioGroup({ 
                items: [{id: 1}],
                valueExpr: 'id',
                value: cellInfo.data.state ? 1 : null,
                onValueChanged: function(e) {                    
                    clearState(dataGrid.option("dataSource"), cellInfo.data.id);
                    dataGrid.refresh();
                    }
                })
                .append($("<a href='#''>"+cellInfo.data.Name+"</a>"))
             }, 

            cssClass: "datagrid__link-cell" //обязательный класс
        }, 
        {
            dataField: "Tel",
            caption: "Телефон",
            width: 153
         
        },   
        {
            dataField: "Email",
            caption: "Email",
            width: 144
        }, 
        {
            dataField: "Location",
            caption: "Местоположение",
            width: 180
        }, 
        {
            dataField: "Inn",
            caption: "ИНН",
            width: 138
        }],

        filterRow: {
            applyFilter: "auto",
            applyFilterText: "Apply filter",
            betweenEndText: "End",
            betweenStartText: "Start",
            resetOperationText: "Reset",
            showAllText: "",
            showOperationChooser: true,
            visible: true
            },
        showColumnLines: true,
        showRowLines: true,    
    }).data("dxDataGrid");



    $(".fileUploader").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 424,
	    // height: auto,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
		uploadFailedMessage: "dsfs",
		onUploadStarted: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploaded: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploadError: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hude this el
		},
		uploadedMessage: "",
		uploadFailedMessage: "",
    });

    $(".fileUploader--fullWidth").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 700,
	    // height: auto,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
		uploadFailedMessage: "dsfs",
		onUploadStarted: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploaded: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploadError: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hude this el
		},
		uploadedMessage: "",
		uploadFailedMessage: "",
    });

//название запроса
$("#requestName").dxTextBox({
  inputAttr: {
   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
   		 class:"input-field__value" //обязятельный класс
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
        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
    });


// $("#input-field__totalWeight").dxTextBox({
//   inputAttr: {
//        id: "input-field__totalWeight-id",
//        class:"input-field__value" 
//    },
//    width: 128,
//    readOnly: true,
//    value: "100",
// })


//инициализировать элементы необходимо по id элемента
//в верстке реализованна инициализация по классу, для массовости, класс pseudoClassTextEditor на инициализируемом элементе можно удалить, если таковой не применяется
function inputFieldInit (element, elementId, defValue, readOnlyFlag ) {
  $("."+ element).dxTextBox({
  inputAttr: {
       id: elementId,
       class:"input-field__value" 
   },
   value: defValue,
   readOnly: readOnlyFlag
  });
};

inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
inputFieldInit ("pseudoClassTextEditorReadOnly","pseudoClassTextEditorReadOnly__id","100",true);


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
        	//обязательный template
         	return $("<div class='modal-city__title'><div class='modal-city__title-cap'>Выберите пункт отправления</div><div class='modal__btn-close'>&times;</div></div><div class='modal-city__search-block'><div class='modal-city__search'> <div class='input-field input-field__city-search'><div id='citySearch' class='input-field__cont'></div></div></div><div class='modal-city__search-err'>Такого населенного пункта нет в нашей базе. Пожалуйста, выберите ближайшее к нему местоположение</div></div>");
          },
          contentTemplate: function () {
          	//обязательный template
          	return $("<div class='modal-city__step-container'><div class='modal-city__step'><div class='modal-city__block-cap'>Наиболее популярные направления:</div><ul class='modal-city__block-items'><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Россия</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Китай (КНР)</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Республика Корея</a></li></ul><div class='modal-city__block-cap'>Части света:</div><ul class='modal-city__block-items'><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Европа</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Азия</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Америка</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Африка</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Австралия</a></li><li class='modal-city__block-item'><a class='modal-city__block-href-next'>Андарктида</a></li></ul></div><div class='modal-city__step'><div class='modal-city__block-cap--link'><a class='modal-city__block-href-back'>Европа</a></div><div class='input-field input-field__country-list'><div id='modal__country-list' class='input-field__cont input-field__icn-dropdown'></div><div class='input-field__label'><label for='modal__country-list__id'>Страна:</label> </div></div> <div class='input-field input-field__region-list'><div id='modal__region-list' class='input-field__cont input-field__icn-dropdown'></div><div class='input-field__label'><label for='modal__region-list__id'>Край, район, область, штат:</label> </div></div><div class='input-field input-field__modal-city'><div id='modalCity' class='input-field__cont'></div><div class='input-field__label'><label for='modalCity__id'>Город, населенный пункт::</label> </div>  </div> </div> </div> <div class='modal-city__footer'><button id='modal-city__footer-ok-btn' class='purple-button button-ok modal-city__footer-ok-btn'>Ok</button><button id='modal-city__footer-close-btn' class='basic-button button-cancel modal-city__footer-close-btn'>Отмена</button></div>");
          } 
    });

//make slidecontent for modal
//обязательный код для перехода между псевдо окон
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
//конец обязательного кода для псевдо окон

		initButton("modal-city__footer-ok-btn");
		initButton("modal-city__footer-close-btn");
		//страна в модальном окне
		selectBoxInit("modal__country-list",[ "Приморский край", "Камчатский край"],"modal__country-list__id","input-field__value");
		//край район область в модальном окне
		selectBoxInit("modal__region-list",[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
		//необходимо заново инициализировать элемент
		autocompleteInit ("citySearch","citySearch__id","input-field__value");
		autocompleteInit ("modalCity","modalCity__id","input-field__value");

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
 
function numberBoxInit (idElement,idAttrName) {
	 $("."+idElement).dxNumberBox({
        value: 15,
        min: 10,
        max: 100,
        showSpinButtons: true,
        inputAttr: {
   		 id: idAttrName,
   		 class: "input-field__value" 
   		}
   		//width: widthElement
    });
};

numberBoxInit ("pseudoClassNumberBox","pseudoNameElementNumberBox__id");


$('.progress-bar__step').hover (function(){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
},
function (){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
}
);


var progressPercentValue=10;
  
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
var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
var volumeItem = ["До 5 м", "Свыше 5 м"];
var cargoCheracterItem = ["Однородный (массовый)", "Однородный (не массовый)","Однородный в упаковке", "Не однородный в/без упаковки/и", "Одно грузовое место", "Жидкость без упаковки"];
var transportModItem = ["Груз навалом", "Загрузить в контейнер", "Уже загружен в контейнер", "По решению исполнителя"];
var specialConditionsItem = ["На верхней палубе судна", "Открытое хранение", "Крытое хранение", "Температурный режим"];


function radiogroupInit (idRadio, items, layout) {
$("#"+idRadio).dxRadioGroup({
        items: items,
        layout: layout
    });
};

radiogroupInit ("type-deal__radioGroup",typeDealitem,"");
radiogroupInit ("volume-cargo__radioGroup",volumeItem);
radiogroupInit ("cargo-cheracter__radioGroup",cargoCheracterItem,"");
radiogroupInit ("transport-mod__radioGroup",transportModItem,"");
radiogroupInit ("special-conditions__radioGroup",specialConditionsItem,"");
radiogroupInit ("cargo-receiver__radioGroup",cargoReceiverItem,"horizontal");
radiogroupInit ("HBL__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-escort__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-exam__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-insura__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("custom-clear__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-exam__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");

radiogroupInit ("custom-clearence__export-radio",["Самостоятельно", "Оформить"],"horizontal");
radiogroupInit ("custom-clearence__import-radio",["Самостоятельно", "Оформить"],"horizontal");

radiogroupInit ("deliver-byself__radioGroup",["Полная предоплата", "Частичная оплата ", "Ценные бумаги", "Уставной капитал", "Бартер", "Фьючерс (будущие расчёты)"],"horizontal");
radiogroupInit ("deliver-byself__radioGroup2",["Полная предоплата", "Частичная оплата ", "Ценные бумаги", "Уставной капитал", "Бартер", "Фьючерс (будущие расчёты)"],"horizontal");
radiogroupInit ("deliver-byself__radioGroup3",["Полная предоплата", "Частичная оплата ", "Ценные бумаги", "Уставной капитал", "Бартер", "Фьючерс (будущие расчёты)"],"horizontal");



radiogroupInit ("cargo-expertise__point-radio",["В пункте отправления", "В другом месте"],"horizontal");
radiogroupInit ("cargo-expertise__point2-radio",["В пункте отправления", "В другом месте"],"horizontal");

radiogroupInit ("deliver-executor__radioGroup",["Согласно подписанному ДС №3 c Исполнителем", "Подписать ДС №3 c Исполнителем", "Будет подписано ДС №3 c Исполнителем позже"],"");

radiogroupInit ("cargo-escort-byself__doc-radio",["Да, нужно на всём маршруте", "Да, нужно на выбранных пунктах", "Нет, организую самостоятельно"],"horizontal");







$(function() {
    $("#rangeSelector").dxRangeSelector({
        size: {
            height: 70,
            width: 744
        },
        selectedRangeColor: "rgba(55, 63, 81, 0.4)",
        scale: {
            startValue: -30,
            endValue: +30,
            // minorTickInterval: 5,
            tickInterval: 10,
            // minorTick: {
                // visible: false,
            // },
            label: {
                // format: "currency",
                customizeText: function () {
                return this.valueText + " ˚C";
            	},
            	font: {
					color: "#373F51",
					family: "Lucida Grande, Tahoma, Arial",
					opacity: 1,
					size: 13,
					weight: 400
				}
            }
        },
        sliderMarker: {
            // format: "currency",
            color: "#373F51",
            customizeText: function () {
                return this.valueText + " ˚C";
            },
            font: {
				color: "#FFFFFF",
				family: "Lucida Grande, Tahoma, Arial",
				opacity: 1,
				size: 13,
				weight: 400
			},
           	invalidRangeColor: "red",
			paddingLeftRight: 10,
			paddingTopBottom: 2,
        },
        value: [4, 8],
        onInitialized: function () {      	
        	
        	
        },
        // redrawOnResize: function (){alert($('.rangeselector .dxrs-range-selector-line').offset());},
        onDrawn: function (){    	
            //обязательный вызов для backgroud элмента радуга
        	$( ".rangeselector.dx-visibility-change-handler" ).append( "<div class='rangeselector__back'></div>");
        }

    });
});
//add consignment block

//реализация добавление блоков на первом шаге. убрали тк по идеи не нужна
// function cnstCargoCheracter (count) { return "<field-set id='field-set__cargo-cheracter--part"+ count + "' class='field-set field-set__cargo-cheracter'><legend class='field-set__cap'>Характеристики груза</legend><div class='field-set__items'><div id='cargo-cheracter__radioGroup' class='radiogroup'></div></div></field-set>"};
// function cnstTransportMod (count) { return "<field-set id='field-set__transport-mod--part"+ count + "' class='field-set field-set__transport-mod'><legend class='field-set__cap'>Способ перевозки</legend><div class='field-set__items'><div id='transport-mod__radioGroup' class='radiogroup'></div></div></field-set>"};
// function cnstSpecialConditions (count) { return "<field-set id='field-set__special-conditions--part"+ count + "' class='field-set field-set__special-conditions'><legend class='field-set__cap'>Особые условия хранения и перевозки</legend><div class='field-set__items'><div id='special-conditions__radioGroup' class='radiogroup'></div></div></field-set>"};
// function cnstAdditionalCharacter (count) { return "<field-set id='field-set__additional-character--part"+ count + "' class='field-set field-set__additional-character'><legend class='field-set__cap'>Дополнительные характеристики</legend><div class='field-set__items checkbox-items'><div id='danger-cargo__checkbox' class='checkbox'></div><div id='oversize-cargo__checkbox' class='checkbox'></div><div id='humane-cargo__checkbox' class='checkbox'></div><div id='home-cargo__checkbox' class='checkbox'></div><div id='used-cargo__checkbox' class='checkbox'></div></div></field-set>"};

// $(document.body).on('click', '.step-block__sep-btn-add' ,function(){
// //add del btn to first element
// 	if ($( ".consignment" ).length == 1 )
// 		$( ".consignment .step-block__sep").append("<div class='step-block__sep-btn-close'></div>");
	
// 	//add content
// 	var consignmentCount= $( ".consignment" ).length + 1;

// 	$( ".consignment" ).last().after($( "<section class='consignment'><div class='step-block__sep'><h2 class='step-block__sep-cap'>Партия №" + consignmentCount +"</h2><div class='step-block__sep-line'></div><div class='step-block__sep-btn-close'></div> </div></section>" ));
// 	$( ".consignment").last().append(cnstCargoCheracter(consignmentCount));
// 	$( ".consignment").last().append(cnstTransportMod(consignmentCount));
// 	$( ".consignment").last().append(cnstSpecialConditions(consignmentCount));
// 	$( ".consignment").last().append(cnstAdditionalCharacter(consignmentCount));

// 	var el=$(".consignment #cargo-cheracter__radioGroup").last();
// 	 	$(el).dxRadioGroup({
//    	 	   items: cargoCheracterItem
//    		});
//    		el=$(".consignment #transport-mod__radioGroup").last();
// 	 	$(el).dxRadioGroup({
//    	 	   items: transportModItem
//    		});
//    		el=$(".consignment #special-conditions__radioGroup").last();
// 	 	$(el).dxRadioGroup({
//    	 	   items: specialConditionsItem
//    		});

// 	 	el=$(".consignment #danger-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Опасный груз",
//        		 value: false
//    		 });
// 	 	el=$(".consignment #oversize-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		text: "Негабаритный",
//         	value: false
//    		 });

// 	 	el=$(".consignment #humane-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Гуманитарная помощь",
//        		 value: false,
//    		 });
// 	 	el=$(".consignment #home-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Домашние вещи",
//        		 value: false,
//    		 });
// 	 	el=$(".consignment #used-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Бывший в употреблении",
//        		 value: false,
//    		 });
// });


// //del consignment block 
// $(document.body).on('click', '.step-block__sep-btn-close' ,function(){
// 	$(this).parent().parent().remove();
// 	var consignmentElement = document.getElementsByClassName("consignment");
// 		for(var i=0; i < consignmentElement.length; i++){
// 			$(consignmentElement[i]).find('.step-block__sep-cap').replaceWith("<h2 class='step-block__sep-cap'>Партия №"+ (i+1) +"</h2>");
// 		}

// 	if ($( ".consignment" ).length == 1 )
// 		$( ".consignment .step-block__sep .step-block__sep-btn-close").remove();
// });
    $(".init-switch").dxSwitch({
        value: false
    });
    var simpleProducts = [
    "Выбор 1",
    "Выбор 12",
    "Выбор 15",
    "Выбор 111",
    "Выбор Выбор 1",
    "Выбор Выбор 2"
];
function tagBoxInit (idElement,idAttrName, itemsElement) {
     $("."+idElement).dxTagBox({
        items: itemsElement,
        showSelectionControls: true,
        placeholder: "Выберите",
        showDropDownButton: true,
        inputAttr: {
         id: idAttrName
        },
        // width: widthElement
    });
};
  
tagBoxInit ("input-field__tagbox","input-field__tagbox-id",simpleProducts);  
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
initButton ('destButton');
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

function autocompleteInit (idElement,attrId, attrVal) {

$("#"+idElement).dxAutocomplete({
  inputAttr: {
       id: attrId,
       class: attrVal
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            //обязательный шаблон
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({                         //необходим если есть валидация
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
};


autocompleteInit ("departName","departName__id","input-field__value");
autocompleteInit ("destName","destName__id","input-field__value");
autocompleteInit ("citySearch","citySearch__id","input-field__value");
autocompleteInit ("modalCity","modalCity__id","input-field__value");



function autocompleteInitClass (idElement,attrId, attrVal) {

$("."+idElement).dxAutocomplete({
  inputAttr: {
       id: attrId,
       class: attrVal
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            //обязательный шаблон
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({                         //необходим если есть валидация
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
};
autocompleteInitClass ("input-field__city-btn","city-btn__id","input-field__value");





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
function selectBoxInitForId (idElement, dataS, inputAttrId, inputAttrVal ) {
$("#" + idElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInitForId("conditionDest",[ "FCA", "FAS", "FOB" ],"conditionDepart__id","input-field__value");
selectBoxInitForId("conditionDepart",[ "FCA", "FAS", "FOB" ],"conditionDest__id","input-field__value");
//в какой валюте расчитать
selectBoxInitForId("currency-calc",[ "Доллары США (USD)", "Рубли (RUB)"],"currency-calc__id","input-field__value");
//страна в модальном окне
selectBoxInitForId('modal__country-list',[ "Россия", "Америка"],"modal__country-list__id","input-field__value");
//край район область в модальном окне
selectBoxInitForId('modal__region-list',[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");

function selectBoxInitForClass (classElement, dataS, inputAttrId, inputAttrVal ) {
$("." + classElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInitForClass("pseudoClassSelectBox",[ "значение", "значение", "значенадывжлавдылажвылаие123456789" ],"pseudoNameElementSelectBox__id","input-field__value");

 $(".popup__info-newmsg").dxToast({
        message: "У вас новое сообщение по запросу (пример всплывающего уведомления)",
        displayTime: 300000,
        position: {my: 'center right', at: 'center right', offset: '-50 0'},
        width: 375,
		onShowing: function () {
			//for left separate line on block message
			$('.dx-toast-message').height($('.dx-toast-content').height());
		}
    });

  $(".popup__info-newmsg").dxToast("show");
$('.header-currency__lang').click( function () {
	$('.header-currency__lang').toggleClass('header-currency__lang--ru');
	$('.header-currency__lang').toggleClass('header-currency__lang--en');
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
