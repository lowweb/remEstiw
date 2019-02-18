var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
$("#type-deal__radioGroup").dxRadioGroup({
        items: typeDealitem,
     });

var volumeItem = ["До 5 м", "Свыше 5 м"];
$("#volume-cargo__radioGroup").dxRadioGroup({
        items: volumeItem,
        // value: volumeItem[0]
    });

var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
$("#cargo-receiver__radioGroup").dxRadioGroup({
        items: cargoReceiverItem,
        // value: cargoReceiverItem[0],
        layout: "horizontal"
    });

var cargoCheracterItem = ["Однородный (массовый)", "Однородный (не массовый)","Однородный в упаковке", "Не однородный в/без упаковки/и", "Одно грузовое место", "Жидкость без упаковки"];
$("#cargo-cheracter__radioGroup").dxRadioGroup({
        items: cargoCheracterItem
    });

var transportModItem = ["Груз навалом", "Загрузить в контейнер", "Уже загружен в контейнер", "По решению исполнителя"];
$("#transport-mod__radioGroup").dxRadioGroup({
        items: transportModItem
  
    });
var specialConditionsItem = ["На верхней палубе судна", "Открытое хранение", "Крытое хранение", "Температурный режим"];
$("#special-conditions__radioGroup").dxRadioGroup({
        items: specialConditionsItem
    });


function radiogroupInit (idRadio, items, layout) {
$("#"+idRadio).dxRadioGroup({
        items: items,
        layout: layout
    });
};

radiogroupInit ("HBL__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-escort__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-exam__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-insura__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("custom-clear__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-exam__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");