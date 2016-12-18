
/*!
 * Waves v0.5.4
 * http://fian.my.id/Waves 
 * 
 * Copyright 2014 Alfiana E. Sibuea and other contributors 
 * Released under the MIT license 
 * https://github.com/fians/Waves/blob/master/LICENSE 
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {

        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {

        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 250,
		pause: 200,

        show: function(e) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = this;

			setTimeout(function(){
			
				// Create ripple
				var ripple = document.createElement('div');
				ripple.className = 'waves-ripple';
				document.body.appendChild(ripple);

				// Get click coordinate and element witdh
				var pos         = offset(el);
				var relativeY   = e.touches[0].pageY - 24;
				var relativeX   = e.touches[0].pageX - 20;
				var scale       = 'scale(1)';

				// Attach data to element
				ripple.setAttribute('data-hold', Date.now());
				ripple.setAttribute('data-scale', scale);
				ripple.setAttribute('data-x', relativeX);
				ripple.setAttribute('data-y', relativeY);

				// Set ripple position
				var rippleStyle = {
					'top': relativeY+'px',
					'left': relativeX+'px',
				};
				
				ripple.className = ripple.className + ' waves-notransition';
				ripple.setAttribute('style', convertStyle(rippleStyle));
				ripple.className = ripple.className.replace('waves-notransition', '');

				// Scale the ripple
				rippleStyle['-webkit-transform'] = scale;
				rippleStyle['-moz-transform'] = scale;
				rippleStyle['-ms-transform'] = scale;
				rippleStyle['-o-transform'] = scale;
				rippleStyle.transform = scale;
				rippleStyle.opacity   = '1';

				rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
				rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
				rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
				rippleStyle['transition-duration']         = Effect.duration + 'ms';

				ripple.setAttribute('style', convertStyle(rippleStyle));
				
				// Get delay beetween mousedown and mouse leave
				var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
				var delay = Effect.pause - diff;

				if (delay < 0) {
					delay = 0;
				}

				// Fade out ripple after delay
				setTimeout(function() {
					Effect.hide(ripple);
				}, delay);
				
			}, 10);
        },

        hide: function(ripple) {

            if (ripple !== null && ripple.getAttribute('data-x') !== null) {

				var relativeX   = ripple.getAttribute('data-x');
				var relativeY   = ripple.getAttribute('data-y');
				var scale       = ripple.getAttribute('data-scale');

				var style = {
					'top': relativeY+'px',
					'left': relativeX+'px',
					'opacity': '0',

					// Duration
					'-webkit-transition-duration': Effect.duration + 'ms',
					'-moz-transition-duration': Effect.duration + 'ms',
					'-o-transition-duration': Effect.duration + 'ms',
					'transition-duration': Effect.duration + 'ms',
					'-webkit-transform': scale,
					'-moz-transform': scale,
					'-ms-transform': scale,
					'-o-transform': scale,
					'transform': scale,
				};
				
				ripple.setAttribute('style', convertStyle(style));

				setTimeout(function() {

					try {
						ripple.remove(ripple);
					} catch(e) {
						return false;
					}

					
				}, Effect.duration);
			}
        }
    };

    Waves.displayEffect = function() {
	
		Effect.items = "body";
		Array.prototype.forEach.call($$(Effect.items), function(i) {

			i.addEventListener('mouseup', Effect.show);
            i.addEventListener('touchstart', Effect.show);            
		});

    };

    window.Waves = Waves;

})(window);