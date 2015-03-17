// depend on jsts for now https://github.com/bjornharrtell/jsts/blob/master/examples/overlay.html
var jsts = require('jsts');

/**
 * Finds the difference between two polygons by clipping the second
 * polygon from the first.
 *
 * @module turf/erase
 * @category transformation
 * @param {Polygon} poly1 input Polygon feaure
 * @param {Polygon} poly2 Polygon feature to erase from `poly1`
 * @return {Polygon} a Polygon feature showing the area of `poly1` excluding the area of `poly2`
 * @example
 * var poly1 = {
 *   "type": "Feature",
 *   "properties": {
 *     "fill": "#0f0"
 *   },
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-46.738586, -23.596711],
 *       [-46.738586, -23.458207],
 *       [-46.560058, -23.458207],
 *       [-46.560058, -23.596711],
 *       [-46.738586, -23.596711]
 *     ]]
 *   }
 * };
 * var poly2 = {
 *   "type": "Feature",
 *   "properties": {
 *     "fill": "#00f"
 *   },
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-46.650009, -23.631314],
 *       [-46.650009, -23.5237],
 *       [-46.509246, -23.5237],
 *       [-46.509246, -23.631314],
 *       [-46.650009, -23.631314]
 *     ]]
 *   }
 * };
 *
 * var erased = turf.erase(poly1, poly2);
 * erased.properties.fill = '#f00';
 *
 * var polygons = {
 *   "type": "FeatureCollection",
 *   "features": [poly1, poly2]
 * };
 *
 * //=polygons
 *
 * //=erased
 */

module.exports = function(p1, p2, done){
  var poly1 = JSON.parse(JSON.stringify(p1));
  var poly2 = JSON.parse(JSON.stringify(p2));
  if(poly1.type !== 'Feature') {
    poly1 = {
      type: 'Feature',
      properties: {},
      geometry: poly1
    };
  }
  if(poly2.type !== 'Feature') {
    poly2 = {
      type: 'Feature',
      properties: {},
      geometry: poly2
    };
  }

  var reader = new jsts.io.GeoJSONReader();
  var a = reader.read(JSON.stringify(poly1.geometry));
  var b = reader.read(JSON.stringify(poly2.geometry));
  var erased = a.difference(b);
  var parser = new jsts.io.GeoJSONParser();
  erased = parser.write(erased);

  poly1.geometry = erased;

  if (poly1.geometry.type === 'GeometryCollection' && poly1.geometry.geometries.length === 0) {
    return;
  } else {
    return {
      type: 'Feature',
      properties: poly1.properties,
      geometry: erased
    };
  }
};
