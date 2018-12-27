$(document).ready(function(){
//= blocks.js



$(document).click(function() {
	if ($('.timezone-popup-menu__title').hasClass('timezone-popup-menu__title--active')){
		$(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$('.timezone-popup-menu__title-btn').toggleClass('btn-rotate180');
	}
});

});