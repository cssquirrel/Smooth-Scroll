# Smooth-Scroll

Requires jQuery 1.9+

A small script that causes hyperlinks that link to an element within the same page (via an href="#hashtag") to smoothly scroll down to the targeted element. Include the script on your page and use as follows.

Usage:

    <a href="#something" data-smooth-scroll>link</a>

By default, Smooth Scroll will scroll to the target hyperlink in an animation lasting (distance in pixels / document height in pixels) * 1000 milliseconds long. You can change this by adding the optional 'data-speed-modifier' attribute, a number you would like to multiply the speed to scroll by. In the following example clicking on the link will cause the browser to scroll to the target twice as fast:

    <a href="#something" data-smooth-scroll data-speed-modifier="0.5">link</a>