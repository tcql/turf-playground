# turf-featurecollection

[![build status](https://secure.travis-ci.org/Turfjs/turf-featureCollection.png)](http://travis-ci.org/Turfjs/turf-featureCollection)

turf featureCollection module


### `turf.featurecollection(features)`

Takes one or more Feature|Features and creates a FeatureCollection


### Parameters

| parameter  | type    | description    |
| ---------- | ------- | -------------- |
| `features` | Feature | input Features |


### Example

```js
var features = [
 turf.point([-75.343, 39.984], {name: 'Location A'}),
 turf.point([-75.833, 39.284], {name: 'Location B'}),
 turf.point([-75.534, 39.123], {name: 'Location C'})
];

var fc = turf.featurecollection(features);

//=fc
```


**Returns** `FeatureCollection`, a FeatureCollection of input features

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-featurecollection
```

## Tests

```sh
$ npm test
```

