//-----------customs-clearance-3agent-modal
var employees = [{
    "ID": 1,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 2,
    "Forma": "ЗАО",
    "Name": "Простое название контрагента",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "Елизово ул. Бассейная, 76",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 3,
    "Forma": "ПАО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "Мохачкала",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 4,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
},{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
} 
,{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
} 
,{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
} 
,{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
} 
,{
    "ID": 5,
    "Forma": "ООО",
    "Name": "Достаточно длинное наименование контрагента «Корпорация Креветка»",
    "Tel": "+ 7 923 456 78 90",
    "Email": "mymail@mail.com",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23",
    "Inn": "123456789012",
    "state": false
}  ];

function initDataGrid () {
    var dataGrid =  $("#gridContainer").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        selection: {
            mode: "single"
        },
        scrolling: {
            mode: "virtual"
        },
        hoverStateEnabled: true,
        showBorders: true,
        columns: 

        [{
            dataField: "Forma",
            caption: "Форма собств.",
            width: 115
        },
        {
            dataField: "Name",
            caption: "Наименование контрагента",
             width: 249,

            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку, навешиваем элемент radiogroup
            $('<div class="datagrid__custom-radio-cell">')    //навешиваем  template иницилизируем его как radiogroup
            .appendTo(cellElement)
            .dxRadioGroup({ 
                items: [{id: 1}],
                valueExpr: 'id',
                value: cellInfo.data.state ? 1 : null,
                onValueChanged: function(e) {                    
                    clearState(dataGrid.option("dataSource"), cellInfo.data.id);
                    dataGrid.refresh();
                    }
                })
                .append($("<a href='#''>"+cellInfo.data.Name+"</a>"))
             }, 

            cssClass: "datagrid__link-cell" //обязательный класс
        }, 
        {
            dataField: "Tel",
            caption: "Телефон",
            width: 153
         
        },   
        {
            dataField: "Email",
            caption: "Email",
            width: 144
        }, 
        {
            dataField: "Location",
            caption: "Местоположение",
            width: 180
        }, 
        {
            dataField: "Inn",
            caption: "ИНН",
            width: 138
        }],

        filterRow: {
            applyFilter: "auto",
            applyFilterText: "Apply filter",
            betweenEndText: "End",
            betweenStartText: "Start",
            resetOperationText: "Reset",
            showAllText: "",
            showOperationChooser: true,
            visible: true
            },
        showColumnLines: true,
        showRowLines: true,    
    }).data("dxDataGrid");
};


//-----------dataGridRequestAll-------------
var requestAllData = [{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019'
},
{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019',
    "connected" : 1
},
{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019',
    "connected" : 2
},
{
    "ID": 1,
    "Number": "001",
    "Name": "Очень длинное название запроса на доставку и покупку в три строки (обрезается по кол-ву символов...",
    "SendDest": " Владивосток, Россия (CY) → Петропавловск-Камчатский, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '06.12.2018 – 14.02.2019'
},
{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019'
},
,
{
    "ID": 1,
    "Number": "001",
    "Name": "Очень длинное название запроса на доставку и покупку в три строки (обрезается по кол-ву символов...",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019',
    "connected" : 1
},
{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019',
    "connected" : 2
}, 
{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Date" : '14.02.2019'
}, 
{
    "ID": 1,
    "Number": "001",
    "Name": "Достаточно длинное название запроса",
    "SendDest": "Москва, Россия (CY) → Тверь, Россия (CY)",
    "Cond": "Передан на согласование",
    "Qnt": 999,
    "Vol": 999,
    "Weight": 999,
    "After": "Передать на хранение",
    "Sum": 999999,
    "Saller": "Компания 'Креветка'",
    "Date" : '14.02.2019'
}  ];

 $("#dataGridRequestAll").dxDataGrid({
        dataSource: requestAllData,
        keyExpr: "ID",
        width: 1550,
        editing: {
            // allowDeleting: true,
            form: null,
            mode: "row",
            popup: null,
            refreshMode: "full",
            texts: {},
            useIcons: true
            },
        hoverStateEnabled: true,
        showBorders: true,
        columns: 

        [{
            dataField: "Number",
            caption: "Номер",
            width: 100
        },
        {
            dataField: "Name",
            caption: "Наименование запроса",
             width: 343,

            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку, навешиваем элемент radiogroup
            $('<div class="datagrid__custom-radio-cell">')    //навешиваем  template иницилизируем его как radiogroup
            .appendTo(cellElement)
              .append($("<a href='#''>"+cellInfo.data.Name+"</a>"))
             }, 
            cssClass: "datagrid__link-cell" //обязательный класс
        }, 
        {
            dataField: "SendDest",
            caption: "Отправление → Назначение",
            width: 266
         
        },   
        {
            dataField: "Cond",
            caption: "Состояние",
            width: 194
        }, 
        {
            dataField: "Qnt",
            caption: "Кол-во",
            width: 116
        }, 
        {
            dataField: "Vol",
            caption: "Объём, м³",
            width: 129
        },
        {
            dataField: "Weight",
            caption: "Масса, кг",
            width: 122
        },
        {
            dataField: "Date",
            caption: "Дата готовности",
            width: 208
        },
        { 
            width: 70,
            cellTemplate: function(cellElement, cellInfo) {   //кнопка удаления
            $("<button class='btn__rnd--del btn__rnd filelist__btn-del'></button>")    
            .appendTo(cellElement)
              .append($("<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg>"))
             }
  
        }],

        filterRow: {
            applyFilter: "auto",
            applyFilterText: "Apply filter",
            betweenEndText: "End",
            betweenStartText: "Start",
            resetOperationText: "Reset",
            showAllText: "",
            showOperationChooser: true,
            visible: true
            },
        showColumnLines: true,
        showRowLines: true,    
    }).data("dxDataGrid");


//----------dataGridRequestAllConnected--------------
var dgRowCount=1;
 $("#dataGridRequestAllConnected").dxDataGrid({
        dataSource: requestAllData,
        // columnAutoWidth: true,
        rowTemplate: function(container, item) {
            var data = item.data, tamplate='',dgConnected = '', tdClass='', trClass='', dgConnectedSg='';
        //раскраска строки
         if (dgRowCount % 2 == 0)
         {
            trClass="dg-row2nt";
         }
        //левая полоса
            if (data.connected==1) {
                dgConnected = "'dg-connected'";
                dgConnectedSg = "class='dg-connection-sg'";
            }
            else if (data.connected==2) {
                dgConnected = "'dg-connected'";
                dgRowCount++;
            }
            else  {
              dgConnected = '';
              // if (dgRowCount!=1)
                dgRowCount ++;
            }
            tdClass="class=" + dgConnected;
                tamplate = "<tbody role='presentation'>" +
                    "<tr class='dx-row dx-data-row dx-row-lines dx-column-lines " + trClass+ "' role='row'>" +
                        "<td "+ tdClass +" role='gridcell'>" + data.Number+"</td>" + 
                        "<td role='gridcell' class='datagrid__link-cell'><a href='#'>"+data.Name+"</a></td>" + 
                        "<td role='gridcell'>" + data.SendDest+"</td>" + 
                        "<td role='gridcell'>" + data.Cond+"</td>" + 
                        "<td role='gridcell'>" + data.Qnt+"</td>" + 
                        "<td role='gridcell'>" + data.Vol+"</td>" + 
                        "<td role='gridcell'>" + data.Weight+"</td>" + 
                        "<td role='gridcell'>" + data.Date+ "</td>" +
                        "<td role='gridcell'><button class='btn__rnd--del btn__rnd filelist__btn-del'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg></button></td>" +
                        // "<td class='dx-command-edit dx-command-edit-with-icons' aria-selected='false' role='gridcell' aria-colindex='9' style='text-align: center;'><a href='#' class='dx-link dx-link-delete dx-icon-trash' title='Delete'></a>&nbsp;</td>"+ 
                    "</tr>" +
                    "<th "+ dgConnectedSg +"></th>"+
            "</tbody>";
            container.append(tamplate);
            
        },
        keyExpr: "ID",
        width: 1550,
        editing: {
            // allowDeleting: true,
            form: null,
            mode: "row",
            popup: null,
            refreshMode: "full",
            texts: {},
            useIcons: true
            },
        hoverStateEnabled: true,
        showBorders: true,
        columns: 

        [{
            dataField: "Number",
            caption: "Номер",
            width: 100
        },
        {
            dataField: "Name",
            caption: "Наименование запроса",
             width: 343,
        }, 
        {
            dataField: "SendDest",
            caption: "Отправление → Назначение",
            width: 266
         
        },   
        {
            dataField: "Cond",
            caption: "Состояние",
            width: 194
        }, 
        {
            dataField: "Qnt",
            caption: "Кол-во",
            width: 116
        }, 
        {
            dataField: "Vol",
            caption: "Объём, м³",
            width: 129
        },
        {
            dataField: "Weight",
            caption: "Масса, кг",
            width: 122
        },
        {
            dataField: "Date",
            caption: "Дата готовности",
            width: 208
        },
        {
            width: 70
        }],

        filterRow: {
            applyFilter: "auto",
            applyFilterText: "Apply filter",
            betweenEndText: "End",
            betweenStartText: "Start",
            resetOperationText: "Reset",
            showAllText: "",
            showOperationChooser: true,
            visible: true
            },
        showColumnLines: true,
        showRowLines: true,    
    }).data("dxDataGrid");


//----------dataGridRequestBuy-------------
var dgRowCount=1;
 $("#dataGridRequestBuy").dxDataGrid({
        dataSource: requestAllData,
        // columnAutoWidth: true,
        rowTemplate: function(container, item) {
            var data = item.data,tamplate='',afterPay='';
            //data.connected исключительно для примера
            if (data.connected==1) {
                afterPay = "class='dg__icn-after-pay'";
            }
                tamplate = "<tbody role='presentation'>" +
                    "<tr class='dx-row dx-data-row dx-row-lines dx-column-lines' role='row'>" +
                        "<td role='gridcell'>" + data.Number+"</td>" + 
                        "<td role='gridcell' class='datagrid__link-cell'><a href='#'>"+data.Name+"</a></td>" + 
                        "<td role='gridcell'>" + data.Saller+"</td>" + 
                        "<td role='gridcell'>" + data.Cond+"</td>" + 
                        "<td role='gridcell'>" + data.Qnt+"</td>" + 
                        "<td role='gridcell'>" + data.Sum+"</td>" + 
                        "<td "+ afterPay +" role='gridcell'>" + data.After+"</td>" + 
                        "<td role='gridcell'><button class='btn__rnd--del btn__rnd filelist__btn-del'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg></button></td>" +
                        // "<td class='dx-command-edit dx-command-edit-with-icons' aria-selected='false' role='gridcell' aria-colindex='9' style='text-align: center;'><a href='#' class='dx-link dx-link-delete dx-icon-trash' title='Delete'></a>&nbsp;</td>"+ 
                    "</tr>"
            "</tbody>";
            container.append(tamplate);
            
        },
        keyExpr: "ID",
        width: 1550,
        editing: {
            // allowDeleting: true,
            form: null,
            mode: "row",
            popup: null,
            refreshMode: "full",
            texts: {},
            useIcons: true
            },
        hoverStateEnabled: true,
        showBorders: true,
        columns: 

        [{
            dataField: "Number",
            caption: "Номер",
            width: 107
        },
        {
            dataField: "Name",
            caption: "Наименование запроса",
             width: 254,
        }, 
        {
            dataField: "Saller",
            caption: "Продавец",
            width: 278
         
        },   
        {
            dataField: "Cond",
            caption: "Состояние",
            width: 181
        }, 
        {
            dataField: "Qnt",
            caption: "Кол-во",
            width: 153
        }, 
        {
            dataField: "Sum",
            caption: "Общая стоимость",
            width: 165
        },
        {
            dataField: "After",
            caption: "После оплаты",
            width: 340
        },
        {
            width: 70
        }],

        filterRow: {
            applyFilter: "auto",
            applyFilterText: "Apply filter",
            betweenEndText: "End",
            betweenStartText: "Start",
            resetOperationText: "Reset",
            showAllText: "",
            showOperationChooser: true,
            visible: true
            },
        showColumnLines: true,
        showRowLines: true,    
    }).data("dxDataGrid");

//-----------company requisites --------------//
var companyReq = [{
    "ID": 1,
    "Number": "01",
    "Name": "Азиатско-Тихоокеанский Банк",
    "Status": "Резидент",
    "BIKSWF": "123456789", 
    "RS": "12345678909876543212",
    "Desk": "",
},
{
    "ID": 2,
    "Number": "02",
    "Name": "KOREA EXCHANGE BANK (TOEGYERO BRANCH)",
    "Status": "Резидент",
    "BIKSWF": "123456789", 
    "RS": "12345678909876543212",
    "Desk": "",
},
{
    "ID": 3,
    "Number": "03",
    "Name": "Газпромбанк",
    "Status": "Резидент",
    "BIKSWF": "123456789", 
    "RS": "12345678909876543212",
    "Desk": "",
    "Def": true,
},
{
    "ID": 4,
    "Number": "04",
    "Name": "Азиатско-Тихоокеанский Банк",
    "Status": "Резидент",
    "BIKSWF": "123456789", 
    "RS": "12345678909876543212",
    "Desk": "",
},
{
    "ID": 5,
    "Number": "05",
    "Name": "Азиатско-Тихоокеанский Банк",
    "Status": "Резидент",
    "BIKSWF": "123456789", 
    "RS": "12345678909876543212",
    "Desk": "",
},
{
    "ID": 6,
    "Number": "06",
    "Name": "Азиатско-Тихоокеанский Банк",
    "Status": "Резидент",
    "BIKSWF": "123456789", 
    "RS": "12345678909876543212",
    "Desk": "",
}
];

 $("#dataGridCompanyReq").dxDataGrid({
        dataSource: companyReq,
        keyExpr: "ID",
        width: 1392,
        editing: {
            form: null,
            mode: "row",
            popup: null,
            refreshMode: "full",
            texts: {},
            useIcons: true
            },
            selection: {
            mode: "single"
        },
        hoverStateEnabled: true,
        showBorders: true,
        onSelectionChanged: function(e) {
            e.component.collapseAll(-1);
            e.component.expandRow(e.currentSelectedRowKeys[0]);
        },
        onContentReady: function(e) {
            if(!e.component.getSelectedRowKeys().length)
                e.component.selectRowsByIndexes(0);
            checkboxInit ("company-req-def-checkbox", "Основные реквизиты");
        },
        columns: 

        [{
            dataField: "Number",
            caption: "Номер",
            width: 69,
            alignment: "center",
        },
        {
            dataField: "Name",
            caption: "Наименование банка",
             width: 366,

            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку, навешиваем элемент radiogroup
            if (cellInfo.data.Def == true) {
                $('<div class="datagrid__custom-cell--def">')    //навешиваем  template иницилизируем его как radiogroup
                .appendTo(cellElement)
                 .append($("<a href='#''>"+cellInfo.data.Name+"</a>"))
            }
            else
                $('<div class="datagrid__custom-cell">')    //навешиваем  template иницилизируем его как radiogroup
                 .appendTo(cellElement)
                 .append($("<a href='#''>"+cellInfo.data.Name+"</a>"))


             }, 
            cssClass: "datagrid__link-cell--dash" //обязательный класс
        }, 
        {
            dataField: "Status",
            caption: "Статус",
            width: 133
         
        },   
        {
            dataField: "BIKSWF",
            caption: "БИК/SWIFT",
            width: 163
        }, 
        {
            dataField: "RS",
            caption: "Расчётный счёт",
            width: 260
        }, 
        {
            dataField: "Desk",
            caption: "Описание",
            width: 329
        },
        { 
            width: 70,
            cellTemplate: function(cellElement, cellInfo) {   //кнопка удаления
            $("<button class='btn__rnd--del btn__rnd filelist__btn-del'></button>")    
            .appendTo(cellElement)
              .append($("<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg>"))
             }
  
        }],
        // summary: {
        //     totalItems: [{
        //             column: "Name"
        //         }
        //     ]
        // },
        masterDetail: {
            enabled: false,
            template: function(container, options) { 
                return $($('.company-req-templ').html());
            }
        },
        showColumnLines: true,
        showRowLines: true, 
        //для перерисовки summary
        // onCellPrepared: function(e) {  
        //    if (e.rowType == 'totalFooter') {  
        //        var summaryItem = e.cellElement.find('.dx-datagrid-summary-item');  
        //        if (summaryItem.length > 0) {  
        //            $.each(summaryItem, function(_, item) {  
        //               $(item).html("<button class='btn__rnd btn__rnd--add app-lnk'><span class='btn__rnd-cap btn__rnd-cap--nodash'>Добавить</span><svg width='16' height='16' fill='none' class='svg replaced-svg'><path d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-2A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm1-7h3v2H9v3H7V9H4V7h3V4h2v3z' fill='#0073BE'></path></svg></button>")  
        //            });  
        //        }  
        //    }  
        // }, 
    }).data("dxDataGrid");

 //-------------------------------------------------------------//

var s = 123456789;
var random = function() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
};

var generateData = function (count) {
    var i;
    var surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
    var names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
    var gender = ['Male', 'Female'];
    var items = [],
        startBirthDate = Date.parse('1/1/1975'),
        endBirthDate = Date.parse('1/1/1992');

    for (i = 0; i < count; i++) {
        var birthDate = new Date(startBirthDate + Math.floor(
                random() * 
                (endBirthDate - startBirthDate) / 10));
        birthDate.setHours(12);

        var nameIndex = random();
        var item = {
            id: i + 1,
            firstName: names[nameIndex],
            lastName: surnames[random()],
            gender: gender[Math.floor(nameIndex / 5)],
            birthDate: birthDate
        };
        items.push(item);
    }
    return items;
};

$("#gridContainerr").dxDataGrid({
        dataSource: generateData(1000),
        showBorders: true,
        customizeColumns: function (columns) {
            columns[0].width = 70;
        },
        loadPanel: {
            enabled: true
        },
        scrolling: {
            mode: "virtual"
        },
        sorting: {
            mode: "none"
        },
        onContentReady: function(e) {
            e.component.option("loadPanel.enabled", false);
        }
    });
