var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
var volumeItem = ["До 5 м", "Свыше 5 м"];
var cargoCheracterItem = ["Однородный (массовый)", "Однородный (не массовый)","Однородный в упаковке", "Не однородный в/без упаковки/и", "Одно грузовое место", "Жидкость без упаковки"];
var transportModItem = ["Груз навалом", "Загрузить в контейнер", "Уже загружен в контейнер", "По решению исполнителя"];
var specialConditionsItem = ["На верхней палубе судна", "Открытое хранение", "Крытое хранение", "Температурный режим"];


function radiogroupInit (idRadio, items, layout) {
$("#"+idRadio).dxRadioGroup({
        items: items,
        layout: layout
    });
};

radiogroupInit ("type-deal__radioGroup",typeDealitem,"");
radiogroupInit ("volume-cargo__radioGroup",volumeItem);
radiogroupInit ("cargo-cheracter__radioGroup",cargoCheracterItem,"");
radiogroupInit ("transport-mod__radioGroup",transportModItem,"");
radiogroupInit ("special-conditions__radioGroup",specialConditionsItem,"");
radiogroupInit ("cargo-receiver__radioGroup",cargoReceiverItem,"horizontal");
radiogroupInit ("HBL__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-escort__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-exam__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-insura__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("custom-clear__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-exam__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");