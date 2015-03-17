# turf-center

[![build status](https://secure.travis-ci.org/Turfjs/turf-center.png)](http://travis-ci.org/Turfjs/turf-center)

turf center module


### `turf.center(features)`

Takes a FeatureCollection of any type and returns the absolute center point of all features.


### Parameters

| parameter  | type              | description                     |
| ---------- | ----------------- | ------------------------------- |
| `features` | FeatureCollection | a FeatureCollection of any type |


### Example

```js
var features = turf.featurecollection([
    turf.point([-97.522259, 35.469100]),
    turf.point([-97.502754, 35.463455]),
    turf.point([-97.508269, 35.463245]),
    turf.point([-97.516809, 35.465779]),
    turf.point([-97.515372, 35.467072]),
    turf.point([-97.509363, 35.463053]),
    turf.point([-97.511123, 35.466601]),
    turf.point([-97.518547, 35.469327]),
    turf.point([-97.519706, 35.469659]),
    turf.point([-97.517839, 35.466998]),
    turf.point([-97.508678, 35.464942]),
    turf.point([-97.514914, 35.463453])
]);

var centerPt = turf.center(features);
centerPt.properties['marker-size'] = 'large';
centerPt.properties['marker-color'] = '#000';

var result = turf.featurecollection(features.features.concat(centerPt));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-center
```

## Tests

```sh
$ npm test
```

