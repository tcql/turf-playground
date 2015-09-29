angular.module('turf-playground').service('geometriesService', function ($rootScope, $map, $mapFeatures) {
    var self = this;

    $scope = $rootScope.$new()
    // Format that's easier for the frontend
    $scope.geometries = [];
    $scope.geom_id = 0;

    var getStyle = function (style) {
        if (!style) {
            style = {};
        }
        var def = {
            color:'#444',
            fillColor: '#0078e7',
            weight:2,
            opacity:0.7,
            fillOpacity: 0.4
        };
        return _.extend(def, style);
    }

    // Handles adding a geometry to the geojsons list. Used
    // when adding geometries from drawn / edited map layers
    this.addGeometry = function(name, layer) {
        if (!name) {
            $scope.geom_id++;
            name = "feature"+$scope.geom_id
        }
        var geojson = layer.toGeoJSON();
        $scope.geometries.push({
            name: name,
            new_name: name,
            geojson: geojson,
            geom: layer
        });
    };

    // Adds stored geojson back to the map. If the resultant
    // geometry is a single element wrapped in a FeatureGroup,
    // only the element itself is added to the geojsons list
    this.addToMap = function (name, json) {
        if (name) {
            var matches = _.where($scope.geometries, {name: name})
            _.each(matches, function (elem) {
                self.deleteGeometry(elem.geom);
            });
        }

        var geom = L.geoJson(json, {
            onEachFeature: function (feature, layer) {

                table = "<h4>Properties</h4>"
                    + "<table class='pure-table'>"
                    + "<thead><tr><th>Key</th><th>Value</th></tr></thead>"
                    + "<tbody";
                _.each(feature.properties, function (val, key) {
                    table += "<tr><td>"+key+"</td><td>"+val+"</td></tr>";
                });
                table += "</tbody>"
                    +"</table>";
                layer.bindPopup(table);
            },
            style: function(feature) {
                var style = getStyle(feature.properties);
                return style;
            }
        });

        if (geom.getLayers().length == 1) {
            geom.eachLayer(function(elem) {
                self.addGeometry(name, elem);
                $mapFeatures.addLayer(elem);
            });
        } else {
            self.addGeometry(name, geom)
            $mapFeatures.addLayer(geom)
        }

        if ($mapFeatures.getLayers().length > 0) {
            if (!$map.getBounds().contains($mapFeatures.getBounds())) {
                $map.fitBounds($mapFeatures);
            }
        }

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };

    // When a shape is created using L.Draw, add it to our internal geometries list
    $map.on('draw:created', function(e) {
        self.addGeometry(null, e.layer);
        if (e.layer.setStyle) e.layer.setStyle(getStyle());
        $mapFeatures.addLayer(e.layer)
        $scope.$apply();
    });

    $map.on('draw:edited', function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            var geoms = _.where($scope.geometries, {geom: layer});
            _.each(geoms, function (elem) {
                elem.geojson = layer.toGeoJSON()
            });
        });
    });

    $map.on('draw:deleted', function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            var geoms = _.where($scope.geometries, {geom: layer})

            _.each(geoms, function (elem) {
                self.deleteGeometry(elem);
            });
        });
        $scope.$apply();
    });

    this.updateGeometryName = function (geom) {
        geom.name = geom.new_name;
    };

    this.deleteGeometry = function(geom) {
        if (geom.name) {
            geom = geom.geom;
        }
        _.remove($scope.geometries, {geom: geom});
        $mapFeatures.removeLayer(geom);
    };

    this.emptyDraw = function () {
        var list = $scope.geometries.slice();
        _.each(list, function (elem) {
            if (elem && elem.geom) {
                self.deleteGeometry(elem.geom)
            }
        });
        $scope.$emit("geometries:emptied");
    };

    this.getAsGeoJSON = function () {
        var obj = {};
        _.each($scope.geometries, function (elem) {
            obj[elem.name] = elem.geojson;
        });
        return obj;
    };

    this.getGeometries = function () {
        return $scope.geometries;
    };
});
