# turf-line-distance

[![build status](https://secure.travis-ci.org/Turfjs/turf-line-distance.png)](http://travis-ci.org/Turfjs/turf-line-distance)

turf-line-distance ---


### `turf.line-distance (Line, [units=miles])`

Measures the length of a LineString in the specified units.


### Parameters

| parameter       | type       | description                                               |
| --------------- | ---------- | --------------------------------------------------------- |
| `Line`          | LineString | to measure                                                |
| `[units=miles]` | String     | _optional:_ can be degrees, radians, miles, or kilometers |


### Example

```js
var line = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -77.0316696166992,
        38.878605901789236
      ],
      [
        -77.02960968017578,
        38.88194668656296
      ],
      [
        -77.02033996582031,
        38.88408470638821
      ],
      [
        -77.02566146850586,
        38.885821800123196
      ],
      [
        -77.02188491821289,
        38.88956308852534
      ],
      [
        -77.01982498168944,
        38.89236892551996
      ]
    ]
  }
};

var length = turf.lineDistance(line, 'miles');
//=length
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-line-distance
```

## Tests

```sh
$ npm test
```

