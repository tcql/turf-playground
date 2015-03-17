goog.provide('javascript.util.Iterator');

goog.scope(function() {



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Iterator.html
 * @constructor
 * @export
 */
javascript.util.Iterator = function() {};
var Iterator = javascript.util.Iterator;


/**
 * Returns true if the iteration has more elements.
 * @return {boolean}
 * @export
 */
Iterator.prototype.hasNext = goog.abstractMethod;


/**
 * Returns the next element in the iteration.
 * @return {Object}
 * @export
 */
Iterator.prototype.next = goog.abstractMethod;


/**
 * Removes from the underlying collection the last element returned by the
 * iterator (optional operation).
 * @export
 */
Iterator.prototype.remove = goog.abstractMethod;

});  // goog.scope
