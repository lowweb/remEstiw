var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
var volumeItem = ["До 5 м", "Свыше 5 м"];
var cargoCheracterItem = ["Однородный (массовый)", "Однородный (не массовый)","Однородный в упаковке", "Не однородный в/без упаковки/и", "Одно грузовое место", "Жидкость без упаковки"];
var transportModItem = ["Груз навалом", "Загрузить в контейнер", "Уже загружен в контейнер", "По решению исполнителя"];
var specialConditionsItem = ["На верхней палубе судна", "Открытое хранение", "Крытое хранение", "Температурный режим"];


function radiogroupInit (idRadio, items, layout) {
$("[id="+idRadio+"]").dxRadioGroup({
        items: items,
        layout: layout
    });
};
function radiogroupClassInit (idRadio, items, layout) {
$("."+idRadio).dxRadioGroup({
        items: items,
        layout: layout
    });
};
radiogroupClassInit ("radio--empt",[""],"");
radiogroupInit ("type-deal__radioGroup",typeDealitem,"");
radiogroupInit ("volume-cargo__radioGroup",volumeItem);
radiogroupInit ("cargo-cheracter__radioGroup",cargoCheracterItem,"");
radiogroupInit ("transport-mod__radioGroup",transportModItem,"");
radiogroupInit ("special-conditions__radioGroup",specialConditionsItem,"");
radiogroupInit ("cargo-receiver__radioGroup",cargoReceiverItem,"horizontal");
radiogroupInit ("HBL__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-escort__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");

//step2
radiogroupInit ("сargo-exam__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-insura__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("custom-clear__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-exam__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");

//step3
radiogroupInit ("custom-clearence__export-radio",["Самостоятельно", "Оформить"],"horizontal");
radiogroupInit ("custom-clearence__import-radio",["Самостоятельно", "Оформить"],"horizontal");

radiogroupInit ("custom-clearence-gd__radio",["Не имеет значения", "В месте отправления","На границе"],"horizontal");

radiogroupInit ("deliver-byself__radioGroup",["Полная предоплата", "Частичная оплата ", "Ценные бумаги", "Уставной капитал", "Бартер", "Фьючерс (будущие расчёты)"],"horizontal");

radiogroupInit ("expertise__point-radio",["В пункте отправления", "В другом месте"],"horizontal");

radiogroupInit ("deliver-executor__radioGroup",["Согласно подписанному ДС №3 c Исполнителем", "Подписать ДС №3 c Исполнителем", "Будет подписано ДС №3 c Исполнителем позже"],"");

radiogroupInit ("cargo-escort-byself__doc-radio",["Да, нужно на всём маршруте", "Да, нужно на выбранных пунктах", "Нет, организую самостоятельно"],"horizontal");

radiogroupInit ("documentary-credit-shiping__radio",["Безотзывный", "Отзывный", "Акцептный", "Безакцептный"],"horizontal");

radiogroupInit ("cargo-descript__hmanygoods-radio",["Один товар", "Два и более (сборное грузовое место)"],"horizontal");

radiogroupInit ("custom-clearence__3agent-radio",["Резидент", "Нерезидент"],"horizontal");
radiogroupInit ("afterPay__radioGroup",["Передать на ответственное хранение", "Передать без транспортировки 3-му лицу", "Доставить 3-му лицу","Доставить заказчику"],"horizontal");
radiogroupInit ("orgaization-form__radioGroup",["Физическое лицо", "Индивидуальный предприниматель", "Юридическое лицо"],"");

radiogroupInit ("you-status__radioGroup",["Резидент", "Нерезидент"],"");
radiogroupInit ("tocargo__radioGroup",["Грузовладелец", "Транспортная компания (экспедитор) – представитель грузовладельца"],"");
radiogroupInit ("customer-endind-radio",["-ое", "-ый" , "-ая"],"horizontal");
radiogroupInit ("custom-clearence-reqedit__radio",["Самостоятельно", "Да, таможенная очистка","Да, транзитное оформление","Не таможенный груз"],"horizontal");
radiogroupInit ("documentary-credit-shiping-reqedit__radio",["Самостоятельно", "Документарный аккредитив","Другие способы оплаты","Через исполнителя"],"horizontal");
radiogroupInit ("cargo-transport-reqedit__radio",["Полная предварительная оплата", "Полная предварительная оплата","Оплата по частям","По факту исполнения"],"horizontal");
radiogroupInit ("goods-exp-reqedit__radio",["Самостоятельно", "Да, при приёмке и сдаче груза","Да, нужно по выбору","Нет, не нужно"],"horizontal");
radiogroupInit ("cargo-insur-reqedit__radio",["Самостоятельно", "Да, на всём маршруте","Да, по выбору","Нет, не нужно"],"horizontal");
radiogroupInit ("cargo-escort-reqedit__radio",["По решению исполнителя", "Да нужно, на всём пути","Да нужно, по выбору","Собственный сопровождающий","Нет, не нужно"],"horizontal");
radiogroupInit ("hbl-reqedit__radio",["Уже выпущен и имеется", "Самостоятельно","Необходимо выпустить","По решению исполнителя","Не нужен"],"horizontal");
radiogroupInit ("version-compare_hdr__radio",["Показать все параметры, в т.ч. с одинаковыми значениями", "Показать только изменённые, несовпадающие параметры"],"horizontal");


//нативный radiogroup request-price
$('input[type="radio"]').on('click change', function(e) {

    // $('.field-set').removeClass('field-set--b-gr');
    $(this).parent().toggleClass('field-set--bg-r');
});


