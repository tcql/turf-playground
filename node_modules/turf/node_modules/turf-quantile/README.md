# turf-quantile

[![build status](https://secure.travis-ci.org/Turfjs/turf-quantile.png)](http://travis-ci.org/Turfjs/turf-quantile)

turf quantile module


### `turf.quantile(input, field, percentiles)`

Takes a FeatureCollection, a property name, and a set of percentiles and returns a quantile array.

### Parameters

| parameter     | type              | description                                                   |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `input`       | FeatureCollection | a FeatureCollection of any type                               |
| `field`       | String            | the property on which to retrieve quantile values             |
| `percentiles` | Array.<number>    | an Array of percentiles on which to calculate quantile values |


### Example

```js
var points = turf.featurecollection([
  turf.point([5,5], {population: 5}),
  turf.point([1,3], {population: 40}),
  turf.point([14,2], {population: 80}),
  turf.point([13,1], {population: 90}),
  turf.point([19,7], {population: 100})
]);

var breaks = turf.quantile(
  points, 'population', [25, 50, 75, 99]);

//=breaks
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-quantile
```

## Tests

```sh
$ npm test
```

