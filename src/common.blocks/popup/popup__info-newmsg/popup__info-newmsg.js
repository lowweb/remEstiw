 $(".popup__info-newmsg").dxToast({
        message: "У вас новое сообщение по запросу (пример всплывающего уведомления)",
        displayTime: 300000,
        position: {my: 'center right', at: 'center right', offset: '-50 0'},
        width: 375,
		onShowing: function () {
			//for left separate line on block message
			$('.dx-toast-message').height($('.dx-toast-content').height());
		}
    });

  $(".popup__info-newmsg").dxToast("show");