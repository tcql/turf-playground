var test = require('tape');
var centroid = require('./');
var fs = require('fs');

var boxFC = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/box.geojson'));
var blockFC = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/block.geojson'));

test('centroid', function(t){
  var boxFcCentroid = centroid(boxFC.features[0]);
  boxFcCentroid.properties['marker-color'] = '#f0f';
  t.ok(boxFcCentroid, 'should return the proper centroid for a FeatureCollection');
  t.deepEqual(boxFcCentroid.geometry.coordinates, [65.56640625, 43.59448261855401]);

  var blockFcCentroid = centroid(blockFC.features[0]);
  blockFcCentroid.properties['marker-color'] = '#f0f';
  t.ok(blockFcCentroid, 'should return the proper centroid for a FeatureCollection');
  t.deepEqual(blockFcCentroid.geometry.coordinates, [-114.02900261988646,51.05007001220118]);

  boxFC.features.push(boxFcCentroid);
  blockFC.features.push(blockFcCentroid);
  fs.writeFileSync(__dirname+'/fixtures/out/box_out.geojson', JSON.stringify(boxFC,null,2));
  fs.writeFileSync(__dirname+'/fixtures/out/block_out.geojson', JSON.stringify(blockFC,null,2));

  t.end();
});
