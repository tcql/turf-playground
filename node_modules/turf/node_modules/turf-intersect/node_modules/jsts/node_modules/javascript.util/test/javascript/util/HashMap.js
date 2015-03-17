goog.require('javascript.util.Collection');
goog.require('javascript.util.HashMap');

var Collection = javascript.util.Collection;
var HashMap = javascript.util.HashMap;

describe('HashMap', function() {
  var hashMap;
  var firstKey;
  var secondKey;
  var firstValue;
  var secondValue;
  
  it('can be constructed', function() {
    hashMap = new HashMap();
    expect(hashMap).to.exist;
  });
  
  it('one element can be put', function() {
    firstkey = "firstKey";
    firstValue = "firstValue";
  
    hashMap.put(firstKey, firstValue);
    
    expect(hashMap.size()).to.equal(1);
  });
  
  it('element can be get', function() {
    var value = hashMap.get(firstKey);
    
    expect(value).to.equal(firstValue);
  });
  
  it('all elements can be retrieved', function() {
    var values = hashMap.values();
    expect(values instanceof Collection).to.be.true;
  });
  
});

