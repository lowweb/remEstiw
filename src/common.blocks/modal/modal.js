//close modal
$('.modal__btn-close').click( function () {
	$('#modal-city').hide();
});
$('.modal-city__footer-close-btn').click( function () {
  $('#modal-city').hide();
});

 const $stepContainer = $('.modal-city__step-container'),
       $steps         = $('.modal-city__step'),
       numSteps       = $steps.length,
       $form          = $('.modal-city__content'),
       $next          = $('.modal-city__block-item'),
       $prev          = $('.modal-city__block-cap--link');

var stepWidth = $form.width();
var currentSlide = 0;
 
  $steps.css({
    width: stepWidth + "px"
  });
  $stepContainer.css("width", stepWidth*numSteps + "px");

  animateSlider();

function animateSlider() {
  $stepContainer.css('transform', `translateX(${-stepWidth * currentSlide}px)`);
}

$next.on('click', function() {
  if(currentSlide < numSteps-1){
  currentSlide ++;
  animateSlider();
  }
  if(currentSlide != 0) {
    $prev.removeClass('disabled');
  }
  if(currentSlide === numSteps -1 ) {
    $(this).addClass('disabled');
  }
  $('.modal-city__block-href-back').text($(this).text());
});

$prev.on('click', function() {
  if(currentSlide > 0) {
    currentSlide --;
    animateSlider();
  } 
  if(currentSlide === 0) {
    $(this).addClass('disabled');
  }
  if(currentSlide != numSteps -1 ) {
    $next.removeClass('disabled');
  }
});

//ощщибка заполнения города
$('.modal-city__title').click(function() {
  $('.modal-city__search-err').toggleClass('modal-city__search-err--show');;
});