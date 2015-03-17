var erase = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var clip = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/erasedHole.geojson'));
var hole = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/erasedFC.geojson'));

var suite = new Benchmark.Suite('turf-erase');
suite
  .add('turf-erase#clip',function () {
    erase(clip[0], clip[1]);
  })
  .add('turf-erase#hole',function () {
    erase(hole[0], hole[1]);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();