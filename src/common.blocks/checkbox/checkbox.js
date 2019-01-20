
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
