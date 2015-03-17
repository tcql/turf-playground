var each = require('turf-meta').coordEach;
var point = require('turf-point');

/**
 * Takes a {@link Feature} or {@link FeatureCollection} of any type and calculates the centroid using the arithmetic mean of all vertices.
 * This lessens the effect of small islands and artifacts when calculating
 * the centroid of a set of polygons.
 *
 * @module turf/centroid
 * @category measurement
 * @param {GeoJSON} features a {@link Feature} or FeatureCollection of any type
 * @return {Point} a Point feature at the centroid of the input feature(s)
 * @example
 * var poly = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [105.818939,21.004714],
 *       [105.818939,21.061754],
 *       [105.890007,21.061754],
 *       [105.890007,21.004714],
 *       [105.818939,21.004714]
 *     ]]
 *   }
 * };
 *
 * var centroidPt = turf.centroid(poly);
 *
 * var result = {
 *   "type": "FeatureCollection",
 *   "features": [poly, centroidPt]
 * };
 *
 * //=result
 */
module.exports = function(features){
  var xSum = 0, ySum = 0, len = 0;
  each(features, function(coord) {
    xSum += coord[0];
    ySum += coord[1];
    len++;
  }, true);
  return point([xSum / len, ySum / len]);
};
