# turf-sum

[![build status](https://secure.travis-ci.org/Turfjs/turf-sum.png)](http://travis-ci.org/Turfjs/turf-sum)

turf sum module


### `turf.sum(polygons, points, inField, outField)`

Calculates the sum of a field for Point features within a set of Polygon features.


### Parameters

| parameter  | type              | description                             |
| ---------- | ----------------- | --------------------------------------- |
| `polygons` | FeatureCollection | a FeatureCollection of Polygon features |
| `points`   | FeatureCollection | a FeatureCollection of Point features   |
| `inField`  | String            | the field in input data to analyze      |
| `outField` | String            | the field in which to store results     |


### Example

```js
var polygons = turf.featurecollection([
  turf.polygon([[
    [-87.990188, 43.026486],
    [-87.990188, 43.062115],
    [-87.913284, 43.062115],
    [-87.913284, 43.026486],
    [-87.990188, 43.026486]
  ]]),
  turf.polygon([[
    [-87.973709, 42.962452],
    [-87.973709, 43.014689],
    [-87.904014, 43.014689],
    [-87.904014, 42.962452],
    [-87.973709, 42.962452]
  ]])
]);
var points = turf.featurecollection([
  turf.point([-87.974052, 43.049321], {population: 200}),
  turf.point([-87.957229, 43.037277], {population: 600}),
  turf.point([-87.931137, 43.048568], {population: 100}),
  turf.point([-87.963409, 42.99611], {population: 200}),
  turf.point([-87.94178, 42.974762], {population: 300})
]);

var aggregated = turf.sum(
  polygons, points, 'population', 'sum');

var result = turf.featurecollection(
  points.features.concat(aggregated.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-sum
```

## Tests

```sh
$ npm test
```

