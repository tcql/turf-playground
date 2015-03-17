/**
 * Combines a {@link FeatureCollection} of {@link Point}, {@link LineString}, or {@link Polygon} features into {@link MultiPoint}, {@link MultiLineString}, or {@link MultiPolygon} features.
 *
 * @module turf/combine
 * @category misc
 * @param {FeatureCollection} fc a FeatureCollection of any type
 * @return {FeatureCollection} a FeatureCollection of corresponding type to input
 * @example
 * var fc = {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [19.026432, 47.49134]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [19.074497, 47.509548]
 *       }
 *     }
 *   ]
 * };
 *
 * var combined = turf.combine(fc);
 *
 * //=combined
 */

module.exports = function(fc) {
  var type = fc.features[0].geometry.type;
  var geometries = fc.features.map(function(f) {
    return f.geometry;
  });

  switch (type) {
    case 'Point':
      return {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'MultiPoint',
          coordinates: pluckCoods(geometries)
        }
      };
    case 'LineString':
      return {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'MultiLineString',
          coordinates: pluckCoods(geometries)
        }
      };
    case 'Polygon':
      return {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'MultiPolygon',
          coordinates: pluckCoods(geometries)
        }
      };
    default:
      return fc;
  }
};

function pluckCoods(multi){
  return multi.map(function(geom){
    return geom.coordinates;
  });
}
