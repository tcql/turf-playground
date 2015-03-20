var turf = require('turf');
var vm = require('vm-browserify');
/**
 * This service supplies access to the ACE editor to all of our
 * controllers. This is kind of a weird setup but it requires the playgroundAce
 * directive to exist on the page, because that directive will set the editor.
 * This also means that only one editor instance can exist on the page at once.
 */
angular.module('turf-playground').service('editorService', [
'$map',
'$mapFeatures',
'geometriesService',
'timerService',
function (map, features, geometries, timer) {
    var self = this;
    var editor = null;

    this.setEditor = function(ace) {
        console.log("editor!")
        console.log(ace);
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
    this.run = function () {
        var code = self.getText();
        timer.clearIntervals();
        timer.clearTimeouts();

        return vm.runInNewContext(code, {
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
        }, false);
    };
}]);
