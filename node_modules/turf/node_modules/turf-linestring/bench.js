var linestring = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var suite = new Benchmark.Suite('turf-linestring');
suite
  .add('turf-linestring',function () {
    linestring([[5, 10], [20, 40]], {name: 'test line'});
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();