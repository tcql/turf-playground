goog.provide('javascript.util.OperationNotSupported');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 */
javascript.util.OperationNotSupported = function(message) {
  this.message = message || '';
};
var OperationNotSupported = javascript.util.OperationNotSupported;
goog.inherits(OperationNotSupported, Error);


/**
 * @type {string}
 */
OperationNotSupported.prototype.name = 'OperationNotSupported';
});  // goog.scope
