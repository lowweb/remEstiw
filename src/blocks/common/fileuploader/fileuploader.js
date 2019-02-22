
    $(".fileUploader").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        width: 424,
	    // height: auto,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
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

    $(".fileUploader--fullWidth").dxFileUploader({
        accept:"image/*,*.zip,*.pdf,*.mp4",
        // width: 918,
	    // height: auto,
	    multiple: true,
	    allowCanceling: true,
	    selectButtonText: "нажмите выбрать",
		showFileList: true,
		labelText: "Перенесите сюда файл (xls, word, pdf) или",
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
