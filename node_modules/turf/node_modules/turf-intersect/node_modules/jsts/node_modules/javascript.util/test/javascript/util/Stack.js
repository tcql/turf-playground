goog.require('javascript.util.Stack');

var Stack = javascript.util.Stack;

describe('Stack', function() {
  var stack;
  var first;
  var second;
  
  it('can be constructed', function() {
    stack = new Stack();
    expect(stack).to.exist;
  });
  
  it('one element can be appended', function() {
    first = 1;
  
    stack.push(first);
    
    expect(stack.size()).to.equal(1);
  });
  
  it('another element can be appended', function() {
    second = {};

    stack.push(second);
    
    expect(stack.size()).to.equal(2);
  });
  
  it('can be peeked', function() {
    var e = stack.peek();
    
    expect(e).to.equal(second);
  });
  
  it('can be searched', function() {
    var index = stack.search(first);
    
    expect(index).to.equal(index);
  });
  
  it('can be popped', function() {
    stack.pop();
    
    expect(stack.size()).to.equal(1);
  });
});

