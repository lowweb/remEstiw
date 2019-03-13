function initModalStep (nextbtn, prevbtn) {
	const $stepContainer = $('.modal__step-container'),
       	  $steps         = $('.modal__step'),
      	  numSteps       = $steps.length,
       	  $form          = $('.modal .dx-popup-normal'),
          $next          = $(nextbtn),
          $prev          = $(prevbtn);

		var stepWidth = $form.width();
		var currentSlide = 0;
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
		  $('.modal__block-back').text($(this).text());
		});			
		$prev.on('click', function(e) {
		  if(currentSlide > 0) {
		    currentSlide --;
		    animateSlider();
		  } 
		});
};

function initModalCustom () {
	if ($('.modal').hasClass('modal-location')) {
		initModalStep('.modal__block-item','.modal__block-prev');
		//конец обязательного кода для псевдо окон	
		//страна в модальном окне
		selectBoxInitForId("modal__country-list",[ "Приморский край", "Камчатский край"],"modal__country-list__id","input-field__value");
		//край район область в модальном окне
		selectBoxInitForId("modal__region-list",[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
		//необходимо заново инициализировать элемент
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

if ($('.modal').hasClass('login-modal')) {
//инициализируем карусель в модальном окне
initModalStep('.modal__forget','.modal__block-prev');	

//инициализируем элементы
 inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
 checkboxInit ("login-modal__rem-checkbox", "Запомнить пароль");
 checkboxInit ("login-modal__agree-checkbox", "Я подтверждаю зарегистрированный вход в систему");
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


//ошибка заполнения 
//инициализируем div ошибок
$(".summary-error__items").dxValidationSummary({
        validationGroup: "validateItems"
    });
//обраотчик кнопки
$(document.body).on('click', '#loginBtnModal' ,function(){
	DevExpress.validationEngine.validateGroup("validateItems");
	$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
	$('.summary-error').show();
});
//обработчик смены поля
$('.input-field__cont').change ( function () {
	// console.log($(this));
	 if( $(this).hasClass('dx-invalid') ){
	 	$(this).parent().find('.input-field__label').addClass('input-field__label--err');
	 }
	 else {
	 	$(this).parent().find('.input-field__label').removeClass('input-field__label--err');
	 }
});
};

};


function initModal (clName,width, height, tTempl, cTempl) {
	$("." + clName).dxPopup({
        visible: true,
        height:height,
        width: width,
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

initModal("custom-clearance-3agent-modal", 1024 , "80%", 'modal__title-templ','modal__content-templ');
initModal("modal-location", 500 , "auto", 'modal__title-templ','modal__content-templ');	
initModal("custom-clearance-modal", 768 , "80%", 'modal__title-templ','modal__content-templ');
initModal("login-modal", 710 , "auto", 'modal__title-templ','modal__content-templ');	


