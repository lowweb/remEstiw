function initButton (idElement) {
    $('#' + idElement).dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
             
                }
            });
};

initButton("footer__button-next");
initButton("footer__button-prev");
initButton("modal-city__footer-ok-btn");
initButton("modal-city__footer-close-btn");


$('#footer__button-save').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
                    $('.footer__saved-msg').show();                
                }
            });
          