goog.provide('javascript.util.HashMap');

goog.require('javascript.util.ArrayList');
goog.require('javascript.util.Map');

goog.scope(function() {

var ArrayList = javascript.util.ArrayList;
var Map = javascript.util.Map;



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/HashMap.html
 *
 * @extends {javascript.util.Map}
 * @constructor
 * @export
 */
javascript.util.HashMap = function() {
  this.object_ = {};
};
var HashMap = javascript.util.HashMap;
goog.inherits(HashMap, Map);


/**
 * @type {Object}
 * @private
 */
HashMap.prototype.object_ = null;


/**
 * @override
 * @export
 */
HashMap.prototype.get = function(key) {
  return this.object_[key] || null;
};


/**
 * @override
 * @export
 */
HashMap.prototype.put = function(key, value) {
  this.object_[key] = value;
  return value;
};


/**
 * @override
 * @export
 */
HashMap.prototype.values = function() {
  var arrayList = new ArrayList();
  for (var key in this.object_) {
    if (this.object_.hasOwnProperty(key)) {
      arrayList.add(this.object_[key]);
    }
  }
  return arrayList;
};


/**
 * @override
 * @export
 */
HashMap.prototype.size = function() {
  return this.values().size();
};

});  // goog.scope
