// var vm = require('vm-browserify');
var Terrarium = require('terrarium');
var validator = require('geojson-validation')
/**
 * This service supplies access to the ACE editor to all of our
 * controllers. This is kind of a weird setup but it requires the playgroundAce
 * directive to exist on the page, because that directive will set the editor.
 * This also means that only one editor instance can exist on the page at once.
 */
angular.module('turf-playground').service('editorService', [
'$rootScope',
'$map',
'$mapFeatures',
'geometriesService',
'timerService',
function ($rootScope, map, features, geometries, timer) {
    var self = this;
    var editor = null;
    var container = null;

    this.setEditor = function(ace) {
        editor = ace;
    };
    this.getEditor = function() {
        return editor;
    };
    this.setText = function(text) {
        editor.setValue(text, 1);
    };
    this.getText = function(text) {
        return editor.getValue();
    };
    this.stop = function () {
        timer.clearIntervals();
        timer.clearTimeouts();

        // ensure execution stopped in previous container instance
        if (container) {
            container.destroy();
        }
        container = null;
    }
    this.run = function () {
        var code = self.getText();

        self.stop();

        container = new Terrarium.Browser({
            sandbox: {
                map: map,
                mapFeatures: features,
                turf: turf,
                L: L,
                g: geometries.getGeojsons(),
                _: _,
                // Angular-aware setTimeout and setInterval,
                // with the added bonus of letting us globally cancel
                // on re-run
                setTimeout: timer.timeout,
                setInterval: timer.interval
            }
        });

        container.on('data', function (dt) {
            var output = {};
            // var geojsons = geometries.getGeojsons();
            _.each(dt, function (val, key) {
                // grab the most recent output
                var elem = val[0];
                if (validator.valid(elem.val)) {
                    geometries.addToMap(elem.val, elem.name)
                } else {
                    console.log("not valid geojson")
                }
            });
        });

        container.run(code);
    };

    // IF geometries are cleared (by hitting the "Clear Map")
    // button, stop execution of any currently running container
    $rootScope.$on("geometries:emptied", this.stop);
}]);
