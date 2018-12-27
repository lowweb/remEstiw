$('.timezone-popup-menu__title-btn').click(function(){

	$(this).parents(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
	$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
	$(this).toggleClass('btn-rotate180');
});


$(".timezone-popup-menu").click(function(e) {
  e.stopPropagation(); //stops click event from reaching document
});

