# turf-nearest

[![build status](https://secure.travis-ci.org/Turfjs/turf-nearest.png)](http://travis-ci.org/Turfjs/turf-nearest)

turf nearest module


### `turf.nearest(point, against)`

Takes a Point feature and a FeatureCollection of Point features and returns the Point feature from the FeatureCollection closest to the input point.


### Parameters

| parameter | type              | description                           |
| --------- | ----------------- | ------------------------------------- |
| `point`   | Point             | the reference point                   |
| `against` | FeatureCollection | a FeatureCollection of Point features |


### Example

```js
var point = turf.point([28.965797, 41.010086]);
point.properties['marker-color'] = '#0f0';
var against = turf.featurecollection([
 turf.point([28.973865, 41.011122]),
 turf.point([28.948459, 41.024204]),
 turf.point([28.938674, 41.013324])
]);

var nearest = turf.nearest(point, against);
nearest.properties['marker-color'] = '#f00';

var result = turf.featurecollection(
  against.features.concat(point));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-nearest
```

## Tests

```sh
$ npm test
```

