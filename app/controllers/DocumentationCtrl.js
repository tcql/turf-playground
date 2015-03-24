angular.module('turf-playground').controller('DocumentationCtrl',
function ($scope, examplesService, docService)
{
    $scope.examples = examplesService;
    $scope.documentation = docService;
    $scope.search = {
        selected: null
    };

    $scope.$watch('search.selected', function (val) {
        if (val && val.name) {
            var ex = $scope.examples.findExample(val.name);
            if (ex) {
                $scope.documentation.setContent(ex.desc);
            }
        }
    });

    $scope.reset = function () {
        $scope.search.selected = null;
        $scope.documentation.reset();
    }
});
