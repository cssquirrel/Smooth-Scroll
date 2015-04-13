// Created by Kyle Weems @cssquirrel | requires jQuery 1.9+ | license: http://opensource.org/licenses/MIT
if (window.jQuery) {
    jQuery(document).ready(function () {
        jQuery(document).on('click', 'a[data-smooth-scroll]', function () {
            var href = jQuery(this).attr('href');
            if (href.indexOf('#') == 0) {
                var speed = 1000;
                if (jQuery(this).attr('data-scroll-speed') != undefined) {
                    speed = jQuery(this).attr('data-scroll-speed');
                }
                jQuery('html, body').animate({ scrollTop: jQuery(href).offset().top }, speed, function () {
                    window.location.hash = href;
                });
                return false;
            }
        });
    });
}