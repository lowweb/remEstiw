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