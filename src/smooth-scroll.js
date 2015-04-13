// Created by Kyle Weems @cssquirrel | requires jQuery 1.9+ 
// repo @ https://github.com/cssquirrel/Smooth-Scroll | license @ http://opensource.org/licenses/MIT 
if (window.jQuery) {
    jQuery(document).ready(function () {
        jQuery(document).on('click', 'a[data-smooth-scroll]', function () {
            var href = jQuery(this).attr('href');
            if (href.indexOf('#') == 0) {
                var documentHeight = jQuery(document).height();
                var scrollOffset = jQuery(document).scrollTop();
                var distance = Math.abs(scrollOffset - jQuery(href).offset().top);
                var speed = (distance / documentHeight) * 1000;
                if (jQuery(this).attr('data-speed-modifier') != undefined) {
                    speed = speed * jQuery(this).attr('data-speed-modifier');
                }
                jQuery('html, body').animate({ scrollTop: jQuery(href).offset().top }, speed, function () {
                    window.location.hash = href;
                });
                return false;
            }
        });
    });
}