

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
    "Desk": "Short description for a ban",
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
    "Desk": "Short description for a ban",
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
    "Desk": "Short description for a ban",
}
];



 $("#dataGridCompanyReq").dxDataGrid({
        dataSource: companyReq,
        keyExpr: "ID",
        width: "100%",
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
            rowIndexCompanyTb = e;
            e.component.collapseAll(-1);
            e.component.expandRow(e.currentSelectedRowKeys[0]);
        },
        //запоминаем обьект втаблицы в глобальную переменную
        onContentReady: function(e) {
            // rowIndexCompanyTb = e;
            //  $('.company-req__bank-name').click(function(e) {
            //     e.preventDefault();
            //     e.stopPropagation();
            //     rowIndexCompanyTb.component.collapseAll(-1);
            // });
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

            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку
            if (cellInfo.data.Def == true) {
                $('<div class="datagrid__custom-cell--def">')    //навешиваем  template иницилизируем его 
                .appendTo(cellElement)
                 .append($("<a data=" + cellInfo.rowIndex + " class='company-req__bank-name' href='#''>"+cellInfo.data.Name+"</a>"))
            }
            else
                $('<div class="datagrid__custom-cell">')   
                 .appendTo(cellElement)
                 .append($("<a data=" + cellInfo.rowIndex + " class='company-req__bank-name' href='#''>"+cellInfo.data.Name+"</a>"))


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



//-----------company users-list --------------//
var companyUsersList = [{
    "ID": 1,
    "Number": "01",
    "Photo": "img/users-list-ph01.png",
    "FamalyName": "Константинопольский Константин Константинович",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Def": false,
},
{
    "ID": 2,
    "Number": "02",
    "Photo": "img/users-list-ph02.png",
    "FamalyName": "Иванов Иван Петрович (основной пользователь)",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Def": false,
},
{
    "ID": 3,
    "Number": "03",
    "Photo": "img/users-list-ph03.png",
    "FamalyName": "Александр Солженицын",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Def": false,
},
{
    "ID": 4,
    "Number": "04",
    "Photo": "img/users-list-ph04.png",
    "FamalyName": "Растропович Олег Александрович",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Def": false,
},
{
    "ID": 5,
    "Number": "05",
    "Photo": "img/users-list-ph05.png",
    "FamalyName": "Иванов Иван Петрович",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Def": true,
},
{
    "ID": 6,
    "Number": "06",
    "Photo": "img/users-list-ph06.png",
    "FamalyName": "Константинопольский Сергей Михаилович",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemailfsdfsdfsfdsfsdfdsfsdfds@mail.com",
    "Def": false,
},
{
    "ID": 7,
    "Number": "07",
    "Photo": "img/users-list-ph07.png",
    "FamalyName": "Елизавета Николаевна Однофамильцева",
    "Name": "Konstantine.Konst",
    "Position": "Менеджер",
    "Status": "Резидент",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Def": false,
}
];

 $("#dataGridCompanyUsersList").dxDataGrid({
        dataSource: companyUsersList,
        keyExpr: "ID",
        width: "100%",
        editing: {
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
            caption: "№",
            width: 60,
            alignment: "center",
        },
        {
            dataField: "Photo",
            caption: "Фото",
            width: 56,
            alignment: "center",
            cellTemplate: function(cellElement, cellInfo) {   //кнопка удаления
            $("<div class='usr-pic__cont'><img src='" + cellInfo.data.Photo +"'></div>").appendTo(cellElement);
             }
        },
        {
            dataField: "FamalyName",
            caption: "ФИО/Обращение",
             width: 421,

            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку
            //ячека с зеленой галкой
            if (cellInfo.data.Def == true) {
                $('<div class="datagrid__custom-cell--def">')    
                .appendTo(cellElement)
                 .append($("<a id='company-req__bank-name' href='#''>"+cellInfo.data.FamalyName+"</a>"))
            }
            else
                $('<div class="datagrid__custom-cell">')    //навешиваем  template иницилизируем его как radiogroup
                 .appendTo(cellElement)
                 .append($("<a id='company-req__bank-name' href='#''>"+cellInfo.data.FamalyName+"</a>"))


             }, 
            cssClass: "datagrid__link-cell--dash" //обязательный класс
        }, 
        {
            dataField: "Name",
            caption: "Имя пользователя",
            width: 187
         
        },   
        {
            dataField: "Position",
            caption: "Должность",
            width: 130
        }, 
        {
            dataField: "Status",
            caption: "Статус",
            width: 113
        }, 
        {
            dataField: "Tel",
            caption: "Контактный телефон",
            width: 173
        },
        {
            dataField: "Email",
            caption: "E-mail",
            width: 180
        },
        { 
            width: 70,
            cellTemplate: function(cellElement, cellInfo) {   //кнопка удаления
            $("<button class='btn__rnd--del btn__rnd filelist__btn-del'></button>")    
            .appendTo(cellElement)
              .append($("<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg>"))
             }
  
        }],
        showColumnLines: true,
        showRowLines: true, 
    }).data("dxDataGrid");

 //-------------------------------------------------------------//
//-----------dataGridMyTemplates-------------

 $("#dataGridMyTemplates").dxDataGrid({
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
             width: 383,

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
            width: 421
         
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

//--------------------------------------


//--------------- application-view-modal-v2 ------------------
var address = [{
    "ID": 1,
    "Type": "Склад",
    "Point": "Петропавловск-Камчатский",
    "Location": "г.Петропавловск-Камчатский, ул. Бассейная, 6"
},{
    "ID": 1,
    "Type": "Офис",
    "Point": "Махачкала",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23"
},
{
    "ID": 1,
    "Type": "Аэропорт",
    "Point": "Владивосток",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23"
},
{
    "ID": 1,
    "Type": "Офис",
    "Point": "Москва",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23"
},
{
    "ID": 1,
    "Type": "Склад",
    "Point": "Шанхай",
    "Location": "г. Москва, ул. Стрельникова, 12, офис 23"
} ];
var selectType = [
    {
        "ID": 1,
        "Name": "Офис"
    }, {
        "ID": 2,
        "Name": "Аэропорт"
    }, {
        "ID": 3,
        "Name": "Склад"
    }];


function initAppViewV2DataGrid () {
    var dataGrid =  $("#grid-app-view-v2").dxDataGrid({
        dataSource: address,
        keyExpr: "ID",
        filterRow: {
            visible: true
        },
        scrolling: {
            mode: "virtual"
        },
        hoverStateEnabled: true,
        showBorders: true,
        columns: 
        [{
            dataField: "Type",
            lookup: {
                    dataSource: selectType,
                    valueExpr: "Name",
                    displayExpr: "Name"
                },
            caption: "Тип места",
            width: 115,

        },
        {
            dataField: "Point",
            caption: "Населённый пункт",
             width: 277,

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
                .append($("<a href='#''>"+cellInfo.data.Point+"</a>"))
             }, 

            cssClass: "datagrid__link-cell" //обязательный класс
        }, 
        {
            dataField: "Location",
            caption: "Адрес",
            width: 416
         
        }],
        showColumnLines: true,
        showRowLines: true,    
    }).data("dxDataGrid");
};

//-------------------------------//

//--------------- application-view-modal-v3 ------------------
var manager = [{
    "ID": 1,
    "Position": "Менеджер",
    "Name": "Константин Константинопольский",
    "Tel": "+7 (923) 123 456 78"
},
{
    "ID": 1,
    "Position": "Менеджер",
    "Name": "Михаил",
    "Tel": "+7 (923) 123 456 78, +7 (923) 123 456 78"
},
{
    "ID": 1,
    "Position": "Менеджер",
    "Name": "Иванов Иван Иваныч",
    "Tel": "+7 (923) 123 456 78"
},
{
    "ID": 1,
    "Position": "Менеджер",
    "Name": "Константин Константинопольский",
    "Tel": "+7 (923) 123 456 78"
},
{
    "ID": 1,
    "Position": "Менеджер",
    "Name": "Константин Константинопольский",
    "Tel": "+7 (923) 123 456 78"
}
,{
    "ID": 1,
    "Position": "Менеджер",
    "Name": "Екатерина",
    "Tel": "+7 (923) 123 456 78"
}];

var selectManager = [
    {
        "ID": 1,
        "Name": "Менеджер"
    }];

function initAppViewV3DataGrid () {
    var dataGrid =  $("#grid-app-view-v3").dxDataGrid({
        dataSource: manager,
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
            dataField: "Position",
            caption: "Должность",
            width: 145,
            lookup: {
                    dataSource: selectManager,
                    valueExpr: "Name",
                    displayExpr: "Name"
                },
        },
        {
            dataField: "Name",
            caption: "Обращение (ФИО)",
             width: 313,

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
            caption: "Контактный телефон",
            width: 350,
         
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

//-------------------------------//

//--------------- application-view-modal-v5 ------------------
var banks = [{
    "ID": 1,
    "Name": '"ДЖЕЙ ЭНД ТИ БАНК" (ЗАО)',
    "Bik": "044583770",
    "RS": "30101810900000000770",
    "Status": "Резидент"
},
{
    "ID": 1,
    "Name": '"ЕДИНЫЙ СТРОИТЕЛЬНЫЙ БАНК" (ООО)',
    "Bik": "044583770",
    "RS": "30101810900000000770",
    "Status": "Резидент"
},
{
    "ID": 1,
    "Name": '"ЕКАТЕРИНБУРГСКИЙ" ФИЛИАЛ ОАО БАНК ЗЕНИТ',
    "Bik": "044583770",
    "RS": "30101810900000000770",
    "Status": "Резидент"
},
{
    "ID": 1,
    "Name": '"ДЖЕЙ ЭНД ТИ БАНК" (ЗАО)',
    "Bik": "044583770",
    "RS": "30101810900000000770",
    "Status": "Резидент"
},
{
    "ID": 1,
    "Name": '"ЕДИНЫЙ СТРОИТЕЛЬНЫЙ БАНК" (ООО)',
    "Bik": "044583770",
    "RS": "30101810900000000770",
    "Status": "Резидент"
},
{
    "ID": 1,
    "Name": '"ЕКАТЕРИНБУРГСКИЙ" ФИЛИАЛ ОАО БАНК ЗЕНИТ',
    "Bik": "044583770",
    "RS": "30101810900000000770",
    "Status": "Резидент"
}];
var selectRes = [
    {
        "ID": 1,
        "Name": "Резидент"
    },
    {
        "ID": 2,
        "Name": "Нерезидент"
    }];


function initAppViewV5DataGrid () {
    var dataGrid =  $("#grid-app-view-v5").dxDataGrid({
        dataSource: banks,
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

        [
        {
            dataField: "Name",
            caption: "Наименование банка",
             width: 470,

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
            dataField: "Bik",
            caption: "БИК/SWIFT",
            width: 113
        }, 
        {
            dataField: "RS",
            caption: "Расчётный счет",
            width: 241
         
        },
        {
            dataField: "Status",
            caption: "Статус",
            width: 157,
            lookup: {
                    dataSource: selectRes,
                    valueExpr: "Name",
                    displayExpr: "Name"
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
};

//-------------------------------//
//-----------counterparties --------------//
var counterparties = [{
    "ID": 1,
    "Forma": "ООО",
    "Name": "Экология XXI-Век",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail@mail.com",
    "Loc": "Владивосток",
    "INN": "7701583861",
},
{
    "ID": 2,
    "Forma": "ЗАО",
    "Name": "Сигма Марин Технолоджи",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very-long@mail.com",
    "Loc": "Махачкала",
    "INN": "1234583861",
},
{
    "ID": 3,
    "Forma": "СОДНТ",
    "Name": "ТП Альянс Триумф Корпарэйшн",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very@mail.com",
    "Loc": "Петропавловск-Камчатский",
    "INN": "3246673861",
},
{
    "ID": 4,
    "Forma": "ЗАО",
    "Name": "Сигма Марин Технолоджи",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very-long@mail.com",
    "Loc": "Махачкала",
    "INN": "1234583861",
},
{
    "ID": 5,
    "Forma": "СОДНТ",
    "Name": "ТП Альянс Триумф Корпарэйшн",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very@mail.com",
    "Loc": "Петропавловск-Камчатский",
    "INN": "3246673861",
},
{
    "ID": 6,
    "Forma": "ЗАО",
    "Name": "Сигма Марин Технолоджи",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very-long@mail.com",
    "Loc": "Махачкала",
    "INN": "1234583861",
},
{
    "ID": 7,
    "Forma": "СОДНТ",
    "Name": "ТП Альянс Триумф Корпарэйшн",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very@mail.com",
    "Loc": "Петропавловск-Камчатский",
    "INN": "3246673861",
},
{
    "ID": 8,
    "Forma": "ЗАО",
    "Name": "Сигма Марин Технолоджи",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very-long@mail.com",
    "Loc": "Махачкала",
    "INN": "1234583861",
},
{
    "ID": 9,
    "Forma": "СОДНТ",
    "Name": "ТП Альянс Триумф Корпарэйшн",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very@mail.com",
    "Loc": "Петропавловск-Камчатский",
    "INN": "3246673861",
},
{
    "ID": 10,
    "Forma": "ЗАО",
    "Name": "Сигма Марин Технолоджи",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very-long@mail.com",
    "Loc": "Махачкала",
    "INN": "1234583861",
},
{
    "ID": 11,
    "Forma": "СОДНТ",
    "Name": "ТП Альянс Триумф Корпарэйшн",
    "Tel": " +7 923 123 456 78", 
    "Email": "somemail-very@mail.com",
    "Loc": "Петропавловск-Камчатский",
    "INN": "3246673861",
},
];

var selectResCounter = [
    {
        "ID": 1,
        "Name": "ООО"
    },
    {
        "ID": 2,
        "Name": "ЗАО"
    },
    {
        "ID": 2,
        "Name": "СОДНТ"
    }];

 $("#dataGridСounterparties").dxDataGrid({
        dataSource: counterparties,
        keyExpr: "ID",
        width: "100%",
        editing: {
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
            dataField: "Forma",
            caption: "Форм. собств.",
            width: 148,
            lookup: {
                    dataSource: selectResCounter,
                    valueExpr: "Name",
                    displayExpr: "Name"
                }
        },
        {
            dataField: "Name",
            caption: "Наименование контрагента",
            width: 256,
            headerCellTemplate: function (cellElement, cellInfo) {
                $("<div class='counterparties__header-cell'><button class='counterparties__btn-add-header btn__rnd--add btn__rnd'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM9 7H12V9H9V12H7V9H4V7H7V4H9V7Z' fill='#0073BE'/></svg></button>Наименование контрагента</div>")    //навешиваем  template 
                 .appendTo(cellElement)
                //  .append($("<div class='counterparties__header-cell'><button class='btn__rnd-add-only'></button>Наименование контрагента</div>"))
                // .append($("<div class='counterparties__header-cell'><button class='btn__rnd--add btn__rnd counterparties__btn-add-header'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM9 7H12V9H9V12H7V9H4V7H7V4H9V7Z' fill='#0073BE'/></svg></button>Наименование контрагента</div>"))
                
            },
            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку
                $('<div class="datagrid__custom-cell">')    //навешиваем  template иницилизируем его как radiogroup
                 .appendTo(cellElement)
                 .append($("<a id='company-req__bank-name' href='#''>"+cellInfo.data.Name+"</a>"))
             }, 
            cssClass: "datagrid__link-cell--dash" //обязательный класс
        },
         {
            dataField: "Tel",
            caption: "Телефон",
            width: 168
        },
        {
            dataField: "Email",
            caption: "E-mail",
            width: 255
        }, 
        {
            dataField: "Loc",
            caption: "Местоположение",
            width: 228
         
        },   
        {
            dataField: "INN",
            caption: "ИНН",
            width: 110
        },  
        { 
            width: 70,
            cellTemplate: function(cellElement, cellInfo) {   //кнопка удаления
            $("<button class='btn__rnd--del btn__rnd filelist__btn-del'></button>")    
            .appendTo(cellElement)
              .append($("<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg>"))
             }
  
        }],
        onContentReady: function(e) {
            $('.btn__rnd-add-only').click(function() {
                e.preventDefault;
                alert('sdfdfdsf');
            });
        },
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

 //-------------------------------------------------------------//

//--------------- counterparties modal ------------------
var countpartaddress = [{
    "ID": 1,
    "Type": "Офис",
    "Point": "Backaland, Eday",
    "Location": "105062, г. Москва, Фурманный пер., д.24"
},{
    "ID": 2,
    "Type": "Склад",
    "Point": "Backaland, Eday",
    "Location": "109316, г. Москва, Остаповский проезд, д.3, стр.5"
},
{
    "ID": 3,
    "Type": "Аэропорт",
    "Point": "Петропавловск-Камчатский",
    "Location": "123456, г. Петропавловск-Камчатский, ул. Завойко д.999. стр. 823 "
},
{
    "ID": 4,
    "Type": "Склад",
    "Point": "Backaland, Eday",
    "Location": "109316, г. Москва, Остаповский проезд, д.3, стр.5"
},
{
    "ID": 5,
    "Type": "Склад",
    "Point": "Backaland, Eday",
    "Location": "105062, г. Москва, Фурманный пер., д.24"
} ];
var selectTypePart = [
    {
        "ID": 1,
        "Name": "Офис"
    }, {
        "ID": 2,
        "Name": "Аэропорт"
    }, {
        "ID": 3,
        "Name": "Склад"
    }];


function initСounterpartiesPlaceGrid () {
     var dataGrid =  $("#dataGridСounterpartiesPlace").dxDataGrid({
        dataSource: countpartaddress ,
        keyExpr: "ID",
        filterRow: {
            visible: true
        },
        scrolling: {
            mode: "virtual"
        },
        hoverStateEnabled: true,
        showBorders: true,

        // for master detail
        selection: {
            mode: "single"
        },
        onSelectionChanged: function(e) {
            rowIndexCompanyTb = e;
            e.component.collapseAll(-1);
            e.component.expandRow(e.currentSelectedRowKeys[0]);
        },
        ///////////////////
        columns: 
        [{
            dataField: "Type",
            lookup: {
                    dataSource: selectType,
                    valueExpr: "Name",
                    displayExpr: "Name"
                },
            caption: "Тип места",
            width: 134,

        },
        {
            dataField: "Location",
            caption: "Адрес",
            width: 390,
            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку, навешиваем элемент radiogroup
            $('<div class="datagrid__custom-cell">')    //навешиваем  template иницилизируем его как radiogroup
               .appendTo(cellElement   )
                .append($("<a href='#''>"+cellInfo.data.Location+"</a>"))
             }, 

            cssClass: "datagrid__link-cell--dash" //обязательный класс
        },
        {
            dataField: "Point",
            caption: "Населённый пункт",
             width: 110
        }, 
        { 
            width: 70,
            cellTemplate: function(cellElement, cellInfo) {   //кнопка удаления
            $("<button class='btn__rnd--del btn__rnd filelist__btn-del'></button>")    
            .appendTo(cellElement)
              .append($("<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421Z' fill='#AAAAAA'/></svg>"))
             }
  
        }],
        masterDetail: {
            enabled: false,
            template: function(container, options) { 
                return  $($('#counterparties-view-modal-details').html()); 
            }
        },

        onRowExpanded: function () {
            inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
            autocompleteInitClass ("input-field__city","input-field__city-id","input-field__value");
            initModalStep('.modal__step-container-point','.modal__block-next','.modal__block-prev',true,0);
            makeInlineSvg();
        },
        showColumnLines: true,
        showRowLines: true, 
    }).data("dxDataGrid");
};

//-------------------------------//

//-----------manufacturers--------------//
var manufacturers = [{
    "ID": 1,
    "Name": "APL Co Pte Ltd (Singapore)",
    "Loc": "Сингапур",
    "Address": "9 North Buona Vista Drive, #14-01 The Metropolis Tower 1, Singapore 138588"
},
{
    "ID": 2,
    "Name": "Azuma Shipping Co., Ltd.",
    "Loc": "Япония",
    "Address": "33 fl, Office Tower Z, Harumi Island, Triton Square, 8-12, Harumi 1-Chome, Chuo-ku, Tokyo 104-6233"
},
{
    "ID": 3,
    "Name": "Farmosa Transportatiopn Co. Ltd",
    "Loc": "Тайвань",
    "Address": "12 Floor, No. 164, Fu Hsing North Road, Taipei, Taiwan 10487"
},
{
    "ID": 4,
    "Name": "БЕРИЛЛ",
    "Loc": "Россия ",
    "Address": "690065, г. Владивосток, ул. Стрельникова, д. 9, каб 26А"
},
{
    "ID": 5,
    "Name": "ООО «АвтоКом»",
    "Loc": "Россия ",
    "Address": "690012, Россия, Приморский край, г. Владивосток, ул. Березовая 25."
},
{
    "ID": 6,
    "Name": "APL Co Pte Ltd (Singapore)",
    "Loc": "Сингапур",
    "Address": "9 North Buona Vista Drive, #14-01 The Metropolis Tower 1, Singapore 138588"
},
{
    "ID": 7,
    "Name": "Azuma Shipping Co., Ltd.",
    "Loc": "Япония",
    "Address": "33 fl, Office Tower Z, Harumi Island, Triton Square, 8-12, Harumi 1-Chome, Chuo-ku, Tokyo 104-6233"
},
{
    "ID": 8,
    "Name": "Farmosa Transportatiopn Co. Ltd",
    "Loc": "Тайвань",
    "Address": "12 Floor, No. 164, Fu Hsing North Road, Taipei, Taiwan 10487"
},
{
    "ID": 9,
    "Name": "БЕРИЛЛ",
    "Loc": "Россия ",
    "Address": "690065, г. Владивосток, ул. Стрельникова, д. 9, каб 26А"
},
{
    "ID": 10,
    "Name": "ООО «АвтоКом»",
    "Loc": "Россия ",
    "Address": "690012, Россия, Приморский край, г. Владивосток, ул. Березовая 25."
}
];

 $("#dataGridManufacturers").dxDataGrid({
        dataSource: manufacturers,
        keyExpr: "ID",
        width: "100%",
        editing: {
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

        [
        {
            dataField: "Name",
            caption: "Наименование",
            width: 296,
            headerCellTemplate: function (cellElement, cellInfo) {
                $("<div class='counterparties__header-cell'><button class='counterparties__btn-add-header btn__rnd--add btn__rnd'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM9 7H12V9H9V12H7V9H4V7H7V4H9V7Z' fill='#0073BE'/></svg></button>Наименование</div>")    //навешиваем  template 
                 .appendTo(cellElement)
                
            },
            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку
                $('<div class="datagrid__custom-cell">')   
                 .appendTo(cellElement)
                 .append($("<a id='company-req__bank-name' href='#''>"+cellInfo.data.Name+"</a>"))
             }, 
            cssClass: "datagrid__link-cell" //обязательный класс
        },
         {
            dataField: "Loc",
            caption: "Страна",
            width: 157
        },
        {
            dataField: "Address",
            caption: "Адрес",
            width: 709
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

 //-------------------------------------------------------------//


//-----------dataGridSystemAlerts--------------//
var systemAlerts = [{
    "ID": 1,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс <a href='#' class='app-lnk'>sadsad</a> согласования Изменения к доп. соглашению №1 заказчика", 
},
{
    "ID": 2,
    "Date": "12.04.2017 12:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №2 заказчика", 
},
{
    "ID": 3,
    "Date": "12.05.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №11 заказчика", 
},
{
    "ID": 4,
    "Date": "12.04.2017 07:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №1 заказчика", 
},
{
    "ID": 5,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №4 заказчика", 
},
{
    "ID": 6,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №4 заказчика", 
},
{
    "ID": 7,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №4 заказчика", 
},
{
    "ID": 8,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Длинное описание события без ссылок (констатация факта). Собрать реализацию компонентов используемых в основной части страницы в одним каталог.", 
},
{
    "ID": 9,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №4 заказчика", 
},
{
    "ID": 10,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №4 заказчика", 
},
{
    "ID": 11,
    "Date": "12.04.2017 17:54",
    "Type": "Заключение договора",
    "Event": "Запущен процесс согласования Изменения к доп. соглашению №4 заказчика", 
},
];

var selectResTypeAlerts = [
    {
        "ID": 1,
        "Name": "Заключение договора"
    }];

 $("#dataGridSystemAlerts").dxDataGrid({
        dataSource: systemAlerts,
        keyExpr: "ID",
        width: "100%",
        editing: {
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

        [
        {
            dataField: "ID",
            caption: "№",
            width: 85,
            alignment: "left"
        },
        {
            dataField: "Date",
            caption: "Дата создания",
            width: 157
        },
        {
            dataField: "Type",
            caption: "Тип оповещения",
            width: 204,
            lookup: {
                    dataSource: selectResTypeAlerts,
                    valueExpr: "Name",
                    displayExpr: "Name"
                }
        },
        {
            dataField: "Event",
            caption: "Описание события",
            width: 627,
            cellTemplate: function(cellElement, cellInfo) { 
                $("<div class='datagrid__custom-cell'>Запущен процесс <a href='#' class='app-lnk'>согласования Изменения к доп. соглашению №4 </a>заказчика</div>")
               .appendTo(cellElement);
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

 //-------------------------------------------------------------//


//-----------dataGridDeals--------------//
var deals = [{
    "ID": 1,
    "Num": "001",
    "Name": "Наименование международной сделки на покупку",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "Ожидает подписания",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "-",
    "DateEnd": "-"
},
{
    "ID": 2,
    "Num": "001",
    "Name": "Наименование международной сделки на покупку",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "В работе",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "12.04.2017",
    "DateEnd": "12.12.2019"
},
{
    "ID": 3,
    "Num": "001",
    "Name": "Наименование сделки на доставку груза",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "Приостановленные",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "12.04.2017",
    "DateEnd": "12.12.2019"
},
{
    "ID": 4,
    "Num": "001",
    "Name": "Наименование международной сделки на покупку",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "В работе",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "12.04.2017",
    "DateEnd": "12.12.2019"
},
{
    "ID": 5,
    "Num": "001",
    "Name": "Наименование международной сделки на покупку",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "Ожидает подписания",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "-",
    "DateEnd": "-"
},
{
    "ID": 6,
    "Num": "001",
    "Name": "Наименование международной сделки на покупку",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "Завершённые",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "12.04.2017",
    "DateEnd": "12.12.2019"
},
{
    "ID": 7,
    "Num": "001",
    "Name": "Наименование сделки на доставку груза",
    "DepDest": "Шанхай, Китай (DOOR (EXW)) →  Новосибирск, Россия (FI (FOB))",
    "Status": "Завершённые",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "12.04.2017",
    "DateEnd": "12.12.2019"
},
{
    "ID": 8,
    "Num": "001",
    "Name": "Наименование международной сделки на покупку",
    "DepDest": "Barysaw, Белоруссия (DOOR (EXW)) → Antwerp, Бельгия (FI (FOB))",
    "Status": "В работе",
    "TypeAdd": "№3 (Покупка) Приобретение товара. Услуги импортёра",
    "DateSign": "12.04.2017",
    "DateEnd": "12.12.2019"
}
];

var selectResDealsStatus = [
    {
        "ID": 1,
        "Name": "Ожидает подписания"
    },
    {
        "ID": 2,
        "Name": "В работе"
    },
    {
        "ID": 3,
        "Name": "Приостановленные"
    },
    {
        "ID": 4,
        "Name": "Завершённые"
    }];
var selectResDealType = [
    {
        "ID": 1,
        "Name": "№3 (Покупка) Приобретение товара. Услуги импортёра"
    }];    

 $("#dataGridDeals").dxDataGrid({
        dataSource: deals,
        keyExpr: "ID",
        width: "100%",
        editing: {
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

        [
        {
            dataField: "Num",
            caption: "Номер",
            width: 87,
            alignment: "left",
            cellTemplate: function(cellElement, cellInfo) { 
                if (cellInfo.data.Status == 'Приостановленные')
                $("<div class='datagrid__custom-cell--dsbl'>" + cellInfo.data.Num+"</div>").appendTo(cellElement);
                else
                $("<div class='datagrid__custom-cell'>" + cellInfo.data.Num + "</div>").appendTo(cellElement);
             }
        },
        {
            dataField: "Name",
            caption: "Наименование сделки",
            width: 320,
            cellTemplate: function(cellElement, cellInfo) { 
                //кастомим ячейку, навешиваем элемент radiogroup
            if (cellInfo.data.Status == 'Приостановленные')
             $('<div class="datagrid__custom-cell datagrid__custom-cell--dsbl">')    //навешиваем  template иницилизируем его как radiogroup
                .appendTo(cellElement)
                .append($("<a href='#''>"+cellInfo.data.Name+"</a>"));
            else
            $('<div class="datagrid__custom-cell">')    //навешиваем  template иницилизируем его как radiogroup
               .appendTo(cellElement)
                .append($("<a href='#''>"+cellInfo.data.Name+"</a>"));
             }, 

            cssClass: "datagrid__link-cell" //обязательный класс
        },
        {
            dataField: "DepDest",
            caption: "Отправление → Назначение",
            width: 315,
            cellTemplate: function(cellElement, cellInfo) { 
                if (cellInfo.data.Status == 'Приостановленные')
                $("<div class='datagrid__custom-cell--dsbl'>" + cellInfo.data.DepDest+"</div>").appendTo(cellElement);
                else
                $("<div class='datagrid__custom-cell'>" + cellInfo.data.DepDest + "</div>").appendTo(cellElement);
             }
        },
        {
            dataField: "Status",
            caption: "Статус",
            width: 212,
            lookup: {
                    dataSource: selectResDealsStatus,
                    valueExpr: "Name",
                    displayExpr: "Name"
                },
            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку
            if (cellInfo.data.Status == 'Приостановленные')
                $("<div class='datagrid__custom-cell--dsbl'>" + cellInfo.data.Status+"</div>").appendTo(cellElement);   
            else if (cellInfo.data.Status == "Завершённые") {
                $("<div class='datagrid__custom-cell--def'>" + cellInfo.data.Status + "</div>")
                .appendTo(cellElement)
            }
            else
                $("<div class='datagrid__custom-cell'>" + cellInfo.data.Status + "</div>")   
                 .appendTo(cellElement)
             },     
        },
        {
            dataField: "TypeAdd",
            caption: "Тип доп. соглашения",
            width: 294,
            cellTemplate: function(cellElement, cellInfo) { 
                if (cellInfo.data.Status == 'Приостановленные')
                $("<div class='datagrid__custom-cell--dsbl'>" + cellInfo.data.TypeAdd+"</div>").appendTo(cellElement);
                else
                $("<div class='datagrid__custom-cell'>" + cellInfo.data.TypeAdd + "</div>").appendTo(cellElement);
             },
            lookup: {
                    dataSource: selectResDealType,
                    valueExpr: "Name",
                    displayExpr: "Name"
                }
            
        },
        {
            dataField: "DateSign",
            caption: "Дата подписания",
            width: 155,
            cellTemplate: function(cellElement, cellInfo) { 
                if (cellInfo.data.Status == 'Приостановленные')
                $("<div class='datagrid__custom-cell--dsbl'>" + cellInfo.data.DateSign+"</div>").appendTo(cellElement);
                else
                $("<div class='datagrid__custom-cell'>" + cellInfo.data.DateSign + "</div>").appendTo(cellElement);
             }
        },
        {
            dataField: "DateEnd",
            caption: "Дата окончания",
            width: 161,
            cellTemplate: function(cellElement, cellInfo) { 
                if (cellInfo.data.Status == 'Приостановленные')
                $("<div class='datagrid__custom-cell--dsbl'>" + cellInfo.data.DateEnd+"</div>").appendTo(cellElement);
                else
                $("<div class='datagrid__custom-cell'>" + cellInfo.data.DateEnd + "</div>").appendTo(cellElement);
             }
        },],
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

