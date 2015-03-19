angular.module('turf-playground').service('sessionService', function ($http) {
    var self = this;

    this.save = function(text, geojsons) {
        // todo: handle if no text in editor
        return $http.post('http://localhost:7877/save', {text: text, geometry: geojsons}).then(function(response) {
            // todo: handle errors;
            return {status: 'succes', data: response.data}
        }, function (response) {
            // todo: more robust
            return {status: 'error', data: response.data.error.text}
        });
    }
    this.load = function(id) {
        return $http.get('http://localhost:7877/load/'+id).then(function(response) {
            console.log(response);
            return response.data
        });
    }
});
