 $(".popup__info-newmsg").dxToast({
        message: "У вас новое сообщение по запросу (пример всплывающего уведомления)",
        displayTime: 300000,
        position: {my: 'center right', at: 'center right', offset: '-50 0'},
        width: 375,
        // contentTemplate: "<div class='popup__info-newmsg-img'><img src='img/popup__info-newmsg.svg'></div><div class='popup__info-newmsg-text'>У вас новое сообщение по запросу (пример всплывающего уведомления)</div>"
		// height: 56
    });

  $(".popup__info-newmsg").dxToast("show");