goog.provide('javascript.util.TreeSet');

goog.require('javascript.util.Collection');
goog.require('javascript.util.NoSuchElementException');
goog.require('javascript.util.OperationNotSupported');
goog.require('javascript.util.SortedSet');

goog.scope(function() {

var Collection = javascript.util.Collection;
var NoSuchElementException = javascript.util.NoSuchElementException;
var OperationNotSupported = javascript.util.OperationNotSupported;
var SortedSet = javascript.util.SortedSet;



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/TreeSet.html
 *
 * @extends {javascript.util.SortedSet}
 * @constructor
 * @export
 */
javascript.util.TreeSet = function() {
  this.array_ = [];

  if (arguments[0] instanceof Collection) {
    this.addAll(arguments[0]);
  }
};
var TreeSet = javascript.util.TreeSet;
goog.inherits(TreeSet, SortedSet);


/**
 * @type {Array}
 * @private
 */
TreeSet.prototype.array_ = null;


/**
 * @override
 * @export
 */
TreeSet.prototype.contains = function(o) {
  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e['compareTo'](o) === 0) {
      return true;
    }
  }
  return false;
};


/**
 * @override
 * @export
 */
TreeSet.prototype.add = function(o) {
  if (this.contains(o)) {
    return false;
  }

  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e['compareTo'](o) === 1) {
      this.array_.splice(i, 0, o);
      return true;
    }
  }

  this.array_.push(o);

  return true;
};


/**
 * @override
 * @export
 */
TreeSet.prototype.addAll = function(c) {
  for (var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.remove = function(e) {
  throw new javascript.util.OperationNotSupported();
};


/**
 * @override
 * @export
 */
TreeSet.prototype.size = function() {
  return this.array_.length;
};


/**
 * @override
 * @export
 */
TreeSet.prototype.isEmpty = function() {
  return this.array_.length === 0;
};


/**
 * @override
 * @export
 */
TreeSet.prototype.toArray = function() {
  var array = [];

  for (var i = 0, len = this.array_.length; i < len; i++) {
    array.push(this.array_[i]);
  }

  return array;
};


/**
 * @override
 * @export
 */
TreeSet.prototype.iterator = function() {
  return new Iterator_(this);
};



/**
 * @extends {javascript.util.Iterator}
 * @param {javascript.util.TreeSet} treeSet
 * @constructor
 * @private
 * @export
 */
var Iterator_ = function(treeSet) {
  this.treeSet_ = treeSet;
};


/**
 * @type {javascript.util.TreeSet}
 * @private
 */
Iterator_.prototype.treeSet_ = null;


/**
 * @type {number}
 * @private
 */
Iterator_.prototype.position_ = 0;


/**
 * @override
 * @export
 */
Iterator_.prototype.next = function() {
  if (this.position_ === this.treeSet_.size()) {
    throw new NoSuchElementException();
  }
  return this.treeSet_.array_[this.position_++];
};


/**
 * @override
 * @export
 */
Iterator_.prototype.hasNext = function() {
  if (this.position_ < this.treeSet_.size()) {
    return true;
  } else {
    return false;
  }
};


/**
 * @override
 * @export
 */
Iterator_.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};

});  // goog.scope
