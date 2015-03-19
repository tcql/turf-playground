var vm = require('vm-browserify');
var turf = require('turf');

angular.module('turf-playground').controller('MainCtrl', function (
    $scope,
    $location,
    $http,
    $map,
    $mapFeatures,
    timerService,
    geometriesService,
    sessionService,
    notificationService
) {
    $http.get('public/examples.json').then(function(response) {
        $scope.examples = response.data
    });
    $scope.tools = {};
    $scope.selected_tab = {name: 'editor'};
    $scope.example_search = {name: ""};
    $scope.notifications = notificationService.messages;
    // GeometriesService is where *most* of the heavy stuff happens
    $scope.geometries = geometriesService
    $scope.last_iframe = null;

    // TODO: make this a directive. It shouldn't be in here.
    $scope.$on('$includeContentLoaded', function () {
        prettyPrint();
    })

    // If there's a location, we're loading an existing
    // session, so we have to contact the server
    if ($location.path().length > 1) {
        // TODO: block everything while we load
        sessionService.load($location.path().slice(1)).then(function (result) {
            $scope.geometries.emptyDraw();
            $scope.tools.editor.setValue(result.text);
            _.each(result.geometry, function(val, key) {
                $scope.geometries.addToMap(val, name)
            });
            $scope.geometries.geojsons = result.geometry;
            $scope.selected_tab.name = 'editor';
        });
    }

    /**
     * Loads one of the turf examples into the editor
     *
     * @param  {[type]} example [description]
     * @return {[type]}         [description]
     */
    $scope.loadExample = function (example) {
        $scope.geometries.emptyDraw();
        $scope.tools.editor.setValue(example.example, 1);
        $scope.selected_tab.name = 'editor';
    };

    /**
     * Saves the current editor session and generates an id
     * @return {[type]} [description]
     */
    $scope.save = function () {
        sessionService.save(
            $scope.tools.editor.getValue(),
            geometriesService.getGeojsons()
        ).then(function(res) {
            if (res.status == 'error') {
                notificationService.notify(res.data)
            }
        });
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
