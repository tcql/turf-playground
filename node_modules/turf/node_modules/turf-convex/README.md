# turf-convex

[![build status](https://secure.travis-ci.org/Turfjs/turf-convex.png)](http://travis-ci.org/Turfjs/turf-convex)




### `turf.convex(input)`

Takes any GeoJSON object and returns a 
[convex hull](http://en.wikipedia.org/wiki/Convex_hull) polygon.

Internally this implements
a [Monotone chain algorithm](http://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript).


### Parameters

| parameter | type    | description        |
| --------- | ------- | ------------------ |
| `input`   | GeoJSON | any GeoJSON object |


### Example

```js
var points = turf.featurecollection([
  turf.point([10.195312, 43.755225]),
  turf.point([10.404052, 43.8424511]),
  turf.point([10.579833, 43.659924]),
  turf.point([10.360107, 43.516688]),
  turf.point([10.14038, 43.588348]),
  turf.point([10.195312, 43.755225])]);

var hull = turf.convex(points);

var result = turf.featurecollection(
  points.features.concat(hull));

//=result
```


**Returns** `Feature`, a Polygon feature

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-convex
```

## Tests

```sh
$ npm test
```

