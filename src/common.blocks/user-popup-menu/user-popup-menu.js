$('.user-popup-menu__title-btn').click(function(){
	// $(this).toggleClass('user-popup-menu__title-btn--up');
	$(this).parents(".user-popup-menu").toggleClass('user-popup-menu--active');
	$(this).parents(".user-popup-menu").find('.user-popup-menu__add').toggleClass('user-popup-menu__add--active');
	$(this).toggleClass('btn-rotate180');
});

$('.timezone-popup-menu__title-btn').click(function(){
	console.log ('fsdf');
	$(this).toggleClass('timezone-popup-menu__title-btn--up');
	$(this).parents(".timezone-popup-menu").toggleClass('timezone-popup-menu--active');
	$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
	$(this).toggleClass('btn-rotate180');
});
//пример анимации
$('.user-popup-menu__title-pic').click(function(){
	$(this).find('.user-popup-menu__title-pic-msg').toggleClass('user-popup-menu__title-pic-msg--active');
});