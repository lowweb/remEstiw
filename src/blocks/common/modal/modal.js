function initModalStep () {
			const $stepContainer = $('.modal__step-container'),
       	  $steps         = $('.modal__step'),
      	  numSteps       = $steps.length,
       	  $form          = $('.modal .dx-popup-normal'),
          $next          = $('.modal__block-item'),
          $prev          = $('.modal__block-prev');

		var stepWidth = $form.width();
		var currentSlide = 0;
		 // alert ($form.width());
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
		  $('.modal__block-back').text($(this).text());
		});			
		$prev.on('click', function() {
		  if(currentSlide > 0) {
		    currentSlide --;
		    animateSlider();
		  } 
		});
};

function initModalCustom () {
	if ($('.modal').hasClass('modal-location')) {
		initModalStep();
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



