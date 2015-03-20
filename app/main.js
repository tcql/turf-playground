angular = require('angular');
require('angular-animate');
require('./vendor/angular-growl');
window._ = require('lodash');

angular.module('turf-playground', ['ngAnimate', 'angular-growl']).config(function ($provide) {
    L.mapbox.accessToken = 'pk.eyJ1IjoidGNxbCIsImEiOiJaSlZ6X3JZIn0.mPwXgf3BvAR4dPuBB3ypfA'
    var map = L.mapbox.map('map', 'tcql.lffb55nc');
    var mapFeatures = L.featureGroup().addTo(map);
    window.ft = mapFeatures;
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: mapFeatures
        }
    }).addTo(map);

    map.on('draw:created', function(e) {
        // mapFeatures.addLayer(e.layer);
    });

    $provide.value("$map", map);
    $provide.value("$mapFeatures", mapFeatures);
});

require('./directives/playgroundAce');
require('./directives/playgroundTabs');
require('./services/timerService');
require('./services/geometriesService');
require('./services/sessionService');
require('./services/notificationService');
require('./controllers/MainCtrl');
