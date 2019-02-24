    var simpleProducts = [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote Bluetooth",
    "ExcelRemote IP"
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