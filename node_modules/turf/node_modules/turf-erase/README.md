# turf-erase

[![build status](https://secure.travis-ci.org/Turfjs/turf-erase.png)](http://travis-ci.org/Turfjs/turf-erase)

erase features


### `turf.erase(poly1, poly2)`

Finds the difference between two polygons by clipping the second
polygon from the first.


### Parameters

| parameter | type    | description                           |
| --------- | ------- | ------------------------------------- |
| `poly1`   | Polygon | input Polygon feaure                  |
| `poly2`   | Polygon | Polygon feature to erase from `poly1` |


### Example

```js
var poly1 = turf.polygon([[
 [-46.738586, -23.596711],
 [-46.738586, -23.458207],
 [-46.560058, -23.458207],
 [-46.560058, -23.596711],
 [-46.738586, -23.596711]
]]);
poly1.properties.fill = '#0f0';
var poly2 = turf.polygon([[
 [-46.650009, -23.631314],
 [-46.650009, -23.5237],
 [-46.509246, -23.5237],
 [-46.509246, -23.631314],
 [-46.650009, -23.631314]
]]);
poly2.properties.fill = '#00f';

var erased = turf.erase(poly1, poly2);
erased.properties.fill = '#f00';

var polygons = turf.featurecollection([poly1, poly2]);

//=polygons

//=erased
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-erase
```

## Tests

```sh
$ npm test
```

