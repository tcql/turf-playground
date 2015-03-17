var merge = require('../'),
  test = require('tape'),
  glob = require('glob'),
  fs = require('fs');

var REGEN = false;

test('merge', function(t){
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
      var output = merge(JSON.parse(fs.readFileSync(input)));
      if (REGEN) fs.writeFileSync(input.replace('/in/', '/out/'), JSON.stringify(output));
      t.deepEqual(output, JSON.parse(fs.readFileSync(input.replace('/in/', '/out/'))), input);
  });
  t.end();
})
