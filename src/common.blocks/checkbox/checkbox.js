$("#summary").dxValidationSummary({ });

    $("#deliver-cargo__checkbox").dxCheckBox({
        text: "Доставить груз",
        value: false,
        onValueChanged: function (e) {
            // alert(e.value);
        }
    });
    // .dxValidator({
    //     validationRules: [{
    //         type: "compare",
    //         comparisonTarget: function(){ return true; },
    //         message: "Заполните поле доставить груз"
    //     }]
    // });

    $("#button").dxButton({
        text: "Register",
        type: "success",
        useSubmitBehavior: true
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

