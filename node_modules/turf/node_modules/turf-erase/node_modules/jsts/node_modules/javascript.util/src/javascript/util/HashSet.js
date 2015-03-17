goog.provide('javascript.util.HashSet');

goog.require('javascript.util.Collection');
goog.require('javascript.util.NoSuchElementException');
goog.require('javascript.util.OperationNotSupported');
goog.require('javascript.util.Set');

goog.scope(function() {

var Collection = javascript.util.Collection;
var NoSuchElementException = javascript.util.NoSuchElementException;
var OperationNotSupported = javascript.util.OperationNotSupported;
var Set = javascript.util.Set;



/**
 * @see http://docs.oracle.com/javase/6/docs/api/java/util/HashSet.html
 *
 * @extends {javascript.util.Set}
 * @constructor
 * @export
 */
javascript.util.HashSet = function() {
  this.array_ = [];

  if (arguments[0] instanceof Collection) {
    this.addAll(arguments[0]);
  }
};
var HashSet = javascript.util.HashSet;
goog.inherits(HashSet, Set);


/**
 * @type {Array}
 * @private
 */
HashSet.prototype.array_ = null;


/**
 * @override
 * @export
 */
HashSet.prototype.contains = function(o) {
  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e === o) {
      return true;
    }
  }
  return false;
};


/**
 * @override
 * @export
 */
HashSet.prototype.add = function(o) {
  if (this.contains(o)) {
    return false;
  }

  this.array_.push(o);

  return true;
};


/**
 * @override
 * @export
 */
HashSet.prototype.addAll = function(c) {
  for (var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};


/**
 * @override
 * @export
 */
HashSet.prototype.remove = function(o) {
  throw new javascript.util.OperationNotSupported();
};


/**
 * @override
 */
HashSet.prototype.size = function() {
  return this.array_.length;
};


/**
 * @override
 * @export
 */
HashSet.prototype.isEmpty = function() {
  return this.array_.length === 0;
};


/**
 * @override
 * @export
 */
HashSet.prototype.toArray = function() {
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
HashSet.prototype.iterator = function() {
  return new Iterator_(this);
};



/**
 * @extends {javascript.util.Iterator}
 * @param {javascript.util.HashSet} hashSet
 * @constructor
 * @private
 * @export
 */
var Iterator_ = function(hashSet) {
  this.hashSet_ = hashSet;
};


/**
 * @type {javascript.util.HashSet}
 * @private
 */
Iterator_.prototype.hashSet_ = null;


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
  if (this.position_ === this.hashSet_.size()) {
    throw new NoSuchElementException();
  }
  return this.hashSet_.array_[this.position_++];
};


/**
 * @override
 * @export
 */
Iterator_.prototype.hasNext = function() {
  if (this.position_ < this.hashSet_.size()) {
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
  throw new OperationNotSupported();
};

});  // goog.scope

