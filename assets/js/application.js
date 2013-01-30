$(document).ready(function() {

	$(".nav select").change(function() {
		var full_url =$(this).val();
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = jQuery("#"+trgt).offset();
		var target_top = target_offset.top;
		jQuery('html, body').animate({scrollTop:target_top}, 900);
	});

	//scrollspy function used to navigate on the page with easing
	$(function() {
	  $('ul.nav a, .logo a, a.scroll').bind('click',function(event){
	  var $anchor = $(this);

	  $('[data-spy="scroll"]').each(function () {
	    var $spy = $(this).scrollspy('refresh')
	  });



	  $('html, body').stop().animate({
	    scrollTop: $($anchor.attr('href')).offset().top
	  }, 1300,'easeInOutExpo');

	  event.preventDefault();
	});

	});
});