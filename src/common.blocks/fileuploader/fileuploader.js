$(function () {
    $("#fileUploader").dxFileUploader({
        accept:"image/*,*.zip",
        width: 424,
	    // height: auto,
	    multiple: true,
	    selectButtonText: "выбрать",
		showFileList: true,
		labelText: "перенесите сюда файл или нажмите",
    });
});