//click checkbox element
  $('.checkbox').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$(this).parent().parent().removeClass('field-set--error');
    }
  });

  //click checkbox element
  $('.radiogroup').click(function(){
  	console.log ('radio');
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$(this).parent().parent().removeClass('field-set--error');
    }
  });

  //jump to link
	$(document).on("click", ".summary-error__href", function(e){
   	e.preventDefault();
		 document.querySelector(this.hash).scrollIntoView();		 
		  $(this.hash).fadeOut(350).fadeIn(250); 
		});

//check error
$('#submitButton').click(function(){
	// console.log ('fsdf');
	 $('.field-set__error').empty();
	 var checkedFld=false;
	 var fieldSet = document.getElementsByClassName("field-set");

	for(var i=0; i < fieldSet.length; i++){


	  var elementChk = $(fieldSet[i]).find('.checkbox');

	  //check checkbox
	  for(var j=0; j < elementChk.length; j++){
	  	if ($(elementChk[j]).hasClass("dx-checkbox-checked")) { checkedFld=true;}
	  }
	  if (!checkedFld && $(fieldSet[i]).find('.checkbox').length>0) {
	  	$(fieldSet[i]).addClass('field-set--error');
	  	$('.summary-error').append('<p><a class="summary-error__href" href="#' + $(fieldSet[i]).attr('id') + '">Необходимо выбрать один или несколько вариантов</a></p>');
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
	  	$(fieldSet[i]).addClass('field-set--error');
	  	$('.summary-error').append('<p><a class="summary-error__href" href="#' + $(fieldSet[i]).attr('id') + '">Необходимо выбрать один или несколько вариантов</a></p>');
	  }
	   if (checkedFld && $(fieldSet[i]).find('.dx-radiobutton').length>0) {
	  	$(fieldSet[i]).removeClass('field-set--error');
	  	checkedFld=false;
	  }
	  //end check radiogroup


	 }


});