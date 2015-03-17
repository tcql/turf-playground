# turf-median

[![build status](https://secure.travis-ci.org/Turfjs/turf-median.png)](http://travis-ci.org/Turfjs/turf-median)

turf median module


### `turf.median(polygons, points, inField, outField)`

Takes a set of polygons, a set of points, and tag polygons with the sum
of point property values contained within.


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
  turf.polygon([[[0,0],[10,0],[10,10],[0,10],[0,0]]]),
  turf.polygon([[[10,0],[20,10],[20,20], [20,0]]])]);
var points = turf.featurecollection([
  turf.point([5,5], {population: 200}),
  turf.point([1,3], {population: 600}),
  turf.point([14,2], {population: 100}),
  turf.point([13,1], {population: 200}),
  turf.point([19,7], {population: 300})]);
var aggregated = turf.median(polygons, points, 'population', 'median');
//=polygons
//=points
//=aggregated
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-median
```

## Tests

```sh
$ npm test
```

