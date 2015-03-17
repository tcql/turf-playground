# turf-extent

[![build status](https://secure.travis-ci.org/Turfjs/turf-extent.png)](http://travis-ci.org/Turfjs/turf-extent)

turf extent module


### `turf.extent(input)`

Takes any GeoJSON object, calculates the extent of all input features, and returns a bounding box.


### Parameters

| parameter | type    | description              |
| --------- | ------- | ------------------------ |
| `input`   | GeoJSON | any valid GeoJSON Object |


### Example

```js
var input = turf.featurecollection([
 turf.point([114.175329, 22.2524]),
 turf.point([114.170007, 22.267969]),
 turf.point([114.200649, 22.274641]),
 turf.point([114.186744, 22.265745])
]);

var bbox = turf.extent(input);

var bboxPolygon = turf.bboxPolygon(bbox);
bboxPolygon.properties.fill = '#00f';

var result = turf.featurecollection(
 input.features.concat(bboxPolygon));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-extent
```

## Tests

```sh
$ npm test
```

