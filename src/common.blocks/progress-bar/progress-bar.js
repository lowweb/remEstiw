$('.progress-bar__step').hover (function(){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
},
function (){
	$(this).find('.progress-bar__step-border').toggleClass('progress-bar__step-border--hov');
}
);

// var progressPercentValue=10;
$('.progress-bar__third-step').click(function() {

	progressPercentValue=Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100);
	console.log('do='+progressPercentValue);
	if (progressPercentValue < 100) {
		$('.progress-bar__status').width((progressPercentValue + 5)+'%');
		// console.log('posle='+ Math.ceil($('.progress-bar__status').width()/$('.progress-bar').width()*100));
		if(progressPercentValue == 45){
			$('.progress-bar__second-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
			$('.progress-bar__second-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

		}

		if(progressPercentValue == 95){
			$('.progress-bar__third-step').find('.progress-bar__step-border').toggleClass('progress-bar__step-border--active');
			$('.progress-bar__third-step').find('.progress-bar__step-link').toggleClass('progress-bar__step-link--active');

		}
	// progressPercentValue+=5;	
	}


});