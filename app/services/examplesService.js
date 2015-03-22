angular.module('turf-playground').service('examplesService', [
'$http',
function ($http) {
    var self = this;

    this.examples = [];
    $http.get('/examples.json').then(function(response) {
        self.examples = response.data
    });


    this.findExample = function (name) {
        name = name.replace(".", "-");
        var ex = _.where(self.examples, {name: name});

        if (ex.length > 0) {
            return ex[0];
        }
    };
}]);
