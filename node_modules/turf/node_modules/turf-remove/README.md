# turf-remove

[![build status](https://secure.travis-ci.org/Turfjs/turf-remove.png)](http://travis-ci.org/Turfjs/turf-remove)

turf remove module


### `turf.remove(features, property, value)`

Takes a FeatureCollection, a property, and a value and
returns a FeatureCollection with features matching that
property-value pair removed.


### Parameters

| parameter  | type              | description                     |
| ---------- | ----------------- | ------------------------------- |
| `features` | FeatureCollection | a FeatureCollection of any type |
| `property` | String            | the property to filter          |
| `value`    | String            | the value to filter             |


### Example

```js
var points = turf.featurecollection([
 turf.point([-0.235004, 5.551918], {'marker-color': '#00f'}),
 turf.point([-0.209598, 5.56439], {'marker-color': '#f00'}),
 turf.point([-0.197753, 5.556018], {'marker-color': '#00f'}),
 turf.point([-0.217323, 5.549526], {'marker-color': '#000'}),
 turf.point([-0.211315, 5.543887], {'marker-color': '#0f0'}),
 turf.point([-0.202217, 5.547134], {'marker-color': '#00f'}),
 turf.point([-0.231227, 5.56644], {'marker-color': '#0f0'})
]);

//=points

var filtered = turf.remove(points, 'marker-color', '#00f');

//=filtered
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-remove
```

## Tests

```sh
$ npm test
```

