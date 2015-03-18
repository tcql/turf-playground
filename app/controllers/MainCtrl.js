var vm = require('vm-browserify');
var turf = require('turf');

angular.module('turf-playground').controller('MainCtrl', function ($scope, $map, $mapFeatures, timerService) {
    $scope.selected_tab = {name: 'editor'};
    $scope.tools = {};
    $scope.geometries = [];
    $scope.geojsons = {};
    $scope.geom_id = 0;
    $scope.last_iframe = null;

    $scope.watching_geojsons = true;

    $scope.$watch("geojsons", function (geojsons, old) {
        if ($scope.watching_geojsons) {
            console.log("watch triggered")
            $scope.watching_geojsons = false;
            // TODO: Only clear the layers that changed?
            // this could get really slow.
            $mapFeatures.clearLayers();
            $scope.geometries = [];
            _.each(geojsons, function (val, key) {
                try {
                    var geom = addToMap(val, key);
                    $scope.geometries.push({name: key, new_name:key, geojson: val, geom: geom});
                } catch (e) {
                    // TODO: error console / popup
                    console.log(e)
                }
            });
            $scope.watching_geojsons = true;
        } else {
            console.log("watch disabled");
        }

    }, true);

    // TODO: make this a directive. It shouldn't be in here.
    $scope.$on('$includeContentLoaded', function () {
        prettyPrint();
    })

    // Builds dictionary of geojson geometries, which will be
    // accessible in the editor environment
    var addGeometry = function(layer, name) {
        if (!name) {
            $scope.geom_id++;
            name = "feature"+$scope.geom_id
        }
        // $scope.geometries[name] = layer
        $scope.geojsons[name] = layer.toGeoJSON()
        layer.__playground_name = name
        // $scope.geometries.push({name:name, geom: layer})
    };

    var addToMap = function (json, name) {
        var geom = L.geoJson(json, {
            onEachFeature: function (feature, layer) {

                table = "<h4>Properties</h4>"
                    + "<table class='pure-table'>"
                    + "<thead><tr><th>Key</th><th>Value</th></tr></thead>"
                    + "<tbody";
                _.each(feature.properties, function (val, key) {
                    if (key.name != "style") {
                        table += "<tr><td>"+key+"</td><td>"+val+"</td></tr>";
                    }
                });
                table += "</tbody>"
                    +"</table>";
                layer.bindPopup(table);
            },
            style: function(feature) {
                if (feature.properties.style) {
                    return feature.properties.style
                }
                return {};
            }
        });

        var idx = 0;
        geom.eachLayer(function(elem) {
            if(idx == 0) {
                addGeometry(elem, name);
            } else {
                addGeometry(elem);
            }
            $mapFeatures.addLayer(elem);
            idx++;
        });
    };

    // When a shape is created using L.Draw, add it to our internal geometries list
    $map.on('draw:created', function(e) {
        addGeometry(e.layer)
        $scope.$apply();
    });

    $map.on('draw:deleted', function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            _.remove($scope.geometries, {geom: layer});
        });
        $scope.$apply();
    });


    $scope.updateGeometryName = function (geom) {
        console.log("UPDATING!")
        $scope.watching_geojsons = false;
        delete $scope.geojsons[geom.name];
        $scope.watching_geojsons = true;
        $scope.geojsons[geom.new_name] = geom.geojson;
    };

    $scope.deleteGeometry = function(geom) {
        delete $scope.geojsons[geom.name];
        // $scope.geometries.splice(geom, 1);
        $mapFeatures.removeLayer(geom.geom);
    };



    $scope.run = function () {
        var code = $scope.tools.editor.getValue();
        timerService.clearIntervals();
        timerService.clearTimeouts();

        if ($scope.last_iframe) {
            document.body.removeChild($scope.last_iframe);
        }

        $scope.last_iframe = vm.runInNewContext(code, {
            map: $map,
            mapFeatures: $mapFeatures,
            turf: turf,
            L: L,
            g: $scope.geojsons,
            _: _,
            setTimeout: timerService.timeout,
            setInterval: timerService.interval
        }, false);
    };

    $scope.emptyDraw = function () {
        $mapFeatures.clearLayers();
        $scope.geometries = [];
    };
});
