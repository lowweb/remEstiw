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
     