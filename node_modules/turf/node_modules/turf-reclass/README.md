# turf-reclass

[![build status](https://secure.travis-ci.org/Turfjs/turf-reclass.png)](http://travis-ci.org/Turfjs/turf-reclass)

turf reclass module


### `turf.reclass(input, inField, outField, translations)`

Takes a FeatureCollection, an input field, an output field, and
an array of translations and outputs an identical FeatureCollection with
the output field property populated.

### Parameters

| parameter      | type              | description                                    |
| -------------- | ----------------- | ---------------------------------------------- |
| `input`        | FeatureCollection | a FeatureCollection of any type                |
| `inField`      | string            | the field to translate                         |
| `outField`     | string            | the field in which to store translated results |
| `translations` | Array.<number>    | an array of translations                       |


### Example

```js
var points = turf.featurecollection([
  turf.point([13.170547, 32.888669], {population: 200}),
  turf.point([13.182048, 32.889533], {population: 600}),
  turf.point([13.17398, 32.882182], {population: 100}),
  turf.point([13.174324, 32.895011], {population: 200}),
  turf.point([13.185825, 32.884344], {population: 300})
]);
// 0 to 200 will map to "small", 200 to 400 will map to "medium", 400 to 600 will map to "large"
var translations = [
  [0, 200, "small"],
  [200, 400, "medium"],
  [400, 600, "large"]
];

var reclassed = turf.reclass(
  points, 'population', 'size', translations);

//=reclassed
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-reclass
```

## Tests

```sh
$ npm test
```

