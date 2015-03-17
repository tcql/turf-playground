# turf-jenks

[![build status](https://secure.travis-ci.org/Turfjs/turf-jenks.png)](http://travis-ci.org/Turfjs/turf-jenks)

turf jenks module


### `turf.jenks(input, field, numberOfBreaks)`

Given a FeatureCollection, return the [Jenks Natural breaks](http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization)
of a given property

### Parameters

| parameter        | type              | description                                                        |
| ---------------- | ----------------- | ------------------------------------------------------------------ |
| `input`          | FeatureCollection | a FeatureCollection of any type                                    |
| `field`          | string            | the property in `input` on which to calculate Jenks natural breaks |
| `numberOfBreaks` | number            | number of classes in which to group the data                       |


### Example

```js
var points = turf.featurecollection([
  turf.point([49.859733, 40.400424], {population: 200}),
  turf.point([49.83879, 40.401209], {population: 600}),
  turf.point([49.817848, 40.376889], {population: 100}),
  turf.point([49.840507, 40.386043], {population: 200}),
  turf.point([49.854583, 40.37532], {population: 300})]);
var breaks = turf.jenks(points, 'population', 3);
//=breaks
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-jenks
```

## Tests

```sh
$ npm test
```

