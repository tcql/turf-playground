# turf-within

[![build status](https://secure.travis-ci.org/Turfjs/turf-within.png)](http://travis-ci.org/Turfjs/turf-within)

turf within module


### `turf.within(points, polygons)`

Returns a FeatureCollection of points representing all points that fall
within a collection of polygons.


### Parameters

| parameter  | type              | description |
| ---------- | ----------------- | ----------- |
| `points`   | FeatureCollection |             |
| `polygons` | FeatureCollection |             |


### Example

```js
var searchWithin = turf.featurecollection([
  turf.polygon([
    [[-46.653,-23.543],
     [-46.634,-23.5346],
     [-46.613,-23.543],
     [-46.614,-23.559],
     [-46.631,-23.567],
     [-46.653,-23.560],
     [-46.653,-23.543]]
  ])
]);
var points = turf.featurecollection([
  turf.point([-46.6318, -23.5523]),
  turf.point([-46.6246, -23.5325]),
  turf.point([-46.6062, -23.5513]),
  turf.point([-46.663, -23.554]),
  turf.point([-46.643, -23.557])]);
var ptsWithin = turf.within(points, searchWithin);
//=points
//=searchWithin
//=ptsWithin
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-within
```

## Tests

```sh
$ npm test
```

