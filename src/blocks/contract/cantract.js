$('.contract__block-cap').click(function(event) {

	$(this).parents('.contract__block').toggleClass('contract__block--hide');
});

$('.contract__line-add .btn__rnd').click(function(event) {
	$(this).parents('.contract__line-add').toggleClass('contract__line-add--act');
});