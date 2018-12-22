$(document).ready(function() {
  $('.navbar__header-close-btn').on('click', function() {
     $('.navbar').toggleClass('navbar--open');
     $('.navbar__header-close-btn').toggleClass('btn-rotate180-vert');
     $('.navbar__header-main-menu').toggleClass('navbar-el--hide');
     $('.navbar__header-copyright').toggleClass('navbar-el--hide')
    console.log('dsada');
    // $('.main-content').toggleClass('main-content-wide');
  });
});