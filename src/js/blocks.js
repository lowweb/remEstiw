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
        
$(function () {
    $("#fileUploader").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 424,
	    // height: auto,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или нажмите",
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
});
var orders = [{
    "ID": 1,
    "OrderNumber": 35703,
    "OrderDate": "2017/04/10",
    "DeliveryDate": "2017/04/13 9:00",
    "SaleAmount": 11800,
    "Terms": "15 Days",
    "CustomerStoreCity": "Los Angeles, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 4,
    "OrderNumber": 35711,
    "OrderDate": "2017/01/12",
    "DeliveryDate": "2017/01/13 9:00",
    "SaleAmount": 16050,
    "Terms": "15 Days",
    "CustomerStoreCity": "San Jose, CA",
    "Employee": "Jim Packard"
}, {
    "ID": 5,
    "OrderNumber": 35714,
    "OrderDate": "2017/01/22",
    "DeliveryDate": "2017/01/27 9:00",
    "SaleAmount": 14750,
    "Terms": "15 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 7,
    "OrderNumber": 35983,
    "OrderDate": "2017/02/07",
    "DeliveryDate": "2017/02/10 13:00",
    "SaleAmount": 3725,
    "Terms": "15 Days",
    "CustomerStoreCity": "Denver, CO",
    "Employee": "Todd Hoffman"
}, {
    "ID": 11,
    "OrderNumber": 38466,
    "OrderDate": "2017/03/01",
    "DeliveryDate": "2017/03/03 17:45",
    "SaleAmount": 7800,
    "Terms": "15 Days",
    "CustomerStoreCity": "Los Angeles, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 14,
    "OrderNumber": 39420,
    "OrderDate": "2017/02/15",
    "DeliveryDate": "2017/02/17 11:45",
    "SaleAmount": 20500,
    "Terms": "15 Days",
    "CustomerStoreCity": "San Jose, CA",
    "Employee": "Jim Packard"
}, {
    "ID": 15,
    "OrderNumber": 39874,
    "OrderDate": "2017/02/04",
    "DeliveryDate": "2017/02/10 15:00",
    "SaleAmount": 9050,
    "Terms": "30 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 18,
    "OrderNumber": 42847,
    "OrderDate": "2017/02/15",
    "DeliveryDate": "2017/02/17 8:30",    
    "SaleAmount": 20400,
    "Terms": "30 Days",
    "CustomerStoreCity": "Casper, WY",
    "Employee": "Todd Hoffman"
}, {
    "ID": 30,
    "OrderNumber": 57429,
    "OrderDate": "2017/05/16",
    "DeliveryDate": "2017/05/19 11:45",
    "SaleAmount": 11050,
    "Terms": "30 Days",
    "CustomerStoreCity": "Phoenix, AZ",
    "Employee": "Clark Morgan"
}, {
    "ID": 32,
    "OrderNumber": 58292,
    "OrderDate": "2017/05/13",
    "DeliveryDate": "2017/05/19 14:30",
    "SaleAmount": 13500,
    "Terms": "15 Days",
    "CustomerStoreCity": "Los Angeles, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 36,
    "OrderNumber": 62427,
    "OrderDate": "2017/01/27",
    "DeliveryDate": "2017/02/03 18:00",
    "SaleAmount": 23500,
    "Terms": "15 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 39,
    "OrderNumber": 65977,
    "OrderDate": "2017/02/05",
    "DeliveryDate": "2017/02/10 13:15",
    "SaleAmount": 2550,
    "Terms": "15 Days",
    "CustomerStoreCity": "Casper, WY",
    "Employee": "Todd Hoffman"
}, {
    "ID": 42,
    "OrderNumber": 68428,
    "OrderDate": "2017/04/10",
    "DeliveryDate": "2017/04/14 11:30",
    "SaleAmount": 10500,
    "Terms": "15 Days",
    "CustomerStoreCity": "Los Angeles, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 43,
    "OrderNumber": 69477,
    "OrderDate": "2017/03/09",
    "DeliveryDate": "2017/03/10 12:00",
    "SaleAmount": 14200,
    "Terms": "15 Days",
    "CustomerStoreCity": "Anaheim, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 46,
    "OrderNumber": 72947,
    "OrderDate": "2017/01/14",
    "DeliveryDate": "2017/01/20 9:00",
    "SaleAmount": 13350,
    "Terms": "30 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 47,
    "OrderNumber": 73088,
    "OrderDate": "2017/03/25",
    "DeliveryDate": "2017/03/31 17:15",
    "SaleAmount": 8600,
    "Terms": "30 Days",
    "CustomerStoreCity": "Reno, NV",
    "Employee": "Clark Morgan"
}, {
    "ID": 51,
    "OrderNumber": 77297,
    "OrderDate": "2017/04/30",
    "DeliveryDate": "2017/05/05 18:00",
    "SaleAmount": 10850,
    "Terms": "30 Days",
    "CustomerStoreCity": "Phoenix, AZ",
    "Employee": "Clark Morgan"
}, {
    "ID": 56,
    "OrderNumber": 84744,
    "OrderDate": "2017/02/10",
    "DeliveryDate": "2017/02/17 14:00",
    "SaleAmount": 4650,
    "Terms": "30 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 57,
    "OrderNumber": 85028,
    "OrderDate": "2017/05/17",
    "DeliveryDate": "2017/05/19 12:00",
    "SaleAmount": 2575,
    "Terms": "30 Days",
    "CustomerStoreCity": "Reno, NV",
    "Employee": "Clark Morgan"
}, {
    "ID": 59,
    "OrderNumber": 87297,
    "OrderDate": "2017/04/21",
    "DeliveryDate": "2017/04/28 9:00",
    "SaleAmount": 14200,
    "Terms": "30 Days",
    "CustomerStoreCity": "Casper, WY",
    "Employee": "Todd Hoffman"
}, {
    "ID": 65,
    "OrderNumber": 94726,
    "OrderDate": "2017/05/22",
    "DeliveryDate": "2017/05/26 13:30",
    "SaleAmount": 20500,
    "Terms": "15 Days",
    "CustomerStoreCity": "San Jose, CA",
    "Employee": "Jim Packard"
}, {
    "ID": 66,
    "OrderNumber": 95266,
    "OrderDate": "2017/03/10",
    "DeliveryDate": "2017/03/17 11:45",
    "SaleAmount": 9050,
    "Terms": "15 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 69,
    "OrderNumber": 98477,
    "OrderDate": "2017/01/01",
    "DeliveryDate": "2017/01/06 9:00",
    "SaleAmount": 23500,
    "Terms": "15 Days",
    "CustomerStoreCity": "Casper, WY",
    "Employee": "Todd Hoffman"
}, {
    "ID": 78,
    "OrderNumber": 174884,
    "OrderDate": "2017/04/10",
    "DeliveryDate": "2017/04/14 8:30",
    "SaleAmount": 7200,
    "Terms": "30 Days",
    "CustomerStoreCity": "Denver, CO",
    "Employee": "Todd Hoffman"
}, {
    "ID": 81,
    "OrderNumber": 188877,
    "OrderDate": "2017/02/11",
    "DeliveryDate": "2017/02/17 16:00",
    "SaleAmount": 8750,
    "Terms": "30 Days",
    "CustomerStoreCity": "Phoenix, AZ",
    "Employee": "Clark Morgan"
}, {
    "ID": 82,
    "OrderNumber": 191883,
    "OrderDate": "2017/02/05",
    "DeliveryDate": "2017/02/10 18:30",
    "SaleAmount": 9900,
    "Terms": "30 Days",
    "CustomerStoreCity": "Los Angeles, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 83,
    "OrderNumber": 192474,
    "OrderDate": "2017/01/21",
    "DeliveryDate": "2017/01/27 12:45",
    "SaleAmount": 12800,
    "Terms": "30 Days",
    "CustomerStoreCity": "Anaheim, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 84,
    "OrderNumber": 193847,
    "OrderDate": "2017/03/21",
    "DeliveryDate": "2017/03/24 9:00",
    "SaleAmount": 14100,
    "Terms": "30 Days",
    "CustomerStoreCity": "San Diego, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": 85,
    "OrderNumber": 194877,
    "OrderDate": "2017/03/06",
    "DeliveryDate": "2017/03/10 18:15",
    "SaleAmount": 4750,
    "Terms": "30 Days",
    "CustomerStoreCity": "San Jose, CA",
    "Employee": "Jim Packard"
}, {
    "ID": 86,
    "OrderNumber": 195746,
    "OrderDate": "2017/05/26",
    "DeliveryDate": "2017/06/02 17:00",
    "SaleAmount": 9050,
    "Terms": "30 Days",
    "CustomerStoreCity": "Las Vegas, NV",
    "Employee": "Harv Mudd"
}, {
    "ID": 87,
    "OrderNumber": 197474,
    "OrderDate": "2017/03/02",
    "DeliveryDate": "2017/03/03 11:00",
    "SaleAmount": 6400,
    "Terms": "30 Days",
    "CustomerStoreCity": "Reno, NV",
    "Employee": "Clark Morgan"
}, {
    "ID": 88,
    "OrderNumber": 198746,
    "OrderDate": "2017/05/09",
    "DeliveryDate": "2017/05/12 15:45",
    "SaleAmount": 15700,
    "Terms": "30 Days",
    "CustomerStoreCity": "Denver, CO",
    "Employee": "Todd Hoffman"
}, {
    "ID": 91,
    "OrderNumber": 214222,
    "OrderDate": "2017/02/08",
    "DeliveryDate": "2017/02/10 9:45",
    "SaleAmount": 11050,
    "Terms": "30 Days",
    "CustomerStoreCity": "Phoenix, AZ",
    "Employee": "Clark Morgan"
}];

    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columnsAutoWidth: true,
        showBorders: true,
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Search..."
        },
        headerFilter: {
            visible: true
        },
        columns: [{
            dataField: "OrderNumber",
            caption: "Invoice Number",
            width: 140,
            headerFilter: {
                groupInterval: 10000
            }
        }, {
            dataField: "OrderDate",
            alignment: "right",
            dataType: "date",
            width: 120,
            calculateFilterExpression: function(value, selectedFilterOperations, target) {
                if(target === "headerFilter" && value === "weekends") {
                    return [[getOrderDay, "=", 0], "or", [getOrderDay, "=", 6]];
                }
                return this.defaultCalculateFilterExpression.apply(this, arguments);
            },
            headerFilter: {
                dataSource: function(data) {
                    data.dataSource.postProcess = function(results) {
                        results.push({
                            text: "Weekends",
                            value: "weekends"
                        });                        
                        return results;
                    };
                }
            }
        }, {
            dataField: "DeliveryDate",
            alignment: "right",
            dataType: "datetime",
            width: 180,
            format: "M/d/yyyy, HH:mm"
        }, {
            dataField: "SaleAmount",
            alignment: "right",
            format: "currency",
            editorOptions: {
                format: "currency",
                showClearButton: true
            },
            headerFilter: {
                dataSource: [ {
                    text: "Less than $3000",
                    value: ["SaleAmount", "<", 3000]
                }, {
                    
                    text: "$3000 - $5000",
                    value: [["SaleAmount", ">=", 3000], ["SaleAmount", "<", 5000]]
                }, {
                    
                    text: "$5000 - $10000",
                    value: [["SaleAmount", ">=", 5000], ["SaleAmount", "<", 10000]]
                }, {
                    
                    text: "$10000 - $20000",
                    value: [["SaleAmount", ">=", 10000], ["SaleAmount", "<", 20000]]
                }, {                    
                    text: "Greater than $20000",
                    value: ["SaleAmount", ">=", 20000]
                }]
            }
        }, "Employee", {
            caption: "City",
            dataField: "CustomerStoreCity",
            headerFilter: {
                allowSearch: true
            }
            }]
    }).dxDataGrid('instance');
    
    var applyFilterTypes = [{
        key: "auto",
        name: "Immediately"
    }, {
        key: "onClick",
        name: "On Button Click"
    }];
    
    var applyFilterModeEditor = $("#useFilterApplyButton").dxSelectBox({
        items: applyFilterTypes,
        value: applyFilterTypes[0].key,
        valueExpr: "key",
        displayExpr: "name",
        onValueChanged: function(data) {
            dataGrid.option("filterRow.applyFilter", data.value);
        }
    }).dxSelectBox("instance");
    
    $("#filterRow").dxCheckBox({
        text: "Filter Row",
        value: true,
        onValueChanged: function(data) {
            dataGrid.clearFilter();
            dataGrid.option("filterRow.visible", data.value);
            applyFilterModeEditor.option("disabled", !data.value);
        }
    });
    
    $("#headerFilter").dxCheckBox({
        text: "Header Filter",
        value: true,
        onValueChanged: function(data) {
            dataGrid.clearFilter();
            dataGrid.option("headerFilter.visible", data.value);
        }
    });
    
    function getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }


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
var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
$("#type-deal__radioGroup").dxRadioGroup({
        items: typeDealitem,
     });

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
        redrawOnResize: function (){alert($('.rangeselector .dxrs-range-selector-line').offset());},
        onDrawn: function (){
        	
        	$( ".rangeselector .dx-visibility-change-handler" ).append( "<div class='rangeselector__back'></div>");
        	// $('.rangeselector__back').width($('.rangeselector .dxrs-range-selector-line').width());
        }

    });
});
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


    $("#period__switch").dxSwitch({
        value: false
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
    var simpleProducts = [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote Bluetooth",
    "ExcelRemote IP"
];
    $("#productsSelection").dxTagBox({
        items: simpleProducts,
        showSelectionControls: true,
        placeholder: "Выберите",
        showDropDownButton: true
        // applyValueMode: "useButtons"
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
$('.header-currency__lang').click( function () {
	$('.header-currency__lang').toggleClass('header-currency__lang--ru');
	$('.header-currency__lang').toggleClass('header-currency__lang--en');
});
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