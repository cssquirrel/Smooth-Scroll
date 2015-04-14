// Created by Kyle Weems @cssquirrel & James South @james_m_south | requires jQuery 1.9+ 
// repo @ https://github.com/cssquirrel/Smooth-Scroll | license @ http://opensource.org/licenses/MIT 
if (window.jQuery) {
    (function($, w, d) {
        var $d = $(d);
        $d.ready(function () {
            $d.on('click', 'a[data-smooth-scroll]', function (event) {
                var $this = $(this), 
					href = $this.attr('href');
                if (href.indexOf('#') === 0) {
                    event.preventDefault();
                    var documentHeight = $d.height(), 
						scrollTop = $d.scrollTop(),
						offset = $(href).offset().top,
						distance = Math.abs(scrollTop - offset),
						time = (distance / documentHeight) * 1000,
						called = false;
                    if ($this.data('speedModifier') != undefined) {
                        time = time / $this.attr('speedModifier');
                    }
                    $('html, body').animate({ scrollTop: offset }, time, function () {
                        if (!called) {
                            called = true;
                            w.location.hash = href;
                        }
                    });
                }
            });
        });
    }(jQuery, window, document));
}