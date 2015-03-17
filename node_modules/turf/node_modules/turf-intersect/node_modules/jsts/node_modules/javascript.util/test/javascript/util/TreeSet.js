goog.require('javascript.util.TreeSet');

var TreeSet = javascript.util.TreeSet;

describe('TreeSet', function() {
  var treeSet;
  var firstValue;
  var secondValue;

  it('can be constructed', function() {
    treeSet = new TreeSet();
    expect(treeSet).to.exist;
  });

  it('one element can be put', function() {
    firstValue = {
      number : 2,
      compareTo : function(a) {
        if (this.number === a.number) {
          return 0;
        } else if (this.number > a.number) {
          return 1;
        } else if (this.number < a.number) {
          return -1;
        }
      }
    };

    treeSet.add(firstValue);

    expect(treeSet.size()).to.equal(1);
  });

  it('second element can be put', function() {
    secondValue = {
        number : 1,
        compareTo : function(a) {
          if (this.number === a.number) {
            return 0;
          } else if (this.number > a.number) {
            return 1;
          } else if (this.number < a.number) {
            return -1;
          }
        }
      };

    treeSet.add(secondValue);

    expect(treeSet.size()).to.equal(2);
  });

  it('second element should be enumerated as first because of natural value order', function() {
    var iterator = treeSet.iterator();
    var e = iterator.next();

    expect(e).to.equal(secondValue);
  });

});
