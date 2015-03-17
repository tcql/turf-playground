var distance = require('turf-distance');

/**
 * Takes a {@link Point} feature and a {@link FeatureCollection} of Point features and returns the Point feature from the FeatureCollection closest to the input point.
 *
 * @module turf/nearest
 * @category classification
 * @param {Point} point the reference point
 * @param {FeatureCollection} against a FeatureCollection of Point features
 * @return {Feature} the closest Point feature in `against` to `point`
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {
 *     "marker-color": "#0f0"
 *   },
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [28.965797, 41.010086]
 *   }
 * };
 * var against = {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [28.973865, 41.011122]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [28.948459, 41.024204]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [28.938674, 41.013324]
 *       }
 *     }
 *   ]
 * };
 *
 * var nearest = turf.nearest(point, against);
 * nearest.properties['marker-color'] = '#f00';
 *
 * var resultFeatures = against.features.concat(point);
 * var result = {
 *   "type": "FeatureCollection",
 *   "features": resultFeatures
 * };
 *
 * //=result
 */
module.exports = function(targetPoint, points){
  var nearestPoint;
  var count = 0;
  var dist = Infinity;
  points.features.forEach(function(pt){
    if(!nearestPoint){
      nearestPoint = pt;
      var dist = distance(targetPoint, pt, 'miles');
      nearestPoint.properties.distance = dist;
    }
    else{
      var dist = distance(targetPoint, pt, 'miles');
      if(dist < nearestPoint.properties.distance){
        nearestPoint = pt;
        nearestPoint.properties.distance = dist;
      }
    }
  });
  delete nearestPoint.properties.distance;
  return nearestPoint;
}
