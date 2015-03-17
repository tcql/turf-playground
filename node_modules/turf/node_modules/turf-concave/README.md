# turf-concave

[![build status](https://secure.travis-ci.org/Turfjs/turf-concave.png)](http://travis-ci.org/Turfjs/turf-concave)

turf concave module


### `turf.concave(points, maxEdge, units)`

Takes a FeatureCollection of Point features and
returns a concave hull.

Internally, this implements
a [Monotone chain algorithm](http://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript).


### Parameters

| parameter | type              | description                                                                     |
| --------- | ----------------- | ------------------------------------------------------------------------------- |
| `points`  | FeatureCollection | a FeatureCollection of Point features                                           |
| `maxEdge` | number            | the size of an edge necessary for part of the hull to become concave (in miles) |
| `units`   | String            | used for maxEdge distance (miles or kilometers)                                 |


### Example

```js
var points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.601226, 44.642643]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.591442, 44.651436]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.580799, 44.648749]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.573589, 44.641788]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.587665, 44.64533]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-63.595218, 44.64765]
      }
    }
  ]
};

var hull = turf.concave(points, 1, 'miles');

var resultFeatures = points.features.concat(hull);
var result = {
  "type": "FeatureCollection",
  "features": resultFeatures
};

//=result
```


**Returns** `Feature`, a Polygon feature

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-concave
```

## Tests

```sh
$ npm test
```

