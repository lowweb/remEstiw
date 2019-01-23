

function popupCitySelectShow () {
    $(".popup__city-select").dxPopup({
        title: "Выберите пункт отправления",
        visible: true,
        width: 500,
        maxHeight: 772,
        onShown: function () {
        	$('.popup__city-content').show();
        }
    });
};


 const $stepContainer = $('.popup__step-container'),
      $steps         = $('.popup__step'),
      numSteps       = $steps.length,
      $form          = $('.popup__city-select'),
      $next          = $('.popup__content-nav--next'),
      $prev          = $('.popup__content-nav--prev');



let stepWidth = $form.width();
let currentSlide = 0;
  stepWidth = $form.width();
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


