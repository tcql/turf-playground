# turf-sample

[![build status](https://secure.travis-ci.org/Turfjs/turf-sample.png)](http://travis-ci.org/Turfjs/turf-sample)

turf sample module


### `turf.sample(features, n)`

Selects a given number of Feature|features from a FeatureCollection
at random.


### Parameters

| parameter  | type              | description                  |
| ---------- | ----------------- | ---------------------------- |
| `features` | FeatureCollection |                              |
| `n`        | number            | number of features to select |


### Example

```js
// create a lot of points
var points = turf.random('points', 1000);
//=points

// sample just a few of them
var sample = turf.sample(points, 10);
//=sample
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-sample
```

## Tests

```sh
$ npm test
```

