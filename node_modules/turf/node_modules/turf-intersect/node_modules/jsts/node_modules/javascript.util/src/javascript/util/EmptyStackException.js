goog.provide('javascript.util.EmptyStackException');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.EmptyStackException = function(message) {
  this.message = message || '';
};
var EmptyStackException = javascript.util.EmptyStackException;
goog.inherits(EmptyStackException, Error);


/**
 * @type {string}
 */
EmptyStackException.prototype.name = 'EmptyStackException';

});  // goog.scope
