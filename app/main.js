angular = require('angular')
var vm = require('vm');
var turf = require('turf');
window._ = require('lodash');

var map = null;
var mapFeatures = null;

angular.module('turf-playground', []).run(function () {
    L.mapbox.accessToken = 'pk.eyJ1IjoidGNxbCIsImEiOiJaSlZ6X3JZIn0.mPwXgf3BvAR4dPuBB3ypfA'
    map = L.mapbox.map('map', 'tcql.lffb55nc');
    mapFeatures = L.featureGroup().addTo(map);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: mapFeatures
        }
    }).addTo(map);

    map.on('draw:created', function(e) {
        mapFeatures.addLayer(e.layer);
    });

}).directive('playgroundAce', function () {
    return {
        restrict: 'A',
        scope: {
            tools: '=playgroundAce'
        },
        link: function (scope, elem) {
            id = elem.attr('id');
            scope.tools.editor = ace.edit(id);
            scope.tools.editor.setTheme("ace/theme/monokai");
            scope.tools.editor.getSession().setMode("ace/mode/javascript");
        }
    };
}).directive('playgroundTabs', function () {
    return {
        restrict: 'A',
        scope: {
            playgroundTabs:'='
        },
        link: function (scope, elem, attrs) {
            scope.$watch("playgroundTabs.name", function (name) {
                elem.find('.tab').each(function () {
                    $(this).removeClass('selected');
                });
                elem.find("[data-name='"+name+"']").addClass('selected');
            });

            elem.on('click', '.tab', function (c) {
                scope.playgroundTabs.name = $(this).data('name')
                scope.$apply();
            });
        }
    };
}).controller('MainCtrl', function ($scope) {
    $scope.selected_tab = {name: 'editor'};
    $scope.tools = {};
    $scope.geometries = [];
    $scope.geom_id = 0;
    map.on('draw:created', function(e) {
        $scope.geom_id++;
        $scope.geometries.push({name: "feature"+$scope.geom_id, geom: e.layer})
        $scope.$apply();
    });

    var buildGeomList = function() {
        var geoms = {};
        $scope.geometries.forEach(function (elem) {
            geoms[elem.name] = elem.geom.toGeoJSON()
        });
        return geoms;
    }

    $scope.deleteGeometry = function(geom) {
        $scope.geometries.splice(geom, 1);
        mapFeatures.removeLayer(geom.geom);
    };

    $scope.run = function () {
        var code = $scope.tools.editor.getValue();1
        var geoms = buildGeomList();
        vm.runInNewContext(code, {
            map: map,
            mapFeatures: mapFeatures,
            turf: turf,
            L: L,
            g: geoms,
            _: _
        });

        $scope.emptyDraw()
        _.each(geoms, function (val, key) {
            try {
                var geom = L.geoJson(val).addTo(mapFeatures);
                $scope.geometries.push({name: key, geom: geom})
            } catch (e) {
                // TODO: error console / popup
                console.log(e)
            }
        });
    };

    $scope.emptyDraw = function () {
        mapFeatures.clearLayers();
        $scope.geometries = [];
    };
});

$(function () {
//     var vm = require('vm');
//     var turf = require('turf');

//     // Initialize the editor
//     var editor = ace.edit("editor");
//     editor.setTheme("ace/theme/monokai");
//     editor.getSession().setMode("ace/mode/javascript");

    // Set up the map

//     $("#run").on('click', function () {
//         if (mapFeatures) {
//            map.removeLayer(mapFeatures);
//         }
//         mapFeatures = L.featureGroup().addTo(map)

//         var code = editor.getValue();
//         vm.runInNewContext(code, {map: map, mapFeatures: mapFeatures, turf: turf, L: L})
//     });

//     $("#clear").on('click', function () {
//         map.removeLayer(mapFeatures);
//     });
});
