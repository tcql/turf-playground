var erase = require('../'),
  test = require('tape'),
  glob = require('glob'),
  fs = require('fs');

var REGEN = process.env.REGEN;

test('erase', function(t){
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
      var features = JSON.parse(fs.readFileSync(input));
      var before = JSON.parse(JSON.stringify(features));
      var output = erase(features[0], features[1]);
      if (REGEN) fs.writeFileSync(input.replace('/in/', '/out/'), JSON.stringify(output));
      t.deepEqual(before, features, 'does not mutate data');
      t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/'))), input);
  });
  t.end();
});

test('erase -- geometries', function(t){
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
      var fcs = JSON.parse(fs.readFileSync(input));
      var before = JSON.parse(JSON.stringify(fcs));
      var output = erase(fcs[0].geometry, fcs[1].geometry);
      if (REGEN) fs.writeFileSync(input.replace('/in/', '/out/'), JSON.stringify(output));
      t.deepEqual(before, fcs, 'does not mutate data');
      t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/'))), input);
  });
  t.end();
});

test('erase -- geometries', function(t){
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
      var fcs = JSON.parse(fs.readFileSync(input));
      var before = JSON.parse(JSON.stringify(fcs));
      var output = erase(fcs[0].geometry, fcs[1].geometry);
      if (REGEN) fs.writeFileSync(input.replace('/in/', '/out/'), JSON.stringify(output));
      t.deepEqual(before, fcs, 'does not mutate data');
      t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/'))), input);
  });
  t.end();
});

test('erase -- empty set', function(t) {
  var polys = JSON.parse(fs.readFileSync(__dirname+'/fixtures/full.geojson'));
  var result = erase(polys[1], polys[0]);
  t.deepEqual(result, undefined);
  t.notOk(result);
  t.end();
});
