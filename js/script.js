$(function() {
	$('#go').bind('click',function(event){
	    var anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1300,'easeInOutExpo');
		event.preventDefault();

	});
});

$(function() {
    var nav = $("nav"),
        clone = nav.before(nav.clone().addClass("clone"));
        
    $(window).on("scroll", function() {
         var fromTop = $(window).scrollTop();
         $("body").toggleClass("down", (fromTop > 150));
    });
});
