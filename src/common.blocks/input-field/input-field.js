$("#requestName").dxTextBox({
  inputAttr: {
   		 id: "requestName__id",
   		 class:"input-field__value"
   }
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Name is required"
        }, {
            type: "pattern",
            pattern: /^[^0-9]+$/,
            message: "Строка не может содержать цифры"
        }, {
            type: "stringLength",
            min: 2,
            message: "Длина строки не меньше 2 символов"
        }]
    });
//отправление назначеие
$("#departName").dxTextBox({
  inputAttr: {
       id: "departName__id",
       class:"input-field__value"
   }
})
$("#destName").dxTextBox({
  inputAttr: {
       id: "destName__id",
       class:"input-field__value"
   }
})
$("#conditionDest").dxTextBox({
  inputAttr: {
       id: "conditionDest__id",
       class:"input-field__value"
   }
})
$("#conditionDepart").dxTextBox({
  inputAttr: {
       id: "conditionDepart__id",
       class:"input-field__value"
   }
})


//свой знак ошибки
$('.input-field__cont').change ( function () {
	console.log($(this));
	 if( $(this).hasClass('dx-invalid') ){
	 	$(this).parent().find('.input-field__label').addClass('input-field__label--err');
	 }
	 else {
	 	$(this).parent().find('.input-field__label').removeClass('input-field__label--err');
	 }
});

