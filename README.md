# Smooth-Scroll

Requires jQuery 1.9+

A small script that causes hyperlinks that link to an element within the same page (via an href="#hashtag") to smoothly scroll down to the targeted element. Include the script on your page and use as follows.

Usage:

    <a href="#something" data-smooth-scroll>link</a>

By default, Smooth Scroll will scroll to the target hyperlink in an animation lasting 1 second long. You can change this by adding the optional 'data-scroll-speed' attribute, with a value of time in milliseconds. In the following example the link will scroll to the target in 250ms:

    <a href="#something" data-smooth-scroll data-scroll-speed="250">link</a>