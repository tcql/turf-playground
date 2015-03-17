# turf-count

[![build status](https://secure.travis-ci.org/Turfjs/turf-count.png)](http://travis-ci.org/Turfjs/turf-count)

turf count module


### `turf.count(polygons, points, countField)`

Takes a FeatureCollection of Point features and a FeatureCollection of Polygon features and calculates the number of points that fall within the set of polygons.


### Parameters

| parameter    | type              | description                                                                           |
| ------------ | ----------------- | ------------------------------------------------------------------------------------- |
| `polygons`   | FeatureCollection | a FeatureCollection of Polygon features                                               |
| `points`     | FeatureCollection | a FeatureCollection of Point features                                                 |
| `countField` | String            | a field to append to the attributes of the Polygon features representing Point counts |


### Example

```js
var polygons = turf.featurecollection([
 turf.polygon([[
   [-112.072391,46.586591],
   [-112.072391,46.61761],
   [-112.028102,46.61761],
   [-112.028102,46.586591],
   [-112.072391,46.586591]
 ]]),
 turf.polygon([[
   [-112.023983,46.570426],
   [-112.023983,46.615016],
   [-111.966133,46.615016],
   [-111.966133,46.570426],
   [-112.023983,46.570426]
 ]])
]);
var points = turf.featurecollection([
 turf.point([-112.0372, 46.608058], {population: 200}),
 turf.point([-112.045955, 46.596264],
   {population: 600})
]);

var counted = turf.count(polygons, points, 'pt_count');

var result = turf.featurecollection(
  points.features.concat(counted.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-count
```

## Tests

```sh
$ npm test
```

