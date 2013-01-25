/*
 * Hammer.JS jQuery plugin
 * version 0.3
 * author: Eight Media
 * https://github.com/EightMedia/hammer.js
 */
jQuery.fn.hammer = function(options)
{
    return this.each(function()
    {
        var hammer = new Hammer(this, options);

        var $el = jQuery(this);
        $el.data("hammer", hammer);

        //if (this.id != undefined && this.id != '') {
        //    debug('Enable hammer.js on ' + this.id, 300);
        //}

        var events = ['hold','tap','doubletap','transformstart','transform','transformend','dragstart','drag','dragend','swipe','release'];

        for(var e=0; e<events.length; e++) {
            hammer['on'+ events[e]] = (function(el, eventName) {
                return function (ev) {
                    //if (eventName === 'transformstart' || eventName === 'dragendtransformend') {
                    //    debug('Trigger [' + eventName + '] on ' + el.attr('id') + ' at ' + new Date().getTime(), 300);
                    //}
                    el.trigger(jQuery.Event(eventName, ev));
                };
            })($el, events[e]);
        }
    });
};