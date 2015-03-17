var test = require('tape');
var fs = require('fs');
var grid = require('./');

test('grid', function(t){  
  var gridded = grid([0,0,10,10], 10);

  t.ok(gridded, 'should create a 10x10 grid as a Point FeatureCollection');
  t.equal(gridded.type, 'FeatureCollection');
  t.equal(gridded.features[0].geometry.type, 'Point');

  fs.writeFileSync(__dirname+'/geojson/grid1.geojson', JSON.stringify(gridded));

  var gridded = grid([-10,-10,10,10], 10);

  t.ok(gridded, 'should work properly with a negative start value');
  t.equal(gridded.type, 'FeatureCollection');
  t.equal(gridded.features[0].geometry.type, 'Point');

  fs.writeFileSync(__dirname+'/geojson/grid2.geojson', JSON.stringify(gridded));

  t.end();
});