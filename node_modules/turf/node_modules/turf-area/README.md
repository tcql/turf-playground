# turf-area

[![build status](https://secure.travis-ci.org/Turfjs/turf-area.png)](http://travis-ci.org/Turfjs/turf-area)

calculate the area of a polygon or multipolygon feature


### `turf.area(input)`

Given any kind of GeoJSON feature, return the area of that feature,
in square meters.

### Parameters

| parameter | type    | description |
| --------- | ------- | ----------- |
| `input`   | GeoJSON |             |


### Example

```js
var polygons = turf.featurecollection([
  turf.polygon([[[0,0],[10,0],[10,10],[0,10],[0,0]]]),
  turf.polygon([[[10,0],[20,10],[20,20], [20,0]]])]);
var area = turf.area(polygons);
//=area
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-area
```

## Tests

```sh
$ npm test
```

