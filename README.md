Web-Animations-API-playfield
============================

A place to try out the new Web Animations API.

So far there are very few features of the API implemented in Chrome and Opera.  
(See [caniuse](http://caniuse.com/#search=web%20animations))

The polyfill adds a lot to the nativ implementations, but is not feature-complete either as the spec is still a working draft (e.g. no MotionPath, no custom effects, no timing on groups/sequences)  
(See [W3C Spec](http://www.w3.org/TR/web-animations) and [polyfill](https://github.com/web-animations/web-animations-next))

This playfield so far contains experiments for:

- Basic Animations
- Basic Controls
 - play, pause, reverse, finish
- Seeking
- Groups
- Sequences
- Nested Groups & Sequences
