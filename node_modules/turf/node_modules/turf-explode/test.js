var test = require('tape');
var polygon = require('turf-polygon');
var linestring = require('turf-linestring');
var point = require('turf-point');
var featurecollection = require('turf-featurecollection');
var explode = require('./index');

test('explode', function(t){
  var poly = polygon([[[0,0], [0,10], [10,10], [10,0], [0,0]]]);
  var p1 = point([0,0]),
      p2 = point([0,10]),
      p3 = point([10,10]),
      p4 = point([10,0]);
  var fc = featurecollection([p1,p2,p3,p4,p1]);

  var exploded = explode(poly);

  t.ok(exploded.features, 'should take a feature or feature collection and return all vertices');
  t.deepEqual(exploded, fc);
  t.deepEqual(explode(point([0,0])), featurecollection([point([0,0])]), 'explode a single point');
  t.deepEqual(explode(featurecollection([point([0,0])])), featurecollection([point([0,0])]), 'explode a single point in a featurecollection');
  t.deepEqual(explode(polygon([[[0,0],[1,1],[0,1],[0,0]]])),
    featurecollection([point([0,0]), point([1,1]), point([0,1]), point([0,0])]), 'explode a polygon');
  t.deepEqual(explode(linestring([[0,0],[1,1],[0,1],[0,0]])),
    featurecollection([point([0,0]), point([1,1]), point([0,1]), point([0,0])]), 'explode a linestring');

  t.throws(function() {
      explode({});
  }, /Unknown Geometry Type/);

  t.end();
});
