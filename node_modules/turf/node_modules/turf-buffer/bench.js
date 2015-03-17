var buffer = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var pt = JSON.parse(fs.readFileSync(__dirname+'/geojson/Point.geojson'));
var line = JSON.parse(fs.readFileSync(__dirname+'/geojson/LineString.geojson'));
var polygon = JSON.parse(fs.readFileSync(__dirname+'/geojson/Polygon.geojson'));
var fc = JSON.parse(fs.readFileSync(__dirname+'/geojson/FeatureCollection.geojson'));

var suite = new Benchmark.Suite('turf-buffer');
suite
  .add('turf-buffer#Point',function () {
    buffer(pt, 10, 'miles');
  })
  .add('turf-buffer#LineString',function () {
    buffer(pt, 10, 'miles');
  })
  .add('turf-buffer#Polygon',function () {
    buffer(pt, 10, 'miles');
  })
  .add('turf-buffer#FeatureCollection',function () {
    buffer(fc, 10, 'miles');
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();