var area = require('./'),
    test = require('tape');

test('turf-area - polygon', function(t) {
    var poly = {
        type: 'Polygon',
        coordinates: [
            [
            [0, 0],
            [10, 0],
            [10, 10],
            [0, 10],
            [0, 0],
            ]
        ]
    };
    t.equal(area(poly), 1232921098571.292);
    t.end();
});

test('turf-area - polygon', function(t) {
    var point = {
        type: 'Point',
        coordinates: [0, 0]
    };
    t.equal(area(point), 0);
    t.end();
});

test('turf-area - linestring', function(t) {
    var ls = {
        type: 'LineString',
        coordinates: [[0, 0], [1, 2]]
    };
    t.equal(area(ls), 0);
    t.end();
});

test('turf-area - featurecollection', function(t) {
    var fc = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                    [0, 0],
                    [10, 0],
                    [10, 10],
                    [0, 10],
                    [0, 0],
                    ]
                ]
            },
            properties: {}
        }]
    };
    t.equal(area(fc), 1232921098571.292);
    t.end();
});

test('turf-area - featurecollection n > 1', function(t) {
    var fc = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                    [0, 0],
                    [10, 0],
                    [10, 10],
                    [0, 10],
                    [0, 0],
                    ]
                ]
            },
            properties: {}
        }, {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                    [0, 0],
                    [10, 0],
                    [10, 10],
                    [0, 10],
                    [0, 0],
                    ]
                ]
            },
            properties: {}
        }]
    };
    t.equal(area(fc), 1232921098571.292 * 2);
    t.end();
});

test('turf-area - feature', function(t) {
    var feature = {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                [0, 0],
                [10, 0],
                [10, 10],
                [0, 10],
                [0, 0],
                ]
            ]
        },
        properties: {}
    };
    t.equal(area(feature), 1232921098571.292);
    t.end();
});
