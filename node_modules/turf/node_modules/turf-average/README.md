# turf-average

[![build status](https://secure.travis-ci.org/Turfjs/turf-average.png)](http://travis-ci.org/Turfjs/turf-average)

turf average module


### `turf.average(polygons, points, field, outputField)`

Calculates the average value of a field for points
within a set of polygons.


### Parameters

| parameter     | type              | description                                                                  |
| ------------- | ----------------- | ---------------------------------------------------------------------------- |
| `polygons`    | FeatureCollection | a FeatureCollection of Polygon features                                      |
| `points`      | FeatureCollection | a FeatureCollection of Point features                                        |
| `field`       | string            | the field in the `points` features from which to pull values to average      |
| `outputField` | string            | the field in the `polygons` FeatureCollection to put results of the averages |


### Example

```js
var polygons = turf.featurecollection([
 turf.polygon([[
   [10.666351, 59.890659],
   [10.666351, 59.936784],
   [10.762481, 59.936784],
   [10.762481, 59.890659],
   [10.666351, 59.890659]
 ]]),
 turf.polygon([[
   [10.764541, 59.889281],
   [10.764541, 59.937128],
   [10.866165, 59.937128],
   [10.866165, 59.889281],
   [10.764541, 59.889281]
 ]])
]);
var points = turf.featurecollection([
 turf.point([10.724029, 59.926807], {population: 200}),
 turf.point([10.715789, 59.904778], {population: 600}),
 turf.point([10.746002, 59.908566], {population: 100}),
 turf.point([10.806427, 59.908910], {population: 200}),
 turf.point([10.79544, 59.931624], {population: 300})
]);

var averaged = turf.average(
 polygons, points, 'population', 'pop_avg');

var result = turf.featurecollection(
 points.features.concat(averaged.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-average
```

## Tests

```sh
$ npm test
```

