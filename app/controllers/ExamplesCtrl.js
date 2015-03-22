
// TODO: make "Tools" and such services, so the coupling with
// the parent controler isn't so flimsy
angular.module('turf-playground').controller('ExamplesCtrl',
['$scope', '$http', 'geometriesService', 'editorService', function($scope, $http, geometriesService, editorService) {

    $scope.geometries = geometriesService;
    $scope.example_search = {name: ""};
    $http.get('/examples.json').then(function(response) {
        $scope.examples = response.data
    });

    /**
     * Loads one of the turf examples into the editor
     *
     * @param  {[type]} example [description]
     * @return {[type]}         [description]
     */
    $scope.loadExample = function (example) {
        $scope.geometries.emptyDraw();
        editorService.setText(example.example, 1);
        $scope.documentation.show = true;
        $scope.documentation.content = example.desc;
        $scope.selected_tab.name = 'editor';
    };
}]);
