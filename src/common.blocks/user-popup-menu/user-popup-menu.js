$('.user-popup-menu__title-btn').click(function(){
	$(this).toggleClass('user-popup-menu__title-btn--up');
	$(this).parents(".user-popup-menu").toggleClass('user-popup-menu--active');
	$(this).parents(".user-popup-menu").find('.user-popup-menu__add').toggleClass('user-popup-menu__add--active');

});

$('.user-popup-menu__title-pic').click(function(){
	$(this).find('.user-popup-menu__title-pic-msg').toggleClass('user-popup-menu__title-pic-msg--active');
});