//название запроса
$("#requestName").dxTextBox({
  inputAttr: {
   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
   		 class:"input-field__value" //обязятельный класс
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
        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
    });


// $("#input-field__totalWeight").dxTextBox({
//   inputAttr: {
//        id: "input-field__totalWeight-id",
//        class:"input-field__value" 
//    },
//    width: 128,
//    readOnly: true,
//    value: "100",
// })


//инициализировать элементы необходимо по id элемента
//в верстке реализованна инициализация по классу, для массовости, класс pseudoClassTextEditor на инициализируемом элементе можно удалить, если таковой не применяется
function inputFieldInit (element, elementId, defValue, readOnlyFlag ) {
  $("."+ element).dxTextBox({
  inputAttr: {
       id: elementId,
       class:"input-field__value" 
   },
   value: defValue,
   readOnly: readOnlyFlag
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
        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
    });;
};


inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
inputFieldInit ("pseudoClassTextEditorReadOnly","pseudoClassTextEditorReadOnly__id","100",true);

