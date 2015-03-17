# turf-max

[![build status](https://secure.travis-ci.org/Turfjs/turf-max.png)](http://travis-ci.org/Turfjs/turf-max)

turf max module


### `turf.max(polygons, points, inField, outField)`

Calculates the maximum value of a field for points within a set of polygons.


### Parameters

| parameter  | type              | description                             |
| ---------- | ----------------- | --------------------------------------- |
| `polygons` | FeatureCollection | a FeatureCollection of Polygon features |
| `points`   | FeatureCollection | a FeatureCollection of Point features   |
| `inField`  | string            | the field in input data to analyze      |
| `outField` | string            | the field in which to store results     |


### Example

```js
var polygons = turf.featurecollection([
  turf.polygon([[
    [101.551437, 3.150114],
    [101.551437, 3.250208],
    [101.742324, 3.250208],
    [101.742324, 3.150114],
    [101.551437, 3.150114]
  ]]),
  turf.polygon([[
    [101.659927, 3.011612],
    [101.659927, 3.143944],
    [101.913986, 3.143944],
    [101.913986, 3.011612],
    [101.659927, 3.011612]
  ]])
]);
var points = turf.featurecollection([
  turf.point([101.56105, 3.213874], {population: 200}),
  turf.point([101.709365, 3.211817], {population: 600}),
  turf.point([101.645507, 3.169311], {population: 100}),
  turf.point([101.708679, 3.071266], {population: 200}),
  turf.point([101.826782, 3.081551], {population: 300})]);

var aggregated = turf.max(
  polygons, points, 'population', 'max');

var result = turf.featurecollection(
  points.features.concat(aggregated.features));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-max
```

## Tests

```sh
$ npm test
```

