angular.module('turf-playground').service('examplesService', [
'$http',
function ($http) {
    var self = this;

    this.examples = [];
    $http.get('/examples.json').then(function(response) {
        self.examples = response.data
    });

    this.findExample = function (name) {
        var ex = _.uniq(_.where(self.examples, {name: name})
            .concat(_.where(self.examples, {function_name: name})));

        if (ex.length > 0) {
            return ex[0];
        }
    };
}]);
