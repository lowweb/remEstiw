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
          } 
    });
	initButton("button");
};

initModal("custom-clearance-modal", 768 , "80%", 'modal__title-templ','modal__content-templ');
initModal("custom-clearance-3agent-modal", 1024 , "80%", 'modal__title-templ','modal__content-templ');
initModal("modal-location", 500 , "auto", 'modal__title-templ','modal__content-templ');			
	if ($('.modal').hasClass('modal-location')) {
		const $stepContainer = $('.modal-location__step-container'),
       	  $steps         = $('.modal-location__step'),
      	  numSteps       = $steps.length,
       	  $form          = $('.modal'),
          $next          = $('.modal-location__block-item'),
          $prev          = $('.modal-location__block-cap--link');

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
		  $('.modal-location__block-href-back').text($(this).text());
		});			
		$prev.on('click', function() {
		  if(currentSlide > 0) {
		    currentSlide --;
		    animateSlider();
		  } 
		});
		//конец обязательного кода для псевдо окон	
			
			initButton("modal-location__footer-ok-btn");
			initButton("modal-location__footer-close-btn");
			//страна в модальном окне
			selectBoxInitForId("modal__country-list",[ "Приморский край", "Камчатский край"],"modal__country-list__id","input-field__value");
			//край район область в модальном окне
			selectBoxInitForId("modal__region-list",[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
			//необходимо заново инициализировать элемент
			autocompleteInit ("locationSearch","locationSearch__id","input-field__value");
			autocompleteInit ("modallocation","modallocation__id","input-field__value");		
			//ошибка заполнения города
			$('.modal-location__title').click(function() {
			  $('.modal-location__search-err').toggleClass('modal-location__search-err--show');;
			});				
			//close modal
			$('.modal__btn-close').click( function () {
				$('.modal-location.dx-popup-wrapper').remove();
			});
			//closemodal btn
			$('.modal-location__footer-close-btn').click( function () {
		  		$('.modal-location.dx-popup-wrapper').remove();
		});
	};

if ($('.modal').hasClass('custom-clearance-3agent-modal')) {
 var dataGrid =  $("#gridContainer").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        selection: {
            mode: "single"
        },
        scrolling: {
            mode: "virtual"
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

};



	// initModal(500, 'modal__title-templ','modal__content-templ');


