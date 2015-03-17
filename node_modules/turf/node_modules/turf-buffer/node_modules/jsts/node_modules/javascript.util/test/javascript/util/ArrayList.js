goog.require('javascript.util.ArrayList');

var ArrayList = javascript.util.ArrayList;

describe('ArrayList', function() {
  var arrayList;
  var iterator;
  var first;
  var second;
  var toBeRemoved;
  
  it('can be constructed', function() {
    arrayList = new ArrayList();
    expect(arrayList).to.exist;
  });
  
  it('one element can be appended', function() {
    first = 1;
  
    arrayList.add(first);
    
    expect(arrayList.size()).to.equal(1);
  });
  
  it('another element can be appended', function() {
    second = {};

    arrayList.add(second);
    
    expect(arrayList.size()).to.equal(2);
  });
  
  it('can be iterated', function() {
    iterator = arrayList.iterator();
       
    expect(iterator.next()).to.equal(first);
  });
  
  it('iterator should report more elements available', function() {
    expect(iterator.hasNext()).to.be.true;
  });
  
  it('can be iterated again', function() {
    expect(iterator.next()).to.equal(second);
  });
  
  it('iterator should report no more elements available', function() {
    expect(iterator.hasNext()).to.be.false;
  });
  
  it('throws when iterating beyond end', function() {
    try {
      iterator.next();
    }
    catch (e) {
      expect(e.name).to.equal('NoSuchElementException');
    }
  });
  
  it('iteration can be for looped', function() {
    var count = 0;
    for (var i = arrayList.iterator(); i.hasNext();) {
      var e = i.next();
      count++;
    }
    expect(count).to.equal(2);
  });

  it('can remove an item', function() {
    var count = arrayList.size();
    arrayList.add(toBeRemoved);
    arrayList.remove(toBeRemoved);
    expect(arrayList.size()).to.equal(count);
  });
});

