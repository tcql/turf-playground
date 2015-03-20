moment = require('moment');

angular.module('turf-playground').service('sessionService', function ($http) {
    var self = this;
    // TODO: Whenever we get moved off of GH-Pages, a lot of things
    // will stop needing to be hardcoded in / offloaded, because we'll
    // presumably be moving to a setup where we can host scripts in the
    // same place as the playground site itself
    var url = 'http://104.156.227.114:7877';
    // var url = 'http://localhost:7877';

    this.new = function () {
        return $http.get(url+'/new').then(function (response) {
            return response.data;
        });
    };

    this.save = function(id, text, geojsons) {
        return $http.post(url+'/save', {id: id, text: text, geometry: geojsons}).then(function(response) {
            return {status: 'success', data: response.data}
        }, function (response) {
            // todo: make error handling more robust
            var msg = "Too many requests. Try again "
                + moment(response.data.error.nextValidRequestDate).fromNow()
            return {status: 'error', data: msg}
        });
    }

    this.load = function(id) {
        return $http.get(url+'/load/'+id).then(function(response) {
            return response.data
        });
    }
});
