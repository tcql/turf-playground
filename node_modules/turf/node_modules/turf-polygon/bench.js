var polygon = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var suite = new Benchmark.Suite('turf-polygon');
suite
  .add('turf-polygon',function () {
    polygon([[[5, 10], [20, 40], [40, 0]]], {name: 'test polygon'});
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();