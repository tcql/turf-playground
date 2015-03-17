# turf-size

[![build status](https://secure.travis-ci.org/Turfjs/turf-size.png)](http://travis-ci.org/Turfjs/turf-size)

turf size module


### `turf.size(bbox, factor)`

Takes a bbox and returns a new bbox with a size expanded or contracted
by a factor of X.


### Parameters

| parameter | type           | description                                 |
| --------- | -------------- | ------------------------------------------- |
| `bbox`    | Array.<number> | a bounding box                              |
| `factor`  | number         | the ratio of the new bbox to the input bbox |


### Example

```js
var bbox = [0, 0, 10, 10]
var resized = turf.size(bbox, 2);
var features = turf.featurecollection([
  turf.bboxPolygon(bbox),
  turf.bboxPolygon(resized)]);

//=features
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-size
```

## Tests

```sh
$ npm test
```

