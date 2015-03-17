angular = require('angular')
window._ = require('lodash');


angular.module('turf-playground', []).config(function ($provide) {
    L.mapbox.accessToken = 'pk.eyJ1IjoidGNxbCIsImEiOiJaSlZ6X3JZIn0.mPwXgf3BvAR4dPuBB3ypfA'
    var map = L.mapbox.map('map', 'tcql.lffb55nc');
    var mapFeatures = L.featureGroup().addTo(map);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: mapFeatures
        }
    }).addTo(map);

    map.on('draw:created', function(e) {
        mapFeatures.addLayer(e.layer);
    });

    $provide.value("$map", map);
    $provide.value("$mapFeatures", mapFeatures);
});

require('./directives/playgroundAce')
require('./directives/playgroundTabs')
require('./controllers/MainCtrl')
