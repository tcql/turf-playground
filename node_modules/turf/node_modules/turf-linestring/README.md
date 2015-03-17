# turf-linestring

[![build status](https://secure.travis-ci.org/Turfjs/turf-linestring.png)](http://travis-ci.org/Turfjs/turf-linestring)

turf lineString module


### `turf.linestring(coordinates, properties)`

Creates a LineString Feature based on a
coordinate array. Properties can be added optionally.


### Parameters

| parameter     | type                   | description                                                  |
| ------------- | ---------------------- | ------------------------------------------------------------ |
| `coordinates` | Array.<Array.<Number>> | - an array of Positions                                      |
| `properties`  | Object                 | an Object consisting of key-value pairs to add as properties |


### Example

```js
var linestring1 = turf.linestring([
	[-21.964416, 64.148203],
	[-21.956176, 64.141316],
	[-21.93901, 64.135924],
	[-21.927337, 64.136673]
]);
var linestring2 = turf.linestring([
	[-21.929054, 64.127985],
	[-21.912918, 64.134726],
	[-21.916007, 64.141016],
	[-21.930084, 64.14446]
], {name: 'line 1', distance: 145});

//=linestring1

//=linestring2
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-linestring
```

## Tests

```sh
$ npm test
```

