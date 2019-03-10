$('.tabs__link a').click(function (e) {
  e.preventDefault();
  $('.tabs__link').removeClass('tabs__link--active');
  $(this).parent().addClass('tabs__link--active');
  $('.tabs__cont').removeClass('tabs__cont--active');
  $('#'+ $(this).attr('href')).addClass('tabs__cont--active');

});

