var test = require('tape');
var buffer = require('./');
var fs = require('fs');

test('buffer', function(t){
  var pt = JSON.parse(fs.readFileSync(__dirname+'/geojson/Point.geojson'));
  var line = JSON.parse(fs.readFileSync(__dirname+'/geojson/LineString.geojson'));
  var polygon = JSON.parse(fs.readFileSync(__dirname+'/geojson/Polygon.geojson'));
  var fc = JSON.parse(fs.readFileSync(__dirname+'/geojson/FeatureCollection.geojson'));

  var buffPt = buffer(pt, 10, 'miles');
  var buffLine = buffer(pt, 10, 'miles');
  var buffPoly = buffer(pt, 10, 'miles');
  var buffFC = buffer(fc, 10, 'miles');

  t.ok(buffPt, 'should buffer a point');
  t.ok(buffLine, 'should buffer a line');
  t.ok(buffPoly, 'should buffer a polygon');
  t.ok(buffFC, 'should buffer featurecollection');

  t.end();
});