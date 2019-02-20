 
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

