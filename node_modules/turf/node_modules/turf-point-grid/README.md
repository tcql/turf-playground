# turf-point-grid

[![build status](https://secure.travis-ci.org/Turfjs/turf-point-grid.png)](http://travis-ci.org/Turfjs/turf-point-grid)




### `turf.point-grid(extent, depth)`

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

var grid = turf.pointGrid(extent, depth);

//=grid
```


**Returns** `FeatureCollection`, grid as FeatureCollection with Point features

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-point-grid
```

## Tests

```sh
$ npm test
```


