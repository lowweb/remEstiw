
    $(".fileUploader").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 424,
	    // height: auto,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или нажмите",
		uploadFailedMessage: "dsfs",
		onUploadStarted: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploaded: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hide this el
		},
		onUploadError: function () {
			// $('#fileUploader .dx-fileuploader-input-wrapper').hide(); //hude this el
		},
		uploadedMessage: "",
		uploadFailedMessage: "",
    });

