# turf-variance

[![build status](https://secure.travis-ci.org/Turfjs/turf-variance.png)](http://travis-ci.org/Turfjs/turf-variance)

turf variance module


### `turf.variance(polygons, points, inField, outField)`

Calculates the variance value of a field for Point features within a set of Polygon features.


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
    [-97.414398, 37.684092],
    [-97.414398, 37.731353],
    [-97.332344, 37.731353],
    [-97.332344, 37.684092],
    [-97.414398, 37.684092]
  ]]),
  turf.polygon([[
    [-97.333717, 37.606072],
    [-97.333717, 37.675397],
    [-97.237586, 37.675397],
    [-97.237586, 37.606072],
    [-97.333717, 37.606072]
  ]])
]);
var points = turf.featurecollection([
  turf.point([-97.401351, 37.719676], {population: 200}),
  turf.point([-97.355346, 37.706639], {population: 600}),
  turf.point([-97.387962, 37.70012], {population: 100}),
  turf.point([-97.301788, 37.66507], {population: 200}),
  turf.point([-97.265052, 37.643325], {population: 300})]);

var aggregated = turf.variance(
  polygons, points, 'population', 'variance');

var result = turf.featurecollection(
  points.features.concat(aggregated.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-variance
```

## Tests

```sh
$ npm test
```

