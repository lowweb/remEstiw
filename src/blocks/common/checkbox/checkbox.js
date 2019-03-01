function checkboxInit (element, text) {
    $("[id="+element+"]").dxCheckBox({
        text: text,
        value: false,
    });
};

checkboxInit ("used-cargo__checkbox", "Бывший в употреблении");
checkboxInit ("home-cargo__checkbox", "Домашние вещи");
checkboxInit ("humane-cargo__checkbox", "Гуманитарная помощь");
checkboxInit ("oversize-cargo__checkbox", "Негабаритный");
checkboxInit ("danger-cargo__checkbox", "Опасный груз");
checkboxInit ("law-cargo__checkbox", "Юридическое сопровождение (ваши интересы в суде)");
checkboxInit ("bay-cargo__checkbox", "Купить");
checkboxInit ("deliver-cargo__checkbox", "Доставить груз");
checkboxInit ("safer__checkbox", "Надежнёе");
checkboxInit ("faster__checkbox", "Быстрее");
checkboxInit ("cheaper__checkbox", "Дешевле");

checkboxInit ("custom-clearence__import-checkbox", "При импорте");
checkboxInit ("custom-clearence__export-checkbox", "При экспорте");

checkboxInit ("cargo-escort__gun-checkbox", "С огнестрельным оружием");


checkboxInit ("expertise__accept-checkbox ", "При приёмке");
checkboxInit ("expertise__delivery-checkbox ", "При сдаче");  

checkboxInit ("documentary-credit__add-checkbox", "Данные аккредитива сообщу дополнительно"); 

checkboxInit ("expertise-optionally__depart-checkbox", "В пункте отправления");
checkboxInit ("expertise-optionally__dest-checkbox", " В пункте назначения");
checkboxInit ("expertise-optionally__anotherplace-checkbox", "Дополнительно в другом месте");
