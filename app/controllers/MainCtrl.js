var vm = require('vm');
var turf = require('turf');

angular.module('turf-playground').controller('MainCtrl', function ($scope, $map, $mapFeatures) {
    $scope.selected_tab = {name: 'editor'};
    $scope.tools = {};
    $scope.geometries = [];
    $scope.geom_id = 0;

    $scope.$on('$includeContentLoaded', function () {
        prettyPrint();
    })

    // Builds dictionary of geojson geometries, which will be
    // accessible in the editor environment
    var buildGeomList = function() {
        var geoms = {};
        $scope.geometries.forEach(function (elem) {
            geoms[elem.name] = elem.geom.toGeoJSON()
        });
        return geoms;
    }

    var addToGeometries = function(layer, name) {
        if (!name) {
            $scope.geom_id++;
            name = "feature"+$scope.geom_id
        }
        $scope.geometries.push({name:name, geom: layer})
    };

    var addGeoJson = function (json, name) {
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
                addToGeometries(elem, name);
            } else {
                addToGeometries(elem);
            }
            $mapFeatures.addLayer(elem);
            idx++;
        });
    };

    // When a shape is created using L.Draw, add it to our internal geometries list
    $map.on('draw:created', function(e) {
        addToGeometries(e.layer)
        $scope.$apply();
    });

    $map.on('draw:deleted', function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            _.remove($scope.geometries, {geom: layer});
        });
        $scope.$apply();
    });


    $scope.deleteGeometry = function(geom) {
        $scope.geometries.splice(geom, 1);
        $mapFeatures.removeLayer(geom.geom);
    };

    $scope.run = function () {
        var code = $scope.tools.editor.getValue();1
        var geoms = buildGeomList();
        vm.runInNewContext(code, {
            map: $map,
            mapFeatures: $mapFeatures,
            turf: turf,
            L: L,
            g: geoms,
            _: _
        });

        $scope.emptyDraw()
        _.each(geoms, function (val, key) {
            try {
                var geom = addGeoJson(val, key);
            } catch (e) {
                // TODO: error console / popup
                console.log(e)
            }
        });
    };

    $scope.emptyDraw = function () {
        $mapFeatures.clearLayers();
        $scope.geometries = [];
    };
});
