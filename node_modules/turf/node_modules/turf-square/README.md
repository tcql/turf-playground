# turf-square

[![build status](https://secure.travis-ci.org/Turfjs/turf-square.png)](http://travis-ci.org/Turfjs/turf-square)

turf square module


### `turf.square(bbox)`

Takes a bounding box and calculates the minimum square bounding box that would contain the input.


### Parameters

| parameter | type           | description    |
| --------- | -------------- | -------------- |
| `bbox`    | Array.<number> | a bounding box |


### Example

```js
var bbox = [-20,-20,-15,0];
var squared = turf.square(bbox);
var features = turf.featurecollection([
  turf.bboxPolygon(bbox),
  turf.bboxPolygon(squared)]);

//=features
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-square
```

## Tests

```sh
$ npm test
```

