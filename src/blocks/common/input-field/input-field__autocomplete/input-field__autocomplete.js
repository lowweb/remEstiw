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

function autocompleteInit (idElement,attrId, attrVal) {

$("#"+idElement).dxAutocomplete({
  inputAttr: {
       id: attrId,
       class: attrVal
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            //обязательный шаблон
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({                         //необходим если есть валидация
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
};


autocompleteInit ("departName","departName__id","input-field__value");
autocompleteInit ("destName","destName__id","input-field__value");
autocompleteInit ("citySearch","citySearch__id","input-field__value");
autocompleteInit ("modalCity","modalCity__id","input-field__value");



function autocompleteInitClass (idElement,attrId, attrVal) {

$("."+idElement).dxAutocomplete({
  inputAttr: {
       id: attrId,
       class: attrVal
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            //обязательный шаблон
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({                         //необходим если есть валидация
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
};
autocompleteInitClass ("input-field__city","input-field__city-id","input-field__value");
autocompleteInitClass ("input-field__search","input-field__search-id","input-field__value"); //инициализировали как город только для примера






