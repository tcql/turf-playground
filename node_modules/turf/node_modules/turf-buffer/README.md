# turf-buffer

[![build status](https://secure.travis-ci.org/Turfjs/turf-buffer.png)](http://travis-ci.org/Turfjs/turf-buffer)

turf buffer module


### `turf.buffer(feature, distance, unit)`

Calculates a buffer for a Point, LineString, or Polygon Feature/FeatureCollection for a given radius. Units supported are miles, kilometers, and degrees.


### Parameters

| parameter  | type              | description                                |
| ---------- | ----------------- | ------------------------------------------ |
| `feature`  | FeatureCollection | a Feature or FeatureCollection of any type |
| `distance` | Number            | distance to draw the buffer                |
| `unit`     | String            | 'miles' or 'kilometers'                    |


### Example

```js
var pt = turf.point([-90.548630, 14.616599]);
var unit = 'miles';

var buffered = turf.buffer(pt, 500, unit);

var result = turf.featurecollection(
  buffered.features.concat(pt));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-buffer
```

## Tests

```sh
$ npm test
```

