// для корректной работы gulp

$(".summary-error__items").dxValidationSummary({
        validationGroup: "validateItems"
    });

//click checkbox element
$(document.body).on('click', '.checkbox' ,function(){
  // $('.checkbox').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$('#href-' + $(this).parent().parent().attr('id')).remove();
    	$(this).parent().parent().removeClass('field-set--error');
    }
    // console.log ($(this).parent().parent().attr('id'));
    
  });

  //click radiobox element
  $(document.body).on('click', '.radiogroup' ,function(){
  // $('.radiogroup').click(function(){
    if ($(this).parent().parent().hasClass("field-set--error")) {
    	$('#href-' + $(this).parent().parent().attr('id')).remove();
    	$(this).parent().parent().removeClass('field-set--error');
    }
  });

  //jump to link from erro href
	$(document).on("click", ".summary-error__href", function(e){
   	e.preventDefault();
		 document.querySelector(this.hash).scrollIntoView(true);
		 $(this.hash).fadeOut(350).fadeIn(350); 
		 // console.log ($('.view-container').offset().top + '=' + $(this.hash).offset().top);
		 // console.log (Math.abs($('.view-container').offset().top) + $('.header').height());
		 $(".view").animate({scrollTop: Math.abs($('.view-container').offset().top) + $('.header').height() - 50  },"slow");	
		});

//check error
$(document.body).on('click', '#footer__button-next' ,function(){
	$('.summary-error').hide();
	DevExpress.validationEngine.validateGroup("validateItems");
	$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
	   

	  $('.summary-error__custom-items').empty();//очистили ошибки

	 var checkedFld=false;
	 var fieldSet = document.getElementsByClassName("field-set");

	for(var i=0; i < fieldSet.length; i++){


	  var elementChk = $(fieldSet[i]).find('.checkbox');

	  //check checkbox
	  for(var j=0; j < elementChk.length; j++){
	  	if ($(elementChk[j]).hasClass("dx-checkbox-checked")) { checkedFld=true;}
	  }
	  if (!checkedFld && $(fieldSet[i]).find('.checkbox').length>0) {
	  	$('.summary-error').show();
	  	$(fieldSet[i]).addClass('field-set--error');
	  	$('.summary-error__custom-items').append('<p><a id=href-'+$(fieldSet[i]).attr('id') +' class="summary-error__href" href="#' + $(fieldSet[i]).attr('id') + '">Необходимо выбрать один или несколько вариантов</a></p>');
	  }
	   if (checkedFld && $(fieldSet[i]).find('.checkbox').length>0) {
	  	$(fieldSet[i]).removeClass('field-set--error');
	  	checkedFld=false;
	  }
	  //end check checkbox

	  	  var elementRadioGrp = $(fieldSet[i]).find('.dx-radiobutton');

	  //check radiogroup
	  for(var j=0; j < elementRadioGrp.length; j++){
	  	if ($(elementRadioGrp[j]).hasClass("dx-radiobutton-checked")) { checkedFld=true;}
	  }
	  if (!checkedFld && $(fieldSet[i]).find('.dx-radiobutton').length>0) {
	  	$('.summary-error').show();
	  	$(fieldSet[i]).addClass('field-set--error');
	  	$('.summary-error__custom-items').append('<p><a id=href-'+$(fieldSet[i]).attr('id') +' class="summary-error__href" href="#' + $(fieldSet[i]).attr('id') + '">Необходимо выбрать вариант</a></p>');
	  }
	   if (checkedFld && $(fieldSet[i]).find('.dx-radiobutton').length>0) {
	  	$(fieldSet[i]).removeClass('field-set--error');
	  	checkedFld=false;
	  }
	  //end check radiogroup


	 }
	 $('.summary-error').show(); //если нет checkbox radio
});

//если при заполнении input-field срабаотала валидация 
//свой знак ошибки на поле
$('.input-field__cont').change ( function () {
	// console.log($(this));
	 if( $(this).hasClass('dx-invalid') ){
	 	$(this).parent().find('.input-field__label').addClass('input-field__label--err');
	 }
	 else {
	 	$(this).parent().find('.input-field__label').removeClass('input-field__label--err');
	 }
});
$('.contract__block-cap').click(function(event) {

	$(this).parents('.contract__block').toggleClass('contract__block--hide');
});

$('.contract__mod-block-cap ').click(function(event) {

	$(this).parents('.contract__mod-block').toggleClass('contract__mod-block--hide');
});

// $('.contract__line-add .btn__rnd').click(function(event) {
// 	$(this).parents('.contract__line-add').addClass('contract__line-add--act');
// });


$('.messages__chat-header-search .input-field__btn').click(function (e) {
    e.preventDefault();
    $(this).parents('.messages__chat-header-search').toggleClass('messages__chat-header-search--active');
    $(this).parents('.messages__chat-header').find('.messages__chat-header-people').toggleClass('messages__chat-header-people--hide');
  });

  $('#messages__fileuploader-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('messages__fileuploader-btn--hide');
    $(this).parents('.messages__chat-fotter').find('.messages__chat-fotter-fileuploader').toggleClass('messages__chat-fotter-fileuploader--active');
  });
function initButton (Element) {
    $('.' + Element).dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
             
                }
            });
};

initButton("button");

//button like earth
$(".input-field__btn").dxButton({
    text: "",
    onClick: function() {}
});


//special onclick
$('#footer__button-save').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
                    $('.footer__saved-msg').show();                
                }
            });
     
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
checkboxInit ("company-checkbox", "Зарегистрировано новое контактное лицо Вашей компании");
checkboxInit ("company-cap-checkbox", "");
checkboxInit ("company1-checkbox", "Договор создан");
checkboxInit ("company2-checkbox", "Дополнительное соглашение создано");
checkboxInit ("company3-checkbox", "Запущен процесс согласования изменений по договору/дополнению");
checkboxInit ("company4-checkbox", "Отменён процесс согласования по договору/дополнению");
checkboxInit ("company5-checkbox", "Завершён процесс согласования изменений по договору");
checkboxInit ("company6-checkbox", "Изменения к договору/дополнению отправлены вам");
checkboxInit ("company7-checkbox", "Изменения к договору/дополнению получены персональным экспертом");
checkboxInit ("company8-checkbox", "Изменения к договору/дополнению одобрено юристом исполнителя");
checkboxInit ("company9-checkbox", "Изменения к договору/дополнению принято обеими сторонами");
checkboxInit ("company10-checkbox", "Изменения к договору/дополнению оформлены в виде документа");
checkboxInit ("company11-checkbox", "Отклонён процесс согласования изменений по договору");
checkboxInit ("company-req-def-checkbox", "Основные реквизиты");



 


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

 //-----------dataGridBills--------------//
var bills = [{
    "ID": 1,
    "Num": "001 234 282",
    "Name": "Запрос на перевозку тунца",
    "Type": "Предоплата по сделке",
    "DateOpen": "14.02.2019",
    "Sum": "999 999 $",
    "Status": "Оплата подтверждена",
    "DateEnd": "14.02.2019"
},
{
    "ID": 2,
    "Num": "001 234 282 282",
    "Name": "Название проекта приложения",
    "Type": "Доплата по сделке",
    "DateOpen": "06.12.2018",
    "Sum": "999 999, 99 $",
    "Status": "Выставлен / Ждёт оплаты",
    "DateEnd": ""
},
{
    "ID": 3,
    "Num": "001 234 282",
    "Name": "Запрос на перевозку тунца",
    "Type": "Предоплата по сделке",
    "DateOpen": "14.02.2019",
    "Sum": "999 999 $",
    "Status": "Оплачен / ждёт подтверждения",
    "DateEnd": "14.02.2019"
},
{
    "ID": 4,
    "Num": "001 234 282 282",
    "Name": "Название проекта приложения",
    "Type": "Доплата по сделке",
    "DateOpen": "06.12.2018",
    "Sum": "999 999, 99 $",
    "Status": "Выставлен / Ждёт оплаты",
    "DateEnd": ""
},
{
    "ID": 5,
    "Num": "001 234 282",
    "Name": "Запрос на перевозку тунца",
    "Type": "Предоплата по сделке",
    "DateOpen": "14.02.2019",
    "Sum": "999 999 $",
    "Status": "Оплата подтверждена",
    "DateEnd": "14.02.2019"
},
{
    "ID": 6,
    "Num": "001 234 282 282",
    "Name": "Название проекта приложения",
    "Type": "Доплата по сделке",
    "DateOpen": "06.12.2018",
    "Sum": "999 999, 99 $",
    "Status": "Выставлен / Ждёт оплаты",
    "DateEnd": ""
},{
    "ID": 7,
    "Num": "001 234 282",
    "Name": "Запрос на перевозку тунца",
    "Type": "Предоплата по сделке",
    "DateOpen": "14.02.2019",
    "Sum": "999 999 $",
    "Status": "Оплачен / ждёт подтверждения",
    "DateEnd": "14.02.2019"
},
{
    "ID": 8,
    "Num": "001 234 282 282",
    "Name": "Название проекта приложения",
    "Type": "Доплата по сделке",
    "DateOpen": "06.12.2018",
    "Sum": "999 999, 99 $",
    "Status": "Выставлен / Ждёт оплаты",
    "DateEnd": ""
},
];

var selectResTypeBills = [
    {
        "ID": 1,
        "Name": "Предоплата по сделке"
    },
    {
        "ID": 2,
        "Name": "Доплата по сделке"
    }];
    var selectResStatusBills = [
        {
            "ID": 1,
            "Name": "Оплата подтверждена"
        },
        {
            "ID": 2,
            "Name": "Выставлен / Ждёт оплаты"
        },
        {
            "ID": 3,
            "Name": "Оплачен / ждёт подтверждения"
        }];
 $("#dataGridBills").dxDataGrid({
        dataSource: bills,
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
            caption: "№",
            width: 182,
            cellTemplate: function(cellElement, cellInfo) { 
                $('<div class="datagrid__custom-cell">')   
                 .appendTo(cellElement)
                 .append($("<a href='#''>"+cellInfo.data.Num+"</a>"));
                 console.log(cellElement);
                 if (cellInfo.data.Status == 'Оплата подтверждена')
                 $(cellElement).addClass('datagrid__custom-cell--gr-border-l');
             }, 
            cssClass: "datagrid__link-cell" 
        },
        {
            dataField: "Name",
            caption: "Наименование сделки",
            width: 359,
            cellTemplate: function(cellElement, cellInfo) { 
                $('<div class="datagrid__custom-cell">')   
                 .appendTo(cellElement)
                 .append($("<a href='#''>"+cellInfo.data.Name+"</a>"))
             }, 
            cssClass: "datagrid__link-cell" 
        },
        {
            dataField: "Type",
            caption: "Тип счета",
            width: 266,
            lookup: {
                    dataSource: selectResTypeBills,
                    valueExpr: "Name",
                    displayExpr: "Name"
                }
        },
        {
            dataField: "DateOpen",
            caption: "Выставлен",
            width: 137
        },
        {
            dataField: "Sum",
            caption: "Сумма к оплате",
            width: 154
        },
        {
            dataField: "Status",
            caption: "Состояние",
            width: 278,
            lookup: {
                dataSource: selectResStatusBills,
                valueExpr: "Name",
                displayExpr: "Name"
            },
            cellTemplate: function(cellElement, cellInfo) {   //кастомим ячейку
                if (cellInfo.data.Status == "Оплата подтверждена") {
                    $("<div class='datagrid__custom-cell--def'>" + cellInfo.data.Status + "</div>")
                    .appendTo(cellElement)
                }
                else
                    $("<div class='datagrid__custom-cell'>" + cellInfo.data.Status + "</div>")   
                     .appendTo(cellElement)
            }, 


        },
        {
            dataField: "DateEnd",
            caption: "Оплачен/закрыт",
            width: 168
        },
        ],
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



    $(".fileUploader").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 424,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
		uploadFailedMessage: "dsfs",
		onUploadStarted: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploaded: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploadError: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hude this el
		},
		uploadedMessage: "",
		uploadFailedMessage: "",
    });

    $(".fileUploader--full").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
		uploadFailedMessage: "dsfs",
		onUploadStarted: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploaded: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploadError: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hude this el
		},
		uploadedMessage: "",
		uploadFailedMessage: "",
    });

   $(".fileUploader--sm").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 276,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
		uploadFailedMessage: "dsfs",
		onUploadStarted: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploaded: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploadError: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hude this el
		},
		uploadedMessage: "",
		uploadFailedMessage: "",
    });

//название запроса
$("#requestName").dxTextBox({
  inputAttr: {
   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
   		 class:"input-field__value" //обязятельный класс
   }
}).dxValidator({
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }, {
            type: "pattern",
            pattern: /^[^0-9]+$/,
            message: "Строка не может содержать цифры"
        }, {
            type: "stringLength",
            min: 2,
            message: "Длина строки не меньше 2 символов"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
    });


// $("#input-field__totalWeight").dxTextBox({
//   inputAttr: {
//        id: "input-field__totalWeight-id",
//        class:"input-field__value" 
//    },
//    width: 128,
//    readOnly: true,
//    value: "100",
// })


//инициализировать элементы необходимо по id элемента
//в верстке реализованна инициализация по классу, для массовости, класс pseudoClassTextEditor на инициализируемом элементе можно удалить, если таковой не применяется
function inputFieldInit (element, elementId, defValue, readOnlyFlag ) {
  $("."+ element).dxTextBox({
  inputAttr: {
       id: elementId,
       class:"input-field__value" 
   },
   value: defValue,
   readOnly: readOnlyFlag
  }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }, {
            type: "pattern",
            pattern: /^[^0-9]+$/,
            message: "Строка не может содержать цифры"
        }, {
            type: "stringLength",
            min: 2,
            message: "Длина строки не меньше 2 символов"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
    });;
};


inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
inputFieldInit ("pseudoClassTextEditorReadOnly","pseudoClassTextEditorReadOnly__id","100",true);


$("#loadPanel").dxLoadPanel({
        closeOnOutsideClick: true,
        visible: true,
        shading: true,
		shadingColor: "rgba(255,255,255, 0.8)",
		message: ""
    });



//step для шагов внутри модального окна
function initModalStep (contName,nextbtn, prevbtn, dynamCap, curSlide) {
	const $stepContainer = $(contName),
       	  $steps         = $('.modal__step'),
      	  numSteps       = $steps.length,
       	  $form          = $('.modal .dx-popup-normal'),
          $next          = $(nextbtn),
          $prev          = $(prevbtn);

		var stepWidth = $form.width();
		var currentSlide = curSlide;
		 // alert ($form.width());
		$steps.css({ width: stepWidth + "px" });
		$stepContainer.css("width", stepWidth*numSteps + "px");	

		animateSlider();	

		function animateSlider() {
		  $stepContainer.css('transform', 'translateX('+ (-stepWidth * currentSlide)+'px)');
		}
				
		$next.on('click', function(e) {
			e.preventDefault();	
		  if(currentSlide < numSteps-1){
		  currentSlide ++;
		  animateSlider();
		  }

		  //если заголовок следующего шага берется из элемента инициируещего
		  if (dynamCap==true)
		  $('.modal__block-back').text($(this).text());
		});			
		$prev.on('click', function(e) {
		  if(currentSlide > 0) {
		    currentSlide --;
		    animateSlider();
		  } 
		});
};

//инициализация компонентов на модалке тк
function initModalCustom () {

	//first page
	if ($('.modal').hasClass('modal-location')) {
		initModalStep('.modal__step-container','.modal__block-item','.modal__block-prev',true,0);

		//страна в модальном окне
		selectBoxInitForId("modal__country-list",[ "Приморский край", "Камчатский край"],"modal__country-list__id","input-field__value");
		//край район область в модальном окне
		selectBoxInitForId("modal__region-list",[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");
		
		autocompleteInit ("locationSearch","locationSearch__id","input-field__value");
		autocompleteInit ("modallocation","modallocation__id","input-field__value");	

		//ошибка заполнения города
		$('.modal__title-cap').click(function() {
		  $('.modal-location__search-err').toggleClass('modal-location__search-err--show');;
		});	

		//close modal
		$('.modal__btn-close').click( function () {
			$('.modal-location.dx-popup-wrapper').remove();
		});
};

if ($('.modal').hasClass('custom-clearance-3agent-modal')) {
	 initDataGrid ();
	 inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	 radiogroupInit ("custom-clearence__3agent-radio",["Резидент", "Нерезидент"],"horizontal");
};

if ($('.modal').hasClass('modal-change-pass')) {
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
}

if ($('.modal').hasClass('modal-auth')) {
	//инициализируем карусель в модальном окне, для смены пароля со второго шага для остальных с первого
	// if ($('.modal').hasClass('modal-rem-step'))
	// initModalStep('.modal__step-container-auth','#modal__forget-lnk','.modal__block-prev',false,1);
	// else
	initModalStep('.modal__step-container-auth','#modal__forget-lnk','.modal__block-prev',false,0);	
	initModalStep('.modal__step-container-reg','#modal__agree-lnk','.modal__block-prev',false,0);	

	//инициализируем элементы
	 inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	 checkboxInit ("login-modal__rem-checkbox", "Запомнить пароль");
	 checkboxInit ("login-modal__agree-checkbox", "Я подтверждаю зарегистрированный вход в систему");
	 checkboxInit ("modal-reg__chk", "");
	 $("#auth-login").dxTextBox({
	  inputAttr: {
	   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
	   		 class:"input-field__value" //обязятельный класс
	   }}).dxValidator({
	        validationRules: [{
	            type: "required",
	            message: "Обязательно к заполнению"
	        }],
	        validationGroup: "validateItems" //обязательный параметр для валидации см. src/blocks/common/validate.js:
	    });	

	    $("#auth-login2").dxTextBox({
	  inputAttr: {
	   		 id: "requestName__id",  //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
	   		 class:"input-field__value" //обязятельный класс
	   }}).dxValidator({
	        validationRules: [{
	            type: "required",
	            message: "Обязательно к заполнению"
	        }],
	        validationGroup: "validateItems2" //обязательный параметр для валидации см. src/blocks/common/validate.js:
	    });	

	//ошибка заполнения 
	//инициализируем div ошибок
	$(".summary-error__items").dxValidationSummary({
	        validationGroup: "validateItems"
	    });
	$(".summary-error2__items").dxValidationSummary({
	        validationGroup: "validateItems2"
	    });	

	//обраотчик кнопки
	$(document.body).on('click', '#loginBtnModal' ,function(){
		DevExpress.validationEngine.validateGroup("validateItems");
		$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
		$('#summary-error').show();
	});	

	$(document.body).on('click', '#modalBtnReg' ,function(){
		DevExpress.validationEngine.validateGroup("validateItems2");
		$('.input-field__cont.dx-invalid').parent().find('.input-field__label').addClass('input-field__label--err');
		$('#summary-error2').show();
	});	


};
if ($('.modal').hasClass('modal-versions-compare-edit2')) { 
checkboxInit ("used-cargo__checkbox", "Бывший в употреблении");
checkboxInit ("home-cargo__checkbox", "Домашние вещи");
checkboxInit ("humane-cargo__checkbox", "Гуманитарная помощь");
checkboxInit ("oversize-cargo__checkbox", "Негабаритный");
checkboxInit ("danger-cargo__checkbox", "Опасный груз");
};

if ($('.modal').hasClass('modal-versions-compare-edit5')) { 
checkboxInit ("expertise-optionally__depart-checkbox", "В пункте отправления");
checkboxInit ("expertise-optionally__dest-checkbox", " В пункте назначения");
checkboxInit ("expertise-optionally__anotherplace-checkbox", "Дополнительно в другом месте");
};

if ($('.modal').hasClass('modal-company-user-add')) {
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	radiogroupInit ("company-personloc-radio",["Резиден", "Не резидент"],"horizontal");
	checkboxInit ("company-maintel-checkbox", "Основной");
}

if ($('.modal').hasClass('modal-counterparties-view')) {
	initСounterpartiesPlaceGrid ();
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	radiogroupInit ("counterparties-radio-person",["Резиден", "Не резидент"],"horizontal");

	// initModalStep('.modal__step-container-point','.modal__block-item','.modal__block-prev',true,0);
	
}


if ($('.modal').hasClass('modal-application-view')) {
	 initDataGrid ();
};
if ($('.modal').hasClass('modal-application-view-v2')) {
	 initAppViewV2DataGrid ()
};
if ($('.modal').hasClass('modal-application-view-v3')) {
	 initAppViewV3DataGrid ()
};
if ($('.modal').hasClass('modal-application-view-v5')) {
	 initAppViewV5DataGrid ()
};
if ($('.modal').hasClass('modal-manufactures-view')) {
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
};

if ($('.modal').hasClass('modal-messages-chat-new')) {
	inputFieldInit ("pseudoClassTextEditor","pseudoElementTextEditor__id","",false);
	$(".fileUploader").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 424,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
		uploadFailedMessage: "dsfs",
		uploadedMessage: "",
		uploadFailedMessage: "",
	});
	var messageType = [{
		"type": "green",
		"typeName": "значение 1 dwkjdhkjwedhkjewdh whdkjwhedkjhewkdjhkwjdhkjwedew jkhdjkewhdejkwhjk"
	}, {
		"type": "blue",
		"typeName": "значение 2"
	}, {
		"type": "yellow",
		"typeName": "значение 3"
	}
	
	];
	
	selectBoxForChat("pseudoClassSelectBoxCustom",messageType,"pseudoNameElementSelectBox__id","input-field__value");

};



};


function initModal (clName,width, height, tTempl, cTempl, position) {
	$("." + clName).dxPopup({
        visible: true,
        height:height,
        width: width,
        position: position,
        titleTemplate: function() {
        	//обязательный template
         	return $($('.' + tTempl).html());
          },
          contentTemplate: function () {
          	//обязательный template
          	return $($('.' + cTempl).html());
          },
          onShown: function (e) {                                      
			$(".scrollView").dxScrollView({
		        height: "100%",
		        width: "auto",
		        direction: "vertical"
		    }); 
			initModalCustom();
			initButton("button");            
		} 
    });
};

//init modal window
initModal("custom-clearance-3agent-modal", 1024 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-location", 500 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("custom-clearance-modal", 768 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-auth", 710 , "auto", 'modal__title-templ','modal__content-templ',{ offset: '0 -200'});	
initModal("modal-change-pass", 370 , "auto", 'modal__title-templ','modal__content-templ',{ offset: '0 -200'});	
initModal("modal-request-del", 480 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-view", 968 , "80%", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit1", 754 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit2", 503 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit3", 794 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit4", 677 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-edit5", 740 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-versions-compare-send", 480 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-req-start", 470 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-request-price-wr", 691 , "auto", 'modal__title-templ','modal__content-templ',"center");	
initModal("modal-company-user-add", 790 , "auto", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view", 1024 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view-v2", 860 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view-v3", 860 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-application-view-v5", 1024 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-counterparties-view", 760 , "80%", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-manufactures-view", 760 , "auto", 'modal__title-templ','modal__content-templ',"center");
initModal("modal-messages-chat-new", 464 , 547, 'modal__title-templ','modal__content-templ',"center");
initModal("modal-fs-helper-view", 640 , "80%", 'modal__title-templ','modal__content-templ',"center");

 
function numberBoxInit (idElement,idAttrName) {
	 $("."+idElement).dxNumberBox({
        value: 15,
        min: 10,
        max: 100,
        showSpinButtons: true,
        inputAttr: {
   		 id: idAttrName,
   		 class: "input-field__value" 
   		}
   		//width: widthElement
    });
};

numberBoxInit ("pseudoClassNumberBox","pseudoNameElementNumberBox__id");



var $form = $('.photo-prof');

$form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $form.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $form.removeClass('is-dragover');
  })
  .on('drop', function(e) {
    droppedFiles = e.originalEvent.dataTransfer.files;
  });
$('.progress-bar__step').hover (function(){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
},
function (){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
}
);


var progressPercentValue=10;
  
$('.header-progress').click(function() {

	// progressPercentValue=Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100);
	console.log('do='+progressPercentValue);
	if (progressPercentValue < 100) {
		$('.progress-bar__status').width((progressPercentValue + 5)+'%');
		// console.log('posle='+ Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100));
		if(progressPercentValue == 45){
			$('.progress-bar__second-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
			$('.progress-bar__second-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

		}

		if(progressPercentValue == 95){
			$('.progress-bar__third-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
			$('.progress-bar__third-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

		}
	progressPercentValue+=5;	
	}


});
var typeDealitem = ["РФ (Внутренациональная)", "ВЭД (Международная)"];
var cargoReceiverItem = ["Физическое лицо", "Юридическое лицо"];
var volumeItem = ["До 5 м", "Свыше 5 м"];
var cargoCheracterItem = ["Однородный (массовый)", "Однородный (не массовый)","Однородный в упаковке", "Не однородный в/без упаковки/и", "Одно грузовое место", "Жидкость без упаковки"];
var transportModItem = ["Груз навалом", "Загрузить в контейнер", "Уже загружен в контейнер", "По решению исполнителя"];
var specialConditionsItem = ["На верхней палубе судна", "Открытое хранение", "Крытое хранение", "Температурный режим"];


function radiogroupInit (idRadio, items, layout) {
$("[id="+idRadio+"]").dxRadioGroup({
        items: items,
        layout: layout
    });
};
function radiogroupClassInit (idRadio, items, layout) {
$("."+idRadio).dxRadioGroup({
        items: items,
        layout: layout
    });
};
radiogroupClassInit ("radio--empt",[""],"");
radiogroupInit ("type-deal__radioGroup",typeDealitem,"");
radiogroupInit ("volume-cargo__radioGroup",volumeItem);
radiogroupInit ("cargo-cheracter__radioGroup",cargoCheracterItem,"");
radiogroupInit ("transport-mod__radioGroup",transportModItem,"");
radiogroupInit ("special-conditions__radioGroup",specialConditionsItem,"");
radiogroupInit ("cargo-receiver__radioGroup",cargoReceiverItem,"horizontal");
radiogroupInit ("HBL__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-escort__radioGroup", ["Уже выпущен и имеется", "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");

//step2
radiogroupInit ("сargo-exam__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-insura__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("custom-clear__radioGroup", ["Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-exam__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("сargo-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");
radiogroupInit ("product-payment__radioGroup", [ "Самостоятельно", "Необходимо выпустить", "По решению исполнителя","Не нужен"], "");

//step3
radiogroupInit ("custom-clearence__export-radio",["Самостоятельно", "Оформить"],"horizontal");
radiogroupInit ("custom-clearence__import-radio",["Самостоятельно", "Оформить"],"horizontal");

radiogroupInit ("custom-clearence-gd__radio",["Не имеет значения", "В месте отправления","На границе"],"horizontal");

radiogroupInit ("deliver-byself__radioGroup",["Полная предоплата", "Частичная оплата ", "Ценные бумаги", "Уставной капитал", "Бартер", "Фьючерс (будущие расчёты)"],"horizontal");

radiogroupInit ("expertise__point-radio",["В пункте отправления", "В другом месте"],"horizontal");

radiogroupInit ("deliver-executor__radioGroup",["Согласно подписанному ДС №3 c Исполнителем", "Подписать ДС №3 c Исполнителем", "Будет подписано ДС №3 c Исполнителем позже"],"");

radiogroupInit ("cargo-escort-byself__doc-radio",["Да, нужно на всём маршруте", "Да, нужно на выбранных пунктах", "Нет, организую самостоятельно"],"horizontal");

radiogroupInit ("documentary-credit-shiping__radio",["Безотзывный", "Отзывный", "Акцептный", "Безакцептный"],"horizontal");

radiogroupInit ("cargo-descript__hmanygoods-radio",["Один товар", "Два и более (сборное грузовое место)"],"horizontal");

radiogroupInit ("custom-clearence__3agent-radio",["Резидент", "Нерезидент"],"horizontal");
radiogroupInit ("afterPay__radioGroup",["Передать на ответственное хранение", "Передать без транспортировки 3-му лицу", "Доставить 3-му лицу","Доставить заказчику"],"horizontal");
radiogroupInit ("orgaization-form__radioGroup",["Физическое лицо", "Индивидуальный предприниматель", "Юридическое лицо"],"");

radiogroupInit ("you-status__radioGroup",["Резидент", "Нерезидент"],"");
radiogroupInit ("tocargo__radioGroup",["Грузовладелец", "Транспортная компания (экспедитор) – представитель грузовладельца"],"");
radiogroupInit ("customer-endind-radio",["-ое", "-ый" , "-ая"],"horizontal");
radiogroupInit ("custom-clearence-reqedit__radio",["Самостоятельно", "Да, таможенная очистка","Да, транзитное оформление","Не таможенный груз"],"horizontal");
radiogroupInit ("documentary-credit-shiping-reqedit__radio",["Самостоятельно", "Документарный аккредитив","Другие способы оплаты","Через исполнителя"],"horizontal");
radiogroupInit ("cargo-transport-reqedit__radio",["Полная предварительная оплата", "Полная предварительная оплата","Оплата по частям","По факту исполнения"],"horizontal");
radiogroupInit ("goods-exp-reqedit__radio",["Самостоятельно", "Да, при приёмке и сдаче груза","Да, нужно по выбору","Нет, не нужно"],"horizontal");
radiogroupInit ("cargo-insur-reqedit__radio",["Самостоятельно", "Да, на всём маршруте","Да, по выбору","Нет, не нужно"],"horizontal");
radiogroupInit ("cargo-escort-reqedit__radio",["По решению исполнителя", "Да нужно, на всём пути","Да нужно, по выбору","Собственный сопровождающий","Нет, не нужно"],"horizontal");
radiogroupInit ("hbl-reqedit__radio",["Уже выпущен и имеется", "Самостоятельно","Необходимо выпустить","По решению исполнителя","Не нужен"],"horizontal");
radiogroupInit ("version-compare_hdr__radio",["Показать все параметры, в т.ч. с одинаковыми значениями", "Показать только изменённые, несовпадающие параметры"],"horizontal");
radiogroupInit ("company-req-radio",["БИК", "SWIFT"],"horizontal");
radiogroupInit ("hbl-app-radio",["Один оригинал", "Два оригинала", "Три оригинала"],"horizontal");
radiogroupInit ("hbl2-app-radio",["На предъявителя", "Ордерный"],"horizontal");
radiogroupInit ("hbl3-app-radio",["Уведомить как получатель", "Как отправитель"],"horizontal");

radiogroupInit ("delivery-cond-radio",["Нет поручения как распорядиться", "Собрать", "Выдать"],"horizontal");
radiogroupInit ("delivery-cond2-radio",["Выдать", "Отправить (куда/кому)"],"horizontal");
//modal-helper
radiogroupInit ("place-take-cargo-radiogroup",["Склад отправителя/продавца", "Спец. терминал", "В аэропорту", "На железнодорожной станции", "В порту", "На складе экспедитора"],"");
radiogroupInit ("place-sorage-cargo-radiogroup",["На складе", "На борту автомобиля", "На борту самолета", "На железнодорожном вагоне", "На борту судна"],"");
radiogroupInit ("last-finance-operation-radiogroup",["Оплачена", "Частично оплачена", "Не оплачена"],"");



//нативный radiogroup request-price
$('input[type="radio"]').on('change', function(e) {
	// console.log($(this).parent().parent());
    $('.field-set').removeClass('field-set--b-gr');
    $(this).closest('.field-set').toggleClass('field-set--b-gr');
});



$(function() {
    $("[id=rangeSelector]").dxRangeSelector({
        size: {
            height: 70,
            width: 744
        },
        selectedRangeColor: "rgba(55, 63, 81, 0.4)",
        scale: {
            startValue: -30,
            endValue: +30,
            // minorTickInterval: 5,
            tickInterval: 10,
            // minorTick: {
                // visible: false,
            // },
            label: {
                // format: "currency",
                customizeText: function () {
                return this.valueText + " ˚C";
            	},
            	font: {
					color: "#373F51",
					family: "Lucida Grande, Tahoma, Arial",
					opacity: 1,
					size: 13,
					weight: 400
				}
            }
        },
        sliderMarker: {
            // format: "currency",
            color: "#373F51",
            customizeText: function () {
                return this.valueText + " ˚C";
            },
            font: {
				color: "#FFFFFF",
				family: "Lucida Grande, Tahoma, Arial",
				opacity: 1,
				size: 13,
				weight: 400
			},
           	invalidRangeColor: "red",
			paddingLeftRight: 10,
			paddingTopBottom: 2,
        },
        value: [4, 8],
        onInitialized: function () {      	
        	
        	
        },
        // redrawOnResize: function (){alert($('.rangeselector .dxrs-range-selector-line').offset());},
        onDrawn: function (){    	
            //обязательный вызов для backgroud элмента радуга
        	$( ".rangeselector.dx-visibility-change-handler" ).append( "<div class='rangeselector__back'></div>");
        }

    });
});
$('.req-price .app-lnk__clhd').click(function(event) {

	$(this).toggleClass('app-lnk__clhd--opn');
	$(this).parents('.req-price__list').toggleClass('req-price__list--hide');

});
$('.spoiler').click(function(event) {
	$(this).toggleClass('spoiler--show');
});
//add consignment block

//реализация добавление блоков на первом шаге. убрали тк по идеи не нужна
// function cnstCargoCheracter (count) { return "<field-set id='field-set__cargo-cheracter--part"+ count + "' class='field-set field-set__cargo-cheracter'><legend class='field-set__cap'>Характеристики груза</legend><div class='field-set__items'><div id='cargo-cheracter__radioGroup' class='radiogroup'></div></div></field-set>"};
// function cnstTransportMod (count) { return "<field-set id='field-set__transport-mod--part"+ count + "' class='field-set field-set__transport-mod'><legend class='field-set__cap'>Способ перевозки</legend><div class='field-set__items'><div id='transport-mod__radioGroup' class='radiogroup'></div></div></field-set>"};
// function cnstSpecialConditions (count) { return "<field-set id='field-set__special-conditions--part"+ count + "' class='field-set field-set__special-conditions'><legend class='field-set__cap'>Особые условия хранения и перевозки</legend><div class='field-set__items'><div id='special-conditions__radioGroup' class='radiogroup'></div></div></field-set>"};
// function cnstAdditionalCharacter (count) { return "<field-set id='field-set__additional-character--part"+ count + "' class='field-set field-set__additional-character'><legend class='field-set__cap'>Дополнительные характеристики</legend><div class='field-set__items checkbox-items'><div id='danger-cargo__checkbox' class='checkbox'></div><div id='oversize-cargo__checkbox' class='checkbox'></div><div id='humane-cargo__checkbox' class='checkbox'></div><div id='home-cargo__checkbox' class='checkbox'></div><div id='used-cargo__checkbox' class='checkbox'></div></div></field-set>"};

// $(document.body).on('click', '.step-block__sep-btn-add' ,function(){
// //add del btn to first element
// 	if ($( ".consignment" ).length == 1 )
// 		$( ".consignment .step-block__sep").append("<div class='step-block__sep-btn-close'></div>");
	
// 	//add content
// 	var consignmentCount= $( ".consignment" ).length + 1;

// 	$( ".consignment" ).last().after($( "<section class='consignment'><div class='step-block__sep'><h2 class='step-block__sep-cap'>Партия №" + consignmentCount +"</h2><div class='step-block__sep-line'></div><div class='step-block__sep-btn-close'></div> </div></section>" ));
// 	$( ".consignment").last().append(cnstCargoCheracter(consignmentCount));
// 	$( ".consignment").last().append(cnstTransportMod(consignmentCount));
// 	$( ".consignment").last().append(cnstSpecialConditions(consignmentCount));
// 	$( ".consignment").last().append(cnstAdditionalCharacter(consignmentCount));

// 	var el=$(".consignment #cargo-cheracter__radioGroup").last();
// 	 	$(el).dxRadioGroup({
//    	 	   items: cargoCheracterItem
//    		});
//    		el=$(".consignment #transport-mod__radioGroup").last();
// 	 	$(el).dxRadioGroup({
//    	 	   items: transportModItem
//    		});
//    		el=$(".consignment #special-conditions__radioGroup").last();
// 	 	$(el).dxRadioGroup({
//    	 	   items: specialConditionsItem
//    		});

// 	 	el=$(".consignment #danger-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Опасный груз",
//        		 value: false
//    		 });
// 	 	el=$(".consignment #oversize-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		text: "Негабаритный",
//         	value: false
//    		 });

// 	 	el=$(".consignment #humane-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Гуманитарная помощь",
//        		 value: false,
//    		 });
// 	 	el=$(".consignment #home-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Домашние вещи",
//        		 value: false,
//    		 });
// 	 	el=$(".consignment #used-cargo__checkbox").last();
// 	 	$(el).dxCheckBox({
//        		 text: "Бывший в употреблении",
//        		 value: false,
//    		 });
// });


// //del consignment block 
// $(document.body).on('click', '.step-block__sep-btn-close' ,function(){
// 	$(this).parent().parent().remove();
// 	var consignmentElement = document.getElementsByClassName("consignment");
// 		for(var i=0; i < consignmentElement.length; i++){
// 			$(consignmentElement[i]).find('.step-block__sep-cap').replaceWith("<h2 class='step-block__sep-cap'>Партия №"+ (i+1) +"</h2>");
// 		}

// 	if ($( ".consignment" ).length == 1 )
// 		$( ".consignment .step-block__sep .step-block__sep-btn-close").remove();
// });
    $(".switch__toggle").dxSwitch({
        value: false
    });
$('.tabs__link a').click(function (e) {
  e.preventDefault();
  $('.tabs__link').removeClass('tabs__link--active');
  $(this).parent().addClass('tabs__link--active');
  $('.tabs__cont').removeClass('tabs__cont--active');
  $('#'+ $(this).attr('href')).addClass('tabs__cont--active');

});


    var simpleProducts = [
    "Выбор 1",
    "Выбор 12",
    "Выбор 15",
    "Выбор 111 достаточнодлинноеназваниедляпроверкиконтента",
    "Выбор Выбор 1",
    "Выбор Выбор 2"
];
function tagBoxInit (idElement,idAttrName, itemsElement) {
     $("."+idElement).dxTagBox({
        items: itemsElement,
        showSelectionControls: true,
        placeholder: "Выберите",
        showDropDownButton: true,
        inputAttr: {
         id: idAttrName
        },
        // width: widthElement
    });
};
  
tagBoxInit ("input-field__tagbox","input-field__tagbox-id",simpleProducts);  
var tnvd= [
  {
    "key": 1,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "01-05",
    "name": "I. Живые животные; продукты животного происхождения (Группы 01-05)",
    "items": []
  },
  {
    "key": 1707,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "06-14",
    "name": "II. Продукты растительного происхождения (Группы 06-14)",
    "items": []
  },
  {
    "key": 2578,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "15",
    "name": "Жиры и масла животного или растительного происхождения и продукты их расщепления; готовые пищевые жиры; воски животного или растительного происхождения",
    "items": []
  },
  {
    "key": 2847,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "16-24",
    "name": "IV. Готовые пищевые продукты; алкогольные и безалкогольные напитки и уксус; табак и его заменители (Группы 16-24)",
    "items": [
      {
        "key": 2848,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "16",
        "name": "Готовые продукты из мяса, рыбы или ракообразных, моллюсков или прочих водных беспозвоночных",
        "items": []
      },
      {
        "key": 3005,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "17",
        "name": "Сахар и кондитерские изделия из сахара",
        "items": [
          {
            "key": 3006,
            "parentId": 3005,
            "isLazy": true,
            "hasitems": false,
            "expand": false,
            "addClass": null,
            "isFolder": true,
            "code": "17010",
            "name": "Сахар тростниковый или свекловичный и химически чистая сахароза, в твердом состоянии",
            "items": []
          },
          {
            "key": 3054,
            "parentId": 3005,
            "isLazy": true,
            "hasitems": false,
            "expand": false,
            "addClass": null,
            "isFolder": true,
            "code": "17020",
            "name": "Прочие сахара, включая химически чистые лактозу, мальтозу, глюкозу и фруктозу, в твердом состоянии; сиропы сахарные без добавления вкусо-ароматических или красящих веществ; искусственный мед, смешанный или не смешанный с натуральным медом; карамельный кул",
            "items": [
              {
                "key": 3055,
                "parentId": 3054,
                "isLazy": true,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": true,
                "code": "17021",
                "name": "лактоза и сироп лактозы",
                "items": []
              },
              {
                "key": 3058,
                "parentId": 3054,
                "isLazy": true,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": true,
                "code": "17022",
                "name": "сахар и сироп кленовые",
                "items": []
              },
              {
                "key": 3061,
                "parentId": 3054,
                "isLazy": true,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": true,
                "code": "17023",
                "name": "глюкоза и сироп глюкозы, не содержащие фруктозу или содержащие менее 20 мас.% фруктозы в сухом состоянии",
                "items": [
                  {
                    "key": 3062,
                    "parentId": 3061,
                    "isLazy": false,
                    "hasitems": false,
                    "expand": false,
                    "addClass": null,
                    "isFolder": false,
                    "code": "1702301000",
                    "name": "изоглюкоза",
                    "items": []
                  },
                  {
                    "key": 3063,
                    "parentId": 3061,
                    "isLazy": true,
                    "hasitems": false,
                    "expand": false,
                    "addClass": null,
                    "isFolder": true,
                    "code": "1702305",
                    "name": "содержащие в сухом состоянии 99 мас.% или более глюкозы",
                    "items": [
                      {
                        "key": 3064,
                        "parentId": 3063,
                        "isLazy": true,
                        "hasitems": false,
                        "expand": false,
                        "addClass": null,
                        "isFolder": true,
                        "code": "1702305",
                        "name": "содержащие в сухом состоянии 99 мас.% или более глюкозы",
                        "items": [
                          {
                            "key": 3065,
                            "parentId": 3064,
                            "isLazy": false,
                            "hasitems": false,
                            "expand": false,
                            "addClass": null,
                            "isFolder": false,
                            "code": "1702305100",
                            "name": "в виде белого кристаллического порошка, агломерированного или неагломерированного",
                            "items": []
                          },
                          {
                            "key": 3066,
                            "parentId": 3064,
                            "isLazy": false,
                            "hasitems": false,
                            "expand": false,
                            "addClass": null,
                            "isFolder": false,
                            "code": "1702305900",
                            "name": "прочие",
                            "items": []
                          }
                        ]
                      },
                      {
                        "key": 3067,
                        "parentId": 3063,
                        "isLazy": true,
                        "hasitems": false,
                        "expand": false,
                        "addClass": null,
                        "isFolder": true,
                        "code": "1702309",
                        "name": "прочие",
                        "items": []
                      }
                    ]
                  }
                ]
              },
              {
                "key": 3072,
                "parentId": 3054,
                "isLazy": true,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": true,
                "code": "17024",
                "name": "глюкоза и сироп глюкозы, содержащие в сухом состоянии не менее 20 мас.%, но менее 50 мас.% фруктозы, не включая инвертный сахар",
                "items": []
              },
              {
                "key": 3075,
                "parentId": 3054,
                "isLazy": false,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": false,
                "code": "1702500000",
                "name": "фруктоза химически чистая",
                "items": []
              },
              {
                "key": 3076,
                "parentId": 3054,
                "isLazy": true,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": true,
                "code": "17026",
                "name": "фруктоза прочая и сироп фруктозы, содержащие в сухом состоянии более 50 мас.% фруктозы, не включая инвертный сахар",
                "items": []
              },
              {
                "key": 3080,
                "parentId": 3054,
                "isLazy": true,
                "hasitems": false,
                "expand": false,
                "addClass": null,
                "isFolder": true,
                "code": "17029",
                "name": "прочие, включая инвертный сахар и прочие сахара и сахарные сиропы, содержащие в сухом состоянии 50 мас.% фруктозы",
                "items": []
              }
            ]
          },
          {
            "key": 3092,
            "parentId": 3005,
            "isLazy": true,
            "hasitems": false,
            "expand": false,
            "addClass": null,
            "isFolder": true,
            "code": "17030",
            "name": "Меласса, полученная в результате извлечения или рафинирования сахара",
            "items": []
          },
          {
            "key": 3095,
            "parentId": 3005,
            "isLazy": true,
            "hasitems": false,
            "expand": false,
            "addClass": null,
            "isFolder": true,
            "code": "17040",
            "name": "Кондитерские изделия из сахара (включая белый шоколад), не содержащие какао",
            "items": []
          }
        ]
      },
      {
        "key": 3117,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "18",
        "name": "Какао и продукты из него",
        "items": []
      },
      {
        "key": 3159,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "19",
        "name": "Готовые продукты из зерна злаков, муки, крахмала или молока; мучные кондитерские изделия",
        "items": []
      },
      {
        "key": 3242,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "20",
        "name": "Продукты переработки овощей, фруктов, орехов или прочих частей растений",
        "items": []
      },
      {
        "key": 3851,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "21",
        "name": "Разные пищевые продукты",
        "items": []
      },
      {
        "key": 3946,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "22",
        "name": "Алкогольные и безалкогольные напитки и уксус",
        "items": []
      },
      {
        "key": 4239,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "23",
        "name": "Остатки и отходы пищевой промышленности; готовые корма для животных",
        "items": []
      },
      {
        "key": 4343,
        "parentId": 2847,
        "isLazy": true,
        "hasitems": false,
        "expand": false,
        "addClass": null,
        "isFolder": true,
        "code": "24",
        "name": "Табак и промышленные заменители табака",
        "items": []
      }
    ]
  },
  {
    "key": 4391,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "25-27",
    "name": "V. Минеральные продукты (Группы 25-27)",
    "items": []
  },
  {
    "key": 4765,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "28-38",
    "name": "VI. Продукция химической и связанных с ней отраслей промышленности (Группы 28-38)",
    "items": []
  },
  {
    "key": 5719,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "39-40",
    "name": "VII. Пластмассы и изделия из них; каучук, резина и изделия из них (Группы 39-40)",
    "items": []
  },
  {
    "key": 6051,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "41-43",
    "name": "VIII. Необработанные шкуры, выделанная кожа, натуральный мех и изделия из них; шорно-седельные изделия и упряжь; дорожные принадлежности, дамские сумки и аналогичные им товары; изделия из кишок животных (кроме волокна из фиброина шелкопряда) (Группы 41-43",
    "items": []
  },
  {
    "key": 6392,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "44-46",
    "name": "IX. Древесина и изделия из нее; древесный уголь; пробка и изделия из нее; изделия из соломы, альфы или из прочих материалов для плетения; корзиночные и другие плетеные изделия (Группы 44-46)",
    "items": []
  },
  {
    "key": 6764,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "47-49",
    "name": "X. Масса из древесины или из других волокнистых целлюлозных материалов; регенерируемые бумага или картон (макулатура и отходы); бумага, картон и изделия из них (Группы 47-49)",
    "items": []
  },
  {
    "key": 7135,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "50-63",
    "name": "XI. Текстильные материалы и текстильные изделия (Группы 50-63)",
    "items": []
  },
  {
    "key": 8942,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "64-67",
    "name": "XII. Обувь, головные уборы, зонты, солнцезащитные зонты, трости, трости-сиденья, хлысты, кнуты и их части; обработанные перья и изделия из них; искусственные цветы; изделия из человеческого волоса (Группы 64-67)",
    "items": []
  },
  {
    "key": 9230,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "68-70",
    "name": "XIII. Изделия из камня, гипса, цемента, асбеста, слюды или аналогичных материалов; керамические изделия; стекло и изделия из него (Группы 68-70)",
    "items": []
  },
  {
    "key": 9605,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "71",
    "name": "Жемчуг природный или культивированный, драгоценные или полудрагоценные камни, драгоценные металлы, металлы, плакированные драгоценными металлами, и изделия из них; бижутерия; монеты",
    "items": []
  },
  {
    "key": 9633,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "72-83",
    "name": "XV. Недрагоценные металлы и изделия из них (Группы 72-83)",
    "items": []
  },
  {
    "key": 10936,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "84-85",
    "name": "XVI. Машины, оборудование и механизмы; электротехническое оборудование; их части; звукозаписывающая и звуковоспроизводящая аппаратура, аппаратура для записи и воспроизведения телевизионного изображения и звука, их части и принадлежности (Группы 84-85)",
    "items": []
  },
  {
    "key": 13980,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "86-89",
    "name": "XVII. Средства наземного транспорта, летательные аппараты, плавучие средства и относящиеся к транспорту устройства и оборудование (Группы 86-89)",
    "items": []
  },
  {
    "key": 14712,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "90-92",
    "name": "XVIII. Инструменты и аппараты оптические, фотографические, кинематографические, измерительные, контрольные, прецизионные, медицинские или хирургические; часы всех видов; музыкальные инструменты; их части и принадлежности (Группы 90-92)",
    "items": []
  },
  {
    "key": 15317,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "93",
    "name": "Оружие и боеприпасы; их части и принадлежности",
    "items": []
  },
  {
    "key": 15360,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "94-96",
    "name": "XX. Разные промышленные товары (Группы 94-96)",
    "items": []
  },
  {
    "key": 15773,
    "parentId": null,
    "isLazy": true,
    "hasitems": false,
    "expand": false,
    "addClass": null,
    "isFolder": true,
    "code": "97",
    "name": "Произведения искусства, предметы коллекционирования и антиквариат",
    "items": []
  }
];

     $('#treeView').dxTreeView({ 
        items: tnvd,
        width: 700,
        itemTemplate: function (itemData, itemIndex, element) {
            var checkmark="";
            if (itemData.code.length > 5)
             checkmark = "<label class='chkbox-cont'><input type='radio' name='radio'><span class='chkbox-chkmrk'></span></label>";
            // else
            //     checkmark = "<label class='chkbox-empty'></label>";

            if (itemData.items.length==0)
                return ("<div class='treeview'> "+checkmark+"<div class='treeview__last'><span class='treeview__code'>"+itemData.code+"</span><span class='treeview__tx'>"+itemData.name+"</span></div></div>");
            else
                return ("<div class='treeview'> "+checkmark+"<div class='treeview__code'>"+itemData.code+"</div><div class='treeview__tx'>"+itemData.name+"</div></div>");
        },
        onItemClick: function(e) {

        }
    }).dxTreeView('instance');



$('.ver-comp .app-lnk__clhd').click(function(event) {

	$(this).toggleClass('app-lnk__clhd--opn');
	$(this).parents('.ver-comp__bl').toggleClass('ver-comp__bl--hide');

});
// $(".navbar").scroll (function () {

//  if ( $(this).scrollTop() > $('.navbar__header-roll').height()) {

//     $(".navbar__header-sticky").addClass("navbar__header-sticky--active");
//     $(".navbar-ul").addClass("navbar-ul--understicky");
//     //прокрутили соседа
//     $('.header-sticky')[0].scrollIntoView(true);

// }  
// if ( $(this).scrollTop() == 0) {

//     $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
//     $(".navbar-ul").removeClass("navbar-ul--understicky");
//     //прокрутили соседа
//     $('.header-currency')[0].scrollIntoView(true);
//  }

//  });
$('.timezone-popup-menu__title-btn').click(function(){
// console.log ($(',timezone-popup-menu__title-btn').hasClass('app-lnk-disable'));
// if (!$('.timezone-popup-menu__title-btn').hasClass('app-lnk-disable')) {
		$(this).parents(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$(this).toggleClass('btn-rotate180');
		$(this).toggleClass('app-lnk-disable');

	// }
});


$(".timezone-popup-menu__title-btn").click(function(e) {
  e.stopPropagation(); 
});

function timezonePopupClose(e) {
   // if (!$(e.target).closest("timezone-popup-menu").length) {
	if ($('.timezone-popup-menu__title').hasClass('timezone-popup-menu__title--active')){
		$(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$('.timezone-popup-menu__title-btn').toggleClass('btn-rotate180');
		$('.timezone-popup-menu__title-btn').toggleClass('app-lnk-disable');
	}
	// }
}


$('.user-popup-menu__title-btn').click(function(){ //button not global beacause js individual
	// $(this).toggleClass('user-popup-menu__title-btn--up');
	// if (!$('.user-popup-menu__title-btn').hasClass('app-lnk-disable')) {
		$(this).parents(".user-popup-menu").toggleClass('user-popup-menu--active');
		$(this).parents(".user-popup-menu").find('.user-popup-menu__add').toggleClass('user-popup-menu__add--active');
		$(this).toggleClass('btn-rotate180');
		$(this).toggleClass('app-lnk-disable');
	// }
});


$(".user-popup-menu__title-btn").click(function(e) {
  e.stopPropagation(); 
});


function userPopupClose() {
	if ($('.user-popup-menu__title-info-name').hasClass('app-lnk-disable')){
		$(".user-popup-menu--active").toggleClass('user-popup-menu--active');
		$('.user-popup-menu__add--active').toggleClass('user-popup-menu__add--active');
		$('.app-lnk-disable').toggleClass('btn-rotate180');
		$('.app-lnk-disable').toggleClass('app-lnk-disable');
	}
}
var cityData = [{
    id: 1,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
},
{
    id: 2,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
},
{
    id: 3,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
},
{
    id: 4,
    name: "Владивосток, Приморский край, Россия",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
}, {
    id: 5,
    name: "Находка",
    flag: "RU",
    imgSrc: "img/flag-russia.svg"
}
];

function autocompleteInit (idElement,attrId, attrVal) {

$("#"+idElement).dxAutocomplete({
  inputAttr: {
       id: attrId,
       class: attrVal
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            //обязательный шаблон
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({                         //необходим если есть валидация
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
};


autocompleteInit ("departName","departName__id","input-field__value");
autocompleteInit ("destName","destName__id","input-field__value");
autocompleteInit ("citySearch","citySearch__id","input-field__value");
autocompleteInit ("modalCity","modalCity__id","input-field__value");



function autocompleteInitClass (idElement,attrId, attrVal) {

$("."+idElement).dxAutocomplete({
  inputAttr: {
       id: attrId,
       class: attrVal
   },
   dataSource: cityData,
   valueExpr: 'name',
   itemTemplate: function(data) {
            //обязательный шаблон
            return $("<div class='input-field__autocomplete-item'><img class='input-field__autocomplete-item--flag' src='" + data.imgSrc +
                "'>" + data.name + "</div>");
         }
    
}).dxValidator({                         //необходим если есть валидация
        validationRules: [{
            type: "required",
            message: "Обязательно к заполнению"
        }],
        validationGroup: "validateItems" //обязательный параметр для валидации
    });
};
autocompleteInitClass ("input-field__city","input-field__city-id","input-field__value");
autocompleteInitClass ("input-field__search","input-field__search-id","input-field__value"); //инициализировали как город только для примера








//Выберите дату
function dateInit (element,attrId, attrVal) {
$("[id="+element+"]").dxDateBox({
      type: "date",
      placeholder: "Введите дату",
      inputAttr: {
         id: attrId,
         class: attrVal
       }   
});
};

dateInit("date-field","date-field__id","input-field__value");

var now = new Date();   
    $("#cargoBeginDate").dxDateBox({
        type: "date",
        placeholder: "Введите дату",
        inputAttr: {
           id: "cargoBeginDate__id",
           class:"input-field__value"
         }
    });
    $("#cargoExpDate").dxDateBox({
        type: "date",
        placeholder: "Введите дату",
        disabled: true,
        inputAttr: {
           id: "cargoExpDate__id",
           class:"input-field__value"
         }
    });



function selectBoxInitForId (idElement, dataS, inputAttrId, inputAttrVal ) {
$("#" + idElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInitForId("conditionDest",[ "FCA", "FAS", "FOB" ],"conditionDepart__id","input-field__value");
selectBoxInitForId("conditionDepart",[ "FCA", "FAS", "FOB" ],"conditionDest__id","input-field__value");
//в какой валюте расчитать
selectBoxInitForId("currency-calc",[ "Доллары США (USD)", "Рубли (RUB)"],"currency-calc__id","input-field__value");
//страна в модальном окне
selectBoxInitForId('modal__country-list',[ "Россия", "Америка"],"modal__country-list__id","input-field__value");
//край район область в модальном окне
selectBoxInitForId('modal__region-list',[ "Приморский край", "Камчатский край"],"modal__region-list__id","input-field__value");

function selectBoxInitForClass (classElement, dataS, inputAttrId, inputAttrVal ) {
$("." + classElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};

selectBoxInitForClass("pseudoClassSelectBox", [ "значение", "значение", "значенадывжлавдылажвылаие 123456789" ],"pseudoNameElementSelectBox__id","input-field__value");





function selectBoxForChat (classElement, dataS, inputAttrId, inputAttrVal ) {
    $("." + classElement).dxSelectBox({
        dataSource: dataS,
        placeholder: "",
        fieldTemplate: function (data, container) {
            var result = $("<div class='messages__custom-select'><div class='messages__dialog-type-select-color messages__dialog-type-select-color--green'></div><div class='messages__dialog-type-name'></div></div>");
            result
                .find(".messages__dialog-type-name")
                .dxTextBox({
                    value: data && data.typeName,
                    readonly: true,
                    inputAttr: {
                        id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а••
                        class: inputAttrVal //обязятельный класс
                       }
                });
            container.append(result);
        },
        itemTemplate: function (data) {
            return "<div class='messages__custom-select-list'><div class='messages__dialog-type-select-color messages__dialog-type-select-color--"+data.type+"'></div><div class='messages__dialog-type-name'>"+data.typeName+"</div></div>";
        },
        inputAttr: {
          id: inputAttrId, //иницилизируем элемент с id - имя сопадает с именем элемента label для input-а
          class: inputAttrVal //обязятельный класс
         }
    });
};




function textAriaInit (className, width,height) {
	$("." + className).dxTextArea({
        spellcheck: false,
        width: width,
        height: height,
        inputAttr: {
       id: "pseudoElementTextAria__id",
       class:"input-field__value" 
   }
    });
};

function textAriaInitAutoResize (className, width) {
	$("." + className).dxTextArea({
        spellcheck: false,
        width: width,
        autoResizeEnabled: true,
        inputAttr: {
       id: "pseudoElementTextAria__id",
       class:"input-field__value" 
   }
    });
};

function textAriaInitAutoResizeminHeight (className, width, minHeight) {
  $("." + className).dxTextArea({
        spellcheck: false,
        width: width,
        minHeight: minHeight,
        autoResizeEnabled: true,
        inputAttr: {
       id: "pseudoElementTextAria__id",
       class:"input-field__value" 
   }
    });
};

function textAriaInitAutoResizemaxHeight (className, width, maxHeight) {
    $("." + className).dxTextArea({
          spellcheck: false,
          width: width,
          minHeight: 36,
          maxHeight: maxHeight,
          autoResizeEnabled: true,
          inputAttr: {
         id: "pseudoElementTextAria__id",
         class:"input-field__value" 
     }
      });
  };


textAriaInit('pseudoClassTextAria', "auto", 72);
textAriaInitAutoResize('pseudoClassTextAriaAutoHeight', "auto");
textAriaInitAutoResizeminHeight('pseudoClassTextAriaAutoHeight72', "auto" , 72);
textAriaInitAutoResizemaxHeight('pseudoClassTextAriaAutoHeightMax108', "auto" , 108);
 $(".popup__info-newmsg").dxToast({
        message: "У вас новое сообщение по запросу (пример всплывающего уведомления)",
        displayTime: 300000,
        position: {my: 'center right', at: 'center right', offset: '-50 0'},
        width: 375,
		onShowing: function () {
			//for left separate line on block message
			$('.dx-toast-message').height($('.dx-toast-content').height());
		}
    });

  $(".popup__info-newmsg").dxToast("show");
$('.header-currency__lang').click( function () {
	$('.header-currency__lang').toggleClass('header-currency__lang--ru');
	$('.header-currency__lang').toggleClass('header-currency__lang--en');
});
//эффект на иконке при hover тк заголовок всегда 1
$('.navbar__header-link').hover(  
function(){
    $(this).find(".navbar__header-icon").css('opacity','1')
},
function(){
    $(this).find(".navbar__header-icon").css('opacity','0.6')

});



//open close menu
  $('.navbar__header-close-btn').on('click', function() {
  	openNavbar ();
    //ширина footer
    ///$('.footer').toggleClass('footer--fix313');
  });

function openNavbar () {
     $('.navbar__header-close-btn').toggleClass('btn-rotate180');
     $('.navbar__header-main-menu').toggleClass('navbar-el--hide');
     $('.navbar__header-copyright').toggleClass('navbar-el--hide');
     //показываем caption и  кнопку раскрытия субменю
     $('.navbar__item-caption').toggleClass('navbar-item-el--hide');
     $('.navbar__item-btn-submenu').toggleClass('navbar-item-el--hide');
     $('.navbar__item-icon').css('margin','0 10px 0 27px'); //отступ от иконки при раскрытом меню
    
 

     //сворачиваем все  submenu
     if ($('.navbar').hasClass('navbar--open'))//меню открыо
	 { 
        if ($('.navbar__submenu').hasClass('navbar__submenu--open')){
          $('.navbar__submenu--open').parent().find('.navbar__item-header').find('.navbar__item-btn-submenu').toggleClass('btn-rotate180');
        }
        
        //убрали sticky  и закрыли все  submenu
        $(".navbar__header-sticky").removeClass("navbar__header-sticky--active");
        $(".navbar-ul").removeClass("navbar-ul--understicky");
    	$('.navbar__submenu').removeClass('navbar__submenu--open');
        $('.navbar__header-roll')[0].scrollIntoView(true);

	 } 


	$('.navbar').toggleClass('navbar--open'); //после всех тк ориентир на класс
    //правим ширину для fix header после тк safari не корректно обрабатывает
    /// if ($('.header-sticky').hasClass('header-sticky--active'))
    /// {   
    ///     $('.header-sticky').toggleClass('header-sticky--fix78');
    ///     $('.header-sticky').toggleClass('header-sticky--fix313');
    /// }

}
//эффект на иконке при hover тк заголовок всегда 1
$('.navbar__item-header').hover(  
function(){
	$(this).find(".navbar__item-icon").css('opacity','1')
},
function(){
	$(this).find(".navbar__item-icon").css('opacity','0.6')

});

$('.navbar__item-header').click(function(){
	if (!$('.navbar').hasClass('navbar--open')){
		openNavbar ();
		///$('.footer').toggleClass('footer--fix313');
	}
	$(this).parents(".navbar__item").find('.navbar__submenu').toggleClass('navbar__submenu--open');
	$(this).find('.navbar__item-btn-submenu').toggleClass('btn-rotate180');

});
