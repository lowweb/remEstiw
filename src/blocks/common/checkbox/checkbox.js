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
checkboxInit ("custom-clearence-gd__import-checkbox", "Для экспорта из России");
checkboxInit ("custom-clearence-gd__export-checkbox", "Для импорта в России");

checkboxInit ("cargo-escort__gun-checkbox", "С огнестрельным оружием");


checkboxInit ("expertise__accept-checkbox ", "При приёмке");
checkboxInit ("expertise__delivery-checkbox ", "При сдаче");  

checkboxInit ("documentary-credit__add-checkbox", "Данные аккредитива сообщу дополнительно"); 

checkboxInit ("expertise-optionally__depart-checkbox", "В пункте отправления");
checkboxInit ("expertise-optionally__dest-checkbox", " В пункте назначения");
checkboxInit ("expertise-optionally__anotherplace-checkbox", "Дополнительно в другом месте");

checkboxInit ("coast-incoterms__1checkbox", "Есть готовые");
checkboxInit ("coast-incoterms__2checkbox", "Будут выпущены");
checkboxInit ("coast-incoterms__3checkbox", "Выпустить");
checkboxInit ("coast-incoterms__4checkbox", "По решению исполнителя");

checkboxInit ("common-cargo-params-bulk", "Указать размеры фракций или составляющих массу");

checkboxInit ("common-goodies-params__checkbox", "Будет выпущено классификационное решение ФТС РФ");

checkboxInit ("common-cargo-params-container__checkbox", "Не возражаю против перегрузки в другие контейнера в транзитных пунктах");

checkboxInit ("oversize-rzd__checkbox", "Не уверен, прошу определить по чертежу");

checkboxInit ("ccp-mass-bulk-open__checkbox", "Указать размеры фракций или составляющих массу");

checkboxInit ("requestall__filter-checkbox", "Доставить груз");
checkboxInit ("requestall__filter-checkbox1", "Купить");
checkboxInit ("basic-info__test", "Необходимо испытание образцов перед оплатой");
checkboxInit ("suppagree1__checkbox", "Дополнительное соглашение №1 (ТЭО)");
checkboxInit ("suppagree2__checkbox", "Дополнительное соглашение №2 (LCL)");
checkboxInit ("suppagree3__checkbox", "Дополнительное соглашение №3 (Покупка)");
checkboxInit ("suppagree4__checkbox", "Дополнительное соглашение №4 (Юридические услуги)");
checkboxInit ("suppagree5__checkbox", "Дополнительное соглашение №5 (ЭОД)");
checkboxInit ("contrct-iagree-checkbox", "Я согласен с условиями договора и дополнительных соглашений к нему");






 