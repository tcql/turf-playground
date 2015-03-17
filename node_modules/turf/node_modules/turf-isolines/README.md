# turf-isolines

[![build status](https://secure.travis-ci.org/Turfjs/turf-isolines.png)](http://travis-ci.org/Turfjs/turf-isolines)

turf isolines module


### `turf.isolines(points, z, resolution, breaks)`

Takes a FeatureCollection of points with z values and an array of
value breaks and generates [isolines](http://en.wikipedia.org/wiki/Isoline).
These are commonly used to create elevation maps, but can be used
for general data interpolation as well.


### Parameters

| parameter    | type              | description                                                 |
| ------------ | ----------------- | ----------------------------------------------------------- |
| `points`     | FeatureCollection | a collection containing only Features with Point geometries |
| `z`          | string            | field in properties to contour                              |
| `resolution` | number            |                                                             |
| `breaks`     | Array.<number>    | at which to draw contours                                   |


### Example

```js
// create random points with random
// z-values in their properties
var points = turf.random('point', 100, {
  bbox: [0, 30, 20, 50]
});
for (var i = 0; i < points.features.length; i++) {
  points.features[i].properties.z = Math.random() * 10;
}
var breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isolined = turf.isolines(points, 'z', 15, breaks);
//=isolined
```


**Returns** `FeatureCollection`, isolines

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-isolines
```

## Tests

```sh
$ npm test
```

