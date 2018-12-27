$('.timezone-popup-menu__title-btn').click(function(){
// console.log ($(',timezone-popup-menu__title-btn').hasClass('app-lnk-disable'));
if (!$('.timezone-popup-menu__title-btn').hasClass('app-lnk-disable')) {
		$(this).parents(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(this).parents(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$(this).toggleClass('btn-rotate180');
		$(this).toggleClass('app-lnk-disable');
	}
});


$(".timezone-popup-menu__title-btn").click(function(e) {
  e.stopPropagation(); 
});

function timezonePopupClose() {
	if ($('.timezone-popup-menu__title').hasClass('timezone-popup-menu__title--active')){
		$(".timezone-popup-menu__title").toggleClass('timezone-popup-menu__title--active');
		$(".timezone-popup-menu").find('.timezone-popup-menu__add').toggleClass('timezone-popup-menu__add--active');
		$('.timezone-popup-menu__title-btn').toggleClass('btn-rotate180');
		$('.timezone-popup-menu__title-btn').toggleClass('app-lnk-disable');
	}
}

