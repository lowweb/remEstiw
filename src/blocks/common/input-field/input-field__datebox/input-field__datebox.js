
//Выберите дату
function dateInit (element,attrId, attrVal) {
$("[id="+element+"]").dxDateBox({
      type: "date",
      placeholder: "Введите дату",
      inputAttr: {
         id: attrId,
         class: attrVal
       }   
});
};

dateInit("date-field","date-field__id","input-field__value");

var now = new Date();   
    $("#cargoBeginDate").dxDateBox({
        type: "date",
        placeholder: "Введите дату",
        inputAttr: {
           id: "cargoBeginDate__id",
           class:"input-field__value"
         }
    });
    $("#cargoExpDate").dxDateBox({
        type: "date",
        placeholder: "Введите дату",
        disabled: true,
        inputAttr: {
           id: "cargoExpDate__id",
           class:"input-field__value"
         }
    });


