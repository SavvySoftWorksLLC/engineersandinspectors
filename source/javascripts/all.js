//= require jquery
//= require materialize-sprockets

$(".button-collapse").sideNav();

$(document).ready(function(){

  var contactForm = document.querySelector('#contact form')
    contactForm.addEventListener('saved', function(e){
      contactForm.reset();
    })

})