var point = require('turf-point');

/**
 * Takes a bounding box and a cell depth and returns a {@link FeatureCollection} of {@link Point} features in a grid.
 *
 * @module turf/grid
 * @category interpolation
 * @param {Array<number>} extent extent in [minX, minY, maxX, maxY] order
 * @param {Number} depth how many cells to output
 * @return {FeatureCollection} grid as FeatureCollection with {@link Point} features
 * @example
 * var extent = [-70.823364, -33.553984, -70.473175, -33.302986];
 * var depth = 10;
 *
 * var grid = turf.grid(extent, depth);
 *
 * //=grid
 */
module.exports = function(extents, depth) {
  var xmin = extents[0];
  var ymin = extents[1];
  var xmax = extents[2];
  var ymax = extents[3];
  var interval = (xmax - xmin) / depth;
  var coords = [];
  var fc = {
    type: 'FeatureCollection',
    features: []
  };

  for (var x=0; x<=depth; x++){
    for (var y=0;y<=depth; y++){
      fc.features.push(point([(x * interval) + xmin, (y * interval) + ymin]));
    }
  }
  return fc;
}
