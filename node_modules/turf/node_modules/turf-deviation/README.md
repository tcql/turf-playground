# turf-deviation

[![build status](https://secure.travis-ci.org/Turfjs/turf-deviation.png)](http://travis-ci.org/Turfjs/turf-deviation)

turf deviation module


### `turf.deviation(polygons, points, inField, outField)`

Calculates the standard deviation value of a field for points within a set of polygons.


### Parameters

| parameter  | type              | description                                              |
| ---------- | ----------------- | -------------------------------------------------------- |
| `polygons` | FeatureCollection | a FeatureCollection of Polygon features                  |
| `points`   | FeatureCollection | a FeatureCollection of Point features                    |
| `inField`  | String            | the field in `points` from which to aggregate            |
| `outField` | String            | the field to append to `polygons` representing deviation |


### Example

```js
var polygons = turf.featurecollection([
  turf.polygon([[
    [-97.807159, 30.270335],
    [-97.807159, 30.369913],
    [-97.612838, 30.369913],
    [-97.612838, 30.270335],
    [-97.807159, 30.270335]
  ]]),
  turf.polygon([[
    [-97.825698, 30.175405],
    [-97.825698, 30.264404],
    [-97.630691, 30.264404],
    [-97.630691, 30.175405],
    [-97.825698, 30.175405]
  ]])
]);
var points = turf.featurecollection([
  turf.point([-97.709655, 30.311245],
    {population: 500}),
  turf.point([-97.766647, 30.345028],
    {population: 400}),
  turf.point([-97.765274, 30.294646],
    {population: 600}),
  turf.point([-97.753601, 30.216355],
    {population: 500}),
  turf.point([-97.667083, 30.208047],
  {population: 200})
]);

var inField = 'population';
var outField = 'pop_deviation';

var deviated = turf.deviation(
  polygons, points, inField, outField);

var result = turf.featurecollection(
  points.features.concat(deviated.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-deviation
```

## Tests

```sh
$ npm test
```

