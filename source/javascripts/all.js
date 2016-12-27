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


})

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

//jquery scroll handler
$(document).ready(function(){
  //var header_h = document.getElementsByClassName('header').height;
  var footer_h = $('.footer').height()
  var ul_h = $('.toc-wrapper').height()
  var header_h = $('.header').outerHeight()
  var window_h = $(window).height()

  $('.toc-wrapper').pushpin({
    top: header_h + 20,
    offset: 0,
    // bottom should stop at the entire window height - (footer height + table of contents height)
    bottom: 3000
  });
});
