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
