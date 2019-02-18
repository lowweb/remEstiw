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


$("#input-field__totalWeight").dxTextBox({
  inputAttr: {
       id: "input-field__totalWeight-id",
       class:"input-field__value" 
   },
   width: 128,
   readOnly: true,
   value: "100",
})

function inputFieldInit (element, elementId ) {
  $("#"+ element).dxTextBox({
  inputAttr: {
       id: elementId,
       class:"input-field__value" 
   }
  });
};
inputFieldInit ("pseudoElement","pseudoElement__id");

