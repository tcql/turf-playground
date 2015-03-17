# turf-midpoint

[![build status](https://secure.travis-ci.org/Turfjs/turf-midpoint.png)](http://travis-ci.org/Turfjs/turf-midpoint)

turf midpoint module


### `turf.midpoint(a, b)`

Takes two point features and returns a point between the two.


### Parameters

| parameter | type  | description |
| --------- | ----- | ----------- |
| `a`       | Point |             |
| `b`       | Point |             |


### Example

```js
var pt1 = turf.point([0,0]);
var pt2 = turf.point([10, 0]);
var midpointed = turf.midpoint(pt1, pt2);
var features = turf.featurecollection([
 pt1, pt2, midpointed]);
//=features
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-midpoint
```

## Tests

```sh
$ npm test
```

