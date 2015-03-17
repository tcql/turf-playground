# turf-aggregate

[![build status](https://secure.travis-ci.org/Turfjs/turf-aggregate.png)](http://travis-ci.org/Turfjs/turf-aggregate)

turf aggregate module


### `turf.aggregate(polygons, points, aggregations)`

Calculates a series of aggregations for a set of Point features within a set of Polygon features. Sum, average, count, min, max, and deviation are supported.


### Parameters

| parameter      | type              | description                             |
| -------------- | ----------------- | --------------------------------------- |
| `polygons`     | FeatureCollection | a FeatureCollection of Polygon features |
| `points`       | FeatureCollection | a FeatureCollection of Point features   |
| `aggregations` | Array             | an array of aggregation objects         |


### Example

```js
var polygons = turf.featurecollection([
  turf.polygon([[
    [1.669921, 48.632908],
    [1.669921, 49.382372],
    [3.636474, 49.382372],
    [3.636474, 48.632908],
    [1.669921, 48.632908]]
  ]),
  turf.polygon([[
    [2.230224, 47.85003],
    [2.230224, 48.611121],
    [4.361572, 48.611121],
    [4.361572, 47.85003],
    [2.230224, 47.85003]]
  ])
]);
var points = turf.featurecollection([
  turf.point([2.054443,49.138596], {population: 200}),
  turf.point([3.065185,48.850258], {population: 600}),
  turf.point([2.329101,48.79239], {population: 100}),
  turf.point([2.614746,48.334343], {population: 200}),
  turf.point([3.416748,48.056053], {population: 300})]);
var aggregations = [
  {
    aggregation: 'sum',
    inField: 'population',
    outField: 'pop_sum'
  },
  {
    aggregation: 'average',
    inField: 'population',
    outField: 'pop_avg'
  },
  {
    aggregation: 'median',
    inField: 'population',
    outField: 'pop_median'
  },
  {
    aggregation: 'min',
    inField: 'population',
    outField: 'pop_min'
  },
  {
    aggregation: 'max',
    inField: 'population',
    outField: 'pop_max'
  },
  {
    aggregation: 'deviation',
    inField: 'population',
    outField: 'pop_deviation'
  },
  {
    aggregation: 'variance',
    inField: 'population',
    outField: 'pop_variance'
  },
  {
    aggregation: 'count',
    inField: '',
    outField: 'point_count'
  }
];

var aggregated = turf.aggregate(
  polygons, points, aggregations);

var result = turf.featurecollection(
  points.features.concat(aggregated.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-aggregate
```

## Tests

```sh
$ npm test
```

