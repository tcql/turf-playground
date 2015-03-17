# turf-tag

[![build status](https://secure.travis-ci.org/Turfjs/turf-tag.png)](http://travis-ci.org/Turfjs/turf-tag)

turf tag module


### `turf.tag(points, polygons, polyId, containingPolyId)`

Takes a FeatureCollection of Point features and a FeatureCollection of Polygon features and performs a spatial join.


### Parameters

| parameter          | type              | description                                                           |
| ------------------ | ----------------- | --------------------------------------------------------------------- |
| `points`           | FeatureCollection | a FeatureCollection of Point features                                 |
| `polygons`         | FeatureCollection | a FeatureCollection of Polygon features                               |
| `polyId`           | String            | property in `polygons` to add to joined Point features                |
| `containingPolyId` | String            | property in `points` in which to store joined property from `polygons |


### Example

```js
var bbox = [0, 0, 50, 50];
// create a triangular grid of polygons
var triangleGrid = turf.tin(turf.grid(bbox, 10));
triangleGrid.features.forEach(function(f) {
  f.properties.fill = '#' +
    (~~(Math.random() * 16)).toString(16) +
    (~~(Math.random() * 16)).toString(16) +
    (~~(Math.random() * 16)).toString(16);
  f.properties.stroke = 0;
  f.properties['fill-opacity'] = 1;
});
var randomPoints = turf.random('point', 30, {
  bbox: bbox
});
var both = turf.featurecollection(
  triangleGrid.features.concat(randomPoints.features));

//=both

var tagged = turf.tag(randomPoints, triangleGrid,
                      'fill', 'marker-color');

//=tagged
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tag
```

## Tests

```sh
$ npm test
```

