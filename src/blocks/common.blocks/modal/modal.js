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