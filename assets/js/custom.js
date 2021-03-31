/*
	JavaScript que customiza algumas funcionalidades do template do HTML5 UP.
*/
(function($) {

	var	$window = $(window),
        $buttonTop = $('#js-button-top');


	// Botão "Ir para o topo"
        $buttonTop.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        $window.scroll(function() {
            if (window.scrollY > 600) {
                $('#js-button-top').addClass('is-visible');
            } else {
                $('#js-button-top').removeClass('is-visible');
            }
        });

})(jQuery);