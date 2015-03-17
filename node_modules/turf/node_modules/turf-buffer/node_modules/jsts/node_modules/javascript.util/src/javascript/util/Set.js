goog.provide('javascript.util.Set');

goog.require('javascript.util.Collection');

goog.scope(function() {

var Collection = javascript.util.Collection;



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Set.html
 *
 * @extends {javascript.util.Collection}
 * @constructor
 * @export
 */
javascript.util.Set = function() {};
var Set = javascript.util.Set;
goog.inherits(Set, Collection);


/**
 * Returns true if this set contains the specified element. More formally,
 * returns true if and only if this set contains an element e such that (o==null ?
 * e==null : o.equals(e)).
 * @param {Object} e
 * @return {boolean}
 */
Set.prototype.contains = goog.abstractMethod;

});  // goog.scope
