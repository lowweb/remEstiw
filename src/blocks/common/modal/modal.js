function initModal (width, tTempl, cTempl) {
	$(".modal").dxPopup({
        visible: true,
        height:"auto",
        width: width,
        titleTemplate: function() {
        	//обязательный template
         	return $($('.' + tTempl).html());
          },
          contentTemplate: function () {
          	//обязательный template
          	return $($('.' + cTempl).html());
          } 
    });
};

$("#departButton").dxButton({
    text: "",
    onClick: function() {
        // $('#modal-city').show();
//init modal

initModal(500, 'modal__title-templ','modal__content-templ');			
    

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
		selectBoxInitForId("modal__country-list",[ "Приморский край", "Камчатский край"],"modal__country-list__id","input-field__value");
		//край район область в модальном окне
		selectBoxInitForId("modal__region-list",[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
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



	// initModal(500, 'modal__title-templ','modal__content-templ');


