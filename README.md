# Smooth-Scroll

Requires jQuery 1.9+

A small script that causes hyperlinks that link to an element within the same page (via an href="#hashtag") to smoothly scroll down to the targeted element.

Usage:

1. Have jQuery v1.9+ referenced on your page.
2. Add smooth-scroll.js after the jQuery reference.
3. Add the attribute 'data-smooth-scroll' your anchors as per this example: <a href="#something" data-smooth-scroll>link</a>.

By default, Smooth Scroll will scroll to the target hyperlink in an animation lasting 1 second long. You can change this by adding the optional 'data-scroll-speed' attribute, with a value of time in milliseconds. For example: <a href="#something" data-smooth-scroll data-scroll-speed="250">link</a> will scroll to the target in 250ms.