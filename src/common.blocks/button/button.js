// $('#footer__button-save').click(function () {
// 	
// });

$('#footer__button-save').dxButton({
                stylingMode: 'text',
                text: 'okl',
                type: 'normal',
                onClick: function() { 
					$('.footer__saved-msg').show();                
				}
            });

$('#footer__button-next').dxButton({
                stylingMode: 'text',
                text: 'okl',
                type: 'normal',
                onClick: function() { 
					// $('.footer__saved-msg').show();                
				}
            });