//= require jquery
//= require materialize-sprockets

$(".button-collapse").sideNav();

$(document).ready(function(){
  
  var contactForm = document.querySelector('#contact form')
    contactForm.addEventListener('saved', function(e){
      contactForm.reset();
    })


  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  $(".dropdown-button").dropdown();

  $('.scrollspy').scrollSpy();

  var footer_h = $('.footer').height()
  var header_h = $('.header').outerHeight()
  var window_h = $('.content').height()

  $('.toc-wrapper').pushpin({
    top: header_h + 40,
    bottom: window_h - footer_h,
    offset: header_h+ 40
  });

  $('.brand-logo').hide();

})


$(window).scroll(function (event) {
    var header_h = 124;
    var scroll_h = $(window).scrollTop();
    if(scroll_h >= header_h) {
      $('.brand-logo').slideDown(500);
    } else if(scroll_h <= header_h) {
      $('.brand-logo').slideUp(500);
    }
});




// jQuery Scroll Animations
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'))
    if( target.length ) {
        event.preventDefault()
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 250);
    }
})


