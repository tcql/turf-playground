angular.module('turf-playground').controller('ExamplesCtrl',
['$scope', '$http', 'geometriesService', 'editorService', 'examplesService', function($scope, $http, geometriesService, editorService, examplesService) {

    $scope.geometries = geometriesService;
    $scope.example_search = {name: ""};
    $scope.examples = examplesService

    /**
     * Loads one of the turf examples into the editor
     *
     * @param  {[type]} example [description]
     * @return {[type]}         [description]
     */
    $scope.loadExample = function (example) {
        $scope.geometries.emptyDraw();
        editorService.setText(example.example, 1);
        $scope.selected_tab.name = 'editor';
    };
}]);
