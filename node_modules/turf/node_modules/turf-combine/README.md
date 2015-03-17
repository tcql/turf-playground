# turf-combine

[![build status](https://secure.travis-ci.org/Turfjs/turf-combine.png)](http://travis-ci.org/Turfjs/turf-combine)

turf combine module


### `turf.combine(fc)`

Combines a FeatureCollection of Point, LineString, or Polygon features into MultiPoint, MultiLineString, or MultiPolygon features.


### Parameters

| parameter | type              | description                     |
| --------- | ----------------- | ------------------------------- |
| `fc`      | FeatureCollection | a FeatureCollection of any type |


### Example

```js
var fc = turf.featurecollection([
  turf.point([19.026432, 47.49134]),
  turf.point([19.074497, 47.509548])
]);

var combined = turf.combine(fc);

//=combined
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-combine
```

## Tests

```sh
$ npm test
```

