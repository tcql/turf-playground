goog.require('javascript.util.Arrays');

var Arrays = javascript.util.Arrays;

describe('Arrays', function() {
  it('can sort an array of numbers', function() {
    var array = [5,4,3,2,1];
    Arrays.sort(array);
    expect(array[0]).to.equal(1);
  });
  
  it('can sort part of an array of numbers', function() {
    var array = [5,4,3,2,1];
    Arrays.sort(array, 1, 4);
    expect(array[0]).to.equal(5);
    expect(array[1]).to.equal(2);
  });
  
  it('can sort an array of numbers with a comparator', function() {
    var comparator = {
        compare: function(a, b) {
          if (a<b) return -1;
          if (a===b) return 0;
          if (a>b) return 1;
        }
    };
    
    var array = [5,4,3,2,1];
    Arrays.sort(array, comparator);
    expect(array[0]).to.equal(1);
  });
  
  it('can sort part of an array of numbers with a comparator', function() {
    var comparator = {
        compare: function(a, b) {
          if (a<b) return -1;
          if (a===b) return 0;
          if (a>b) return 1;
        }
    };
    
    var array = [5,4,3,2,1];
    Arrays.sort(array, 1, 4, comparator);
    expect(array[0]).to.equal(5);
    expect(array[1]).to.equal(2);
  });
  
});

