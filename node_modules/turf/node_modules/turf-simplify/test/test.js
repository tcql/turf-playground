var simplify = require('../');
var test = require('tape');
var fs = require('fs');

test('simplify -- line', function (t) {
  var line = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/linestring.geojson'));

  var simplified = simplify(line, .01, false);
  t.ok(simplified);
  t.equal(simplified.type, 'Feature');
  t.equal(typeof simplified.geometry.coordinates[0][0], 'number')
  fs.writeFileSync(__dirname+'/fixtures/out/linestring_out.geojson', JSON.stringify(simplified))

  t.end();
});

test('simplify -- polygon', function (t) {
  var polygon = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/polygon.geojson'));

  var simplified = simplify(polygon, 1, false);
  t.equal(simplified.type, 'Feature');
  t.equal(typeof simplified.geometry.coordinates[0][0][0], 'number')
  fs.writeFileSync(__dirname+'/fixtures/out/polygon_out.geojson', JSON.stringify(simplified))

  t.end();
});

test('simplify -- argentina', function (t) {
  var argentina = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/argentina.geojson'));

  var simplified = simplify(argentina, .1, false);
  t.equal(simplified.type, 'Feature');
  t.equal(typeof simplified.geometry.coordinates[0][0][0], 'number')
  fs.writeFileSync(__dirname+'/fixtures/out/argentina_out.geojson', JSON.stringify(simplified))

  t.end();
});