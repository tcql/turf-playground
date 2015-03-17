# turf-kinks

[![build status](https://secure.travis-ci.org/Turfjs/turf-kinks.png)](http://travis-ci.org/Turfjs/turf-kinks)

turf kinks module


### `turf.kinks(polygon)`

Takes a polygon and detects all self-intersections.


### Parameters

| parameter | type    | description       |
| --------- | ------- | ----------------- |
| `polygon` | Polygon | a Polygon feature |


### Example

```js
var poly = turf.polygon([[
 [-12.034835, 8.901183],
 [-12.060413, 8.899826],
 [-12.03638, 8.873199],
 [-12.059383, 8.871418],
 [-12.034835, 8.901183]
]]);

var kinks = turf.kinks(poly);

var result = turf.featurecollection(
 kinks.intersections.features.concat(poly));

//=result
```


**Returns** `FeatureCollection`, a FeatureCollection of Point features representing self-intersections

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-kinks
```

## Tests

```sh
$ npm test
```

