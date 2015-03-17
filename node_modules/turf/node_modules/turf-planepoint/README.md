# turf-planepoint

[![build status](https://secure.travis-ci.org/Turfjs/turf-planepoint.png)](http://travis-ci.org/Turfjs/turf-planepoint)

turf planepoint module


### `turf.planepoint(interpolatedPoint, triangle)`

Takes a triangular plane as a Polygon feature
and a Point feature within that triangle and returns the z-value
at that point. The Polygon needs to have properties `a`, `b`, and `c`
that define the values at its three corners.


### Parameters

| parameter           | type    | description                                      |
| ------------------- | ------- | ------------------------------------------------ |
| `interpolatedPoint` | Point   | the Point for which a z-value will be calculated |
| `triangle`          | Polygon | a Polygon feature with three vertices            |


### Example

```js
var point = turf.point([-75.3221, 39.529]);
// triangle is a polygon with "a", "b",
// and "c" values representing
// the values of the coordinates in order.
var triangle = turf.polygon(
  [[[-75.1221,39.57],[-75.58,39.18],[-75.97,39.86], [-75.1221, 39.57]]],
  {"a": 11, "b": 122, "c": 44});

var zValue = turf.planepoint(point, triangle);

//=zValue
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-planepoint
```

## Tests

```sh
$ npm test
```

