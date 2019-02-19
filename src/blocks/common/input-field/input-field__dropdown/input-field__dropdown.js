function selectBoxInit (idElement, dataS, inputAttrId, inputAttrVal ) {
$("#" + idElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInit("conditionDest",[ "FCA", "FAS", "FOB" ],"conditionDepart__id","input-field__value");
selectBoxInit("conditionDepart",[ "FCA", "FAS", "FOB" ],"conditionDest__id","input-field__value");
//в какой валюте расчитать
selectBoxInit("currency-calc",[ "Доллары США (USD)", "Рубли (RUB)"],"currency-calc__id","input-field__value");
//страна в модальном окне
selectBoxInit('modal__country-list',[ "Россия", "Америка"],"modal__country-list__id","input-field__value");
//край район область в модальном окне
selectBoxInit('modal__region-list',[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
