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

  $('.scrollspy').scrollSpy()
  $('.scrollspy').scrollOffset();


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
