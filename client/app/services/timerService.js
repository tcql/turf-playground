angular.module('turf-playground').service('timerService', function ($timeout, $interval)
{
    var self = this;
    this.timeouts = [];
    this.intervals = [];

    this.timeout = function () {
        self.timeouts.push($timout.apply(this, arguments));
    };

    this.interval = function () {
        self.intervals.push($interval.apply(this, arguments));
    };

    this.clearIntervals = function () {
        self.intervals.forEach(function (promise) {
            $interval.cancel(promise);
        });
        self.intervals = [];
    }

    this.clearTimeouts = function () {
        self.timeouts.forEach(function (promise) {
            $timeout.cancel(promise);
        });
        self.timeouts = [];
    }
});
