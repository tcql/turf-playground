# turf-flip

[![build status](https://secure.travis-ci.org/Turfjs/turf-flip.png)](http://travis-ci.org/Turfjs/turf-flip)

turf flip module


### `turf.flip(input)`

Takes a GeoJSON object of any type and flips all of its coordinates
from `[x, y]` to `[y, x]`.


### Parameters

| parameter | type    | description          |
| --------- | ------- | -------------------- |
| `input`   | GeoJSON | input GeoJSON object |


### Example

```js
var serbia = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [20.566406, 43.421008]
  }
};

//=serbia

var saudiArabia = turf.flip(serbia);

//=saudiArabia
```


**Returns** `GeoJSON`, a GeoJSON object of the same type as `input` with flipped coordinates

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-flip
```

## Tests

```sh
$ npm test
```

