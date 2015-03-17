var featurecollection = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');
var point = require('turf-point');

var p1 = point(0,0, {name: 'first point'}),
    p2 = point(0,10),
    p3 = point(10,10),
    p4 = point(10,0);

var suite = new Benchmark.Suite('turf-featurecollection');
suite
  .add('turf-featurecollection',function () {
    featurecollection([p1,p2,p3,p4]);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();