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


textAriaInit('pseudoClassTextAria', "auto", 72);