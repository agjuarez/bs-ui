//jQuery to collapse the navbar on scroll
$(window).scroll(function() {

     $(".navbar").hide().fadeOut("slow");
    
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
         $(".navbar").hide().fadeOut("slow");

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();

    });
    
});


$.fn.scrollStopped = function(callback) {
  var that = this, $this = $(that);
  $this.scroll(function(ev) {
    clearTimeout($this.data('scrollTimeout'));
    $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
  });
};

$(window).scrollStopped(function(ev){

  $(".navbar").hide().fadeIn("slow");
});

$(document).ready(function() {
    $('#rootwizard').bootstrapWizard({'tabClass': 'nav nav-tabs'});
});