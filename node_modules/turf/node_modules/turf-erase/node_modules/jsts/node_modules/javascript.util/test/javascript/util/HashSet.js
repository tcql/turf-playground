goog.require('javascript.util.HashSet');

var HashSet = javascript.util.HashSet;

describe('HashSet', function() {
  var hashSet;

  it('can be constructed', function() {
    hashSet = new HashSet();
    expect(hashSet).to.exist;
  });

  it('one element can be put', function() {
    hashSet.add(1);

    expect(hashSet.size()).to.equal(1);
  });

  it('second element can be put', function() {
    hashSet.add(2);

    expect(hashSet.size()).to.equal(2);
  });
  
  it('"same" element should not be put', function() {
    hashSet.add(2);

    expect(hashSet.size()).to.equal(2);
  });
  
  it('iteration can be for looped', function() {
    var count = 0;
    for (var i = hashSet.iterator(); i.hasNext();) {
      var e = i.next();
      count++;
    }
    expect(count).to.equal(2);
  });

});
