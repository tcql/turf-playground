# turf-grid

[![build status](https://secure.travis-ci.org/Turfjs/turf-grid.png)](http://travis-ci.org/Turfjs/turf-grid)

turf grid module


### `turf.grid(extent, depth)`

Takes a bounding box and a cell depth and returns a FeatureCollection of Point features in a grid.


### Parameters

| parameter | type           | description                              |
| --------- | -------------- | ---------------------------------------- |
| `extent`  | Array.<number> | extent in [minX, minY, maxX, maxY] order |
| `depth`   | Number         | how many cells to output                 |


### Example

```js
var extent = [-70.823364, -33.553984, -70.473175, -33.302986];
var depth = 10;

var grid = turf.grid(extent, depth);

//=grid
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-grid
```

## Tests

```sh
$ npm test
```

