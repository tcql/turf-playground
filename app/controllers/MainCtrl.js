var vm = require('vm-browserify');
var turf = require('turf');

angular.module('turf-playground').controller('MainCtrl', function ($scope, $http, $map, $mapFeatures, timerService, geometriesService) {
    $http.get('public/examples.json').then(function(response) {
        $scope.examples = response.data
    })
    $scope.selected_tab = {name: 'editor'};
    $scope.tools = {};
    $scope.example_search = {name: ""};
    // GeometriesService is where *most* of the heavy stuff happens
    $scope.geometries = geometriesService
    $scope.last_iframe = null;

    // TODO: make this a directive. It shouldn't be in here.
    $scope.$on('$includeContentLoaded', function () {
        prettyPrint();
    })

    $scope.loadExample = function (example) {
        $scope.geometries.emptyDraw();
        $scope.tools.editor.setValue(example.example, 1);
        $scope.selected_tab.name = 'editor';
    };

    // Run the editor code in our restricted context
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
            g: $scope.geometries.getGeojsons(),
            _: _,
            // Angular-aware setTimeout and setInterval,
            // with the added bonus of letting us globally cancel
            // on re-run
            setTimeout: timerService.timeout,
            setInterval: timerService.interval
        }, false);
    };

});
