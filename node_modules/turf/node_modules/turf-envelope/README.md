# turf-envelope

[![build status](https://secure.travis-ci.org/Turfjs/turf-envelope.png)](http://travis-ci.org/Turfjs/turf-envelope)

turf envelope module


### `turf.envelope(fc)`

Takes a Feature or FeatureCollection and returns a rectangular Polygon feature that encompasses all vertices.


### Parameters

| parameter | type              | description                     |
| --------- | ----------------- | ------------------------------- |
| `fc`      | FeatureCollection | a FeatureCollection of any type |


### Example

```js
var fc = turf.featurecollection([
 turf.point([-75.343, 39.984], {name: 'Location A'}),
 turf.point([-75.833, 39.284], {name: 'Location B'}),
 turf.point([-75.534, 39.123], {name: 'Location C'})
]);

var enveloped = turf.envelope(fc);

var result = turf.featurecollection(
	fc.features.concat(enveloped));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-envelope
```

## Tests

```sh
$ npm test
```

