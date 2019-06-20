$('.req-price .app-lnk__clhd').click(function(event) {

	$(this).toggleClass('app-lnk__clhd--opn');
	$(this).parents('.req-price__list').toggleClass('req-price__list--hide');

});