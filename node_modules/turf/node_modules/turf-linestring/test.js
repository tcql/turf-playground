var test = require('tape');
var lineString = require('./');

test('lineString', function(t){

  var line = lineString([[5, 10], [20, 40]], {name: 'test line'});

  t.ok(line, 'creates a linestring');
  t.equal(line.geometry.coordinates[0][0], 5);
  t.equal(line.geometry.coordinates[1][0], 20);
  t.equal(line.properties.name, 'test line');

  t.throws(function() {
      var line = lineString();
  }, /No coordinates passed/, 'error on no coordinates');

  var noProps = lineString([[5, 10], [20, 40]]);

  t.deepEqual(noProps.properties, {}, 'no properties case');

  t.end();
});
