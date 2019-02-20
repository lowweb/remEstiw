function selectBoxInitForId (idElement, dataS, inputAttrId, inputAttrVal ) {
$("#" + idElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInitForId("conditionDest",[ "FCA", "FAS", "FOB" ],"conditionDepart__id","input-field__value");
selectBoxInitForId("conditionDepart",[ "FCA", "FAS", "FOB" ],"conditionDest__id","input-field__value");
//в какой валюте расчитать
selectBoxInitForId("currency-calc",[ "Доллары США (USD)", "Рубли (RUB)"],"currency-calc__id","input-field__value");
//страна в модальном окне
selectBoxInitForId('modal__country-list',[ "Россия", "Америка"],"modal__country-list__id","input-field__value");
//край район область в модальном окне
selectBoxInitForId('modal__region-list',[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");

function selectBoxInitForClass (classElement, dataS, inputAttrId, inputAttrVal ) {
$("." + classElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInitForClass("pseudoClassSelectBox",[ "значение", "значение", "значенадывжлавдылажвылаие123456789" ],"pseudoNameElementSelectBox__id","input-field__value");
