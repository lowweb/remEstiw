$('.messages__chat-header-search .input-field__btn').click(function (e) {
    e.preventDefault();
    $(this).parents('.messages__chat-header-search').toggleClass('messages__chat-header-search--active');
    $(this).parents('.messages__chat-header').find('.messages__chat-header-people').toggleClass('messages__chat-header-people--hide');
  });

  $('#messages__fileuploader-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('messages__fileuploader-btn--hide');
    $(this).parents('.messages__chat-fotter').find('.messages__chat-fotter-fileuploader').toggleClass('messages__chat-fotter-fileuploader--active');
  });