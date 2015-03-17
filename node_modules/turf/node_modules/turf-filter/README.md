# turf-filter

[![build status](https://secure.travis-ci.org/Turfjs/turf-filter.png)](http://travis-ci.org/Turfjs/turf-filter)

turf filter module


### `turf.filter(features, key, value)`

Takes a FeatureCollection and filters it by a given property and value


### Parameters

| parameter  | type              | description                                   |
| ---------- | ----------------- | --------------------------------------------- |
| `features` | FeatureCollection | input FeatureCollection of any type           |
| `key`      | String            | the property on which to filter               |
| `value`    | String            | the value of that property on which to filter |


### Example

```js
var features = turf.featurecollection([
 turf.point([-72.581777, 44.260875], {species: 'oak'}),
 turf.point([-72.570018, 44.260691], {species: 'birch'}),
 turf.point([-72.576284, 44.257925], {species: 'oak'}),
 turf.point([-72.56916, 44.254605], {species: 'redwood'}),
 turf.point([-72.581691, 44.24858], {species: 'maple'}),
 turf.point([-72.583837, 44.255773], {species: 'oak'})
]);

var key = 'species';
var value = 'oak';

var filtered = turf.filter(features, key, value);

//=features

//=filtered
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-filter
```

## Tests

```sh
$ npm test
```

