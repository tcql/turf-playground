# turf-union

[![build status](https://secure.travis-ci.org/Turfjs/turf-union.png)](http://travis-ci.org/Turfjs/turf-union)

find the union of geographic features


### `turf.union(poly1, poly2)`

Takes two polygons and combines them into one polgyon.


### Parameters

| parameter | type    | description           |
| --------- | ------- | --------------------- |
| `poly1`   | Polygon | an input Polygon      |
| `poly2`   | Polygon | another input Polygon |


### Example

```js
var poly1 = turf.polygon([[
 [-82.574787, 35.594087],
 [-82.574787, 35.615581],
 [-82.545261, 35.615581],
 [-82.545261, 35.594087],
 [-82.574787, 35.594087]
]]);
poly1.properties.fill = '#0f0';
var poly2 = turf.polygon([[
 [-82.560024, 35.585153],
 [-82.560024, 35.602602],
 [-82.52964, 35.602602],
 [-82.52964, 35.585153],
 [-82.560024, 35.585153]
]]);
poly2.properties.fill = '#00f';
var polyFC = turf.featurecollection([poly1, poly2]);

var union = turf.union(poly1, poly2);

//=polyFC

//=union
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-union
```

## Tests

```sh
$ npm test
```

