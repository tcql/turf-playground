# turf-merge

[![build status](https://secure.travis-ci.org/Turfjs/turf-merge.png)](http://travis-ci.org/Turfjs/turf-merge)

merge polygons


### `turf.merge(fc)`

Takes a FeatureCollection of Polygon features and outputs a single merged
polygon feature.

### Parameters

| parameter | type              | description                               |
| --------- | ----------------- | ----------------------------------------- |
| `fc`      | FeatureCollection | - a FeatureCollection of Polygon features |


### Example

```js
var poly1 = turf.polygon([[
 [9.994812, 53.549487],
 [10.046997, 53.598209],
 [10.117721, 53.531737],
 [9.994812, 53.549487]
]]);
poly1.properties.fill = '#0f0';
var poly2 = turf.polygon([[
 [10.000991, 53.50418],
 [10.03807, 53.562539],
 [9.926834, 53.551731],
 [10.000991, 53.50418]
]]);
poly2.properties.fill = '#00f';

var polygons = turf.featurecollection([poly1, poly2]);

var merged = turf.merge(polygons);

//=polygons

//=merged
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-merge
```

## Tests

```sh
$ npm test
```

