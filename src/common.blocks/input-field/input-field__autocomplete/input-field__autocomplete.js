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
