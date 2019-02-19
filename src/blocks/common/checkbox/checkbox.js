

    $("#deliver-cargo__checkbox").dxCheckBox({
        text: "Доставить груз",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });

    $("#bay-cargo__checkbox").dxCheckBox({
        text: "Купить",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });

    $("#law-cargo__checkbox").dxCheckBox({
        text: "Юридическое сопровождение (ваши интересы в суде)",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });

$("#danger-cargo__checkbox").dxCheckBox({
        text: "Опасный груз",
        value: false,
    });
$("#oversize-cargo__checkbox").dxCheckBox({
        text: "Негабаритный",
        value: false,
    });
$("#humane-cargo__checkbox").dxCheckBox({
        text: "Гуманитарная помощь",
        value: false,
    });
$("#home-cargo__checkbox").dxCheckBox({
        text: "Домашние вещи",
        value: false,
    });
$("#used-cargo__checkbox").dxCheckBox({
        text: "Бывший в употреблении",
        value: false,
    });

function checkboxInit (element, text) {
    $("#" + element).dxCheckBox({
        text: text,
        value: false,
    });
};

checkboxInit ("safer__checkbox", "Надежнёе");
checkboxInit ("faster__checkbox", "Быстрее");
checkboxInit ("cheaper__checkbox", "Дешевле");
        