var distance = require('turf-distance');
var point = require('turf-point');

/**
 * Takes a {@link LineString} feature and measures its length in the specified units.
 *
 * @module turf/line-distance
 * @category measurement
 * @param {LineString} Line to measure
 * @param {String} [units=miles] can be degrees, radians, miles, or kilometers
 * @return {Number} length of the LineString
 * @example
 * var line = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "LineString",
 *     "coordinates": [
 *       [-77.031669, 38.878605],
 *       [-77.029609, 38.881946],
 *       [-77.020339, 38.884084],
 *       [-77.025661, 38.885821],
 *       [-77.021884, 38.889563],
 *       [-77.019824, 38.892368]
 *     ]
 *   }
 * };
 *
 * var length = turf.lineDistance(line, 'miles');
 *
 * //=line
 *
 * //=length
 */

module.exports = function (line, units) {
  var coords;
  if(line.type === 'Feature') coords = line.geometry.coordinates;
  else if(line.type === 'LineString') coords = line.geometry.coordinates;
  else throw new Error('input must be a LineString Feature or Geometry');

  var travelled = 0;
  for(var i = 0; i < coords.length - 1; i++) {
    travelled += distance(point(coords[i]), point(coords[i+1]), units);
  }
  return travelled;
}
