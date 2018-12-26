$('.timezone-popup-menu__title-btn').click(function(){
	// console.log ('fsdf');
	// $(this).toggleClass('timezone-popup-menu__title-btn--up');
	$(this).parents(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
	$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
	// $(this).toggleClass('btn-rotate180');
});