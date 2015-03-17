# turf-min

[![build status](https://secure.travis-ci.org/Turfjs/turf-min.png)](http://travis-ci.org/Turfjs/turf-min)

turf min module


### `turf.min(polygons, points, inField, outField)`

Calculates the minimum value of a field for Point features within a set of Polygon features.


### Parameters

| parameter  | type              | description                             |
| ---------- | ----------------- | --------------------------------------- |
| `polygons` | FeatureCollection | a FeatureCollection of Polygon features |
| `points`   | FeatureCollection | a FeatureCollection of Point features   |
| `inField`  | string            | the field in input data to analyze      |
| `outField` | string            | the field in which to store results     |


### Example

```js
var polygons = turf.featurecollection([
  turf.polygon([[
    [72.809658, 18.961818],
    [72.809658, 18.974805],
    [72.827167, 18.974805],
    [72.827167, 18.961818],
    [72.809658, 18.961818]
  ]]),
  turf.polygon([[
    [72.820987, 18.947043],
    [72.820987, 18.95922],
    [72.841243, 18.95922],
    [72.841243, 18.947043],
    [72.820987, 18.947043]
  ]])
]);
var points = turf.featurecollection([
  turf.point([72.814464, 18.971396], {population: 200}),
  turf.point([72.820043, 18.969772], {population: 600}),
  turf.point([72.817296, 18.964253], {population: 100}),
  turf.point([72.83575, 18.954837], {population: 200}),
  turf.point([72.828197, 18.95094], {population: 300})]);

var minimums = turf.min(
  polygons, points, 'population', 'min');

var result = turf.featurecollection(
  points.features.concat(minimums.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-min
```

## Tests

```sh
$ npm test
```

