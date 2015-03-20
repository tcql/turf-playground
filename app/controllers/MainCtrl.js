
// TODO: split up controllers, this is getting stupid.
angular.module('turf-playground').controller('MainCtrl', function (
    $scope,
    $location,
    geometriesService,
    sessionService,
    notificationService,
    editorService
) {
    $scope.selected_tab = {name: 'editor'};
    $scope.notifications = notificationService.messages;
    $scope.geometries = geometriesService
    $scope.session_id = null;
    $scope.last_iframe = null;

    // TODO: make this a directive. It shouldn't be in here.
    $scope.$on('$includeContentLoaded', function () {
        prettyPrint();
    })

    // TODO: block everything while we load
    sessionService.load($location.path().slice(1)).then(function (result) {
        $scope.geometries.emptyDraw();
        editorService.setText(result.text);
        _.each(result.geometry, function(val, key) {
            $scope.geometries.addToMap(val, name)
        });
        $scope.geometries.geojsons = result.geometry;
        $scope.selected_tab.name = 'editor';
    });

    /**
     * Run the editor code
     */
    $scope.run = function () {
        if ($scope.last_iframe) {
            document.body.removeChild($scope.last_iframe);
        }
        $scope.last_iframe = editorService.run();
    };

    /**
     * Create a new session in a new browser tab
     */
    $scope.new = function () {
        var loc = $location.absUrl().split("#");
        window.open(loc[0]);
    };

    /**
     * Saves the current editor session and generates an id
     * If an ID already exists, we update the existing session.
     */
    $scope.save = function () {
        notificationService.notify('info', 'Saving...')
        sessionService.save(
            $scope.session_id,
            editorService.getText(),
            geometriesService.getGeojsons()
        ).then(function(res) {
            if (res.status == 'error') {
                notificationService.notify('error', res.data)
            } else {
                $scope.session_id = res.data.id
                $location.path('/'+$scope.session_id)
                notificationService.notify('success', 'Saved!')
            }
        });
    };
});
