// $('#footer__button-save').click(function () {
// 	
// });

$('#footer__button-save').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 
					$('.footer__saved-msg').show();                
				}
            });

$('#footer__button-next').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

				}
            });

$('#footer__button-prev').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });


    //button init
    $('.modal-city__footer-ok-btn').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });

    $('.modal-city__footer-close-btn').dxButton({
                stylingMode: 'text',
                text: '',
                type: 'normal',
                onClick: function() { 

                }
            });
    