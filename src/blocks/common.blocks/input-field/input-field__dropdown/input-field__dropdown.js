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