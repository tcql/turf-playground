var grid = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var suite = new Benchmark.Suite('turf-grid');
suite
  .add('turf-grid#10x10',function () {
    grid([0,0,10,10], 10);
  })
  .add('turf-grid#100x100',function () {
    grid([0,0,10,10], 100);
  })
  .add('turf-grid#1000x1000',function () {
    grid([0,0,10,10], 1000);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();