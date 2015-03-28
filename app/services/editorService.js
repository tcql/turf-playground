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
'examplesService',
'docService',
function ($rootScope, map, features, geometries, timer, examples, docs) {
    var $scope = $rootScope.$new();
    var self = this;
    var editor = null;
    var container = null;
    var prevWatch = null;

    this.setEditor = function(ace) {
        editor = ace;
        editor.commands.addCommand({
            name: 'findDocs',
            bindKey: {win: 'Ctrl-I',  mac: 'Command-I'},
            exec: function() {
                var selected = editor.session.getTextRange(editor.getSelectionRange());
                docs.findDoc(selected);
            }
        });
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
        if (prevWatch) {
            prevWatch();
        }

        timer.clearIntervals();
        timer.clearTimeouts();

        // ensure execution stopped in previous container instance
        if (container) {
            container.destroy();
        }
        container = null;
    };

    this.run = function () {
        var code = self.getText();

        self.stop();

        $scope.geoms = geometries.getAsGeoJSON();

        container = new Terrarium.Browser({
            sandbox: {
                map: map,
                mapFeatures: features,
                turf: turf,
                L: L,
                g: $scope.geoms,
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

            _.each(dt, function (val, key) {
                // grab the most recent output
                var elem = val[0];
                if (validator.valid(elem.val)) {
                    geometries.addToMap(elem.name, elem.val)
                } else {
                    console.log("Editor Logged "+elem.name+": ")
                    console.log(elem.val);
                }
            });
        });

        // If the `g` object is changed within the editor, update our
        // geometries list. This should probably be mostly wrapped up
        // inside the geometriesService
        prevWatch = $scope.$watch("geoms", function (newGeoms, oldGeoms) {
            var changed = {};
            // Find only geoms that were changed. This feels sorta hacky
            _.each(newGeoms, function (val, name) {
                if (!oldGeoms[name] || !_.isEqual(val, oldGeoms[name])) {
                    changed[name] = val;
                }
            });
            _.each(changed, function(val, name) {
                if (validator.valid(val)) {
                    geometries.addToMap(name, val)
                } else {
                    console.log("not valid geojson")
                }
            });
        }, true);

        container.run(code);

        // Since the Container isn't hooked up with angular,
        // we have no way of knowing when the `g` object has been
        // modified. So this interval forces angular to periodically
        // re-$apply, so that the `g` object watch will be re-evaluated
        // if necessary
        timer.interval(function(){ }, 1000);
    };

    // IF geometries are cleared (by hitting the "Clear Map")
    // button, stop execution of any currently running container
    $rootScope.$on("geometries:emptied", this.stop);
}]);
