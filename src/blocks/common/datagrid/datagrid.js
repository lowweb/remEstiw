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
    "Date" : '14.02.2019'
}  ];
 $("#dataGridRequestAll").dxDataGrid({
        dataSource: requestAllData,
        keyExpr: "ID",
        width: 1550,
        // selection: {
        //     mode: "single"
        // },
        // scrolling: {
        //     // mode: "virtual"
        // },
        editing: {
            allowDeleting: true,
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
            width: 198
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



var dgRowCount=1;
 $("#dataGridRequestAllConnected").dxDataGrid({
        dataSource: requestAllData,
        // columnAutoWidth: true,
        rowTemplate: function(container, item) {
            var data = item.data, markup='',dgConnected = '', tdClass='', trClass='', dgConnectedSg='';
        //раскраска строки
         console.log (dgRowCount);

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
                markup = "<tbody role='presentation'>" +
                    "<tr class='dx-row dx-data-row dx-row-lines dx-column-lines " + trClass+ "' role='row'>" +
                        "<td "+ tdClass +" role='gridcell'>" + data.Number+"</td>" + 
                        "<td role='gridcell' class='datagrid__link-cell'><a href='#'>"+data.Name+"</a></td>" + 
                        "<td role='gridcell'>" + data.SendDest+"</td>" + 
                        "<td role='gridcell'>" + data.Cond+"</td>" + 
                        "<td role='gridcell'>" + data.Qnt+"</td>" + 
                        "<td role='gridcell'>" + data.Vol+"</td>" + 
                        "<td role='gridcell'>" + data.Weight+"</td>" + 
                        "<td role='gridcell'>" + data.Date+ "</td>" +
                        "<td class='dx-command-edit dx-command-edit-with-icons' aria-selected='false' role='gridcell' aria-colindex='9' style='text-align: center;'><a href='#' class='dx-link dx-link-delete dx-icon-trash' title='Delete'></a>&nbsp;</td>"+ 
                    "</tr>" +
                    "<th "+ dgConnectedSg +"></th>"+
            "</tbody>";
            container.append(markup);
            
        },
        keyExpr: "ID",
        width: 1550,
        editing: {
            allowDeleting: true,
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
            width: 198
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
