# turf-bearing

[![build status](https://secure.travis-ci.org/Turfjs/turf-bearing.png)](http://travis-ci.org/Turfjs/turf-bearing)

turf bearing module


### `turf.bearing(start, end)`

Takes two Point features and finds the bearing between them.


### Parameters

| parameter | type  | description    |
| --------- | ----- | -------------- |
| `start`   | Point | starting Point |
| `end`     | Point | ending Point   |


### Example

```js
var point1 = turf.point([-75.343, 39.984]);
point1.properties['marker-color'] = '#f00';
var point2 = turf.point([-75.534, 39.123]);
point2.properties['marker-color'] = '#0f0';

var points = turf.featurecollection([point1, point2]);

//=points

var bearing = turf.bearing(point1, point2);

//=bearing
```


**Returns** `Number`, bearing in decimal degrees

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-bearing
```

## Tests

```sh
$ npm test
```

