var simplify = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var line = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/linestring.geojson'));
var poly = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/polygon.geojson'));
var argentina = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/argentina.geojson'));
var suite = new Benchmark.Suite('turf-simplify');
suite
  .add('turf-simplify#LineString',function () {
    simplify(line, .1, 0);
  })
  .add('turf-simplify#Polygon',function () {
    simplify(poly, .01, 0);
  })
  .add('turf-simplify#Argentina',function () {
    simplify(argentina, .05, 0);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();