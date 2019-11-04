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

selectBoxInitForClass("pseudoClassSelectBox", [ "значение", "значение", "значенадывжлавдылажвылаие 123456789" ],"pseudoNameElementSelectBox__id","input-field__value");





function selectBoxForChat (classElement, dataS, inputAttrId, inputAttrVal ) {
    $("." + classElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        fieldTemplate: function (data, container) {
            var result = $("<div class='messages__custom-select'><div class='messages__dialog-type-select-color messages__dialog-type-select-color--green'></div><div class='messages__dialog-type-name'></div></div>");
            result
                .find(".messages__dialog-type-name")
                .dxTextBox({
                    value: data && data.typeName,
                    readonly: true,
                    inputAttr: {
                        id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а••
                        class: inputAttrVal //обязятельный класс
                       }
                });
            container.append(result);
        },
        itemTemplate: function (data) {
            return "<div class='messages__custom-select-list'><div class='messages__dialog-type-select-color messages__dialog-type-select-color--"+data.type+"'></div><div class='messages__dialog-type-name'>"+data.typeName+"</div></div>";
        },
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};



