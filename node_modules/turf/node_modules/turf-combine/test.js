var test = require('tape')
var point = require('turf-point')
var linestring = require('turf-linestring')
var polygon = require('turf-polygon')
var featurecollection = require('turf-featurecollection')
var combine = require('./')

test('combine', function(t){
  // MultiPoint
  var pt1 = point([50, 51])
  var pt2 = point([100, 101])

  var multiPt = combine(featurecollection([pt1, pt2]))

  t.ok(multiPt, 'should should combine two points into a MultiPoint')
  t.deepEqual(multiPt.geometry.coordinates, [[50, 51], [100, 101]])

  // MultiLineString
  var l1 = linestring([
    [102.0,
    -10.0],
    [130.0,
    4.0]])
  var l2 = linestring([
    [40.0,
    -20.0],
    [150.0,
    18.0]])

  var multiLine = combine(featurecollection([l1, l2]))

  t.ok(multiLine, 'should should combine two LineStrings into a MultiLineString')
  t.equal(multiLine.geometry.type, 'MultiLineString')
  t.deepEqual(multiLine.geometry.coordinates, [[[102, -10], [130, 4]], [[40, -20], [150, 18]]])


  // MultiPolygon
  var p1 = polygon( [
      [
        [20.0,0.0],
        [101.0,0.0],
        [101.0,1.0],
        [100.0,1.0],
        [100.0,0.0],
        [20.0,0.0]
      ]
    ])
  var p2 = polygon([
      [
        [30.0,0.0],
        [102.0,0.0],
        [103.0,1.0],
        [30.0,0.0]
      ]
    ])
    var multiPoly = combine(featurecollection([p1, p2]))

    t.ok(multiPoly, 'should should combine two Polygons into a MultiPolygon')
    t.equal(multiPoly.geometry.type, 'MultiPolygon')
    t.deepEqual(multiPoly.geometry.coordinates, 
        [[[[20,0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0],[20,0]]], 
        [[[30.0,0.0],[102.0,0.0],[103.0,1.0],[30.0,0.0]]]])


  t.end()
})
