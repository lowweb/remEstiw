
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
		 document.querySelector(this.hash).scrollIntoView(true);
		 // console.log ($('.view-container').offset().top + '=' + $(this.hash).offset().top);
		 // console.log (Math.abs($('.view-container').offset().top) + $('.header').height());
		 $(".view").animate({scrollTop: Math.abs($('.view-container').offset().top) + $('.header').height() - 50  },"slow");	
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