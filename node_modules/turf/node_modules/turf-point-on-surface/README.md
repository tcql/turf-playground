# turf-point-on-surface

[![build status](https://secure.travis-ci.org/Turfjs/turf-point-on-surface.png)](http://travis-ci.org/Turfjs/turf-point-on-surface)

turf point-on-surface module


### `turf.pointOnSurface(input)`

Finds a Point guaranteed to be on the surface of
GeoJSON object.

* Given a Polygon, the point will be in the area of the polygon
* Given a LineString, the point will be along the string
* Given a Point, the point will the same as the input


### Parameters

| parameter | type    | description        |
| --------- | ------- | ------------------ |
| `input`   | GeoJSON | any GeoJSON object |


### Example

```js
// create a random polygon
var polygon = turf.random('polygon');

// place a point on it
var pointOnPolygon = turf.pointOnSurface(polygon);

// show both of them
var fc = turf.featurecollection([polygon, pointOnPolygon]);
//=fc
```


**Returns** `Feature`, a point on the surface

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-point-on-surface
```

## Tests

```sh
$ npm test
```

