function checkboxInit (element, text) {
    $("#" + element).dxCheckBox({
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
        