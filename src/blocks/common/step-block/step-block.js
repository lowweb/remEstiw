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