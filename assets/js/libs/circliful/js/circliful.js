"use strict";

(function ($) {

var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

    $.fn.circliful = function (options, callback) {

        var settings = $.extend({
            // These are the defaults.
            //startDegree: 0,
            foregroundColor: "#62e1d8",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fillColor: 'none',
            foregroundBorderWidth: 6,
            backgroundBorderWidth: 6,
			percentageTextSize: 22,
            percent: 75,
            animation: 0,
            animationStep: 1,
            fontColor: '#aaa',
            target: 0,
            start: 0,
            showPercent: 1
        }, options);

        return this.each(function () {
            var circleContainer = $(this);
            var percent = settings.percent;

            circleContainer
                .html(
                    $('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 194 186" class="circliful">' +
                        '<circle cx="100" cy="100" r="57" class="border" fill="' + settings.fillColor + '" stroke="' + settings.backgroundColor + '" stroke-width="' + settings.backgroundBorderWidth + '" stroke-dasharray="360" transform="rotate(-90,100,100)" />' +
                        '<circle class="circle" cx="100" cy="100" r="57" class="border" fill="none" stroke="' + settings.foregroundColor + '" stroke-width="' + settings.foregroundBorderWidth + '" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" stroke-linecap="round" />' +
                        '<text class="timer" text-anchor="middle" x="100" y="110" style="fill: ' + settings.fontColor + '; font-size: ' + settings.percentageTextSize + ';">0%</text>')
                );

            var circle = circleContainer.find('.circle');
            var myTimer = circleContainer.find('.timer');
            var interval = settings.interval ? settings.interval : 180;
            var angle = 0;
            var angleIncrement = settings.animationStep;
            var last = 0;
            var summary = 0;
            var oneStep = 0;
            var count = 1;

            if(settings.start > 0 && settings.target > 0) {
                percent = settings.start / (settings.target / 100);
                oneStep = settings.target / 100;
            }

            if(settings.animation == 1) {
				var timerFn = function(){

					rAF(timerFn);

	                var timer = window.setInterval(function () {
	                    if ((angle) >= (360 / 100 * percent)) {
	                        window.clearInterval(timer);
	                        last = 1;
	                    } else {
	                        angle += angleIncrement;
	                        summary += oneStep;
							//console.log(count++)
	                    }

	                    if(angle / 3.6 >= percent && last == 1) {
	                        angle = 3.6 * percent;
	                    }

	                    if(summary > settings.target && last == 1) {
	                        summary = settings.target;
	                    }

	                    circle
	                        .attr("stroke-dasharray", angle + ", 20000");

	                    if(settings.showPercent == 1) {
	                        myTimer
	                            .text(parseInt(angle / 360 * 100) + '%');
	                    } else {
	                        myTimer
	                            .text(summary);
	                    }

	                }, interval);
				};

				timerFn();

            } else {
                circle
                    .attr("stroke-dasharray", (360 / 100 * percent) + ", 20000");

                if(settings.showPercent == 1) {
                    myTimer
                        .text(percent + '%');
                } else {
                    myTimer
                        .text(settings.target);
                }
            }
        });
    }

}($));
