var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
$("#type-deal__radioGroup").dxRadioGroup({
        items: typeDealitem,
        value: typeDealitem[0]
    });

var volumeItem = ["До 5 м", "Свыше 5 м"];
$("#volume-cargo__radioGroup").dxRadioGroup({
        items: volumeItem,
        value: volumeItem[0]
    });

var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
$("#cargo-receiver__radioGroup").dxRadioGroup({
        items: cargoReceiverItem,
        value: cargoReceiverItem[0],
        layout: "horizontal"
    });