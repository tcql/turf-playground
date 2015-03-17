# turf-explode

[![build status](https://secure.travis-ci.org/Turfjs/turf-explode.png)](http://travis-ci.org/Turfjs/turf-explode)

turf explode module


### `turf.explode(input)`

Takes any GeoJSON object and return all positions as
a FeatureCollection of Point features.


### Parameters

| parameter | type    | description    |
| --------- | ------- | -------------- |
| `input`   | GeoJSON | input features |


### Example

```js
var poly = turf.polygon([[
 [177.434692, -17.77517],
 [177.402076, -17.779093],
 [177.38079, -17.803937],
 [177.40242, -17.826164],
 [177.438468, -17.824857],
 [177.454948, -17.796746],
 [177.434692, -17.77517]
]]);

var points = turf.explode(poly);

//=poly

//=points
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-explode
```

## Tests

```sh
$ npm test
```

