$(document).ready(function(){
//= blocks.js


//close popup menu
$(document).click(function(event) {
	timezonePopupClose (event);
	userPopupClose (event);
});

//пример анимации новых сообщений
$('.user-popup-menu__title-pic').click(function(){
	$(this).find('.bounce-newmsg-cnt').toggleClass('bounce-newmsg-cnt--active');
});

//demo progressbar
//runProgressBar();

});