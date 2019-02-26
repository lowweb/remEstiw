    var simpleProducts = [
    "Выбор 1",
    "Выбор 12",
    "Выбор 15",
    "Выбор 111",
    "Выбор Выбор 1",
    "Выбор Выбор 2"
];
function tagBoxInit (idElement,idAttrName, itemsElement) {
     $("."+idElement).dxTagBox({
        items: itemsElement,
        showSelectionControls: true,
        placeholder: "Выберите",
        showDropDownButton: true,
        inputAttr: {
         id: idAttrName
        },
        // width: widthElement
    });
};
  
tagBoxInit ("input-field__tagbox","input-field__tagbox-id",simpleProducts);  