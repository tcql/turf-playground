var test = require('tape');
var polygon = require('./');

test('polygon', function(t){
  var poly = polygon([[[5, 10], [20, 40], [40, 0], [5, 10]]] , {name: 'test polygon'});
  t.ok(poly);
  t.equal(poly.geometry.coordinates[0][0][0], 5);
  t.equal(poly.geometry.coordinates[0][1][0], 20);
  t.equal(poly.geometry.coordinates[0][2][0], 40);
  t.equal(poly.properties.name, 'test polygon');
  t.equal(poly.geometry.type, 'Polygon');
  t.throws(function() {
      t.equal(polygon([[[20.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]).message);
  }, /First and last Position are not equivalent/, 'invalid ring - not wrapped');
  t.throws(function() {
      t.equal(polygon([[[20.0,0.0],[101.0,0.0]]]).message);
  }, /Each LinearRing of a Polygon must have 4 or more Positions/, 'invalid ring - too few positions');
  var noProperties = polygon([[[5, 10], [20, 40], [40, 0], [5, 10]]]);
  t.deepEqual(noProperties.properties, {});
  t.end();
});
