goog.provide('javascript.util.NoSuchElementException');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.NoSuchElementException = function(message) {
  this.message = message || '';
};
var NoSuchElementException = javascript.util.NoSuchElementException;
goog.inherits(NoSuchElementException, Error);


/**
 * @type {string}
 */
NoSuchElementException.prototype.name = 'NoSuchElementException';
});  // goog.scope
