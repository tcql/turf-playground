goog.provide('javascript.util.IndexOutOfBoundsException');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.IndexOutOfBoundsException = function(message) {
  this.message = message || '';
};
var IndexOutOfBoundsException = javascript.util.IndexOutOfBoundsException;
goog.inherits(IndexOutOfBoundsException, Error);


/**
 * @type {string}
 */
IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';
});  // goog.scope
