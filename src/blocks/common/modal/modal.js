
//step для шагов внутри модального окна
function initModalStep (contName,nextbtn, prevbtn, dynamCap, curSlide) {
	const $stepContainer = $(contName),
       	  $steps         = $('.modal__step'),
      	  numSteps       = $steps.length,
       	  $form          = $('.modal .dx-popup-normal'),
          $next          = $(nextbtn),
          $prev          = $(prevbtn);

		var stepWidth = $form.width();
		var currentSlide = curSlide;
		 // alert ($form.width());
		$steps.css({ width: stepWidth + "px" });
		$stepContainer.css("width", stepWidth*numSteps + "px");	

		animateSlider();	

		function animateSlider() {
		  $stepContainer.css('transform', 'translateX('+ (-stepWidth * currentSlide)+'px)');
		}
				
		$next.on('click', function(e) {
			e.preventDefault();	
		  if(currentSlide < numSteps-1){
		  currentSlide ++;
		  animateSlider();
		  }

		  //если заголовок следующего шага берется из элемента инициируещего
		  if (dynamCap==true)
		  $('.modal__block-back').text($(this).text());
		});			
		$prev.on('click', function(e) {
		  if(currentSlide > 0) {
		    currentSlide --;
		    animateSlider();
		  } 
		});
};

//инициализация компонентов на модалке тк
function initModalCustom () {

	//first page
	if ($('.modal').hasClass('modal-location')) {
		initModalStep('.modal__step-container','.modal__block-item','.modal__block-prev',true,0);

		//страна в модальном окне
		selectBoxInitForId("modal__country-list",[ "Приморский край", "Камчатский край"],"modal__country-list__id","input-field__value");
		//край район область в модальном окне
		selectBoxInitForId("modal__region-list",[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
		
		autocompleteInit ("locationSearch","locationSearch__id","input-field__value");
		autocompleteInit ("modallocation","modallocation__id","input-field__value");	

		//ошибка заполнения города
		$('.modal__title-cap').click(function() {
		  $('.modal-location__search-err').toggleClass('modal-location__search-err--show');;
		});	

		//close modal
		$('.modal__btn-close').click( function () {
			$('.modal-location.dx-popup-wrapper').remove();
		});
};

if ($('.modal').hasClass('custom-clearance-3agent-modal')) {
	 initDataGrid ();
	 inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	 radiogroupInit ("custom-clearence__3agent-radio",["Резидент", "Нерезидент"],"horizontal");
};

if ($('.modal').hasClass('modal-change-pass')) {
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
}

if ($('.modal').hasClass('modal-auth')) {
	//инициализируем карусель в модальном окне, для смены пароля со второго шага для остальных с первого
	// if ($('.modal').hasClass('modal-rem-step'))
	// initModalStep('.modal__step-container-auth','#modal__forget-lnk','.modal__block-prev',false,1);
	// else
	initModalStep('.modal__step-container-auth','#modal__forget-lnk','.modal__block-prev',false,0);	
	initModalStep('.modal__step-container-reg','#modal__agree-lnk','.modal__block-prev',false,0);	

	//инициализируем элементы
	 inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	 checkboxInit ("login-modal__rem-checkbox", "Запомнить пароль");
	 checkboxInit ("login-modal__agree-checkbox", "Я подтверждаю зарегистрированный вход в систему");
	 checkboxInit ("modal-reg__chk", "");
	 $("#auth-login").dxTextBox({
	  inputAttr: {
	   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
	   		 class:"input-field__value" //обязятельный класс
	   }}).dxValidator({
	        validationRules: [{
	            type: "required",
	            message: "Обязательно к заполнению"
	        }],
	        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
	    });	

	    $("#auth-login2").dxTextBox({
	  inputAttr: {
	   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
	   		 class:"input-field__value" //обязятельный класс
	   }}).dxValidator({
	        validationRules: [{
	            type: "required",
	            message: "Обязательно к заполнению"
	        }],
	        validationGroup: "validateItems2" //обязательный параметр для валидации см. src/blocks/common/validate.js:
	    });	

	//ошибка заполнения 
	//инициализируем div ошибок
	$(".summary-error__items").dxValidationSummary({
	        validationGroup: "validateItems"
	    });
	$(".summary-error2__items").dxValidationSummary({
	        validationGroup: "validateItems2"
	    });	

	//обраотчик кнопки
	$(document.body).on('click', '#loginBtnModal' ,function(){
		DevExpress.validationEngine.validateGroup("validateItems");
		$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
		$('#summary-error').show();
	});	

	$(document.body).on('click', '#modalBtnReg' ,function(){
		DevExpress.validationEngine.validateGroup("validateItems2");
		$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
		$('#summary-error2').show();
	});	


};
if ($('.modal').hasClass('modal-versions-compare-edit2')) { 
checkboxInit ("used-cargo__checkbox", "Бывший в употреблении");
checkboxInit ("home-cargo__checkbox", "Домашние вещи");
checkboxInit ("humane-cargo__checkbox", "Гуманитарная помощь");
checkboxInit ("oversize-cargo__checkbox", "Негабаритный");
checkboxInit ("danger-cargo__checkbox", "Опасный груз");
};

if ($('.modal').hasClass('modal-versions-compare-edit5')) { 
checkboxInit ("expertise-optionally__depart-checkbox", "В пункте отправления");
checkboxInit ("expertise-optionally__dest-checkbox", " В пункте назначения");
checkboxInit ("expertise-optionally__anotherplace-checkbox", "Дополнительно в другом месте");
};

if ($('.modal').hasClass('modal-company-user-add')) {
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	radiogroupInit ("company-personloc-radio",["Резиден", "Не резидент"],"horizontal");
	checkboxInit ("company-maintel-checkbox", "Основной");
}


if ($('.modal').hasClass('modal-application-view')) {
	 initDataGrid ();
};
if ($('.modal').hasClass('modal-application-view-v2')) {
	 initAppViewV2DataGrid ()
};
if ($('.modal').hasClass('modal-application-view-v3')) {
	 initAppViewV3DataGrid ()
};
if ($('.modal').hasClass('modal-application-view-v5')) {
	 initAppViewV5DataGrid ()
};

};


function initModal (clName,width, height, tTempl, cTempl, position) {
	$("." + clName).dxPopup({
        visible: true,
        height:height,
        width: width,
        position: position,
        titleTemplate: function() {
        	//обязательный template
         	return $($('.' + tTempl).html());
          },
          contentTemplate: function () {
          	//обязательный template
          	return $($('.' + cTempl).html());
          },
          onShown: function (e) {                                      
			$(".scrollView").dxScrollView({
		        height: "100%",
		        width: "auto",
		        direction: "vertical"
		    }); 
			initModalCustom();
			initButton("button");            
		} 
    });
};

//init modal window
initModal("custom-clearance-3agent-modal", 1024 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-location", 500 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("custom-clearance-modal", 768 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-auth", 710 , "auto", 'modal__title-templ','modal__content-templ',{ offset: '0 -200'});	
initModal("modal-change-pass", 370 , "auto", 'modal__title-templ','modal__content-templ',{ offset: '0 -200'});	
initModal("modal-request-del", 480 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-view", 968 , "80%", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit1", 754 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit2", 503 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit3", 794 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit4", 677 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit5", 740 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-send", 480 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-req-start", 470 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-request-price-wr", 691 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-company-user-add", 790 , "auto", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view", 1024 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view-v2", 860 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view-v3", 860 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view-v5", 1024 , "80%", 'modal__title-templ','modal__content-templ',"center");


