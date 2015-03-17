var merge = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var simple = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/mergeIn.geojson'));
var countries = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/countries_simp.geojson'));

var suite = new Benchmark.Suite('turf-merge');
suite
  .add('turf-merge#simple',function () {
    merge(simple);
  })
  .add('turf-merge#countries',function () {
    merge(countries);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();