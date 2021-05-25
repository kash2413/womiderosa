/*!
 * jQuery Cookie Policy Plugin
 */
(function($) {
$.fn.cookiepolicy = function(options) {
    new jQuery.cookiepolicy($(this), options);
	return this;
};

$.cookiepolicy = function(options) {
	options = $.extend({
		cookie: 'cookiepolicyinfo',
		info: 'Ta strona używa plików cookie. Dowiedz się więcej <a href="http://www.radio.bialystok.pl/politykaprywatnosci/cookies">o zmianie ustawień cookie w przeglądarce i celu ich używania</a>. Korzystając ze strony wyrażasz zgodę na używanie cookie, zgodnie z aktualnymi ustawieniami przeglądarki.',
		close: 'Zamknij'
	}, options || {});
	
    if($.cookie(options.cookie) !== 'true') {
        var wrapper = $('<div/>').addClass('cookiepolicy').appendTo('body');
        $('<span/>').html(options.info).appendTo(wrapper);
        $('<a/>').addClass('button').html(options.close).appendTo(wrapper)
            .on('click', function(e) {
                e.preventDefault();
				$.cookie(options.cookie, true, { expires: 700, path:'/' });
                $(this).parents('.cookiepolicy').remove();
            });
    }
};
})(jQuery);