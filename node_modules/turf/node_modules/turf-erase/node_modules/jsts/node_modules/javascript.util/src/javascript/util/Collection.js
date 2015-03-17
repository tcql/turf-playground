goog.provide('javascript.util.Collection');

goog.require('javascript.util.Iterator');

goog.scope(function() {

var Iterator = javascript.util.Iterator;



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Collection.html
 *
 * @constructor
 * @export
 */
javascript.util.Collection = function() {};
var Collection = javascript.util.Collection;


/**
 * Ensures that this collection contains the specified element (optional
 * operation).
 * @param {Object} e
 * @return {boolean}
 */
Collection.prototype.add = goog.abstractMethod;


/**
 * Appends all of the elements in the specified collection to the end of this
 * list, in the order that they are returned by the specified collection's
 * iterator (optional operation).
 * @param {javascript.util.Collection} c
 * @return {boolean}
 */
Collection.prototype.addAll = goog.abstractMethod;


/**
 * Returns true if this collection contains no elements.
 * @return {boolean}
 */
Collection.prototype.isEmpty = goog.abstractMethod;


/**
 * Returns an iterator over the elements in this collection.
 * @return {javascript.util.Iterator}
 */
Collection.prototype.iterator = goog.abstractMethod;


/**
 * Returns an iterator over the elements in this collection.
 * @return {number}
 */
Collection.prototype.size = goog.abstractMethod;


/**
 * Returns an array containing all of the elements in this collection.
 * @return {Array}
 */
Collection.prototype.toArray = goog.abstractMethod;


/**
 * Removes a single instance of the specified element from this collection if it
 * is present. (optional)
 * @param {Object} e
 * @return {boolean}
 */
Collection.prototype.remove = goog.abstractMethod;

});  // goog.scope
