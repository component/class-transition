
/**
 * Module dependencies.
 */

var ms = require('ms');
var classes = require('classes');
var event = require('event');
var prop = require('transitionend-property');
var noop = function() {};

/**
 * Module exports.
 */

module.exports = transition;

/**
 * Applies `css` class and removes it
 * upon css transition end or elapsed `dur`.
 *
 * @param {Element} dom el
 * @param {String} css class name
 * @param {String|Number} `ms` duration (optional)
 * @api public
 */

function transition(el, css, dur, fn){
  fn = fn || noop;

  var cls = classes(el);
  var timer;

  // add class
  cls.add(css);

  if ('function' == typeof dur) {
    // callback function
    fn = dur;
  } else if (null != dur) {
    // set a timer fallback
    timer = setTimeout(cleanup, ms(dur));
  }

  // remove class upon transition
  event.bind(el, prop, cleanup);

  // cleanup function
  function cleanup(){
    cls.remove(css);
    fn(el, css);
    clearTimeout(timer);
    event.unbind(el, prop, cleanup)
  }
}
